import { useState } from "react";
import { ScrollMarquee } from "../../components/ScrollMarquee";
import Experience from "../../components/Experience";
import { SocialBar } from "../../components/SocialBar";
import CaseCard from "../../components/CaseCard";
import Form from "../../components/Form";
import { Button } from "../../components/ui/Button";
import { casesData } from "../../data/cases";
import HeroSpline from "../../components/HeroSpline";

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

  return (
    <main>
        <section id="hero">
            <div className="container hero__container">
                <div className="hero__wrapper">
                    <h1 className="hero__title">Продуктовый дизайн и&nbsp;веб-разработка</h1>
                    <div className="hero__separator" />
                    <div className="hero__avatar-card">
                        <img className="hero__avatar" src={avatarImage} alt="Аватар" />
                        <div className="hero__avatar-info">
                        <div className="hero__avatar-name">Максим Барманов</div>
                        <div className="hero__avatar-desc">
                            Product Design Lead | UX Engineer | Design-to-Code Specialist
                        </div>
                        </div>
                    </div>
                </div>
                <HeroSpline />
                <div className="hero__cta">
                    <p className="hero__cta-desc">
                        От идеи до интерфейса, готового&nbsp;к&nbsp;запуску
                    </p>
                    <Button
                        variant={"primary"}
                        className={'hero__сta-btn'}
                    >
                        Обсудить проект
                    </Button>
                </div>
            </div>
        </section>

        <section id="about">
            <div className="container about__container">
                <div className="about__left">
                    <p className="about__greeting">
                        Привет! меня зовут Максим, я&nbsp;UX/UI дизайнер с экспертизой в&nbsp;frontend-разработке
                    </p>
                </div>
                <div className="about__right">
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
                </div>
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
                    <p className="about__greeting">
                        Создаю цифровые продукты,  которые упрощают процессы и&nbsp;решают задачи бизнеса
                    </p>
                </div>
                <div className="about__right">
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
                </div>
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
                    {casesData.slice(0, showMoreCases ? casesData.length : 4).map((caseItem) => (
                        <CaseCard
                            key={caseItem.id}
                            year={caseItem.year}
                            title={caseItem.title}
                            description={caseItem.description}
                            image={caseItem.image}
                            link={caseItem.link}
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
                <h3 className="feedback__title">
                    Есть вопросы или нужна консультация?
                </h3>
                <div className="feedback__wrapper">
                    <p className="feedback__description">
                        Оставьте свое сообщение, и я оперативно свяжусь с вами, чтобы предоставить необходимую поддержку
                    </p>
                    <Form />
                </div>

            </div>            
        </section>
    </main>
  )
}