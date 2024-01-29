'use client';
import { AccordionDataType } from '@/types/types';
import React, { FC, useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ data }: { data: AccordionDataType[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number | null) => {
    setActiveIndex((prevIndex: number | null) => {
      // Проверка на null, чтобы соответствовать ожидаемому типу SetStateAction<null>
      return prevIndex === index ? null : index;
    });
  };
  return (
    <div className="sm:w-[620px] w-full flex flex-col gap-3">
      {data.map((item, index) => (
        <AccordionItem
          title={item.title}
          subtitle={item.subtitle}
          key={index}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
