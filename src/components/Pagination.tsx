import { useState, useEffect } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationComponentProps<T> {
    data: T[]; // Array of data items (generic)
    itemsPerPage: number; // Items to display per page
    onPageChange: (currentItems: T[]) => void; // Function to handle page change and provide current items
}

export default function AdminPagination<T>({
    data,
    itemsPerPage,
    onPageChange,
}: PaginationComponentProps<T>) {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate total pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Effect to update current items based on the page
    useEffect(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
        onPageChange(currentItems); // Call the function to provide the current items to the parent
    }, [currentPage, data, itemsPerPage, onPageChange]);

    // Handle page change
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                    />
                </PaginationItem>

                {/* Page Numbers */}
                {[...Array(totalPages)].map((_, index) => (
                    <PaginationItem key={index}>
                        <PaginationLink
                            href="#"
                            isActive={index + 1 === currentPage}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                {/* Ellipsis (if needed) */}
                {totalPages > 5 && <PaginationEllipsis />}

                <PaginationItem>
                    <PaginationNext
                        href="#"
                        onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}