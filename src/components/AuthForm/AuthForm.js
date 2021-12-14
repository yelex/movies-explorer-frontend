import React from 'react';
import './AuthForm.css';
import logoPath from '../../images/header-logo.svg';
import { useHistory } from 'react-router-dom';

export function AuthForm(props) {
    const history = useHistory();
    const { values, errors, isValid, handleChange } = props.formData;

    return (
        <section className="auth">
            <form name={`${props.formName}Form`} action="#" 
            className="auth__container"
            onSubmit={ props.onSubmit }
            >
                <div className="auth__logo-container">
                <img src={ logoPath } alt="Логотип" className="auth__logo" onClick={()=>{history.push('/')}}/>
                </div>
                
                <h1 className="auth__title">{ props.title }</h1>
                <ul className="auth__list-fields">
                    { props.formName==="register" && 
                    <li className="auth__list-item" key="register">
                        <label htmlFor="name" className="auth__label">Имя</label>
                        <input onChange={ handleChange }
                        value={ values.name || ''}
                        className={`auth__input ${errors.name && 'auth__input_error'}`}
                        type="text" 
                        minLength="2"
                        maxLength="40"
                        name="name"
                        required/>
                        {errors.name && <span className="auth__error-text">{errors.name}</span>}
                    </li>
                    }
                    <li className="auth__list-item" key="email">
                        <label htmlFor="email" className="auth__label">E-mail</label>
                        <input onChange={ handleChange }
                        value={ values.email || '' } 
                        className={`auth__input ${errors.email && 'auth__input_error'}`}
                        type="email"
                        name="email"
                        minLength="2" 
                        maxLength="40" 
                        required/>
                        {errors.email && <span className="auth__error-text">{errors.email}</span>}
                    </li>
                    <li className="auth__list-item" key="password">
                        <label htmlFor="password" className="auth__label">Пароль</label>
                        <input onChange={ handleChange } 
                        value={ values.password || '' } 
                        className="auth__input" 
                        name="password"
                        type="password" 
                        minLength="2" 
                        maxLength="200" 
                        required/>
                        {errors.password && <span className="auth__error-text">{errors.password}</span>}
                    </li>
                </ul>
                <div className="auth__btn-container">
                    <p className="auth__server-error">{props.errorServerText}</p>
                    <button type="submit" 
                    className={`auth__submit-btn ${!isValid && 'auth__submit-btn_disabled'}`} 
                    disabled={!isValid}>{ props.submitBtnText }</button>
                </div>
                { props.children }
            </form>
        </section>

    )
}