import React, { useEffect, useState } from 'react';
import {
  IoSunnySharp, IoMoonSharp,
} from 'react-icons/io5';

export const ToggleTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const handleOnClick = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      return setTheme('dark');
    }
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
    return setTheme('light');
  };

  return (
    <button className="text-4xl text-gray-900 dark:text-white" onClick={handleOnClick} type="button">
      {theme === 'dark' ? <IoSunnySharp /> : <IoMoonSharp />}
    </button>
  );
};
