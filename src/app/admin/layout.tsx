"use client";

import Header from '@/components/Header';
import Loading from '@/components/Loading';
import MainContent from '@/components/MainContent';
import Sidebar from '@/components/Sidebar';
import useCheckAccess from '@/lib/hooks/useCheckAccess';
import { Role } from '@prisma/client';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Define the roles that are allowed to access the dashboard
    const allowedRoles: Role[] = [Role.ADMIN, Role.MODERATOR];
    const { hasAccess, loading } = useCheckAccess(allowedRoles);

    // Show loading state while checking access
    if (loading) return <Loading isLoading={loading} />;

    // If the user does not have access, return null
    if (!hasAccess) return null;

    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <Sidebar />
            <div className="flex flex-col">
                <Header />
                <MainContent>
                    {children}
                </MainContent>
            </div>
        </div>
    );
};

export default DashboardLayout;
