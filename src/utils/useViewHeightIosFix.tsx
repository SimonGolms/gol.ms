import { useEffect } from 'react';

// Fix the viewport height issue on mobile browsers
// see: https://www.markusantonwolf.com/en/articles/solution-to-the-mobile-viewport-height-issue-with-tailwind-css
export const useViewHeightIosFix = (): void => {
  const setViewHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    const handleResize = () => {
      setViewHeight();
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
};
