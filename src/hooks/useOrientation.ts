import { useEffect, useState } from 'react';

const useOrientation = () => {
  const [orientation, setOrientation] = useState(typeof window !== 'undefined' ? window.orientation : false);

  useEffect(() => {
    const handler = () => setOrientation(window.orientation);

    window.addEventListener('orientationchange', handler);

    return () => {
      window.removeEventListener('orientationchange', handler);
    };
  }, []);

  return orientation === 0 ? 'portrait' : 'landscape';
};

export default useOrientation;
