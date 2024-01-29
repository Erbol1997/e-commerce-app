import { MyMotion, SingleProduct } from '@/components';
import { fetchSingleProductInfo } from '@/lib/data';
import { SingleProductInterface } from '@/types/types';
import React from 'react';

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
  const id: number = Number(params.id);
  // const id: number = 51414;
  const name: string = params.name;
  const productInfo: SingleProductInterface | undefined = await fetchSingleProductInfo(id);
  return (
    <MyMotion>
      <div>
        <SingleProduct product={productInfo} />
      </div>
    </MyMotion>
  );
};

export default Page;
