import { StaticImageData } from 'next/image';
import React from 'react';

interface MySwiperProps {
  children: React.ReactNode;
  bgImage: StaticImageData;
}

const MySwiper = ({ children, bgImage }: MySwiperProps) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat w-full h-[500px] rounded-md overflow-hidden"
      style={{ backgroundImage: `url(${bgImage.src})` }}>
      <div className="bg-black opacity-40 absolute top-0 left-0 w-full h-full z-30"></div>
      <div className="relative z-40 px-9 py-5 h-full text-white">{children}</div>
    </section>
  );
};

export default MySwiper;
