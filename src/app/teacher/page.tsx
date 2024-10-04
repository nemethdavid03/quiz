"use client"; // Adding 'use client' for client-side interactivity

import { useEffect, useState } from 'react';

type FileEntry = {
    name: string;
    isDirectory: boolean;
};

type FileListProps = {
    files: FileEntry[];
    currentDir: string;
    fileContent?: string; // Optional for files
};

const FilesPage: React.FC = () => {
    const [files, setFiles] = useState<FileEntry[]>([]);
    const [currentDir, setCurrentDir] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<string | null>(null);
    const [fileContent, setFileContent] = useState<string>('');

    const fetchFiles = async (directory: string = '') => {
        try {
            const res = await fetch(`/api/files?directory=${encodeURIComponent(directory)}`);

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Error fetching files');
            }

            const data: FileListProps = await res.json();
            setFiles(data.files);
            setCurrentDir(data.currentDir);
            setSelectedFile(null); // Reset selected file on directory change
            setFileContent(''); // Reset content on directory change
        } catch (error) {
            console.error('Error fetching files:', error);
            setError(error instanceof Error ? error.message : 'An error occurred while fetching files.');
        } finally {
            setLoading(false);
        }
    };

    // Initial fetch for root directory files
    useEffect(() => {
        fetchFiles();
    }, []);

    // Function to handle opening a subdirectory
    const openDirectory = (dir: string) => {
        fetchFiles(dir);
    };

    // Function to go back to the parent directory
    const goBack = () => {
        const parentDir = currentDir ? currentDir.substring(0, currentDir.lastIndexOf('/')) : '';
        fetchFiles(parentDir);
    };

    // Function to handle opening a file and fetching its content
    const openFile = async (fileName: string) => {
        const filePath = `${currentDir}/${fileName}`;
        const res = await fetch(`/api/files?directory=${encodeURIComponent(filePath)}`);
        const data: { fileContent: string } = await res.json();
        setFileContent(data.fileContent);
        setSelectedFile(fileName);
    };

    // Function to handle saving the edited file content
    const saveFile = async () => {
        if (!selectedFile) return;

        const filePath = `${currentDir}/${selectedFile}`;
        const res = await fetch(`/api/files`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ path: filePath, content: fileContent }),
        });

        if (!res.ok) {
            const data = await res.json();
            alert(data.error || 'Error saving file');
            return;
        }

        alert('File saved successfully!');
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Files in Directory: {currentDir || 'root'}</h1>

            {currentDir && (
                <button onClick={goBack}>Go Back</button>
            )}

            {files.length > 0 ? (
                <ul>
                    {files.map((file, index) => (
                        <li key={index}>
                            {file.isDirectory ? (
                                <button onClick={() => openDirectory(`${currentDir}/${file.name}`)}>
                                    📁 {file.name}
                                </button>
                            ) : (
                                <span onClick={() => openFile(file.name)} style={{ cursor: 'pointer' }}>
                                    📄 {file.name}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No files found.</p>
            )}

            {selectedFile && (
                <div>
                    <h2>Editing: {selectedFile}</h2>
                    <textarea
                        value={fileContent}
                        onChange={(e) => setFileContent(e.target.value)}
                        rows={10}
                        cols={50}
                    />
                    <br />
                    <button onClick={saveFile}>Save</button>
                </div>
            )}
        </div>
    );
};

export default FilesPage;
