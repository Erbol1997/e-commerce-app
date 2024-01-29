import React from 'react';

const Custom500 = ({ reset }: { reset: () => void }) => {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Ошибка сервера</h2>
      <button className="mt-4 blue__btn" onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
};

export default Custom500;
