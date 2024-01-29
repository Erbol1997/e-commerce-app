'use client';

import { Popup } from '@/components';
import { useEffect, useState } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [handlePopup, setHandlePopup] = useState<boolean>(false);
  useEffect(() => {
    setHandlePopup(true);
  }, [error]);

  const handleClick = () => {
    setHandlePopup(false);
  };

  return (
    <>
      {handlePopup && (
        <div>
          <Popup formTitle="Ошибка" handleOpen={handleClick}>
            <main className="flex h-full flex-col items-center justify-center">
              <h3 className="text-center">Что-то пошло не так!</h3>
              <p className="text-center text-sm mt-3 text-red">{error.message}</p>
              <button className="blue__btn mt-4" onClick={() => reset()}>
                Попробуйте еще раз
              </button>
            </main>
          </Popup>
        </div>
      )}
    </>
  );
}
