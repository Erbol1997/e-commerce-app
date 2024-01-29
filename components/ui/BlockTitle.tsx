import { FC } from 'react';

interface BlockTitleProps {
  title: string;
  subtitle?: string;
}

const BlockTitle: FC<BlockTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-3 text-center items-center">
      <h2>{title}</h2>
      <p className="md:w-[700px] w-full m-auto">{subtitle}</p>
    </div>
  );
};

export default BlockTitle;
