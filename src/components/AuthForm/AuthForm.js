import React from 'react';
import './AuthForm.css';
import logoPath from '../../images/header-logo.svg';
import { useHistory } from 'react-router-dom';

export function AuthForm(props) {
    const history = useHistory();
    
    return (
        <section className="auth">
            <form name={`${props.formName }Form`} action="#" 
            className="auth__container"
            onSubmit={ props.onSubmit }
            >
                <div className="auth__logo-container">
                <img src={ logoPath } alt="Логотип" className="auth__logo" onClick={()=>{history.push('/')}}/>
                </div>
                
                <h1 className="auth__title">{ props.title }</h1>
                <ul className="auth__list-fields">
                    { props.formName==="register" && 
                    <li className="auth__list-item">
                        <label for="name" className="auth__label">Имя</label>
                        <input onChange={ props.onChange } value={ props.name } 
                        className="auth__input" 
                        id="name" type="text" minLength="2" 
                        maxLength="40" required/>
                    </li>
                    }
                    <li className="auth__list-item">
                        <label for="email" className="auth__label">E-mail</label>
                        <input onChange={ props.onChange } value={ props.email } 
                        className="auth__input" 
                        id="email" type="email" minLength="2" 
                        maxLength="40" required/>
                    </li>
                    <li className="auth__list-item">
                        <label for="password" className="auth__label">Пароль</label>
                        <input onChange={ props.onChange } value={ props.password } 
                        className="auth__input" id="password" type="password" 
                        minLength="2" maxLength="200" required/>
                    </li>
                </ul>

                <button type="submit" className="auth__submit-btn">{ props.submitBtnText }</button>
                { props.children }
            </form>
        </section>

    )
}