import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { exec } from 'child_process';

const execPromise = promisify(exec);

// Handle GET requests
export async function GET(request: Request) {
    const url = new URL(request.url);
    const dirPath = url.searchParams.get('directory') || process.cwd(); // Get the directory or file path query param

    try {
        const absolutePath = path.isAbsolute(dirPath) ? dirPath : path.join(process.cwd(), dirPath);

        // Check if the path exists
        if (!fs.existsSync(absolutePath)) {
            return NextResponse.json({ error: 'Path not found' }, { status: 404 });
        }

        // Check if it's a directory
        if (fs.lstatSync(absolutePath).isDirectory()) {
            const files = fs.readdirSync(absolutePath).map((file) => {
                const filePath = path.join(absolutePath, file);
                const isDirectory = fs.lstatSync(filePath).isDirectory();
                return { name: file, isDirectory };
            });

            return NextResponse.json({ files, currentDir: absolutePath });
        } else {
            // If it's a file, read the content
            const fileContent = fs.readFileSync(absolutePath, 'utf-8');
            return NextResponse.json({ fileContent, currentDir: absolutePath });
        }
    } catch (err) {
        console.error('Error reading path:', err);
        return NextResponse.json({ error: 'Error reading path', details: err.message }, { status: 500 });
    }
}

// Handle PUT requests to save file content
export async function PUT(request: Request) {
    try {
        const { path: filePath, content } = await request.json();

        // Normalize the path
        const absolutePath = path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);

        // Check if the directory of the file exists
        const dir = path.dirname(absolutePath);
        if (!fs.existsSync(dir)) {
            return NextResponse.json({ error: 'Directory does not exist' }, { status: 404 });
        }

        // Write the content to the file
        fs.writeFileSync(absolutePath, content, 'utf-8');

        // Commit and push changes
        await execPromise(`git add ${absolutePath}`);
        await execPromise(`git commit -m "Updated ${path.basename(absolutePath)}"`);
        await execPromise(`git push`);

        return NextResponse.json({ message: 'File saved and changes committed successfully' });
    } catch (err) {
        console.error('Error saving file:', err);
        return NextResponse.json({ error: 'Error saving file', details: err.message }, { status: 500 });
    }
}
