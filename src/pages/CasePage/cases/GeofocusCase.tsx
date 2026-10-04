import { InterfaceBlock } from '../../../components/InterfaceBlock';
import { motion } from "motion/react";

import geofocusThumbnail from '../../../assets/img/Geofocus-thumbnail.png';
import geofocusProblemImage from "../../../assets/img/Geofocus-problem-Image.png";
import geofocusResearchImage from "../../../assets/img/Geofocus-research-Image.png";
import geofocusInterface01 from "../../../assets/img/Geofocus-interface-1.png";
import geofocusInterface02 from "../../../assets/img/Geofocus-interface-2.png";
import geofocusInterface03 from "../../../assets/img/Geofocus-interface-3.png";
import geofocusInterface04 from "../../../assets/img/Geofocus-interface-4.png";
import geofocusInterface05 from "../../../assets/img/Geofocus-interface-5.png";
import geofocusInterface06 from "../../../assets/img/Geofocus-interface-6.png";

import './GeofocusCase.scss';

export default function GeofocusCase() {
    return (
        <>
            <section className="geofocus__hero">
                <div className="container geofocus__hero-container">
                    <div className="geofocus__top-content">
                        <motion.h1 
                            className="geofocus__title"
                            initial={{ opacity: 0, x: -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "linear" }}
                        >
                            “Geofocus”
                        </motion.h1>
                        <motion.p 
                            className="geofocus__uppercase-text"
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "linear", delay: 0.2 }}
                        >
                            Система мониторинга местоположения и&nbsp;анализа данных в&nbsp;реальном времени
                        </motion.p>
                    </div>

                    {/* Информационные строки */}
                    <motion.div 
                        className="geofocus__info"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 1, ease: "linear" }}
                    >
                        <div className="geofocus__info-item">
                            <span className="geofocus__info-label">Период</span>
                            <span className="geofocus__info-value">2022-2024</span>
                        </div>
                        <div className="geofocus__info-item">
                            <span className="geofocus__info-label">Заказчик</span>
                            <span className="geofocus__info-value">АО "Ситроникс"</span>
                        </div>
                        <div className="geofocus__info-item">
                            <span className="geofocus__info-label">Сфера</span>
                            <span className="geofocus__info-value">Промышленность</span>
                        </div>
                        <div className="geofocus__info-item">
                            <span className="geofocus__info-label">Роль</span>
                            <span className="geofocus__info-value">Lead UX/UI дизайнер</span>
                        </div>
                    </motion.div>

                    {/* ← ОБЛОЖКА КЕЙСА */}
                    <div className="geofocus__thumbnail">
                        <motion.img 
                            src={geofocusThumbnail} 
                            alt="Geofocus Thumbnail" 
                            className="geofocus__thumbnail-img"
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
            <section className="geofocus__problem">
                <div className="container geofocus__problem-container">
                    <div className="geofocus__problem-content">
                        <motion.h2 
                            className="geofocus__problem-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.6, ease: "linear" }}
                        >
                            Проблема
                        </motion.h2>
                        <div className="geofocus__problem-wrapper">
                            <motion.div 
                                className="geofocus__problem-desc"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <p className="geofocus__problem-text">
                                    Для различных задач мониторинга на&nbsp;предприятиях требовалось единое решение, способное работать с&nbsp;данными о&nbsp;местоположении как внутри помещений, так и&nbsp;на&nbsp;открытой территории. 
                                </p>
                                <p className="geofocus__problem-text">
                                    При этом система должна поддерживать разные сценарии использования — от&nbsp;оперативного контроля объектов до&nbsp;анализа данных и&nbsp;реагирования на&nbsp;события.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="geofocus__problem-goals"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="geofocus__problem-goal-title">
                                    Цели проекта
                                </h3>
                                <p className="geofocus__problem-goal-text"> 
                                    Создать понятный интерфейс платформы, объединяющий мониторинг местоположения, работу с&nbsp;геоданными и&nbsp;аналитикой в&nbsp;рамках единой системы. Предусмотреть различные сценарии контроля объектов и&nbsp;сотрудников, отображения событий и&nbsp;оперативного реагирования.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="geofocus__problem-role"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="geofocus__problem-role-title">
                                    Моя роль
                                </h3>
                                <p className="geofocus__problem-role-text"> 
                                    В роли Lead UX/UI дизайнера формировал UX-подход проекта: выстраивал информационную архитектуру, прорабатывал пользовательские сценарии и&nbsp;определял принципы взаимодействия с&nbsp;системой.
                                </p>
                                <p className="geofocus__problem-role-text"> 
                                    Координировал работу дизайнеров, проводил дизайн-ревью и&nbsp;участвовал в&nbsp;развитии дизайн-системы. Контролировал целостность и&nbsp;качество интерфейсных решений на&nbsp;всех этапах — от концепции и&nbsp;прототипирования до&nbsp;подготовки макетов и&nbsp;передачи в&nbsp;разработку.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="geofocus__problem-images">
                        <motion.img 
                            src={geofocusProblemImage} 
                            alt="Geofocus Problem Image" 
                            className="geofocus__problem-img"
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
            <section className="geofocus__research">
                <div className="container geofocus__research-container">
                    <div className="geofocus__research-content">
                        <motion.h2 
                            className="geofocus__research-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.6, ease: "linear" }}
                        >
                            Исследование
                        </motion.h2>
                        <div className="geofocus__research-wrapper">
                            <motion.div 
                                className="geofocus__research-desc"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <p className="geofocus__research-text">
                                    Изучал основные сценарии применения платформы и&nbsp;требования к&nbsp;работе с&nbsp;данными о&nbsp;местоположении. Анализировал сценарии мониторинга и&nbsp;реагирования на&nbsp;события.
                                </p>
                                <p className="geofocus__research-text">
                                    Исследовал аналогичный сервис для изучения существующих подходов к&nbsp;отображению объектов, работе с&nbsp;картой и&nbsp;представлению информации о&nbsp;местоположении.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="geofocus__research-summary"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="geofocus__research-summary-title">
                                    Ключевые выводы
                                </h3>
                                 <ul className="geofocus__research-summary-list">
                                    <li className="geofocus__research-summary-item">
                                        Платформа должна работать с&nbsp;разными типами объектов: людьми, транспортом, техникой и&nbsp;инфраструктурой
                                    </li>
                                    <li className="geofocus__research-summary-item">
                                        Необходимо одинаково удобно работать с&nbsp;данными для indoor- и&nbsp;outdoor-сценариев
                                    </li>
                                    <li className="geofocus__research-summary-item">
                                        Большой объём гео данных требует наглядного представления текущего положения, перемещений, состояний и&nbsp;истории объектов
                                    </li>
                                    <li className="geofocus__research-summary-item">
                                        Мониторинг должен быть связан с&nbsp;аналитикой и&nbsp;событиями, чтобы пользователь мог не&nbsp;только наблюдать за&nbsp;объектами, но&nbsp;и&nbsp;анализировать происходящее
                                    </li>
                                    <li className="geofocus__research-summary-item">
                                        Разные сценарии использования требуют гибкого отображения данных и&nbsp;поддержки действий в&nbsp;зависимости от&nbsp;задачи пользователя
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                    <div className="geofocus__research-images">
                        <motion.img 
                            src={geofocusResearchImage} 
                            alt="Geofocus Research Image" 
                            className="geofocus__research-img"
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
            <section className="geofocus__solution">
                <div className="container geofocus__solution-container">
                    <div className="geofocus__solution-content">
                        <motion.h2 
                            className="geofocus__solution-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.6, ease: "linear" }}
                        >
                            Решение
                        </motion.h2>
                        <div className="geofocus__solution-wrapper">
                            <motion.div 
                                className="geofocus__solution-desc"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <p className="geofocus__solution-text">
                                    Реализован единый интерфейс платформы, объединяющий мониторинг объектов, работу с&nbsp;гео данными и&nbsp;аналитикой в&nbsp;рамках одного рабочего пространства.  
                                </p>
                                <p className="geofocus__solution-text">
                                    Выстроено взаимодействие с&nbsp;картой, объектами и&nbsp;их состояниями, предусмотрено отображение событий и&nbsp;сценариев реагирования для различных задач мониторинга.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="geofocus__solution-result"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="geofocus__solution-result-title">
                                    Результат
                                </h3>
                                <p className="geofocus__solution-result-text"> 
                                    Сформировал UX-концепцию и&nbsp;интерфейсную систему, проработал ключевые пользовательские сценарии и&nbsp;подготовил решения для различных режимов работы платформы. Интерфейс поддерживает прикладные сценарии — от&nbsp;контроля транспорта, техники и&nbsp;сотрудников до&nbsp;геозон, NFC-взаимодействия, аналитики и&nbsp;превентивных сценариев безопасности.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    <InterfaceBlock
                        number="01/"
                        title="Интерфейсы"
                        subtitle="Мониторинг"
                        className="geofocus__interface"
                    >
                        <div className="geofocus__interface-content">
                            <img src={geofocusInterface01} alt="Мониторинг" className="geofocus__interface-image" />
                        </div>     
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="02/"
                        title="Интерфейсы"
                        subtitle="Аналитика"
                        className="geofocus__interface"
                    >
                        <div className="geofocus__interface-content">
                            <img src={geofocusInterface02} alt="Аналитика" className="geofocus__interface-image" />
                        </div>    
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="03/"
                        title="Интерфейсы"
                        subtitle="Журнал событий"
                        className="geofocus__interface"
                    >
                        <div className="geofocus__interface-content">
                            <img src={geofocusInterface03} alt="Журнал событий" className="geofocus__interface-image" />
                        </div>     
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="04/"
                        title="Интерфейсы"
                        subtitle="Треки сотрудников"
                        className="geofocus__interface"
                    >
                        <div className="geofocus__interface-content">
                            <img src={geofocusInterface04} alt="Треки сотрудников" className="geofocus__interface-image" />  
                        </div>     
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="05/"
                        title="Интерфейсы"
                        subtitle="Тепловые карты"
                        className="geofocus__interface"
                    >
                        <div className="geofocus__interface-content">
                            <img src={geofocusInterface05} alt="Тепловые карты" className="geofocus__interface-image" />
                        </div> 
                    </InterfaceBlock>
                        
                    <InterfaceBlock
                        number="06/"
                        title="Интерфейсы"
                        subtitle="Управление"
                        className="geofocus__interface"
                    >
                        <div className="geofocus__interface-content">
                            <img src={geofocusInterface06} alt="Управление" className="geofocus__interface-image" />
                        </div>    
                    </InterfaceBlock>
                </div>               
            </section>
        </>
    );
}