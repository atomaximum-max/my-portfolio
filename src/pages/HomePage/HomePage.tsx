import { useState } from "react";
import { ScrollMarquee } from "../../components/ScrollMarquee";
import Experience from "../../components/Experience";
import { SocialBar } from "../../components/SocialBar";
import CaseCard from "../../components/CaseCard";
import Form from "../../components/Form";
import { Button } from "../../components/ui/Button";
import { casesData } from "../../data/cases";
import HeroSpline from "../../components/HeroSpline";
import { motion } from "motion/react";

import avatarImage from "../../assets/img/profile.jpeg";
import figmaLogo from '../../assets/img/figma.svg';
import photoshopIcon from '../../assets/img/photoshop.svg';
import aiIcon from '../../assets/img/ai.svg';
import htmlIcon from '../../assets/img/html.svg';
import cssIcon from '../../assets/img/css.svg';
import jsIcon from "../../assets/img/js.svg";
import tsIcon from "../../assets/img/ts.svg";
import reactIcon from "../../assets/img/react.svg";
import jqueryIcon from "../../assets/img/jquery.svg";
import nodejsIcon from "../../assets/img/nodejs.svg";
import gitIcon from "../../assets/img/git.svg";
import projectIcon from "../../assets/img/project.svg";
import jiraIcon from "../../assets/img/jira.svg";
import confluenceIcon from "../../assets/img/confluence.svg";

import "./HomePage.scss";

export default function HomePage() {
    // ← СОСТОЯНИЕ ДЛЯ КНОПКИ "ЕЩЁ КЕЙСЫ"
    const [showMoreCases, setShowMoreCases] = useState(false);
    const toggleCases = () => setShowMoreCases(!showMoreCases);
    
    // ← СОСТОЯНИЕ ДЛЯ МОДАЛЬНОГО ОКНА
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (
    <main>
        <section id="hero">
            <div className="container hero__container">
                <div className="hero__wrapper">
                    <motion.h1 
                        className="hero__title"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.6 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    > 
                        Продуктовый дизайн и&nbsp;веб-разработка
                    </motion.h1>
                    <motion.div 
                        className="hero__separator"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ 
                            duration: 0.8, 
                            delay: 0.5,
                            ease: "easeOut" 
                        }} 
                    />
                    <motion.div 
                        className="hero__avatar-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <motion.img 
                            className="hero__avatar" 
                            src={avatarImage} 
                            alt="Аватар"
                            initial={{ x: -300, rotate: -1440, opacity: 0 }}
                            animate={{ x: 0, rotate: 0, opacity: 1 }}
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            transition={{ 
                                type: "spring",
                                stiffness: 30,
                                damping: 10,
                                mass: 1,
                                delay: 0.4 
                            }} 
                        />
                        <motion.div 
                            className="hero__avatar-info"
                            initial={{ opacity: 0, x: -20, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: 1.2,
                                ease: "easeOut"
                            }}
                        >
                            <div className="hero__avatar-name">Максим Барманов</div>
                            <div className="hero__avatar-desc">
                                Product Design Lead | UX Engineer | Design-to-Code Specialist
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
                <HeroSpline />
                <div className="hero__cta">
                    <motion.p 
                        className="hero__cta-desc"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                            duration: 0.8, 
                            ease: "easeOut", 
                            delay: 1.1
                        }}
                    >
                        От идеи до интерфейса, готового&nbsp;к&nbsp;запуску
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.6, 
                            ease: "easeOut", 
                            delay: 1.4
                        }}
                    > 
                        <Button
                            onClick={openModal}
                            variant={"primary"}
                            className={'hero__сta-btn'}
                        >
                            Обсудить проект</Button>
                    </motion.div>
                </div>
            </div>
        </section>

        <section id="about">
            <div className="container about__container">
                <div className="about__left">
                    <motion.p 
                        className="about__greeting"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1, margin: "0px 0px -150px 0px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Привет! меня зовут Максим, я&nbsp;UX/UI дизайнер с экспертизой в&nbsp;frontend-разработке
                    </motion.p>
                </div>
                <motion.div 
                    className="about__right"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1, margin: "0px 0px -150px 0px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className='about__title'>О себе</h2>
                    <div className="about__desc">
                        <p className="about__text">
                            Более 7 лет помогаю компаниям создавать современные цифровые продукты.
                        </p>
                        <p className="about__text">
                            Свыше 15 проектов успешно реализованных и&nbsp;внедренных в процессы бизнеса и&nbsp;государственного сектора.
                        </p>
                        <p className="about__text">
                            2 экспертизы позволяют осуществлять полный цикл разработки, от UX - концепции и&nbsp;дизайна до готовой frontend-реализации.
                        </p>
                    </div>
                </motion.div>
                <ScrollMarquee 
                    speed={150}
                    mobileSpeed={60}
                >
                    <span className="about__marquee-text">
                        Превращаю сложные задачи в понятные интерфейсы&nbsp;&nbsp; ✦
                    </span>
                </ScrollMarquee>
                <Experience />
                <SocialBar className="about__social"/>
                <div className="about__left">
                    <motion.p 
                        className="about__greeting"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1, margin: "0px 0px -150px 0px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Создаю цифровые продукты,  которые упрощают процессы и&nbsp;решают задачи бизнеса
                    </motion.p>
                </div>
                <motion.div 
                    className="about__right"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1, margin: "0px 0px -150px 0px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className='about__title'>Мой подход</h2>
                    <div className="about__desc">
                        <p className="about__text">
                            Исследование пользовательского пути, интервьюирование, анализ бизнес-процессов, конкурентной среды и требований продукта.
                        </p>
                        <p className="about__text">
                            Проектирование структуры приложения, пользовательских сценариев, компонентов и дизайн-системы.
                        </p>
                        <p className="about__text">
                            Разработка интерфейсов с использованием современных фронтенд-технологий, реализация дизайна и кода, как единого процесса.
                        </p>
                    </div>
                </motion.div>
                <ScrollMarquee 
                    speed={100}
                    mobileSpeed={60}
                >
                    <div className="about__marquee-logo">
                        <img src={figmaLogo} alt="Figma logo" />
                        <img src={photoshopIcon} alt="Photoshop logo" />
                        <img src={aiIcon} alt="AI logo" />
                        <img src={htmlIcon} alt="HTML logo" />
                        <img src={cssIcon} alt="CSS logo" />
                        <img src={jsIcon} alt="JS logo" />
                        <img src={tsIcon} alt="TS logo" />
                        <img src={reactIcon} alt="React logo" />
                        <img src={jqueryIcon} alt="Jquery logo" />
                        <img src={nodejsIcon} alt="NodeJS logo" />
                        <img src={gitIcon} alt="Git logo" />
                        <img src={projectIcon} alt="Project logo" />
                        <img src={jiraIcon} alt="Jira logo" />
                        <img src={confluenceIcon} alt="Confluence logo" />
                    </div>
                </ScrollMarquee>
            </div>
        </section>

        <section id="cases">
            <div className="container cases__container">
                <h2 className="cases__title">Кейсы</h2>
                {/* ← СПИСОК КЕЙСОВ ИЗ МАССИВА */}
                <div className="cases__grid">
                    {casesData.slice(0, showMoreCases ? casesData.length : 4).map((caseItem, index) => (
                        <CaseCard
                            key={caseItem.id}
                            year={caseItem.year}
                            title={caseItem.title}
                            description={caseItem.description}
                            image={caseItem.image}
                            link={caseItem.link}
                            index={index}
                        />
                    ))}     
                </div>
                <Button
                    variant="primary"
                    expandBlock={toggleCases}
                    className="cases__more-btn"
                >
                    {showMoreCases ? 'Скрыть кейсы' : 'Ещё кейсы'}
                </Button>
            </div>
        </section>

        <section id="feedback">
            <div className='container feedback__container'>
                <motion.h3 
                    className="feedback__title"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1, margin: "0px 0px -150px 0px" }}
                    transition={{ duration: 0.6, ease: "linear" }}
                >
                    Есть вопросы или нужна консультация?
                </motion.h3>
                <div className="feedback__wrapper">
                    <motion.p 
                        className="feedback__description"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1, margin: "0px 0px -150px 0px" }}
                        transition={{ duration: 0.6, ease: "linear", delay: 0.15 }}
                    >
                        Оставьте свое сообщение, и я оперативно свяжусь с вами, чтобы предоставить необходимую поддержку
                    </motion.p>
                    <Form />
                </div>
            </div>            
        </section>

        {/* ← МОДАЛЬНОЕ ОКНО */}
        {isModalOpen && (
            <div className="modal modal__form" onClick={closeModal}>
                <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                    <button
                        className="modal__close-btn"
                        onClick={closeModal}
                        aria-label="Закрыть"
                    >
                        ✕
                    </button>
                    <div className="modal__wrapper">
                        <h2 className="modal__title">Хотите обсудить проект?</h2>
                        <p className="modal__description">
                            Оставьте свое сообщение, и я оперативно свяжусь с вами, чтобы уточнить детали
                        </p>
                    </div>
                    <Form isModal formClassName="modal__form-feedback" />
                </div>
            </div>
        )}
    </main>
  )
}