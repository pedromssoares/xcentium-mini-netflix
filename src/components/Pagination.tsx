import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      {/* Previous Button */}
      <button
        aria-label="Previous Page"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-6 py-2 rounded-md ${
          currentPage === 1
            ? "bg-gray-600 text-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-500 text-white"
        } transition-all`}
      >
        ⏪
      </button>

      {/* Number of current page */}
      <span className="text-lg font-semibold text-white">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Button */}
      <button
        aria-label="Next Page"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-6 py-2 rounded-md ${
          currentPage === totalPages
            ? "bg-gray-600 text-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-500 text-white"
        } transition-all`}
      >
        ⏩
      </button>
    </div>
  );
}
