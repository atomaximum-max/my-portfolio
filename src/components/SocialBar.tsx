import React from 'react';

import './socialbar.scss';

import tgIcon from '../assets/img/telegram.svg';
import inIcon from '../assets/img/linkedin.svg';
import beIcon from '../assets/img/behance.svg';
import ghIcon from '../assets/img/github.svg';

interface SocialBarProps {
  className?: string;
}

export const SocialBar: React.FC<SocialBarProps> = ({ className = '' }) => {
  const socials = [
    { id: 'tg', href: '#', img: tgIcon, alt: 'Telegram' },
    { id: 'in', href: '#', img: inIcon, alt: 'LinkedIn' },
    { id: 'be', href: '#', img: beIcon, alt: 'Behance' },
    { id: 'gh', href: '#', img: ghIcon, alt: 'GitHub' },
  ];

  return (
    <div className={`social-bar ${className}`}>
      {socials.map((item) => (
        <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer" className="social-link">
          <img src={item.img} alt={item.alt} />
        </a>
      ))}
    </div>
  );
};