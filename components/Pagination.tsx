'use client'
import { useRouter } from "next/navigation";

interface pagination{
    page: number,
    hasPrev: boolean,
    hasNext: boolean
}

const Pagination = ({ page, hasPrev, hasNext }:pagination) => {
    const router = useRouter();
  
    return (
      <div className="flex justify-between gap-6">
        <button
          className="bg-border hover:text-primary w-full border-none p-4 dark:bg-primary-foreground text-base dark:text-primary rounded-md disabled:cursor-not-allowed transition hover:translate-y-1.5"
          disabled={!hasPrev}
          onClick={() => router.push(`?page=${page - 1}`)}
        >
          Anterior
        </button>
        <button
          disabled={!hasNext}
          className="bg-border hover:text-primary w-full border-none p-4 dark:bg-primary-foreground text-base dark:text-primary rounded-md disabled:cursor-not-allowed transition hover:translate-y-1.5"
          onClick={() => router.push(`?page=${page + 1}`)}
        >
          Siguiente
        </button>
      </div>
    );
  };
  
  export default Pagination;