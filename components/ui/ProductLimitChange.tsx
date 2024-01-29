'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const ProductLimitChange = () => {
  const route = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('limit')) || 12;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('limit', pageNumber.toString());
    const newUrl = `${pathname}?${params.toString()}`;
    return route.push(newUrl);
  };

  return (
    <div className="">
      <div>
        <label className="whitespace-nowrap">
          Кол-во товаров:
          <select
            className="ml-2 p-2 border border-border-color rounded-md cursor-pointer focus:border-border-color"
            value={currentPage}
            onChange={(e) => createPageURL(e.target.value)}>
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="46">46</option>
            {/* Другие варианты limit */}
          </select>
        </label>
      </div>
    </div>
  );
};

export default ProductLimitChange;
