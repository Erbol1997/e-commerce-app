import React from 'react';
import { CategoryItem } from '.';
import { CategoryInterface } from '@/types/types';

const Category = ({ categories }: { categories: CategoryInterface[] }) => {
  return (
    <ul className="flex flex-col gap-3 select-none px-1">
      <h4>Категории</h4>
      {categories?.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </ul>
  );
};

export default Category;
