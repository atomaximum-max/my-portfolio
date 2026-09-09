import React from 'react';
import { SocialBar } from './SocialBar';

import titleSvg from '../assets/img/title.svg';

import './Footer.scss';


const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="container footer__container">
        <img src={titleSvg} alt="Открыт к сотрудничеству" className="footer__title" />
        
        <div className="footer__contacts">
          <div className="footer__wrapper">
            <a href="tel:+79051257998" className="footer__phone">
              +7 (905) 125-79-98
            </a>
            <a href="mailto:atomaximum@gmail.com" className="footer__email">
              atomaximum@gmail.com
            </a>
          </div>
          <SocialBar className="footer__social"/>
        </div>
        <div className="footer__copyright">
          <p>© 2026 Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;