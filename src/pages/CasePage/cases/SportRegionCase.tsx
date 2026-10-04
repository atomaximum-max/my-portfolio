import { InterfaceBlock } from '../../../components/InterfaceBlock';
import { motion } from "motion/react";

import sportRegionThumbnail from '../../../assets/img/Sport-region-thumbnail.png';
import sportRegionProblemImage from "../../../assets/img/Sport-region-problem-Image.png";
import sportRegionResearchImage from "../../../assets/img/Sport-region-research-Image.png";
import sportRegionInterface01TL from "../../../assets/img/Sport-region-interface-1.png";
import sportRegionInterface01TR from "../../../assets/img/Sport-region-interface-2.png";
import sportRegionInterface01BL from "../../../assets/img/Sport-region-interface-3.png";
import sportRegionInterface01BR from "../../../assets/img/Sport-region-interface-4.png";
import sportRegionInterface02L from "../../../assets/img/Sport-region-interface-5.png";
import sportRegionInterface02R from "../../../assets/img/Sport-region-interface-6.png";
import sportRegionInterface03 from "../../../assets/img/Sport-region-interface-7.png";
import sportRegionInterface04 from "../../../assets/img/Sport-region-interface-8.png";
import sportRegionInterface05TL from "../../../assets/img/Sport-region-interface-9.png";
import sportRegionInterface05TR from "../../../assets/img/Sport-region-interface-10.png";
import sportRegionInterface05BL from "../../../assets/img/Sport-region-interface-11.png";
import sportRegionInterface05BR from "../../../assets/img/Sport-region-interface-12.png";
import sportRegionInterface06T from "../../../assets/img/Sport-region-interface-13.png";
import sportRegionInterface06M from "../../../assets/img/Sport-region-interface-14.png";
import sportRegionInterface06B from "../../../assets/img/Sport-region-interface-15.png"; 

import './SportRegionCase.scss';

export default function SportRegionCase() {
    return (
        <>
            <section className="sportregion__hero">
                <div className="container sportregion__hero-container">
                    <div className="sportregion__top-content">
                        <motion.h1 
                            className="sportregion__title"
                            initial={{ opacity: 0, x: -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "linear" }}
                        >
                            “Sport-region”
                        </motion.h1>
                        <motion.p 
                            className="sportregion__uppercase-text"
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "linear", delay: 0.2 }}
                        >
                            Информационный портал для&nbsp;городских умных спортивных комплексов 
                        </motion.p>
                    </div>

                    {/* Информационные строки */}
                    <motion.div 
                        className="sportregion__info"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 1, ease: "linear" }}
                    >
                        <div className="sportregion__info-item">
                            <span className="sportregion__info-label">Период</span>
                            <span className="sportregion__info-value">2023-2024</span>
                        </div>
                        <div className="sportregion__info-item">
                            <span className="sportregion__info-label">Заказчик</span>
                            <span className="sportregion__info-value">АО "Ситроникс"</span>
                        </div>
                        <div className="sportregion__info-item">
                            <span className="sportregion__info-label">Сфера</span>
                            <span className="sportregion__info-value">Спорт</span>
                        </div>
                        <div className="sportregion__info-item">
                            <span className="sportregion__info-label">Роль</span>
                            <span className="sportregion__info-value">Lead UX/UI дизайнер</span>
                        </div>
                    </motion.div>

                    {/* ← ОБЛОЖКА КЕЙСА */}
                    <div className="sportregion__thumbnail">
                        <motion.img 
                            src={sportRegionThumbnail} 
                            alt="Sport-region Thumbnail" 
                            className="sportregion__thumbnail-img"
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
            <section className="sportregion__problem">
                <div className="container sportregion__problem-container">
                    <div className="sportregion__problem-content">
                        <motion.h2 
                            className="sportregion__problem-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.6, ease: "linear" }}
                        >
                            Проблема
                        </motion.h2>
                        <div className="sportregion__problem-wrapper">
                            <motion.div 
                                className="sportregion__problem-desc"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <p className="sportregion__problem-text">
                                    Посетители спорткомплексов не&nbsp;имели единой точки входа в&nbsp;цифровые сервисы. Доступ, расписание, информация о&nbsp;тренажёрах и&nbsp;правила безопасности были разрознены и&nbsp;требовали участия администратора на&nbsp;ресепшене. 
                                </p>
                                <p className="sportregion__problem-text">
                                    У администраторов и&nbsp;контент-менеджеров не&nbsp;было инструмента, чтобы централизованно управлять информацией и&nbsp;доступом посетителей.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="sportregion__problem-goals"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="sportregion__problem-goal-title">
                                    Цели проекта
                                </h3>
                                <p className="sportregion__problem-goal-text"> 
                                    Разработать информационный портал с&nbsp;доступом в&nbsp;комплексы по&nbsp;QR-коду. Дать посетителю актуальное расписание, информацию о&nbsp;тренажёрах, инструкции и&nbsp;технику безопасности в&nbsp;одном месте. Создать административный кабинет для управления контентом портала.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="sportregion__problem-role"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="sportregion__problem-role-title">
                                    Моя роль
                                </h3>
                                <p className="sportregion__problem-role-text"> 
                                    Как Lead UX/UI дизайнер отвечал за&nbsp;UX-проработку, информационную архитектуру, пользовательские сценарии и&nbsp;проектирование интерфейсов портала и&nbsp;админ-кабинета. 
                                </p>
                                <p className="sportregion__problem-role-text"> 
                                    Курировал работу дизайнеров, проводил дизайн-ревью и&nbsp;дейлики, помогал реализовать дизайн-систему и&nbsp;макеты, осуществлял контроль качества решений от&nbsp;идеи до&nbsp;передачи в&nbsp;разработку.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="sportregion__problem-image">
                        <motion.img 
                            src={sportRegionProblemImage} 
                            alt="Sport-region Problem Image" 
                            className="sportregion__problem-img"
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
            <section className="sportregion__research">
                <div className="container sportregion__research-container">
                    <div className="sportregion__research-content">
                        <motion.h2 
                            className="sportregion__research-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.6, ease: "linear" }}
                        >
                            Исследование
                        </motion.h2>
                        <div className="sportregion__research-wrapper">
                            <motion.div 
                                className="sportregion__research-desc"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <p className="sportregion__research-text">
                                    Анализировал требования и&nbsp;проводил встречи с&nbsp;заказчиком. Разбирал сценарии для двух категорий пользователей — посетители спорткомплекса и&nbsp;администраторы портала.
                                </p>
                                <p className="sportregion__research-text">
                                    Работал в связке с&nbsp;продактом, аналитиками, разработчиками и&nbsp;тестировщиками.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="sportregion__research-summary"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="sportregion__research-summary-title">
                                    Ключевые выводы
                                </h3>
                                 <ul className="sportregion__research-summary-list">
                                    <li className="sportregion__research-summary-item">
                                        Вход в спорткомплекс возможен только после регистрации на&nbsp;информационном портале
                                    </li>
                                    <li className="sportregion__research-summary-item">
                                        Возможность генерации QR-кода сразу при входе на&nbsp;портал — минимум действий для&nbsp;посетителя
                                    </li>
                                    <li className="sportregion__research-summary-item">
                                        Расписание спорткомплекса доступно из&nbsp;навигационного меню на&nbsp;главной странице
                                    </li>
                                    <li className="sportregion__research-summary-item">
                                        Инструкции и&nbsp;техника безопасности должны быть хорошо видны и&nbsp;доступны посетителю для изучения на&nbsp;сайте
                                    </li>
                                    <li className="sportregion__research-summary-item">
                                        Интерфейс должен одинаково работать на&nbsp;мобильном и&nbsp;десктопе
                                    </li>
                                    <li className="sportregion__research-summary-item">
                                        Администратор должен обновлять контент без участия разработчиков
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                    <div className="sportregion__research-images">
                        <motion.img 
                            src={sportRegionResearchImage} 
                            alt="Sport Region Research Image" 
                            className="sportregion__research-img"
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
            <section className="sportregion__solution">
                <div className="container sportregion__solution-container">
                    <div className="sportregion__solution-content">
                        <motion.h2 
                            className="sportregion__solution-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.6, ease: "linear" }}
                        >
                            Решение
                        </motion.h2>
                        <div className="sportregion__solution-wrapper">
                            <motion.div 
                                className="sportregion__solution-desc"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <p className="sportregion__solution-text">
                                    Разработан информационный портал, который включает регистрацию пользователя и&nbsp;генерацию QR-кода, актуальное расписание, информацию о&nbsp;видах спорта, тренажёрах, правила безопасности и&nbsp;навигацию по&nbsp;комплексу. 
                                </p>
                                <p className="sportregion__solution-text">
                                    Отдельно спроектирован административный кабинет для управления контентом площадок в&nbsp;различных локациях.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="sportregion__solution-result"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                            >
                                <h3 className="sportregion__solution-result-title">
                                    Результат
                                </h3>
                                <p className="sportregion__solution-result-text"> 
                                    Реализовал дизайн-систему и&nbsp;макеты сценариев для десктопа и&nbsp;мобильной версии портала, в&nbsp;том числе все состояния и&nbsp;модальные окна. Также полностью спроектирован и&nbsp;реализован интерфейс админ-кабинета, что позволяет масштабировать решение для спорткомплексов в&nbsp;разных городах.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    <InterfaceBlock
                        number="01/"
                        title="Интерфейсы"
                        subtitle="Информационный портал"
                        className="sportregion__interface"
                    >
                        <div className="sportregion__interface-content">
                            <img src={sportRegionInterface01TL} alt="Обзор информационного портала" className="sportregion__interface-image" />
                            <img src={sportRegionInterface01TR} alt="Обзор информационного портала" className="sportregion__interface-image" />
                            <img src={sportRegionInterface01BL} alt="Обзор информационного портала" className="sportregion__interface-image" />
                            <img src={sportRegionInterface01BR} alt="Обзор информационного портала" className="sportregion__interface-image" />  
                        </div>     
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="02/"
                        title="Интерфейсы"
                        subtitle="Вход и регистрация"
                        className="sportregion__interface"
                    >
                        <div className="sportregion__interface-content">
                            <img src={sportRegionInterface02L} alt="Регистрация" className="sportregion__interface-image" />
                            <img src={sportRegionInterface02R} alt="QR-код" className="sportregion__interface-image" />
                        </div>   
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="03/"
                        title="Интерфейсы"
                        subtitle="Расписание занятий"
                        className="sportregion__interface"
                    >
                        <div className="sportregion__interface-content">
                            <img src={sportRegionInterface03} alt="Расписание занятий" className="sportregion__interface-image" />
                        </div>     
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="04/"
                        title="Интерфейсы"
                        subtitle="Мобильная версия"
                        className="sportregion__interface"
                    >
                        <div className="sportregion__interface-content">
                            <img src={sportRegionInterface04} alt="мобильная версия" className="sportregion__interface-image" />  
                        </div>     
                    </InterfaceBlock>

                    <InterfaceBlock
                        number="05/"
                        title="Интерфейсы"
                        subtitle="Контент-менеджер"
                        className="sportregion__interface"
                    >
                        <div className="sportregion__interface-content">
                            <img src={sportRegionInterface05TL} alt="Обзор интерфейса контент-менеджера" className="sportregion__interface-image" />
                            <img src={sportRegionInterface05TR} alt="Обзор интерфейса контент-менеджер" className="sportregion__interface-image" />
                            <img src={sportRegionInterface05BL} alt="Обзор интерфейса контент-менеджер" className="sportregion__interface-image" />
                            <img src={sportRegionInterface05BR} alt="Обзор интерфейса контент-менеджер" className="sportregion__interface-image" />  
                        </div> 
                    </InterfaceBlock>
                        
                    <InterfaceBlock
                        number="06/"
                        title="Интерфейсы"
                        subtitle="Администратор системы"
                        className="sportregion__interface"
                    >
                        <div className="sportregion__interface-content--03">
                            <img src={sportRegionInterface06T} alt="Обзор интерфейса администратора" className="sportregion__interface-image" />
                            <img src={sportRegionInterface06M} alt="Обзор интерфейса администратора" className="sportregion__interface-image" />
                            <img src={sportRegionInterface06B} alt="Обзор интерфейса администратора" className="sportregion__interface-image" />
                        </div>    
                    </InterfaceBlock>
                </div>               
            </section>
        </>
    );
}