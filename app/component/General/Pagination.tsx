import React, { useState, useEffect } from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    const queryPage = parseInt(
      new URLSearchParams(window.location.search).get("page") || "1",
      10
    );
    if (!isNaN(queryPage) && queryPage >= 1 && queryPage <= totalPages) {
      setCurrentPage(queryPage);
    }
  }, [totalPages]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);

    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("page", page.toString());
    window.history.pushState({}, "", newUrl.toString());
  };

  const renderPages = () => {
    const maxVisiblePages = 10;
    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisiblePages / 2)
    );
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    const pages = [];

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <div
          key={i}
          className={`cursor-pointer mx-1 p-2 rounded-full w-10 h-10 border-2 border-[#3AEAC1] hover:bg-[#3AEAC1] hover:text-white ${
            currentPage === i
              ? "text-white bg-[#3AEAC1] font-bold"
              : "text-gray-500"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </div>
      );
    }

    if (endPage < totalPages) {
      pages.push(
        <div
          key="next"
          className={`cursor-pointer mx-1 p-2 rounded-full w-10 h-10 border-2 border-[#3AEAC1] hover:bg-[#3AEAC1] hover:text-white text-gray-500`}
          onClick={() => handlePageChange(endPage + 1)}
        >
          <ChevronRightIcon />
        </div>
      );
    }

    return pages;
  };

  return (
    <div className="flex justify-center mt-4 py-4 pb-10">{renderPages()}</div>
  );
};

export default Pagination;
