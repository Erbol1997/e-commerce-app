import { MyMotion, PageTitle, Pagination, ProductLimitChange, ProductList } from '@/components';
import { ProductListSkeleton } from '@/components/ui/Skeletons';
import { fetchCategory, fetchProducts, fetchProductsPage } from '@/lib/data';
import { ProductsInterface } from '@/types/types';
import React, { Suspense } from 'react';

interface Params {
  name: string;
  id: string;
}

interface SearchParams {
  limit: string;
  page: string;
}

interface Props {
  searchParams: SearchParams;
  params: Params;
}

const Page = async ({ searchParams, params }: Props) => {
  const limit = Number(searchParams.limit) || 12;
  const id = Number(params.id);
  const page = Number(searchParams.page) || 1;
  const totalPages: number = await fetchProductsPage(id, limit);
  const pageTitle: string = await fetchCategory(id);
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const products: ProductsInterface[] = await fetchProducts(id, page, limit);
  return (
    <MyMotion>
      <div className="w-full">
        <div className="flex justify-between flex-wrap gap-2 items-center">
          <PageTitle title="Товары" pageTitle={pageTitle} />
          <ProductLimitChange />
        </div>
        <div className="w-full py-10">
          <Suspense key={limit + page} fallback={<ProductListSkeleton />}>
            <ProductList products={products} />
          </Suspense>
        </div>
        <div className="w-full m-auto">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </MyMotion>
  );
};

export default Page;
