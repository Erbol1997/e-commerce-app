'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { addItemToCart, getInitialState, removeItemFromCart } from '@/lib/features/cartSlice';
import { useAppDispatch, useAppSelector, useAppStore } from '@/lib/hooks';
import { CartProductInterface } from '@/types/types';
import { newUrl, sumBy } from '@/utils/common';

const Cart = () => {
  const dispatch = useAppDispatch();
  const store = useAppStore();

  useEffect(() => {
    const products: CartProductInterface[] = getInitialState();
    if (products.length > 0) {
      products.forEach((product) => {
        store.dispatch(addItemToCart(product));
      });
    }
  }, []);

  const { cart } = useAppSelector((state) => state.cart);

  // Функция добавления прибавления и убавления продукта
  const changeQuantity = (item: CartProductInterface, count: number) => {
    if (count > Number(item.quantity)) {
      return;
    }
    dispatch(addItemToCart({ ...item, count }));
  };

  const removeItem = (article: number) => {
    dispatch(removeItemFromCart(article));
  };
  return (
    <div>
      {Array.isArray(cart) && cart.length > 0 ? (
        <div className=" relative flex flex-col lg:flex-row gap-3 gap-y-12 lg:gap-7 justify-between lg:justify-center">
          <div className="w-full lg:w-2/3 flex flex-col gap-4">
            <>
              {cart.map((item) => {
                const { name, images, price2, article, count } = item;
                return (
                  <div
                    key={article}
                    className="flex flex-wrap  md:flex-nowrap px-5 py-3 gap-3 justify-between items-center border border-border-color rounded-md">
                    <div className="w-full flex justify-center sm:block sm:w-auto">
                      <Image src={images[0]} alt={name} width={150} height={150} />
                    </div>
                    <div className="text-sm flex flex-col gap-1  w-[320px]">
                      <Link
                        href={`/shop/product/${newUrl(name)}/${article}`}
                        className="text-base md:text-lg font-medium hover:text-blue transition-all">
                        {name}
                      </Link>
                      <div className="text-gray-500">
                        Цена: {new Intl.NumberFormat('ru-RU').format(price2)} ₸
                      </div>
                      <div className="text-gray-500">Артикул: {article}</div>
                    </div>
                    <div>
                      <div className="relative flex gap-6 items-center px-2 select-none bg-white-dark rounded-md">
                        <div
                          className="cursor-pointer px-2 py-3 hover:fill-blue transition-all"
                          onClick={() => changeQuantity(item, Math.max(1, count - 1))}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="16"
                            width="14"
                            viewBox="0 0 448 512">
                            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                          </svg>
                        </div>
                        <div className="text-sm font-medium">{count}</div>
                        <div
                          className="cursor-pointer px-2 py-3 hover:fill-blue transition-all"
                          onClick={() => changeQuantity(item, Math.max(1, count + 1))}>
                          <svg
                            className="hover:fill-blue transition-all"
                            xmlns="http://www.w3.org/2000/svg"
                            height="16"
                            width="14"
                            viewBox="0 0 448 512">
                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="text-center px-2 text-xl whitespace-nowrap">
                      {new Intl.NumberFormat('ru-RU').format(price2 * count)} ₸
                    </div>
                    <div
                      className="cursor-pointer px-2 text-right hover:fill-blue transition-all"
                      onClick={() => removeItem(item.article)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="14"
                        viewBox="0 0 448 512">
                        <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </>
          </div>
          <div className="w-[250px] lg:sticky block top-[120px] h-fit">
            <div className="flex flex-col justify-center gap-5">
              <div className="flex justify-between items-center">
                <p className="text-xl font-medium">Итого</p>
                <p className="text-3xl font-normal">
                  {new Intl.NumberFormat('ru-RU').format(
                    sumBy(cart.map(({ count, price2 }) => count * price2)),
                  )}{' '}
                  ₸
                </p>
              </div>
              <div>
                <Link
                  href={'/check-out'}
                  className={`${
                    cart.length === 0 && 'pointer-events-none'
                  } blue__btn block w-full text-center`}>
                  Оформить заказ
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="mt-8 text-center">
            <div className="text-3xl font-bold">Ваша корзина пока пуста 🙃</div>
            <div className={'mt-3 block '}>
              <Link className="text-blue" href={`/shop`}>
                Нажмите здесь
              </Link>
              , чтобы продолжить покупки
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
