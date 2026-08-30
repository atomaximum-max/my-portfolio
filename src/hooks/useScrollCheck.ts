import { useState, useEffect } from 'react';

export const useScrollCheck = (threshold: number = 50) => {
  // Состояние: проскроллена ли страница
  const [isPageScrolled, setIsPageScrolled] = useState(false);

  useEffect(() => {
    // Функция, которая вызывается при скролле
    const handleScroll = () => {
      // Если прокрутка больше порога (50px) — ставим true, иначе false
      setIsPageScrolled(window.scrollY > threshold);
    };

    // Подписываемся на событие скролла
    window.addEventListener('scroll', handleScroll);

    // Вызываем сразу, чтобы проверить начальное состояние
    handleScroll();

    // Отписываемся при размонтировании компонента (чтобы не было утечек памяти)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { isPageScrolled };
};