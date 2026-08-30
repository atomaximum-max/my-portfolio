import { useState } from 'react';
import { useScrollCheck } from '../hooks/useScrollCheck';

import "./header.scss";
import { Button } from './ui/Button';



export default function Header() {
  // 1. Подключаем хук для отслеживания скролла
  const { isPageScrolled } = useScrollCheck();

  // 2. Состояние для мобильного меню (открыто/закрыто)
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  // 3. Функции для управления меню
  const toggleMenu = () => setIsMobileMenuOpened(!isMobileMenuOpened);
  const closeMenu = () => setIsMobileMenuOpened(false);

  // 4. Формируем классы для хедера
  const headerClasses = [
    'header',
    isPageScrolled ? 'header--scrolled' : '',
    isMobileMenuOpened ? 'header--menu-opened' : '',
  ].filter(Boolean).join(' ');

  // 5. Показывать ли кнопку?
  const showButton = isPageScrolled || isMobileMenuOpened;

  return (
    <header id="header" className={headerClasses}>
      <div className="container header__container">
        {/* Навигация */}
        <nav className="header__nav">
          <a href="#about" onClick={closeMenu}>О себе</a>
          <a href="#cases" onClick={closeMenu}>Кейсы</a>
          <a href="#footer" onClick={closeMenu}>Контакты</a>
        </nav>

        {/* Бургер-кнопка для мобилок */}
        <button 
          className="header__burger" 
          onClick={toggleMenu}
          aria-expanded={isMobileMenuOpened}
          aria-label="Меню"
        >
          <span className="header__burger-line" />
          <span className="header__burger-line" />
          <span className="header__burger-line" />
        </button>

        {/* Кнопка "Написать мне" */}
        {showButton && (
          <Button
            variant="outline"
            href="https://t.me/atomaximum"
            target="_blank"
            hoverText="Telegram"
            isHoverable
            className="header__btn"
          >
            Написать мне
          </Button>
        )}
      </div>
    </header>
  );
}