import { InterfaceBlock } from '../../../components/InterfaceBlock';
import { motion } from "motion/react";

import transneftThumbnail from '../../../assets/img/Transneft-thumbnail.png';
import transneftProblemImage from "../../../assets/img/Transneft-problem-Image.png";
import transneftResearchImage01 from "../../../assets/img/Transneft-research-Image-1.png";
import transneftResearchImage02 from "../../../assets/img/Transneft-research-Image-2.png";
import transneftResearchImage03 from "../../../assets/img/Transneft-research-Image-3.png";
import transneftInterface01TL from "../../../assets/img/Transneft-interface-1.png";
import transneftInterface01TR from "../../../assets/img/Transneft-interface-2.png";
import transneftInterface01BL from "../../../assets/img/Transneft-interface-3.png";
import transneftInterface01BR from "../../../assets/img/Transneft-interface-4.png";
import transneftInterface02 from "../../../assets/img/Transneft-interface-5.png";
import transneftInterface03 from "../../../assets/img/Transneft-interface-6.png";
import transneftInterface04 from "../../../assets/img/Transneft-interface-7.png";
import transneftInterface05 from "../../../assets/img/Transneft-interface-8.png";
import transneftInterface06L from "../../../assets/img/Transneft-interface-9.png";
import transneftInterface06R from "../../../assets/img/Transneft-interface-10.png";

import './TransneftCase.scss';

export default function TransneftCase() {
    return (
        <>
            <section className="transneft__hero">
                <div className="container transneft__hero-container">
                    <div className="transneft__top-content">
                        <motion.h1 
                            className="transneft__title"
                            initial={{ opacity: 0, x: -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "linear" }}
                        >
                            КИС ЛКК
                        </motion.h1>
                        <motion.p 
                            className="transneft__uppercase-text"
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "linear", delay: 0.2 }}
                        >
                            Корпоративная информационная система личного кабинета контрагента 
                        </motion.p>
                    </div>

                    {/* Информационные строки */}
                    <motion.div 
                        className="transneft__info"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 1, ease: "linear" }}
                    >
                        <div className="transneft__info-item">
                            <span className="transneft__info-label">Период</span>
                            <span className="transneft__info-value">2022-2024</span>
                        </div>
                        <div className="transneft__info-item">
                            <span className="transneft__info-label">Заказчик</span>
                            <span className="transneft__info-value">ПАО "Транснефть"</span>
                        </div>
                        <div className="transneft__info-item">
                            <span className="transneft__info-label">Сфера</span>
                            <span className="transneft__info-value">Нефтедобывающая</span>
                        </div>
                        <div className="transneft__info-item">
                            <span className="transneft__info-label">Роль</span>
                            <span className="transneft__info-value">UX/UI дизайнер</span>
                        </div>
                    </motion.div>

                    {/* ← ОБЛОЖКА КЕЙСА */}
                    <div className="transneft__thumbnail">
                        <motion.img 
                            src={transneftThumbnail} 
                            alt="Transneft Thumbnail" 
                            className="transneft__thumbnail-img"
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
            <section className="transneft__problem">
                <div className="container transneft__problem-container">
                    <div className="transneft__problem-content">
                        <motion.h2 
                            className="transneft__problem-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.6, ease: "linear" }}
                        >
                            Проблема
                        </motion.h2>
                        <div className="transneft__problem-wrapper">
                            <motion.div 
                                className="transneft__problem-desc"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <p className="transneft__problem-text">
                                    Взаимодействие ПАО «Транснефть» с&nbsp;контрагентами включало большое количество участников, ролей и&nbsp;рабочих процессов. 
                                </p>
                                <p className="transneft__problem-text">
                                    Для разных категорий пользователей требовался единый цифровой инструмент, который учитывал бы специфику их задач и&nbsp;обеспечивал понятное взаимодействие с&nbsp;необходимой информацией и&nbsp;функциями.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="transneft__problem-goals"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="transneft__problem-goal-title">
                                    Цели проекта
                                </h3>
                                <p className="transneft__problem-goal-text"> 
                                    Спроектировать понятный и&nbsp;масштабируемый интерфейс личного кабинета, адаптированный под разные роли и&nbsp;пользовательские сценарии. Выстроить навигацию, структуру информации и&nbsp;рабочие процессы так, чтобы пользователи могли эффективно выполнять свои задачи в&nbsp;рамках единой системы.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="transneft__problem-role"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="transneft__problem-role-title">
                                    Моя роль
                                </h3>
                                <p className="transneft__problem-role-text"> 
                                    Работал над проектом на&nbsp;всём этапе UX/UI-дизайна: от анализа требований и&nbsp;проработки пользовательских сценариев до&nbsp;проектирования интерфейсов и&nbsp;подготовки решений к&nbsp;разработке.
                                </p>
                                <p className="transneft__problem-role-text"> 
                                    Начинал работу на&nbsp;проекте, как UX/UI дизайнер, впоследствии стал Lead UX/UI Designer. Отвечал за&nbsp;UX-проработку, информационную архитектуру, User Flow, прототипирование, UI-дизайн и&nbsp;развитие интерфейсов системы.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="transneft__problem-image">
                        <motion.img 
                            src={transneftProblemImage} 
                            alt="Transneft Problem Image" 
                            className="transneft__problem-img"
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
            <section className="transneft__research">
                <div className="container transneft__research-container">
                    <div className="transneft__research-content">
                        <motion.h2 
                            className="transneft__research-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.6, ease: "linear" }}
                        >
                            Исследование
                        </motion.h2>
                        <div className="transneft__research-wrapper">
                            <motion.div 
                                className="transneft__research-desc"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <p className="transneft__research-text">
                                    Анализировал требования к&nbsp;системе и&nbsp;особенности работы разных категорий пользователей, совместно с&nbsp;отделом аналитики, тестировщиками и&nbsp;другими рабочими группами.
                                </p>
                                <p className="transneft__research-text">
                                    На основе полученной информации прорабатывал пользовательские сценарии, структуру интерфейса и&nbsp;проверял решения на&nbsp;разных этапах проектирования.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="transneft__research-summary"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="transneft__research-summary-title">
                                    Ключевые выводы
                                </h3>
                                 <ul className="transneft__research-summary-list">
                                    <li className="transneft__research-summary-item">
                                        Интерфейс должен учитывать различия между ролями и&nbsp;доступными пользователю функциями
                                    </li>
                                    <li className="transneft__research-summary-item">
                                        Работа с&nbsp;документами должна быть выстроена непосредственно вокруг бизнес-процессов
                                    </li>
                                    <li className="transneft__research-summary-item">
                                        Пользователю необходимо понимать текущий статус процесса, его историю и&nbsp;дальнейшие этапы прохождения
                                    </li>
                                    <li className="transneft__research-summary-item">
                                        Сервис должен поддерживать последовательное обогащение необходимой информацией на&nbsp;разных этапах процесса
                                    </li>
                                    <li className="transneft__research-summary-item">
                                        Интерфейс должен обеспечивать понятное прохождение документов через все этапы — от создания и&nbsp;обработки до&nbsp;согласования и&nbsp;завершения
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                    <div className="transneft__research-images">
                        <motion.div 
                            className="transneft__research-content--03"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
                            transition={{ duration: 0.6, ease: "linear" }}
                        >
                            <img src={transneftResearchImage01} alt="Исследование 1" className="transneft__research-image" />
                            <img src={transneftResearchImage02} alt="Исследование 2" className="transneft__research-image" />
                            <img src={transneftResearchImage03} alt="Исследование 3" className="transneft__research-image" />
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="transneft__solution">
                <div className="container transneft__solution-container">
                    <div className="transneft__solution-content">
                        <motion.h2 
                            className="transneft__solution-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.6, ease: "linear" }}
                        >
                            Решение
                        </motion.h2>
                        <div className="transneft__solution-wrapper">
                            <motion.div 
                                className="transneft__solution-desc"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <p className="transneft__solution-text">
                                    Реализован Личный кабинет контрагента как единое пространство для прохождения заявок и&nbsp;работы с&nbsp;документами на&nbsp;всех этапах бизнес-процессов — от подачи и&nbsp;согласования до&nbsp;контроля исполнения и&nbsp;завершения. 
                                </p>
                                <p className="transneft__solution-text">
                                    Проработаны пользовательские пути, ролевая и&nbsp;статусная модели, а&nbsp;также сценарии работы с&nbsp;более чем 100 типами документов, включая их состояния, обогащение и&nbsp;взаимодействие между участниками процесса.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="transneft__solution-result"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="transneft__solution-result-title">
                                    Результат
                                </h3>
                                <p className="transneft__solution-result-text"> 
                                    Спроектировал более 150 экранов и&nbsp;подготовил свыше 300 макетов, создал дизайн-систему из 100+ компонентов и&nbsp;оцифровал более 120 типов документов. Передал решения в&nbsp;разработку и&nbsp;осуществлял авторский надзор. Система успешно прошла приёмо-сдаточные испытания и&nbsp;была введена в&nbsp;эксплуатацию.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    <InterfaceBlock
                        number="01/"
                        title="Интерфейсы"
                        subtitle="Обзор системы"
                        className="interface__block"
                    >
                        <div className="interface__block-content">
                            <img src={transneftInterface01TL} alt="Обзор системы" className="interface__block-image" />
                            <img src={transneftInterface01TR} alt="Обзор системы" className="interface__block-image" />
                            <img src={transneftInterface01BL} alt="Обзор системы" className="interface__block-image" />
                            <img src={transneftInterface01BR} alt="Обзор системы" className="interface__block-image" />  
                        </div>     
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="02/"
                        title="Интерфейсы"
                        subtitle="Карточка документа"
                        className="interface__block"
                    >
                        <div className="interface__block-content">
                            <img src={transneftInterface02} alt="Карточка документа" className="interface__block-image" />
                        </div>    
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="03/"
                        title="Интерфейсы"
                        subtitle="Раздел “Документы”"
                        className="interface__block"
                    >
                        <div className="interface__block-content">
                            <img src={transneftInterface03} alt="Раздел “Документы”" className="interface__block-image" />
                        </div>     
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="04/"
                        title="Интерфейсы"
                        subtitle="Настройка вида"
                        className="interface__block"
                    >
                        <div className="interface__block-content">
                            <img src={transneftInterface04} alt="Настройка вида" className="interface__block-image" />  
                        </div>     
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="05/"
                        title="Интерфейсы"
                        subtitle="Фильтрация"
                        className="interface__block"
                    >
                        <div className="interface__block-content">
                            <img src={transneftInterface05} alt="Фильтрация" className="interface__block-image" />
                        </div> 
                    </InterfaceBlock>
                        
                    <InterfaceBlock
                        number="06/"
                        title="Интерфейсы"
                        subtitle="Система отчётности"
                        className="interface__block"
                    >
                        <div className="interface__block-content">
                            <img src={transneftInterface06L} alt="Конструктор отчётов" className="interface__block-image" />
                            <img src={transneftInterface06R} alt="Отчёт" className="interface__block-image" />
                        </div>    
                    </InterfaceBlock>
                </div>               
            </section>
        </>
    );
}