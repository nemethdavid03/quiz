"use client";

import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import { Button } from './ui/button';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import useCheckAccess from '@/lib/hooks/useCheckAccess';
import { Role } from '@prisma/client';
import { DarkMode } from './ui/dark-mode';

const Navbar = () => {
    // Use the access hook to check user roles
    const { hasAccess: canAccess, userRole, loading } = useCheckAccess([Role.ADMIN, Role.MODERATOR]);

    return (
        <div className='border-b'>
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
                <h3 className='text-xl font-bold'>TYPE VIII</h3>
                <div className='flex space-x-4'>
                    <DarkMode />
                    <SignedOut>
                        <Link href="/sign-in" passHref>
                            <Button>Log in</Button>
                        </Link>
                        <Link href="/sign-up" passHref>
                            <Button variant="outline">Sign up</Button>
                        </Link>
                    </SignedOut>

                    <SignedIn>
                        {/* If loading is true, show a loading button */}
                        {loading ? (
                            <Button variant="outline" disabled>Loading...</Button>
                        ) : (
                            <>
                                {/* Only show the Admin dashboard button if the user has access */}
                                {canAccess && (userRole === Role.MODERATOR || userRole === Role.ADMIN) && (
                                    <Link href="/admin/users" passHref>
                                        <Button variant="outline">Admin dashboard</Button>
                                    </Link>
                                )}
                                <UserButton />
                            </>
                        )}
                    </SignedIn>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
