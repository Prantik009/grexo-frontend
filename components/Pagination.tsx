import Link from "next/link";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    basePath: string; // NEW
}

export function Pagination({
    currentPage,
    totalPages,
    basePath,
}: PaginationProps) {
    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Link
                    key={page}
                    href={`${basePath}?page=${page}`}
                    className={`px-3 py-1 rounded-md border ${currentPage === page
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-secondary"
                        }`}
                >
                    {page}
                </Link>
            ))}
        </div>
    );
}