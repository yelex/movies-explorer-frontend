import './AboutMe.css';
import React from 'react';
import Head from '../Head/Head';
import photoPath from '../../images/student-photo.jpeg';
import arrowPath from '../../images/student-arrow.svg';

function AboutMe() {

    return (
        <section className="student">
            <div className="student__container">
                <Head title="Студент"/>
                <div className="student__about">
                    <div className="student__description">
                        <h2 className="student__title">
                            Алексей
                        </h2>
                        <h3 className="student__subtitle">
                            Фронтенд-разработчик, 27 лет
                        </h3>
                        <p className="student__text">
                            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
                            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                        </p>
                        <ul className="student__contacts">
                            <li className="student__contact">
                                <a href="#" className="student__contact-link">
                                    Facebook
                                </a>
                            </li>
                            <li className="student__contact">
                                <a href="#" className="student__contact-link">
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                    <img src={ photoPath } alt="Фото" className="student__photo" />
                </div>
                <h4 className="student__portfolio-title">
                    Портфолио
                </h4>
                <ul className="student__portfolio-links">
                    <li className="student__portfolio-item">
                        <div className="student__text-container">
                            <a href="#" className="student__portfolio-link">
                                Статичный сайт
                            </a>
                            <img src={ arrowPath } alt="Стрелка" className="student__arrow" />
                        </div>
                    </li>
                    <li className="student__portfolio-item">
                        <div className="student__text-container">
                            <a href="#" className="student__portfolio-link">
                                Адаптивный сайт
                            </a>
                            <img src={ arrowPath } alt="Стрелка" className="student__arrow" />
                        </div>
                    </li>
                    <li className="student__portfolio-item">
                        <div className="student__text-container">
                            <a href="#" className="student__portfolio-link">
                                Одностраничное приложение
                            </a>
                            <img src={ arrowPath } alt="Стрелка" className="student__arrow" />
                        </div>
                    </li>
                </ul>
            </div>

        </section>
    );
}

export default AboutMe;