'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

interface Props {
  totalPages: number;
}

const Pagination = ({ totalPages }: Props) => {
  const route = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  let currentPage = Number(searchParams.get('page')) || 1;
  const params = new URLSearchParams(searchParams);

  const createPageURL = (pageNumber: number | string) => {
    params.set('page', pageNumber.toString());
    const newUrl = `${pathname}?${params.toString()}`;
    return route.push(newUrl);
  };

  if (currentPage > totalPages) {
    const newUrl = (currentPage = totalPages);
    currentPage = totalPages;
    createPageURL(newUrl);
  }

  return (
    <div className="pagination flex justify-center items-center mt-5 py-6 gap-4">
      {/* Отображение пагинации */}
      <button
        className="p-2 bg-blue rounded-md border border-blue fill-white hover:bg-white hover:fill-blue transition-all cursor-pointer"
        disabled={currentPage === 1}
        onClick={() => createPageURL(currentPage - 1)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
        </svg>
      </button>
      <div className="flex items-center gap-2">
        <span className="text-lg font-medium">{currentPage}</span>
        <span>из</span>
        <span className="text-lg font-medium">{totalPages}</span>
      </div>
      <button
        className="p-2 bg-blue rounded-md border border-blue fill-white hover:bg-white hover:fill-blue transition-all cursor-pointer"
        disabled={currentPage === totalPages}
        onClick={() => createPageURL(currentPage + 1)}>
        <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="16"
          viewBox="0 0 512 512">
          <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
