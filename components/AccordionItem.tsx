import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DOMPurify from 'dompurify';
import { AccordionItemProps } from '@/types/types';

const AccordionItem = ({ isOpen, onClick, title, subtitle }: AccordionItemProps) => {
  return (
    <div
      className={`select-none cursor-pointer overflow-hidden bg-white border shadow-md ${
        isOpen ? 'border-blue' : 'border-border-color'
      }  rounded-md transition-all duration-700`}>
      <div onClick={onClick} className="flex items-center p-5 justify-between">
        <strong className={`${isOpen ? 'text-blue' : ''} transition-all duration-500`}>
          {title}
        </strong>
        <svg
          className={`${isOpen ? 'rotate-180 fill-blue' : ''} transition-all duration-700`}
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="20"
          viewBox="0 0 448 512">
          <path d="M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z" />
        </svg>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5 }}>
            <p
              className="px-5 pb-5"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(subtitle) }}></p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
