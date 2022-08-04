import { useEffect } from 'react';

export const useWindow = (
  eventName: keyof WindowEventMap,
  callback: any,
  isCorrect: boolean,
  turn: number
) => {
  useEffect(() => {
    window.addEventListener(eventName, callback);

    if (isCorrect) {
      window.removeEventListener(eventName, callback);
    }

    if (turn > 5) {
      window.removeEventListener(eventName, callback);
    }

    return () => {
      window.removeEventListener(eventName, callback);
    };
  });
};
