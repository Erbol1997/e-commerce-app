'use client';
import React, { PropsWithChildren, useState } from 'react';
import { motion } from 'framer-motion';

interface PopupProps {
  children: React.ReactNode;
  formTitle: string;
  handleOpen: () => void;
}

const Popup: React.FC<PropsWithChildren<PopupProps>> = ({ children, formTitle, handleOpen }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={handleOpen}
        className="fixed top-0 left-0 right-0 h-full w-full z-[1000] backdrop-filter backdrop-blur overflow-hidden"></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed z-[1001] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-[500px] w-[300px] bg-white border border-blue rounded-md py-5 px-5 shadow-lg">
        <div className="relative flex items-center justify-between border-b border-border-color pb-3">
          <h4>{formTitle}</h4>
          <svg
            onClick={handleOpen}
            className=" hover:fill-blue transition-all cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            viewBox="0 0 512 512">
            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
          </svg>
        </div>
        <div className="mt-4">{children}</div>
      </motion.div>
    </>
  );
};

export default Popup;
