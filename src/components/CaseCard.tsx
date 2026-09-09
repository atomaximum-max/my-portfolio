import React from 'react';
import { Link } from 'react-router-dom';

import './CaseCard.scss';

interface CaseCardProps {
  year: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const CaseCard: React.FC<CaseCardProps> = ({ year, title, description, image, link }) => {
  return (
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
  );
};

export default CaseCard;