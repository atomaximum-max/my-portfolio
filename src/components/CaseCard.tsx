import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

import './CaseCard.scss';

interface CaseCardProps {
  year: string;
  title: string;
  description: string;
  image: string;
  link: string;
  index?: number;
}

// Оборачиваем Link в motion
const MotionLink = motion.create(Link);

const CaseCard: React.FC<CaseCardProps> = ({ 
  year, 
  title, 
  description, 
  image, 
  link,
  index = 0 
}) => {
  return (
    <MotionLink
      to={link}
      className="case-card"
      initial={{ 
          opacity: 0, 
          x: index % 2 === 0 ? -120 : 120, 
      }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        x: { duration: 0.5, ease: "easeOut" },
        opacity: { duration: 0.3, ease: "easeOut" },
        delay: index * 0.12
      }}
    >
      <div className="case-card__image">
        <img src={image} alt={title} />
      </div>
      <div className="case-card__info">
        <span className="case-card__year">{year}</span>
        <h3 className="case-card__title">{title}</h3>
        <p className="case-card__desc">{description}</p>
      </div>
    </MotionLink>
  );
};

export default CaseCard;