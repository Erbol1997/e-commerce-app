import React from 'react';
import { Product } from '..';
import { ProductsInterface } from '@/types/types';

const ProductList = ({ products }: { products: ProductsInterface[] }) => {
  return (
    <div className="md:col-span-3 grid grid-cols-1 min-[450px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-fit gap-4">
      {products.map((product) => (
        <Product key={product.article} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
