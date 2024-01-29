'use client';
import React, { useState } from 'react';
import { Text } from '..';
import DOMPurify from 'dompurify';
import { ProductProperties } from '@/types/types';

interface ProductPropertiesInterface {
  properties?: ProductProperties;
  description?: string | null;
}

const ProductProperties: React.FC<ProductPropertiesInterface> = ({ properties, description }) => {
  const [propertiesOpen, setPropertiesOpen] = useState(false);
  return (
    <div>
      <ul className="flex gap-3 items-center border-b border-border-color">
        <li
          onClick={() => setPropertiesOpen(false)}
          className={`pt-2 pb-4 pr-3 cursor-pointer hover:text-blue transition-all ${
            !propertiesOpen ? 'border-b-[2px] border-blue' : ''
          }`}>
          Характеристики
        </li>
        <li
          onClick={() => setPropertiesOpen(true)}
          className={`pt-2 pb-4 pr-3 cursor-pointer hover:text-blue transition-all ${
            propertiesOpen ? 'border-b-[2px] border-blue' : ''
          }`}>
          Описание
        </li>
      </ul>
      <div className="mt-7 pl-8 pr-8 pt-5 pb-5  bg-white my__shadow rounded-md">
        {propertiesOpen ? (
          description && (
            <div
              className="detailText"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}></div>
          )
        ) : (
          <ul className="flex flex-col gap-4 transition-all">
            {properties &&
              Object.entries(properties).map(([key, value], i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 border-b border-border-color pb-2 break-words">
                  <li>
                    <Text>{key}</Text>
                  </li>
                  <li>
                    <Text>{value}</Text>
                  </li>
                </div>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductProperties;
