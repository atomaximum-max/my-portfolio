import React from 'react';
import { SocialBar } from './SocialBar';
import { motion } from 'motion/react';

import titleSvg from '../assets/img/title.svg';

import './Footer.scss';


const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="container footer__container">
        <motion.img 
          src={titleSvg} 
          alt="Открыт к сотрудничеству" 
          className="footer__title"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7, ease: "linear" }} 
        />       
        <div className="footer__contacts">
          <motion.div 
            className="footer__wrapper"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.8, margin: "0px 0px -100px 0px" }}
            transition={{ 
              duration: 0.5, 
              ease: [0.22, 1, 0.36, 1], 
              delay: 0.3 
            }}
            style={{ transformOrigin: "left center" }}
          >
            <a href="tel:+79051257998" className="footer__phone">
              +7 (905) 125-79-98
            </a>
            <a href="mailto:atomaximum@gmail.com" className="footer__email">
              atomaximum@gmail.com
            </a>
          </motion.div>
          <SocialBar className="footer__social"/>
        </div>
        <motion.div 
          className="footer__copyright"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "linear", delay: 0.5 }}
        >
          <p>© 2026 Все права защищены</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;