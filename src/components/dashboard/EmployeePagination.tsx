interface EmployeePaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const EmployeePagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: EmployeePaginationProps) => {
  if (totalPages <= 1) return null;
  return (
    <div className="flex gap-2 mt-4 justify-end">
      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded-md ${currentPage === page ? "bg-(--primaryColor) text-white" : "bg-gray-200"}`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default EmployeePagination;
