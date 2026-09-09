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
        <div className={className}> {/* ← добавил className */}
            <div className="interface__block-wrapper">
                <div className="interface__block-header">
                    <span className="interface__block-number">{number}</span>
                    <h2 className="interface__block-title">{title}</h2>
                </div>
                <p className="interface__block-subtitle">{subtitle}</p>
            </div>
            {children}
        </div>
    );
};