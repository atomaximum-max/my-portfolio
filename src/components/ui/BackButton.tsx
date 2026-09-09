import { useNavigate } from 'react-router-dom';

import './BackButton.scss';

interface BackButtonProps {
  className?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ className = '' }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Возвращает на предыдущую страницу
  };

  return (
    <div className="container">
      <button className={`back-button ${className}`} onClick={goBack}>
        <svg className="back-button__path" width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.292893 11.2929C-0.0976314 11.6834 -0.0976315 12.3166 0.292892 12.7071L6.65685 19.0711C7.04738 19.4616 7.68054 19.4616 8.07107 19.0711C8.46159 18.6805 8.46159 18.0474 8.07107 17.6569L2.41421 12L8.07107 6.34315C8.46159 5.95262 8.46159 5.31946 8.07107 4.92893C7.68054 4.53841 7.04738 4.53841 6.65686 4.92893L0.292893 11.2929ZM29 12L29 11L1 11L1 12L1 13L29 13L29 12Z"/>
        </svg>
      </button>
    </div>
  );
};