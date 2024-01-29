'use client';
import { useRef } from 'react';
import Link from 'next/link';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import MySwiper from './MySwiper';
import slideBg from '@/public/images/slide-bg.jpg';
import slideBg2 from '@/public/images/slide-bg-2.jpg';
// SWIPER CSS IMPORT
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
SwiperCore.use([Navigation]);

export default function HomePageSlider() {
  // SVGSVGElement
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLElement | null>(null);
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', String(1 - progress));
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      // navigation={true}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper">
      <SwiperSlide>
        <MySwiper bgImage={slideBg}>
          <div className="flex justify-between items-center gap-3 h-full">
            <div className="sm:flex-1 flex-none"></div>
            <div className="sm:flex-1 flex-none w-full sm:w-auto">
              <h2 className="text-white sm:text-xl text-base w-full sm:w-[350px] m-auto">
                Поставки компьютерной техники для офисов под “ключ”
              </h2>
              <div className="mt-4">
                <Link
                  href={'http://localhost:3000/categories/category/3587'}
                  className="blue__btn inline-block">
                  Смотреть предложения
                </Link>
              </div>
            </div>
          </div>
        </MySwiper>
      </SwiperSlide>
      <SwiperSlide>
        <MySwiper bgImage={slideBg2}>
          <div className="flex justify-between items-center sm:gap-3 gap-0 h-full">
            <div className="flex-1">
              <h2 className=" text-white sm:text-xl text-base w-full sm:w-[380px] m-auto">
                Освежи свой компьютер с мощными процессорами – Повысь производительность сегодня!
              </h2>
              <p className="sm:text-base text-sm mt-2">
                Добро пожаловать в будущее производительности! Наши новейшие процессоры
                предоставляют невероятное сочетание скорости, эффективности и надежности, чтобы ваш
                компьютер работал на высших оборотах
              </p>
              <div className="mt-4">
                <Link
                  href={'http://localhost:3000/categories/category/3593'}
                  className="blue__btn inline-block">
                  ХОЧУ КУПИТЬ
                </Link>
              </div>
            </div>
            <div className="sm:flex-1 flex-none"></div>
          </div>
        </MySwiper>
      </SwiperSlide>
      {/* <SwiperSlide>
                    <MySwiper>Slide 3</MySwiper>
                  </SwiperSlide> */}
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
      <div className="swiper-button-next">
        <svg
          className="fill-white"
          xmlns="http://www.w3.org/2000/svg"
          height="60"
          width="60"
          viewBox="0 0 512 512">
          <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
        </svg>
      </div>
      <div className="swiper-button-prev">
        <svg
          className="fill-white"
          xmlns="http://www.w3.org/2000/svg"
          height="60"
          width="60"
          viewBox="0 0 512 512">
          <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
        </svg>
      </div>
    </Swiper>
  );
}
