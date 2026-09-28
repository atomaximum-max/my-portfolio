import { InterfaceBlock } from '../../../components/InterfaceBlock';
import { motion } from "motion/react";

import velobikeThumbnail from '../../../assets/img/Velobike-thumbnail.png';
import velobikeProblemImage from "../../../assets/img/Velobike-problem-Image.png";
import velobikeResearchImage from "../../../assets/img/Velobike-research-Image.png";
import velobikeInterface01 from "../../../assets/img/Velobike-interface-1.png";
import velobikeInterface02 from "../../../assets/img/Velobike-interface-2.png";
import velobikeInterface03 from "../../../assets/img/Velobike-interface-3.png";
import velobikeInterface04 from "../../../assets/img/Velobike-interface-4.png";
import velobikeInterface05 from "../../../assets/img/Velobike-interface-5.png";
import velobikeInterface06 from "../../../assets/img/Velobike-interface-6.png";

import './VelobikeCase.scss';

export default function VelobikeCase() {
    return (
        <>
            <section className="velobike__hero">
                <div className="container velobike__hero-container">
                    <div className="velobike__top-content">
                        <motion.h1 
                            className="velobike__title"
                            initial={{ opacity: 0, x: -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "linear" }}
                        >
                            “Велобайк”
                        </motion.h1>
                        <motion.p 
                            className="velobike__uppercase-text"
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "linear", delay: 0.2 }}
                        >
                            IoT-платформа управления городским прокатом мобильного транспорта
                        </motion.p>
                    </div>

                    {/* Информационные строки */}
                    <motion.div 
                        className="velobike__info"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 1, ease: "linear" }}
                    >
                        <div className="velobike__info-item">
                            <span className="velobike__info-label">Период</span>
                            <span className="velobike__info-value">2024-2025</span>
                        </div>
                        <div className="velobike__info-item">
                            <span className="velobike__info-label">Заказчик</span>
                            <span className="velobike__info-value">АО "Ситибайк"</span>
                        </div>
                        <div className="velobike__info-item">
                            <span className="velobike__info-label">Сфера</span>
                            <span className="velobike__info-value">Транспорт</span>
                        </div>
                        <div className="velobike__info-item">
                            <span className="velobike__info-label">Роль</span>
                            <span className="velobike__info-value">UX/UI дизайнер</span>
                        </div>
                    </motion.div>

                    {/* ← ОБЛОЖКА КЕЙСА */}
                    <div className="velobike__thumbnail">
                        <motion.img 
                            src={velobikeThumbnail} 
                            alt="velobike Thumbnail" 
                            className="velobike__thumbnail-img"
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
            <section className="velobike__problem">
                <div className="container velobike__problem-container">
                    <div className="velobike__problem-content">
                        <motion.h2 
                            className="velobike__problem-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.6, ease: "linear" }}
                        >
                            Проблема
                        </motion.h2>
                        <div className="velobike__problem-wrapper">
                            <motion.div 
                                className="velobike__problem-desc"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <p className="velobike__problem-text">
                                    По мере развития сервиса у&nbsp;заказчика появлялись новые задачи и&nbsp;требования, связанные с&nbsp;изменением и&nbsp;расширением рабочих процессов. 
                                </p>
                                <p className="velobike__problem-text">
                                    Существующую систему необходимо было регулярно дополнять новым функционалом, сохраняя целостность продукта и&nbsp;понятность интерфейсов для разных категорий сотрудников.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="velobike__problem-goals"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="velobike__problem-goal-title">
                                    Цели проекта
                                </h3>
                                <p className="velobike__problem-goal-text"> 
                                    Переводить новые бизнес-требования в&nbsp;понятные пользовательские сценарии и&nbsp;интерфейсные решения, которые органично вписываются в&nbsp;существующую систему и&nbsp;позволяют сотрудникам эффективно решать рабочие задачи.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="velobike__problem-role"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="velobike__problem-role-title">
                                    Моя роль
                                </h3>
                                <p className="velobike__problem-role-text"> 
                                    Получал и&nbsp;анализировал требования от аналитиков и&nbsp;продактов, прорабатывал пользовательские сценарии, создавал прототипы и&nbsp;проектировал интерфейсы в&nbsp;фрамках готовой дизайн-системы Ant.design.
                                </p>
                                <p className="velobike__problem-role-text"> 
                                    Проводил тестирование решений, дорабатывал интерфейсы по&nbsp;результатам и&nbsp;взаимодействовал с&nbsp;frontend-разработчиками на&nbsp;этапе реализации.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="velobike__problem-scheme">
                        <motion.img 
                            src={velobikeProblemImage} 
                            alt="Velobike Problem Scheme" 
                            className="velobike__problem-img"
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
            <section className="velobike__research">
                <div className="container velobike__research-container">
                    <div className="velobike__research-content">
                        <motion.h2 
                            className="velobike__research-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.6, ease: "linear" }}
                        >
                            Исследование
                        </motion.h2>
                        <div className="velobike__research-wrapper">
                            <motion.div 
                                className="velobike__research-desc"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <p className="velobike__research-text">
                                    Анализировал поступающие требования и&nbsp;определял, как реализовать их в&nbsp;рамках существующей системы.
                                </p>
                                <p className="velobike__research-text">
                                    Прорабатывал пользовательские сценарии, определял ключевые точки взаимодействия и&nbsp;проверял решение на&nbsp;соответствие реальным рабочим процессам сотрудников.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="velobike__research-summary"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="velobike__research-summary-title">
                                    Ключевые выводы
                                </h3>
                                 <ul className="velobike__research-summary-list">
                                    <li className="velobike__research-summary-item">
                                        Новые функции должны учитывать существующую структуру и&nbsp;логику системы
                                    </li>
                                    <li className="velobike__research-summary-item">
                                        Пользовательские сценарии необходимо выстраивать вокруг конкретных рабочих задач сотрудников
                                    </li>
                                    <li className="velobike__research-summary-item">
                                        Проектирование интерфейсов необходимо осуществлять в&nbsp;рамках существующей дизайн-системы Ant.design
                                    </li>
                                    <li className="velobike__research-summary-item">
                                        Ключевые решения важно проверять и&nbsp;согласовывать с&nbsp;рабочей группой до&nbsp;передачи в&nbsp;разработку
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                    <div className="velobike__research-images">
                        <motion.div 
                            className="velobike__research-content--01"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
                            transition={{ duration: 0.6, ease: "linear" }}
                        >
                            <img src={velobikeResearchImage} alt="Дизайн проекта" className="velobike__research-image" />
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="velobike__solution">
                <div className="container velobike__solution-container">
                    <div className="velobike__solution-content">
                        <motion.h2 
                            className="velobike__solution-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.6, ease: "linear" }}
                        >
                            Решение
                        </motion.h2>
                        <div className="velobike__solution-wrapper">
                            <motion.div 
                                className="velobike__solution-desc"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <p className="velobike__solution-text">
                                    В рамках детализации каждого сценария использовал итеративный подход, от user flow и&nbsp;прототипа до&nbsp;состояний, ошибок и&nbsp;финализации интерфейса. 
                                </p>
                                <p className="velobike__solution-text">
                                    Проверял решения на&nbsp;прототипах, учитывал обратную связь и&nbsp;адаптировал их под существующую логику продукта.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="velobike__solution-result"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="velobike__solution-result-title">
                                    Результат
                                </h3>
                                <p className="velobike__solution-result-text"> 
                                    Спроектировал ряд ключевых разделов системы: тарифы, покупки, промоакции, карточку клиента, страховки, платежи, штрафы и&nbsp;журнал аренд. Для новых сценариев подготовил основные экраны, состояния, всплывающие окна и&nbsp;необходимые UI-элементы, после чего передал решения в&nbsp;frontend-разработку.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    <InterfaceBlock
                        number="01/"
                        title="Интерфейсы"
                        subtitle="Карточка клиента"
                        className="interface__block"
                    >
                        <div className="interface__block-content">
                            <img src={velobikeInterface01} alt="Карточка клиента" className="interface__block-image" />
                        </div>     
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="02/"
                        title="Интерфейсы"
                        subtitle="Покупки"
                        className="interface__block"
                    >
                        <div className="interface__block-content">
                            <img src={velobikeInterface02} alt="Карточка покупки" className="interface__block-image" />
                        </div>    
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="03/"
                        title="Интерфейсы"
                        subtitle="Штрафы"
                        className="interface__block"
                    >
                        <div className="interface__block-content">
                            <img src={velobikeInterface03} alt="Штрафы" className="interface__block-image" />
                        </div>     
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="04/"
                        title="Интерфейсы"
                        subtitle="Страховой полис"
                        className="interface__block"
                    >
                        <div className="interface__block-content">
                            <img src={velobikeInterface04} alt="Страховой полис" className="interface__block-image" />  
                        </div>     
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="05/"
                        title="Интерфейсы"
                        subtitle="Журнал аренд"
                        className="interface__block"
                    >
                        <div className="interface__block-content">
                            <img src={velobikeInterface05} alt="Журнал аренд" className="interface__block-image" />
                        </div> 
                    </InterfaceBlock>
                        
                    <InterfaceBlock
                        number="06/"
                        title="Интерфейсы"
                        subtitle="Промоакции"
                        className="interface__block"
                    >
                        <div className="interface__block-content">
                            <img src={velobikeInterface06} alt="Промоакции" className="interface__block-image" />
                        </div>    
                    </InterfaceBlock>
                </div>               
            </section>
        </>
    );
}