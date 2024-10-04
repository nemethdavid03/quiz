"use client"

import Loading from '@/components/Loading';
import useCheckAccess from '@/lib/hooks/useCheckAccess';
import { Role } from '@prisma/client';
import React from 'react';

const TeacherLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const allowedRoles: Role[] = [Role.ADMIN, Role.MODERATOR, Role.TEACHER];
    const { hasAccess, loading } = useCheckAccess(allowedRoles);

    if (loading) return <Loading />;

    if (!hasAccess) return null;

    return (
        <main>
            {children}
        </main>
    );
};

export default TeacherLayout;
