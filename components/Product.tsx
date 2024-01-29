import { ProductsInterface } from '@/types/types';
import Link from 'next/link';
import React from 'react';
import { Text } from '.';
import Image from 'next/image';

import blurImage from '@/public/images/placeholder.jpg';
import { newUrl } from '@/utils/common';

const Product = ({ product }: { product: ProductsInterface }) => {
  const isWishlist: boolean = false;
  const isCart: boolean = false;
  const isFetching: boolean = false;

  return (
    <div className="h-full w-full p-4 transition-all border-[1px] border-border-color category__item hover:border-[#fff] rounded-md">
      <div className="flex flex-col justify-between h-full">
        <Link
          href={`/shop/product/${newUrl(product.name)}/${product.article}`}
          className="flex-shrink-0 mb-3">
          {product.images.length === 0 ? (
            <div className="w-[215px] h-[215px] flex justify-center items-center bg-[#33333314] rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 384 512">
                <path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z" />
              </svg>
            </div>
          ) : (
            <div className="relative">
              <Image
                priority
                className={'h-full w-full'}
                src={product.images[0]}
                alt={product.name}
                placeholder="blur"
                blurDataURL={blurImage.blurDataURL}
              />
            </div>
          )}
        </Link>
        <div className="mt-3 mb-3">
          <Text className={' text-xl font-medium'}>
            {product.price2 === 1 ? (
              <span className="text-sm">Цена по запросу</span>
            ) : (
              `${new Intl.NumberFormat('ru-RU').format(product.price2)} ₸`
            )}
          </Text>
        </div>
        <Link
          href={`/shop/product/${product.name}/${product.article}`}
          className="mb-1 hover:text-blue transition-all">
          <Text className={'text-sm line-clamp-3'}>{product.name}</Text>
        </Link>
        <div>
          <Text
            className={`text-xs  ${String(product.quantity) !== '0' ? 'text-green' : 'text-red'}`}>
            {String(product.quantity) !== '0' ? 'Есть в наличии' : 'Нет в наличии'}
          </Text>
        </div>
        <div>
          <Text className={'text-xs text-gray-dark'}>Арт. {product.article}</Text>
        </div>
        <div className="mt-2 flex items-center gap-3">
          {String(product.quantity) !== '0' ? (
            <button
              // onClick={() => handleClick(product)}
              disabled={isFetching || isCart}
              className={`blue__btn h-[35px] disabled:bg-gray-dark disabled:text-white disabled:border-gray-dark`}
              style={{ height: '35px', paddingTop: '0', paddingBottom: '0', fontSize: '15px' }}>
              {isCart ? 'В корзине' : 'В корзину'}
            </button>
          ) : (
            ''
          )}
          <button
            // onClick={isWishlist ? () => removeItemWishlist(product.article) : addItemWishlist}
            disabled={isFetching}
            style={{ height: '35px', paddingTop: '0', paddingBottom: '0', fontSize: '15px' }}>
            {isWishlist ? (
              <svg
                className={`m-auto fill-blue`}
                xmlns="http://www.w3.org/2000/svg"
                height="22"
                width="21"
                viewBox="0 0 512 512">
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
            ) : (
              <svg
                className={`m-auto`}
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="21"
                viewBox="0 0 512 512">
                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
