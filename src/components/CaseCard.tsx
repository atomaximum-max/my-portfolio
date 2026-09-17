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
          x: index % 2 === 0 ? -80 : 80, 
          y: 40 
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0, margin: "0px 0px -50px 0px" }}
      transition={{ 
          x: { duration: 0.5, ease: "linear" },
          y: { duration: 0.5, ease: "linear" },
          opacity: { duration: 0.3, ease: "linear" },
          delay: index * 0.1
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