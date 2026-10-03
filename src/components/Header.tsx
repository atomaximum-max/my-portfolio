import { useState } from 'react';
import { useScrollCheck } from '../hooks/useScrollCheck';
import { Button } from './ui/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { MoscowClock } from './ui/MoscowClock';

import "./Header.scss";



export default function Header() {
  // 1. Подключаем хук для отслеживания скролла
  const { isPageScrolled } = useScrollCheck();

  // 2. Состояние для мобильного меню (открыто/закрыто)
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  // 3. Хук навигации
  const navigate = useNavigate();
  const location = useLocation();

  // 4. Функции для управления меню
  const toggleMenu = () => setIsMobileMenuOpened(!isMobileMenuOpened);
  const closeMenu = () => setIsMobileMenuOpened(false);

  // 5. Переход к секции: если не на главной — сначала навигация, потом скролл
  const navigateTo = (section: string) => {
    closeMenu();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(section), 100);
    } else {
      scrollToSection(section);
    }
  };

  // 6. Находим элемент по id и плавно скроллим к нему
  const scrollToSection = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 7. Формируем классы для хедера
  const headerClasses = [
    'header',
    isPageScrolled ? 'header--scrolled' : '',
    isMobileMenuOpened ? 'header--menu-opened' : '',
  ].filter(Boolean).join(' ');

  // 8. Показывать ли кнопку?
  const showButton = isPageScrolled || isMobileMenuOpened;

  return (
    <header id="header" className={headerClasses}>
      <div className="container header__container">
        {/* ← ЛЕВАЯ ЧАСТЬ: часы */}
        <div className="header__left">
          <MoscowClock />
        </div>
        {/* Навигация */}
        <nav className="header__nav">
          <div className="header__links">
            <button className="header__nav-link" onClick={() => navigateTo('about')}>
              О себе
            </button>
            <button className="header__nav-link" onClick={() => navigateTo('cases')}>
              Кейсы
            </button>
            <button className="header__nav-link" onClick={() => navigateTo('footer')}>
              Контакты
            </button>
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