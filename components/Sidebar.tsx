import React from 'react';
import { Category } from '.';
import { CategoryInterface } from '@/types/types';

const Sidebar = async ({ categories }: { categories: CategoryInterface[] }) => {
  return (
    <div className="md:col-span-1 py-5">
      <div>
        <Category categories={categories} />
      </div>
    </div>
  );
};

export default Sidebar;
