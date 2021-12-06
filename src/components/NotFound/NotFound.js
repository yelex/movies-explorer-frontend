import './NotFound.css';
import React from 'react';
import { useHistory } from 'react-router-dom';


function NotFound(){
    const history = useHistory();

    return (
        <section className="not-found">
            <h1 className="not-found__title">404</h1>
            <h2 className="not-found__subtitle">Страница не найдена</h2>
            <button type="button" className="not-found__goback-btn" onClick={history.goBack}>Назад</button>
        </section>
    );
}

export default NotFound;