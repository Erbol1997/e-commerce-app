/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ProductImages = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState<string>(images[0]);

  useEffect(() => {
    if (!images.length) return;
    setCurrentImage(images[0]);
  }, [images]);

  return (
    <div>
      <div className="relative">
        <div className="cursor-pointer">
          <Zoom>
            <img alt="" src={currentImage} style={{ width: '400px', height: 'auto' }} />
          </Zoom>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
        {images.map((image, index) => (
          <div
            onClick={() => setCurrentImage(image)}
            key={index}
            className={`${
              image === currentImage ? 'border-2 border-blue rounded-md' : 'border-2 border-white'
            }`}>
            <Image
              width={80}
              height={80}
              src={image}
              className={'cursor-pointer rounded-md'}
              alt={''}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
