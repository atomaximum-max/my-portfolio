import { useState } from 'react';
import { useScrollCheck } from '../hooks/useScrollCheck';
import { Button } from './ui/Button';

import "./Header.scss";

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
          <div className="header__links">
            <a className="header__nav-link" href="#about" onClick={closeMenu}>О себе</a>
            <a className="header__nav-link" href="#cases" onClick={closeMenu}>Кейсы</a>
            <a className="header__nav-link" href="#footer" onClick={closeMenu}>Контакты</a>
          </div>

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
        </nav>

        {/* Бургер-кнопка для мобилок */}
        <button
          type='button'
          className={`header__burger ${isMobileMenuOpened ? 'header__burger--active' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isMobileMenuOpened}
          aria-label={isMobileMenuOpened ? 'Закрыть меню' : 'Открыть меню'}
        >
          <span className="header__burger-line" />
          <span className="header__burger-line" />
        </button>
      </div>
    </header>
  );
}