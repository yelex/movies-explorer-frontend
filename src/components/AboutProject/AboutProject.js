import './AboutProject.css';
import React from 'react';
import Head from '../Head/Head';

function AboutProject() {

    return (
        <section className="about" id="about">
            <div className="about__container">
                <Head title="О проекте"/>
                <div className="about__row about__row_type_text">
                    <div className="about__col about__col_type_text">
                        <h3 className="about__subtitle">
                            Дипломный проект включал 5 этапов
                        </h3>
                        <p className="about__text">
                            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                        </p>
                    </div>
                    <div className="about__col about__col_type_text">
                        <h3 className="about__subtitle">
                            На выполнение диплома ушло 5 недель
                        </h3>
                        <p className="about__text">
                            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                        </p>
                    </div>
                </div>
                <div className="about__row about__row_type_status-bar">
                    <div className="about__col about__col_type_left-status">
                        <div className="about__cell about__cell_type_backend">
                            1 неделя
                        </div>
                        <p className="about__cell about__cell_type_caption">
                            Back-end
                        </p>
                    </div>
                    <div className="about__col about__col_type_right-status">
                        <div className="about__cell about__cell_type_frontend">
                            4 недели
                        </div>
                        <p className="about__cell about__cell_type_caption">
                            Front-end
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
  }
  
  export default AboutProject;