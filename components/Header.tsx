'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/utils/routes';
import { CartProductInterface } from '@/types/types';
import { useAppSelector, useAppStore } from '@/lib/hooks';
import { addItemToCart, getInitialState } from '@/lib/features/cartSlice';
//
import Logo from '@/public/logotip.png';

const Header = () => {
  const store = useAppStore();
  useEffect(() => {
    const products: CartProductInterface[] = getInitialState();
    if (products.length > 0) {
      products.forEach((product) => {
        store.dispatch(addItemToCart(product));
      });
    }
  }, []);

  const [menuToggle, setMenuToggle] = useState(false);
  const { cart } = useAppSelector((state) => state.cart);

  const wishlist = [];

  const navLinkData = [
    { id: 1, name: 'Магазин', href: ROUTES.SHOP },
    { id: 2, name: 'О компании', href: ROUTES.ABOUT },
    { id: 3, name: 'Контакты', href: ROUTES.CONTACTS },
    { id: 4, name: 'Доставка и оплата', href: ROUTES.POLICY },
    { id: 5, name: 'Сервисный центр', href: `${ROUTES.POLICY}/#serviceCentr` },
  ];

  const handleToggle = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <header className="pt-3 pb-3 fixed top-0 left-0 right-0 z-[999] bg-white shadow-md bg-opacity-60 backdrop-filter backdrop-blur">
      <div className="container">
        <div className="row">
          <div className="flex justify-between items-center">
            <Link href={ROUTES.HOME}>
              <Image src={Logo} alt="logo" width={60} priority={true} />
            </Link>
            <ul className="hidden lg:flex justify-between gap-2">
              {navLinkData.map((item) => (
                <li className="p-1" key={item.id}>
                  <Link
                    className="p-1 text-base hover:text-blue transition-colors"
                    href={item.href}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* MOBILE NAV */}
            <div
              className={`${
                menuToggle ? 'left-0' : 'left-[-100%]'
              } lg:hidden fixed top-0 w-full h-screen z-[1001] bg-white opacity-80 backdrop-filter backdrop-blur transition-all`}
              onClick={handleToggle}></div>
            <ul
              className={`${
                menuToggle ? 'left-0' : 'left-[-230px]'
              } fixed w-[230px] h-screen flex flex-col gap-3 bg-white px-4 py-3 top-0  transition-all lg:hidden z-[1002] shadow-2xl overflow-hidden`}>
              <Link onClick={handleToggle} href={ROUTES.HOME} className="mb-5">
                <Image src={Logo} alt="logo" width={60} />
              </Link>
              <div onClick={handleToggle}>
                <svg
                  className="absolute top-5 right-5"
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 384 512">
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </div>

              {navLinkData.map((item) => (
                <li key={item.id}>
                  <Link
                    onClick={handleToggle}
                    className="py-1 inline-block text-base hover:text-blue transition-colors"
                    href={item.href}>
                    {item.name}
                  </Link>
                </li>
              ))}
              <ul className="mt-3 flex items-center gap-3">
                <li>
                  <Link
                    href={'https://instagram.com/itdoc.kz?igshid=MzRlODBiNWFlZA=='}
                    target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 102 102"
                      id="instagram">
                      <defs>
                        <radialGradient
                          id="a"
                          cx="6.601"
                          cy="99.766"
                          r="129.502"
                          gradientUnits="userSpaceOnUse">
                          <stop offset=".09" stopColor="#fa8f21"></stop>
                          <stop offset=".78" stopColor="#d82d7e"></stop>
                        </radialGradient>
                        <radialGradient
                          id="b"
                          cx="70.652"
                          cy="96.49"
                          r="113.963"
                          gradientUnits="userSpaceOnUse">
                          <stop offset=".64" stopColor="#8c3aaa" stopOpacity="0"></stop>
                          <stop offset="1" stopColor="#8c3aaa"></stop>
                        </radialGradient>
                      </defs>
                      <path
                        fill="url(#a)"
                        d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                        data-name="Path 16"></path>
                      <path
                        fill="url(#b)"
                        d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                        data-name="Path 17"></path>
                      <path
                        fill="#fff"
                        d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
                        data-name="Path 18"
                        transform="translate(-422.637 -426.196)"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href={'https://t.me/itdockz'} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="none"
                      viewBox="0 0 48 48"
                      id="telegram">
                      <rect width="48" height="48" fill="#419FD9" rx="24"></rect>
                      <rect width="48" height="48" fill="url(#paint0_linear)" rx="24"></rect>
                      <path
                        fill="#fff"
                        d="M10.7874 23.4709C17.7667 20.3663 22.4206 18.3195 24.7493 17.3305C31.3979 14.507 32.7795 14.0165 33.68 14.0002C33.878 13.9968 34.3208 14.0469 34.6077 14.2845C34.8499 14.4852 34.9165 14.7563 34.9484 14.9465C34.9803 15.1368 35.02 15.5702 34.9884 15.9088C34.6281 19.774 33.0692 29.1539 32.276 33.483C31.9404 35.3148 31.2796 35.929 30.6399 35.9891C29.2496 36.1197 28.1938 35.051 26.8473 34.1497C24.7401 32.7395 23.5498 31.8615 21.5044 30.4854C19.1407 28.895 20.673 28.0209 22.0201 26.5923C22.3726 26.2185 28.4983 20.5295 28.6169 20.0135C28.6317 19.9489 28.6455 19.7083 28.5055 19.5813C28.3655 19.4543 28.1589 19.4977 28.0098 19.5322C27.7985 19.5812 24.4323 21.8529 17.9113 26.3473C16.9558 27.0172 16.0904 27.3435 15.315 27.3264C14.4602 27.3076 12.8159 26.833 11.5935 26.4273C10.0942 25.9296 8.90254 25.6666 9.0063 24.8215C9.06035 24.3813 9.65403 23.9311 10.7874 23.4709Z"></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="24"
                          x2="24"
                          y2="47.644"
                          gradientUnits="userSpaceOnUse">
                          <stop stopColor="#2AABEE"></stop>
                          <stop offset="1" stopColor="#229ED9"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href={'https://wa.link/51f8hk'} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      id="Whatsapp"
                      height="30px"
                      width="30px">
                      <path
                        fillRule="evenodd"
                        d="M209.877 154.114c-4.258-11.323-9.176-10.515-12.45-10.639-3.277-.121-6.146-.061-10.573.011-3.746.061-9.882 1.026-15.232 6.413-5.357 5.378-20.366 18.312-21.404 45.725-1.031 27.408 18.08 54.643 20.749 58.455 2.667 3.826 36.494 63.236 92.719 87.67 56.231 24.427 56.525 16.981 66.84 16.435 10.325-.54 33.726-12.246 38.899-25.073 5.172-12.827 5.588-23.979 4.271-26.358-1.316-2.371-5-3.911-10.51-6.9-5.516-2.995-32.595-17.498-37.673-19.55-5.081-2.044-8.787-3.108-12.742 2.329-3.957 5.422-15.191 17.569-18.596 21.168-3.42 3.6-6.711 3.934-12.226.93-5.5-2.988-23.373-9.548-44.098-29.317-16.126-15.38-26.711-34.043-29.779-39.736-3.069-5.697-.02-8.604 2.9-11.269 2.618-2.407 5.857-6.301 8.792-9.449 2.919-3.148 3.949-5.43 5.961-9.083 2.007-3.645 1.2-6.932-.102-9.771-1.303-2.838-11.49-30.668-15.746-41.991z"
                        clipRule="evenodd"
                        fill="#34a853"
                        className="color000000 svgShape"></path>
                      <path
                        d="M260.062 64c50.249 0 97.478 19.402 132.982 54.632C428.482 153.796 448 200.533 448 250.232c0 49.694-19.518 96.43-54.956 131.596-35.507 35.232-82.735 54.637-132.982 54.637-31.806 0-63.24-8.023-90.906-23.201l-12.017-6.593-13.063 4.149-61.452 19.522 19.375-57.149 4.798-14.151-7.771-12.763c-17.593-28.898-26.892-62.111-26.892-96.047 0-49.699 19.518-96.436 54.957-131.601C162.596 83.402 209.819 64 260.062 64m0-32C138.605 32 40.134 129.701 40.134 250.232c0 41.229 11.532 79.791 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32z"
                        fill="#34a853"
                        className="color000000 svgShape"></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </ul>
            <ul className="flex sm:gap-2 items-center">
              <li className="">
                <Link
                  href={ROUTES.CART}
                  className="relative p-2 inline-block hover:text-blue hover:fill-blue transition-colors">
                  {!!cart.length && (
                    <span className="absolute w-5 h-5 bg-blue text-white text-sm text-center rounded-full right-2 top-0">
                      {cart.length}
                    </span>
                  )}
                  <svg
                    className="m-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    viewBox="0 0 576 512">
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                  <span className="block mt-1 text-xs sm:text-base">Корзина</span>
                </Link>
              </li>
              {/* WISHLIST */}
              <li className="">
                <Link
                  href={ROUTES.WISHLIST}
                  className="relative p-2 inline-block hover:text-blue hover:fill-blue transition-colors">
                  {!!wishlist.length && (
                    <span className="absolute w-5 h-5 bg-blue text-white text-sm text-center rounded-full right-4 top-0">
                      {wishlist.length}
                    </span>
                  )}
                  <svg
                    className="m-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="21"
                    viewBox="0 0 512 512">
                    <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                  </svg>
                  <span className="block mt-1 text-xs sm:text-base">Избранное</span>
                </Link>
              </li>
              {/* SEARCH */}
              <li className="">
                <div className="p-2 inline-block hover:text-blue hover:fill-blue transition-colors">
                  <svg
                    className="m-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                  </svg>
                  <span className="block mt-1 text-xs sm:text-base">Поиск</span>
                </div>
              </li>
              {/* MOBILE BURGER */}
              <li onClick={handleToggle} className="lg:hidden">
                <div className="p-2 inline-block hover:text-blue hover:fill-blue transition-colors">
                  <svg
                    className="m-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    // height="30"
                    viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                  </svg>
                  <span className="block mt-1 text-xs sm:text-base">Меню</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
