import React, { useState } from 'react';

import './Button.scss';

interface ButtonProps {
  children: React.ReactNode; // Текст внутри кнопки (обязательный)
  onClick?: () => void; // Функция при клике
  type?: 'button' | 'submit' | 'reset'; // Тип кнопки для форм
  disabled?: boolean; // Отключена ли кнопка

  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'; // Стиль
  className?: string; // Дополнительный класс

  href?: string; // Если это ссылка
  target?: '_blank' | '_self'; // Куда открывать ссылку
  hoverText?: string; // Текст при наведении (для переворота)
  isHoverable?: boolean; // Включить 3D-переворот

  openModal?: () => void; // Открыть модальное окно
  expandBlock?: () => void; // Раскрыть блок
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button', // по умолчанию — обычная кнопка
  disabled = false,

  variant = 'primary', // по умолчанию — градиентная
  className = '',

  href,
  target = '_self', // по умолчанию — открывать в той же вкладке
  hoverText,
  isHoverable = false, // по умолчанию — 3D-переворот выключен

  openModal,
  expandBlock,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Собираем классы
  const classes = [
    'button',
    `button--${variant}`,
    isHoverable && isHovered && 'button--hovered', // если включен переворот и мышь наведена
    className,
  ].filter(Boolean).join(' ');

  // Обработчик клика — вызывает переданные функции
  const handleClick = () => {
    if (onClick) onClick();
    if (openModal) openModal();
    if (expandBlock) expandBlock();
  };

  // Содержимое кнопки (с поддержкой 3D-переворота)
  const content = isHoverable && hoverText ? (
    <span className="button__inner">
      <span className="button__front">{children}</span>
      <span className="button__back">{hoverText}</span>
    </span>
  ) : (
    children
  );

  // Если это ссылка
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
      </a>
    );
  }

  // Если это кнопка
  return (
    <button
      type={type}
      className={classes}
      onClick={handleClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </button>
  );
};