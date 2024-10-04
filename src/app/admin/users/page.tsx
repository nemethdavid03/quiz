"use client"

import { useState } from "react";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import GridLayout from "@/components/ui/gridLayout";
import useSWR from "swr";
import useCheckAccess from "@/lib/hooks/useCheckAccess";
import { Role, User } from "@prisma/client"; // Import Role and User types
import AdminPagination from "@/components/Pagination";

// Fetcher function to get data from the API
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Dashboard() {
    const usersPerPage = 15; // Specify how many users to show per page
    const [currentUsers, setCurrentUsers] = useState<User[]>([]); // State for current users

    // Check access for both ADMIN and MODERATOR roles
    const { hasAccess: canAccess, loading, userRole } = useCheckAccess([Role.ADMIN, Role.MODERATOR]);

    // Fetch user data
    const { data, error } = useSWR<User[]>("/api/users", fetcher);

    if (error) return <div>Error loading users.</div>;
    if (!data) return <Loading isLoading={!data} />;

    // Handle user deletion
    const handleDelete = async (userId: number) => {
        const confirmed = confirm("Are you sure you want to delete this user?");
        if (!confirmed) return;

        try {
            const response = await fetch(`/api/users/${userId}`, {
                method: "DELETE",
            });
            if (!response.ok) throw new Error("Error deleting user");
            // Optionally, re-fetch the user data or mutate the SWR cache here
        } catch (error) {
            console.error("Failed to delete user:", error);
        }
    };

    // Show loading or unauthorized access
    if (loading) return <Loading isLoading={loading} />;
    if (!canAccess) return <div>You do not have access to this page.</div>;

    return (
        <>
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Felhasználók</h1>
            </div>
            {currentUsers.length === 0 ? (
                <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
                    <div className="flex flex-col items-center gap-1 text-center">
                        <h3 className="text-2xl font-bold tracking-tight">No users found</h3>
                        <p className="text-sm text-muted-foreground">
                            You can add users here or they will appear automatically upon registration.
                        </p>
                        <Button className="mt-4">Add User</Button>
                    </div>
                </div>
            ) : (
                <GridLayout className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {currentUsers.map((user) => (
                        <Card key={user.id}>
                            <CardHeader>
                                <CardTitle>{user.name}</CardTitle>
                                <CardDescription>{user.email}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {userRole === Role.ADMIN && ( // Show the delete button only for admins
                                    <Button onClick={() => handleDelete(Number(user.id))} variant="destructive">
                                        Delete
                                    </Button>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </GridLayout>
            )}

            {/* Pagination Component */}
            <AdminPagination
                data={data}
                itemsPerPage={usersPerPage}
                onPageChange={setCurrentUsers} // Set current users based on the selected page
            />
        </>
    );
}
