"use client";

import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import GridLayout from "@/components/ui/gridLayout";
import { Product } from "@prisma/client"; // Import Product
import useSWR from "swr";
import useCheckAccess from "@/lib/hooks/useCheckAccess"; // Import your access check hook
import { Role } from "@prisma/client"; // Import Role
import { useState } from "react";

// Fetcher function to get data from the API
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Dashboard() {
    // Check access for both ADMIN and MODERATOR roles
    const { hasAccess: canAccess, loading } = useCheckAccess([Role.ADMIN, Role.MODERATOR]);

    // Check specifically for ADMIN role
    const { hasAccess: isAdmin } = useCheckAccess([Role.ADMIN]);

    const [searchTerm, setSearchTerm] = useState("");

    const { data, error } = useSWR<Product[]>(`/api/users?searchTerm=${searchTerm}`, fetcher, { revalidateOnFocus: false });

    if (error) return <div>Error loading products.</div>;
    if (!data) return <Loading isLoading={!data} />;

    // Delete a product
    const handleDelete = async (productId: number) => {
        const confirmed = confirm("Are you sure you want to delete this product?");
        if (!confirmed) return;

        try {
            const response = await fetch(`/api/users/${productId}`, {
                method: "DELETE",
            });
            if (!response.ok) throw new Error("Error deleting product");
            // Optionally, you can re-fetch the product data or mutate the SWR cache here
        } catch (error) {
            console.error("Failed to delete product:", error);
        }
    };

    // Show loading or unauthorized access
    if (loading) return <Loading isLoading={loading} />;
    if (!canAccess) return <div>You do not have access to this page.</div>;

    return (
        <>
            <div className="flex items-center mb-4">
                <h1 className="text-lg font-semibold md:text-2xl">Termékek</h1>
                <input
                    type="text"
                    placeholder="Keresés..."
                    className="ml-4 rounded-md border border-gray-300 px-3 py-2 focus:ring-blue-500 focus:ring-2 focus:ring-opacity-50"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            {data.length === 0 ? (
                <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
                    <div className="flex flex-col items-center gap-1 text-center">
                        <h3 className="text-2xl font-bold tracking-tight">Még nincsenek termékek</h3>
                        <p className="text-sm text-muted-foreground">
                            Itt tudod hozzáadni az első terméket.
                        </p>
                        <Button className="mt-4">Termék hozzáadása</Button>
                    </div>
                </div>
            ) : (
                <GridLayout className="grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                    {data.map((product) => (
                        <Card key={product.id} className="">
                            <CardHeader>
                                <CardTitle>{product.name}</CardTitle>
                                <CardDescription>{product.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {isAdmin && (
                                    <Button onClick={() => handleDelete(Number(product.id))} variant="destructive">
                                        Delete
                                    </Button>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </GridLayout>
            )}
        </>
    );
}