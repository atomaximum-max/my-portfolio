import { motion } from "motion/react";
import './InterfaceBlock.scss';

interface InterfaceBlockProps {
    number: string;
    title: string;
    subtitle: string;
    className?: string;
    children: React.ReactNode;
}

export const InterfaceBlock = ({
    number,
    title,
    subtitle,
    className = '',
    children,
}: InterfaceBlockProps) => {
    return (
        <motion.div 
            className={className}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6, ease: "linear" }}
        >
            <div className="interface__block-wrapper">
                <div className="interface__block-header">
                    <span className="interface__block-number">{number}</span>
                    <h2 className="interface__block-title">{title}</h2>
                </div>
                <p className="interface__block-subtitle">{subtitle}</p>
            </div>
            {children}
        </motion.div>
    );
};