import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useResetPageScroll = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
};
