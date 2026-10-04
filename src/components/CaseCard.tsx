import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "motion/react";

import './CaseCard.scss';

interface CaseCardProps {
  year: string;
  title: string;
  description: string;
  image: string;
  link: string;
  index?: number;
}

const CaseCard: React.FC<CaseCardProps> = ({ 
  year, 
  title, 
  description, 
  image, 
  link,
  index = 0 
}) => {
  return (
    <motion.div
      className="case-card-reveal"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.12 }}
    >
      <Link to={link} className="case-card">
        <div className="case-card__image">
          <img src={image} alt={title} />
        </div>
        <div className="case-card__info">
          <span className="case-card__year">{year}</span>
          <h3 className="case-card__title">{title}</h3>
          <p className="case-card__desc">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default CaseCard;