import React from 'react';
import type { ReactNode } from 'react';
import './marquee.scss';

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ children, speed = 20 }) => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {children}
        {children}
      </div>
    </div>
  );
};

export default Marquee;