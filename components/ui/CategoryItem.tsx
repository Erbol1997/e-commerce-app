'use client';
import { useState } from 'react';
import { CategoryInterface } from '@/types/types';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import clsx from 'clsx';
import { transliterate as transliterate } from 'transliteration';
import convert from 'url-slug';

const CategoryItem = ({ category }: { category: CategoryInterface }) => {
  const transliterateUrl: string = transliterate(category.name);
  const urlSlug: string = convert(transliterateUrl);
  const [expanded, setExpanded] = useState(false);
  const params = useParams();
  const id = params.id;

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <li className=" pt-1 pb-1 overflow-hidden bg-white">
      <div
        className={`${expanded ? 'mb-2' : ''}  transition-all duration-300`}
        onClick={toggleExpansion}>
        {category.children.length ? (
          <div
            className={`${
              expanded ? 'text-blue' : ''
            } flex items-center gap-2 cursor-pointer hover:fill-blue hover:text-blue transition-all`}>
            <svg
              className={`${expanded ? 'rotate-90 fill-blue' : ''} transition-all duration-300`}
              xmlns="http://www.w3.org/2000/svg"
              height="22"
              width="20"
              viewBox="0 0 256 512">
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            {category.name}
          </div>
        ) : (
          <Link
            className={clsx(
              'flex items-center gap-2 cursor-pointer hover:fill-blue hover:text-blue transition-all',
              { 'text-blue': category.category_id === Number(id) },
            )}
            href={`/shop/category/${urlSlug}/${category.category_id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="22" width="20" viewBox="0 0 256 512">
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            {category.name}
          </Link>
        )}
      </div>
      <AnimatePresence initial={false}>
        {expanded && category.children.length > 0 && (
          <motion.ul
            className="pl-3"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4 }}>
            {category.children.map((childCategory) => (
              <CategoryItem key={childCategory.id} category={childCategory} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

export default CategoryItem;
