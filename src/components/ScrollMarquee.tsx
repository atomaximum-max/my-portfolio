import { useEffect, useRef, useState } from 'react';

import './ScrollMarquee.scss';

interface ScrollMarqueeProps {
    children: React.ReactNode;
    speed?: number;
    mobileSpeed?: number;
}

export const ScrollMarquee = ({ 
    children, 
    speed = 100,
    mobileSpeed,
}: ScrollMarqueeProps) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right'>('left');
    const [position, setPosition] = useState(0);
    const lastScrollY = useRef(0);
    const animationRef = useRef<number | null>(null);
    const lastTimeRef = useRef<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const delta = currentScrollY - lastScrollY.current;
            
            if (delta > 0) {
                setDirection('left');
            } else if (delta < 0) {
                setDirection('right');
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");

        const handleChange = () => {
            setIsMobile(mediaQuery.matches);
        };

        handleChange();
        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const currentSpeed = isMobile ? (mobileSpeed ?? speed) : speed;

        const animate = (timestamp: number) => {
            if (!lastTimeRef.current) lastTimeRef.current = timestamp;
            const delta = (timestamp - lastTimeRef.current) / 1000;
            lastTimeRef.current = timestamp;

            setPosition((prev) => {
                const step = (direction === 'left' ? -1 : 1) * currentSpeed * delta;
                let newPos = prev + step;

                const trackWidth = track.scrollWidth / 2;

                // Зацикливаем
                if (newPos < -trackWidth) {
                    newPos = 0;
                } else if (newPos > 0) {
                    newPos = -trackWidth;
                }

                return newPos;
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
                animationRef.current = null;
            }
        };
    }, [direction, speed, mobileSpeed, isMobile]);

    return (
        <div className="scroll-marquee-wrapper">
            <div 
                className="scroll-marquee-track" 
                ref={trackRef}
                style={{ transform: `translateX(${position}px)` }}
            >
                {children}
                {children}
            </div>
        </div>
    );
};