import { InterfaceBlock } from '../../../components/InterfaceBlock';
import { motion } from "motion/react";

import proxwayThumbnail from '../../../assets/img/ProxwayWeb-thumbnail.png';
import proxWayProblemImage01 from "../../../assets/img/ProxWay-problem-Image-01.png";
import proxWayProblemImage02 from "../../../assets/img/ProxWay-problem-Image-02.png";
import proxWayProblemImage03 from "../../../assets/img/ProxWay-problem-Image-03.png";
import proxwayResearchImageL from "../../../assets/img/Proxway-research-Image-L.png";
import proxwayResearchImageR from "../../../assets/img/Proxway-research-Image-R.png";
import proxwayInterface01 from "../../../assets/img/Proxway-interface-1.png";
import proxwayInterface02T from "../../../assets/img/Proxway-interface-2.png";
import proxwayInterface02M from "../../../assets/img/Proxway-interface-3.png";
import proxwayInterface02B from "../../../assets/img/Proxway-interface-4.png";
import proxwayInterface03 from "../../../assets/img/Proxway-interface-5.png";
import proxwayInterface03TL from "../../../assets/img/Proxway-interface-6.png";
import proxwayInterface03TR from "../../../assets/img/Proxway-interface-7.png";
import proxwayInterface03BL from "../../../assets/img/Proxway-interface-8.png";
import proxwayInterface03BR from "../../../assets/img/Proxway-interface-9.png";
import proxwayInterface05L from "../../../assets/img/Proxway-interface-10.png";
import proxwayInterface05R from "../../../assets/img/Proxway-interface-11.png";
import proxwayInterface06 from "../../../assets/img/Proxway-interface-12.png";

import './ProxWayWebCase.scss';

export default function ProxWayWebCase() {
    return (
        <>
            <section className="proxway__hero">
                <div className="container proxway__hero-container">
                    <div className="proxway__top-content">
                        <motion.h1 
                            className="proxway__title"
                            initial={{ opacity: 0, x: -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "linear" }}
                        >
                            “ProxWay Web”
                        </motion.h1>
                        <motion.p 
                            className="proxway__uppercase-text"
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "linear", delay: 0.2 }}
                        >
                            Редизайн пользовательского интерфейса системы контроля и&nbsp;управления доступом
                        </motion.p>
                    </div>

                    {/* Информационные строки */}
                    <motion.div 
                        className="proxway__info"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 1, ease: "linear" }}
                    >
                        <div className="proxway__info-item">
                            <span className="proxway__info-label">Период</span>
                            <span className="proxway__info-value">2025-2026</span>
                        </div>
                        <div className="proxway__info-item">
                            <span className="proxway__info-label">Заказчик</span>
                            <span className="proxway__info-value">ГК "Эликс"</span>
                        </div>
                        <div className="proxway__info-item">
                            <span className="proxway__info-label">Сфера</span>
                            <span className="proxway__info-value">Безопасность</span>
                        </div>
                        <div className="proxway__info-item">
                            <span className="proxway__info-label">Роль</span>
                            <span className="proxway__info-value">UX/UI дизайнер</span>
                        </div>
                    </motion.div>

                    {/* ← ОБЛОЖКА КЕЙСА */}
                    <div className="proxway__thumbnail">
                        <motion.img 
                            src={proxwayThumbnail} 
                            alt="Proxway Thumbnail" 
                            className="proxway__thumbnail-img"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ 
                                duration: 0.6, 
                                ease: [0.22, 1, 0.36, 1] 
                            }}
                        />
                    </div>
                </div>
            </section>
            <section className="proxway__problem">
                <div className="container proxway__problem-container">
                    <div className="proxway__problem-content">
                        <motion.h2 
                            className="proxway__problem-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.6, ease: "linear" }}
                        >
                            Проблема
                        </motion.h2>
                        <div className="proxway__problem-wrapper">
                            <motion.div 
                                className="proxway__problem-desc"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <p className="proxway__problem-text">
                                    Интерфейс решал основные задачи системы контроля доступа, но&nbsp;требовал дальнейшей UX-проработки. 
                                </p>
                                <p className="proxway__problem-text">
                                    Пользовательские сценарии были недостаточно отработаны, структура интерфейса не&nbsp;всегда соответствовала логике работы пользователей, а&nbsp;расположение элементов взаимодействия усложняло выполнение повседневных задач.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="proxway__problem-goals"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="proxway__problem-goal-title">
                                    Цели проекта
                                </h3>
                                <p className="proxway__problem-goal-text"> 
                                    Пересмотреть ключевые сценарии и&nbsp;структуру интерфейса, сделать взаимодействие более последовательным и&nbsp;понятным, а&nbsp;работу с&nbsp;системой — удобной для разных ролей пользователей.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="proxway__problem-role"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="proxway__problem-role-title">
                                    Моя роль
                                </h3>
                                <p className="proxway__problem-role-text"> 
                                    Отвечал за UX/UI сервиса. Исследовал существующий интерфейс и&nbsp;конкурентные решения, перерабатывал ключевые пользовательские сценарии и&nbsp;информационную структуру, разрабатывал макеты и&nbsp;развивал дизайн-систему.
                                </p>
                                <p className="proxway__problem-role-text"> 
                                    Создавал интерактивные прототипы и&nbsp;проводил тестирование, после чего передавал решения в&nbsp;frontend-разработку и&nbsp;осуществлял авторский надзор за их реализацией.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="proxway__problem-images">
                        <motion.div 
                            className="proxway__problem-content--03"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
                            transition={{ duration: 0.6, ease: "linear" }}
                        >
                            <img src={proxWayProblemImage01} alt="Старый дизайн 1" className="proxway__problem-image" />
                            <img src={proxWayProblemImage02} alt="Старый дизайн 2" className="proxway__problem-image" />
                            <img src={proxWayProblemImage03} alt="Старый дизайн 3" className="proxway__problem-image" />
                        </motion.div> 
                    </div>
                </div>
            </section>
            <section className="proxway__research">
                <div className="container proxway__research-container">
                    <div className="proxway__research-content">
                        <motion.h2 
                            className="proxway__research-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.6, ease: "linear" }}
                        >
                            Исследование
                        </motion.h2>
                        <div className="proxway__research-wrapper">
                            <motion.div 
                                className="proxway__research-desc"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <p className="proxway__research-text">
                                    Провёл анализ существующего сервиса и&nbsp;ключевых пользовательских сценариев. Изучил структуру, логику взаимодействия и&nbsp;способы выполнения задач.
                                </p>
                                <p className="proxway__research-text">
                                    Исследование показало, что основные сложности были связаны не с&nbsp;функциональностью системы, а&nbsp;со&nbsp;способом взаимодействия с&nbsp;ней.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="proxway__research-summary"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="proxway__research-summary-title">
                                    Ключевые выводы
                                </h3>
                                 <ul className="proxway__research-summary-list">
                                    <li className="proxway__research-summary-item">
                                        Выявлены сложности выполнения ключевых пользовательских сценариев в&nbsp;существующем интерфейсе
                                    </li>
                                    <li className="proxway__research-summary-item">
                                        Определены свыше 7 ключевых сценариев для основных ролей пользователей системы
                                    </li>
                                    <li className="proxway__research-summary-item">
                                        Выявлены проблемы информационной архитектуры, навигации и&nbsp;расположения элементов управления
                                    </li>
                                    <li className="proxway__research-summary-item">
                                        Определены UX-паттерны и&nbsp;лучшие практики на&nbsp;основе анализа конкурентных решений
                                    </li>
                                    <li className="proxway__research-summary-item">
                                        Сформированы требования к&nbsp;упрощению пользовательских сценариев и&nbsp;сокращению количества действий
                                    </li>
                                    <li className="proxway__research-summary-item">
                                        Проведено тестирование интерактивных прототипов и&nbsp;уточнены интерфейсные решения
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                    <div className="proxway__research-images">
                        <motion.div 
                            className="proxway__research-content--02"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
                            transition={{ duration: 0.6, ease: "linear" }}
                        >
                            <img src={proxwayResearchImageL} alt="Старый дизайн" className="proxway__research-image" />
                            <img src={proxwayResearchImageR} alt="Новый дизайн" className="proxway__research-image" />
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="proxway__solution">
                <div className="container proxway__solution-container">
                    <div className="proxway__solution-content">
                        <motion.h2 
                            className="proxway__solution-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.6, ease: "linear" }}
                        >
                            Решение
                        </motion.h2>
                        <div className="proxway__solution-wrapper">
                            <motion.div 
                                className="proxway__solution-desc"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <p className="proxway__solution-text">
                                    В результате исследования был переработан интерфейс системы — от&nbsp;структуры разделов и&nbsp;представления функций до&nbsp;отдельных пользовательских сценариев. 
                                </p>
                                <p className="proxway__solution-text">
                                    Новая концепция учитывает особенности работы разных ролей и&nbsp;помогает быстрее ориентироваться в&nbsp;системе и&nbsp;выполнять основные задачи.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="proxway__solution-result"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="proxway__solution-result-title">
                                    Результат
                                </h3>
                                <p className="proxway__solution-result-text"> 
                                    В рамках редизайна переработал несколько ключевых сценариев, сократив количество действий с&nbsp;5–7 до 3, и&nbsp;сформировал единый набор из 50+ компонентов дизайн-системы. Провёл тестирование прототипов, по результатам которых доработал интерфейсные решения и&nbsp;передал их в&nbsp;frontend-разработку.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    <InterfaceBlock
                        number="01/"
                        title="Интерфейсы"
                        subtitle="Масштаб системы"
                        className="proxway__interface"
                    >
                        <div className="proxway__interface-content">
                            <img src={proxwayInterface01} alt="Масштаб системы" className="proxway__interface-image" />
                        </div>     
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="02/"
                        title="Интерфейсы"
                        subtitle="Комплексное управление"
                        className="proxway__interface"
                    >
                        <div className="proxway__interface-content--03">
                            <img src={proxwayInterface02T} alt="Управление" className="proxway__interface-image" />
                            <img src={proxwayInterface02M} alt="Управление" className="proxway__interface-image" />
                            <img src={proxwayInterface02B} alt="Управление" className="proxway__interface-image" />
                        </div>    
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="03/"
                        title="Интерфейсы"
                        subtitle="Работа с сущностями"
                        className="proxway__interface"
                    >
                        <div className="proxway__interface-content">
                            <img src={proxwayInterface03} alt="Работа с сущностями" className="proxway__interface-image" />
                        </div>     
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="04/"
                        title="Интерфейсы"
                        subtitle="Управление персоналом"
                        className="proxway__interface"
                    >
                        <div className="proxway__interface-content">
                            <img src={proxwayInterface03TL} alt="Управление персоналом" className="proxway__interface-image" />
                            <img src={proxwayInterface03TR} alt="Управление персоналом" className="proxway__interface-image" />
                            <img src={proxwayInterface03BL} alt="Управление персоналом" className="proxway__interface-image" />
                            <img src={proxwayInterface03BR} alt="Управление персоналом" className="proxway__interface-image" />  
                        </div>     
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="05/"
                        title="Интерфейсы"
                        subtitle="Центр пропусков"
                        className="proxway__interface"
                    >
                        <div className="proxway__interface-content">
                            <img src={proxwayInterface05L} alt="Центр пропусков: Персонал" className="proxway__interface-image" />
                            <img src={proxwayInterface05R} alt="Центр пропусков: Посетители" className="proxway__interface-image" />
                        </div> 
                    </InterfaceBlock>
                        
                    <InterfaceBlock
                        number="06/"
                        title="Интерфейсы"
                        subtitle="Система отчётности"
                        className="proxway__interface"
                    >
                        <div className="proxway__interface-content">
                            <img src={proxwayInterface06} alt="Отчёты" className="proxway__interface-image" />
                        </div>    
                    </InterfaceBlock>
                </div>               
            </section>
        </>
    );
}