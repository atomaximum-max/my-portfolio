import { useState, useEffect } from 'react';

import arrowTopIcon from '../../assets/img/arrow-top.svg';

import './BackToTop.scss';

export const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            type='button'
            className={`back-to-top ${isVisible ? 'back-to-top--visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Наверх"
        >
            <img src={arrowTopIcon} alt="" aria-hidden="true" />   
        </button>
    );
};