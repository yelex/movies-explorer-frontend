import './Tech.css';
import React from 'react';
import Head from '../Head/Head';

function Tech() {

    return (
        <section className="tech">
            <div className="tech__container">
                <Head title="Технологии"/>
                <div className="tech__content">
                    <h2 className="tech__title">
                        7 технологий
                    </h2>
                    <p className="tech__text">
                        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                    </p>
                    <ul className="tech__list">
                        <li className="tech__list-item">HTML</li>
                        <li className="tech__list-item">CSS</li>
                        <li className="tech__list-item">JS</li>
                        <li className="tech__list-item">React</li>
                        <li className="tech__list-item">Git</li>
                        <li className="tech__list-item">Express.js</li>
                        <li className="tech__list-item">mongoDB</li>
                    </ul>
                </div>
            </div>

        </section>
    );
}

export default Tech;