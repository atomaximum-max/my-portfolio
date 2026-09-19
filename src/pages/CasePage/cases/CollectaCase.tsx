import { collectaFeatures } from '../../../data/collectaFeatures';
import { InterfaceBlock } from '../../../components/InterfaceBlock';
import { motion } from "motion/react";

import collectaThumbnail from '../../../assets/img/Collecta-thumbnail.png';
import collectaProblemImage from "../../../assets/img/Collecta-problem.png";
import collectaLogo from "../../../assets/img/Collecta-table-logo.svg";
import grafanaLogo from "../../../assets/img/Grafana-table-logo.svg";
import signozLogo from "../../../assets/img/SigNoz-table-logo.svg";
import kibanaLogo from "../../../assets/img/Kibana-table-logo.svg";
import splunkLogo from "../../../assets/img/Splunk-table-logo.svg";
import checkIcon from "../../../assets/img/check-icon.svg";
import crossIcon from "../../../assets/img/cross-icon.svg";
import partialIcon from "../../../assets/img/partial-icon.svg";
import collectaInterface01L from "../../../assets/img/Collecta-interface-1.png";
import collectaInterface01R from "../../../assets/img/Collecta-interface-2.png";
import collectaInterface02 from "../../../assets/img/Collecta-interface-3.png";
import collectaInterface03TL from "../../../assets/img/Collecta-interface-4.png";
import collectaInterface03TR from "../../../assets/img/Collecta-interface-5.png";
import collectaInterface03BL from "../../../assets/img/Collecta-interface-6.png";
import collectaInterface03BR from "../../../assets/img/Collecta-interface-7.png";
import collectaInterface04 from "../../../assets/img/Collecta-interface-8.png";
import collectaInterface05 from "../../../assets/img/Collecta-interface-9.png";
import collectaInterface06T from "../../../assets/img/Collecta-interface-12.png";
import collectaInterface06M from "../../../assets/img/Collecta-interface-13.png";
import collectaInterface06B from "../../../assets/img/Collecta-interface-14.png";

import './CollectaCase.scss';

export default function CollectaCase() {
    return (
        <>
            <section className="collecta__hero">
                <div className="container collecta__hero-container">
                    <div className="collecta__top-content">
                        <motion.h1 
                            className="collecta__title"
                            initial={{ opacity: 0, x: -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "linear" }}
                        >
                            “Collecta”
                        </motion.h1>
                        <motion.p 
                            className="collecta__uppercase-text"
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "linear", delay: 0.2 }}
                        >
                            Единая платформа сбора, обработки, анализа данных и&nbsp;автоматизации решений
                        </motion.p>
                    </div>

                    {/* Информационные строки */}
                    <motion.div 
                        className="collecta__info"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 1, ease: "linear" }}
                    >
                        <div className="collecta__info-item">
                            <span className="collecta__info-label">Период</span>
                            <span className="collecta__info-value">2026</span>
                        </div>
                        <div className="collecta__info-item">
                            <span className="collecta__info-label">Заказчик</span>
                            <span className="collecta__info-value">NDA</span>
                        </div>
                        <div className="collecta__info-item">
                            <span className="collecta__info-label">Сфера</span>
                            <span className="collecta__info-value">IT</span>
                        </div>
                        <div className="collecta__info-item">
                            <span className="collecta__info-label">Роль</span>
                            <span className="collecta__info-value">UX/UI дизайнер, UX инженер</span>
                        </div>
                    </motion.div>

                    {/* ← ОБЛОЖКА КЕЙСА */}
                    <div className="collecta__thumbnail">
                        <motion.img 
                            src={collectaThumbnail} 
                            alt="Collecta Logo" 
                            className="collecta__thumbnail-img"
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
            <section className="collecta__problem">
                <div className="container collecta__problem-container">
                    <div className="collecta__problem-content">
                        <motion.h2 
                            className="collecta__problem-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.6, ease: "linear" }}
                        >
                            Проблема
                        </motion.h2>
                        <div className="collecta__problem-wrapper">
                            <motion.div 
                                className="collecta__problem-desc"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <p className="collecta__problem-text">
                                    Сегодня, для решения аналитических задач, компании используют десятки разрозненных систем и&nbsp;инструментов.
                                </p>
                                <p className="collecta__problem-text">
                                    Переключение между системами усложняет рабочие процессы, увеличивает количество ручных операций и замедляет принятие решений.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="collecta__problem-goals"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="collecta__problem-goal-title">
                                    Цели проекта
                                </h3>
                                <p className="collecta__problem-goal-text"> 
                                    Создание единой платформы для аналитики данных способной заменить набор разрозненных инструментов. Спроектировать интерфейсы с&nbsp;акцентом на удобство работы, снижение когнитивной нагрузки и&nbsp;поддержку сложных пользовательских сценариев.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="collecta__problem-role"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="collecta__problem-role-title">
                                    Моя роль
                                </h3>
                                <p className="collecta__problem-role-text"> 
                                    Отвечал за полный цикл UX/UI-проектирования — от исследования предметной области и&nbsp;анализа конкурентов до создания пользовательских сценариев, дизайн-системы и&nbsp;интерактивных прототипов. Основное внимание уделялось проектированию масштабируемых интерфейсов, способных адаптироваться к&nbsp;развитию продукта и&nbsp;потребностям разных ролей пользователей.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="collecta__problem-scheme">
                        <motion.img 
                            src={collectaProblemImage} 
                            alt="Collecta Problem Image" 
                            className="collecta__problem-img"
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
            <section className="collecta__research">
                <div className="container collecta__research-container">
                    <div className="collecta__research-content">
                        <motion.h2 
                            className="collecta__research-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.6, ease: "linear" }}
                        >
                            Исследование
                        </motion.h2>
                        <div className="collecta__research-wrapper">
                            <motion.div 
                                className="collecta__research-desc"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <p className="collecta__research-text">
                                    На этапе исследования была изучена предметная область, проведён анализ конкурентных решений и&nbsp;рабочих процессов пользователей.
                                </p>
                                <p className="collecta__research-text">
                                    Полученные выводы легли в основу архитектуры продукта, пользовательских сценариев и&nbsp;ключевых UX-решений.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="collecta__research-summary"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="collecta__research-summary-title">
                                    Ключевые выводы
                                </h3>
                                 <ul className="collecta__research-summary-list">
                                    <li className="collecta__research-summary-item">
                                        Выявлены сложности работы с&nbsp;разрозненными системами анализа данных
                                    </li>
                                    <li className="collecta__research-summary-item">
                                        Определены ключевые сценарии для ролей аналитика, оператора и&nbsp;администратора
                                    </li>
                                    <li className="collecta__research-summary-item">
                                        Сформированы требования к информационной архитектуре и&nbsp;навигации
                                    </li>
                                    <li className="collecta__research-summary-item">
                                        Определены принципы построения масштабируемой дизайн-системы
                                    </li>
                                    <li className="collecta__research-summary-item">
                                        Выделены UX-паттерны и лучшие практики на основе анализа конкурентных платформ
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                    <div className="collecta__research-table">
                        <div className="research__table-scroll">
                            <table className="research__table">
                                <motion.thead
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0, margin: "0px 0px -50px 0px" }}
                                    transition={{ duration: 0.5, ease: "linear" }}
                                >
                                    <tr>
                                        <th className="research__table-th research__table-th--feature">
                                            <span className="research__table-name">Возможности</span>
                                        </th>
                                        <th className="research__table-th">
                                            <div className="research__table-th-wrapper">
                                                <img src={grafanaLogo} alt="Grafana" className="research__table-logo" />
                                                <span className="research__table-name">Grafana</span>
                                            </div>
                                        </th>
                                        <th className="research__table-th">
                                            <div className="research__table-th-wrapper">
                                                <img src={signozLogo} alt="Signoz" className="research__table-logo" />
                                                <span className="research__table-name">Signoz</span>
                                            </div>
                                        </th>
                                        <th className="research__table-th">
                                            <div className="research__table-th-wrapper">
                                                <img src={kibanaLogo} alt="Kibana" className="research__table-logo" />
                                                <span className="research__table-name">Kibana</span>
                                            </div>
                                        </th>
                                        <th className="research__table-th">
                                            <div className="research__table-th-wrapper">
                                                <img src={splunkLogo} alt="Splunk" className="research__table-logo" />
                                                <span className="research__table-name">Splunk</span>
                                            </div>
                                        </th>
                                        <th className="research__table-th">
                                            <div className="research__table-th-wrapper">
                                                <img src={collectaLogo} alt="Collecta" className="research__table-logo" />
                                                <span className="research__table-name">Collecta</span>
                                            </div>
                                        </th>
                                    </tr>
                                </motion.thead>
                                <tbody>
                                    {collectaFeatures.map((feature, index) => (
                                        <motion.tr 
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
                                            transition={{ 
                                                duration: 0.4, 
                                                ease: "linear", 
                                                delay: index * 0.08 
                                            }}
                                        >
                                            <td className="research__table-td research__table-td--feature">
                                                {feature.name}
                                            </td>
                                            <td className="research__table-td research__table-td--status">
                                                <img src={feature.grafana} alt="Grafana" className="research__table-icon" />
                                            </td>
                                            <td className="research__table-td research__table-td--status">
                                                <img src={feature.signoz} alt="Signoz" className="research__table-icon" />
                                            </td>
                                            <td className="research__table-td research__table-td--status">
                                                <img src={feature.kibana} alt="Kibana" className="research__table-icon" />
                                            </td>
                                            <td className="research__table-td research__table-td--status">
                                                <img src={feature.splunk} alt="Splunk" className="research__table-icon" />
                                            </td>
                                            <td className="research__table-td research__table-td--status">
                                                <img src={feature.collecta} alt="Collecta" className="research__table-icon" />
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <motion.div 
                            className="research__legend"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, ease: "linear", delay: 0.3 }}
                        >
                            <span className="research__legend-item"><img src={crossIcon} alt="Не поддерживается" /> Не поддерживается</span>
                            <span className="research__legend-item"><img src={partialIcon} alt="Частичная поддержка" />Частичная поддержка</span>
                            <span className="research__legend-item"><img src={checkIcon} alt="Полная поддержка" />Полная поддержка</span>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="collecta__solution">
                <div className="container collecta__solution-container">
                    <div className="collecta__solution-content">
                        <motion.h2 
                            className="collecta__solution-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.6, ease: "linear" }}
                        >
                            Решение
                        </motion.h2>
                        <div className="collecta__solution-wrapper">
                            <motion.div 
                                className="collecta__solution-desc"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <p className="collecta__solution-text">
                                    На основе результатов исследования была спроектирована единая система интерфейсов, объединяющая сбор, обработку и&nbsp;анализ данных в&nbsp;рамках одного продукта.
                                </p>
                                <p className="collecta__solution-text">
                                    Особое внимание уделялось удобству работы с&nbsp;большими объёмами данных и&nbsp;поддержке различных пользовательских ролей.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="collecta__solution-result"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="collecta__solution-result-title">
                                    Результат
                                </h3>
                                <p className="collecta__solution-result-text"> 
                                    В процессе работы на проекте реализовал масштабируемую дизайн-систему (30+ компонентов), спроектировал пользовательские сценарии для трёх ролей и&nbsp;разработал интерфейсы ключевых модулей и&nbsp;состояний платформы, более 40 макетов. Подготовленные материалы обеспечили основу для дальнейшей frontend-разработки и&nbsp;развития продукта.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    <InterfaceBlock
                        number="01/"
                        title="Интерфейсы"
                        subtitle="Эффективный старт"
                        className="interface__block"
                    >
                        <div className="interface__block-content">
                            <img src={collectaInterface01L} alt="Начать работу" className="interface__block-image" />
                            <img src={collectaInterface01R} alt="Быстрый старт" className="interface__block-image" />
                        </div>     
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="02/"
                        title="Интерфейсы"
                        subtitle="Информативный мониторинг"
                        className="interface__block"
                    >
                        <div className="interface__block-content">
                            <img src={collectaInterface02} alt="Начать работу" className="interface__block-image" />
                        </div>     
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="03/"
                        title="Интерфейсы"
                        subtitle="Автоматизация решений"
                        className="interface__block"
                    >
                        <div className="interface__block-content">
                            <img src={collectaInterface03TL} alt="Начать работу" className="interface__block-image" />
                            <img src={collectaInterface03TR} alt="Начать работу" className="interface__block-image" />
                            <img src={collectaInterface03BL} alt="Начать работу" className="interface__block-image" />
                            <img src={collectaInterface03BR} alt="Начать работу" className="interface__block-image" />
                        </div>     
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="04/"
                        title="Интерфейсы"
                        subtitle="Глубокая аналитика"
                        className="interface__block"
                    >
                        <div className="interface__block-content">
                            <img src={collectaInterface04} alt="Начать работу" className="interface__block-image" />
                        </div>     
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="05/"
                        title="Интерфейсы"
                        subtitle="Интеллектуальный помощник"
                        className="interface__block"
                    >
                        <div className="interface__block-content">
                            <img src={collectaInterface05} alt="Начать работу" className="interface__block-image" />
                        </div> 
                    </InterfaceBlock>
                        
                    <InterfaceBlock
                        number="06/"
                        title="Интерфейсы"
                        subtitle="Гибкая настройка"
                        className="interface__block"
                    >
                        <div className="interface__block-content--03">
                            <img src={collectaInterface06T} alt="Начать работу" className="interface__block-image" />
                            <img src={collectaInterface06M} alt="Начать работу" className="interface__block-image" />
                            <img src={collectaInterface06B} alt="Начать работу" className="interface__block-image" />
                        </div>     
                    </InterfaceBlock>
                </div>               
            </section>
        </>
    );
}