import React from 'react';

import './Experience.scss';

const experienceData = [
    {
        period: '09/2025 - 06/2026',
        title: 'UX/UI Engineer',
        company: 'Бизнес - Азимут',
        description: 'Проектировал UX/UI для системы контроля доступа и аналитической платформы. Разрабатывал пользовательские сценарии, дизайн - системы и сопровождал решения до фронтенд реализации.',
    },
    {
        period: '07/2024 - 08/2025',
        title: 'Lead Product Designer',
        company: 'Ситроникс - Разработка',
        description: 'Координировал проектирование интерфейсов для онлайн - сервиса аренды мобильного транспорта и торговой платформы. Разрабатывал UX - решения и обеспечивал единый подход к дизайну продуктов.',
    },
    {
        period: '10/2021 - 07/2024',
        title: 'Head of Product Design',
        company: 'Sitronics Group',
        description: 'Руководил командой дизайнеров и фронтенд разработчиков (20+ человек). Развивал процессы дизайна, проектировал сложные B2B/B2C продукты и формировал единую дизайн - стратегию компании.',
    },
    {
        period: '01/2021 - 07/2024',
        title: 'UX/UI дизайнер',
        company: 'Nvision Group',
        description: 'Разрабатывал корпоративные веб-сервисы для департамента кадрового сопровождения и внутренних процессов компании. Создавал дизайн-системы, пользовательские сценарии и интерфейсы личных кабинетов.',
    },
    {
        period: '10/2020 - 01/2021',
        title: 'UX/UI дизайнер',
        company: 'Копирка',
        description: 'Проектировал онлайн-сервис для организации дистанционной печати. Разрабатывал пользовательские сценарии, интерактивные прототипы и интерфейсы для десктопной и мобильной версий.',
    },
        {
        period: '07/2020 - 09/2020',
        title: 'Дизайнер',
        company: 'Сфера',
        description: 'Отвечал за дизайн мобильных приложений для социальной сети и EdTech - платформы. Создавал дизайн - компоненты, пользовательские сценарии и интерактивные прототипы интерфейсов в Figma.',
    },
];

const Experience: React.FC = () => {
    return (
        <div className="experience">
            <h2 className="experience__title">Опыт</h2>
            <ul className="experience__list">
                {experienceData.map((item, index) => (
                    <li className="experience__item" key={index}>
                        <div className="experience__period">{item.period}</div>
                        <div className="experience__content">
                            <h3 className="experience__position">{item.title}</h3>
                            <span className="experience__company">{item.company}</span>
                        </div>
                        <p className="experience__description">{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;