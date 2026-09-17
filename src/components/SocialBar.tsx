import React from 'react';
import { motion } from 'motion/react';

import './SocialBar.scss';

import tgIcon from '../assets/img/telegram.svg';
import inIcon from '../assets/img/linkedin.svg';
import beIcon from '../assets/img/behance.svg';
import ghIcon from '../assets/img/github.svg';

interface SocialBarProps {
  className?: string;
}

export const SocialBar: React.FC<SocialBarProps> = ({ className = '' }) => {
  const socials = [
    { id: 'tg', href: 'https://t.me/atomaximum', img: tgIcon, alt: 'Telegram', x: -80, y: -80, rotate: -180 },
    { id: 'in', href: 'https://www.linkedin.com/in/maksim-barmanov', img: inIcon, alt: 'LinkedIn', x: 80, y: -80, rotate: 180 },
    { id: 'be', href: 'https://www.behance.net/atomaximum', img: beIcon, alt: 'Behance', x: -80, y: 80, rotate: 180 },
    { id: 'gh', href: 'https://github.com/atomaximum-max', img: ghIcon, alt: 'GitHub', x: 80, y: 80, rotate: -180 },
  ];

  return (
    <motion.div 
      className={`social-bar ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } }
      }}
    >
      {socials.map((item) => (
        <motion.a 
          key={item.id} 
          href={item.href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-link"
          variants={{
            hidden: { 
              x: item.x, 
              y: item.y, 
              rotate: item.rotate,
              opacity: 0 
            },
            visible: { 
              x: 0, 
              y: 0, 
              rotate: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 10,
                mass: 1,
              }
            }
          }}
        >
          <img src={item.img} alt={item.alt} />
        </motion.a>
      ))}
    </motion.div>
  );
};