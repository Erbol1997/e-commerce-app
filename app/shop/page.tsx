import { MyMotion, PageTitle, Pagination, ProductLimitChange, ProductList } from '@/components';
import { fetchAllProducts, fetchAllProductsPage } from '@/lib/data';
import { ProductsInterface } from '@/types/types';
import React from 'react';

interface SearchParams {
  limit: string;
  page: string;
}

interface Props {
  searchParams: SearchParams;
}

const Page = async ({ searchParams }: Props) => {
  const limit = Number(searchParams.limit) || 12;
  const page = Number(searchParams.page) || 1;
  const totalPages: number = await fetchAllProductsPage(limit);
  const products: ProductsInterface[] = await fetchAllProducts(page, limit);

  return (
    <MyMotion>
      <div className="w-full">
        <div className="flex justify-between flex-wrap gap-2 items-center">
          <PageTitle title="Товары" />
          <ProductLimitChange />
        </div>
        <div className="w-full py-10">
          <ProductList products={products} />
        </div>
        <div className="w-full m-auto">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </MyMotion>
  );
};

export default Page;
