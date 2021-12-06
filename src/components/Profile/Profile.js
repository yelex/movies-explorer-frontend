import './Profile.css';
import React from 'react';
import Header from '../Header/Header';

function Profile(props) {
  const [ name, setName ] = React.useState('Виталий');
  const [ email, setEmail ] = React.useState('pochta@yandex.ru');

  return (
    <>
    <Header isLanding={false}/>
    <section className="profile">
      <form name="profileForm" action="#" 
            className="profile__container">
        <h1 className="profile__greetings">{`Привет, ${name}!`}</h1>
        <ul className="profile__info">
          <li className="profile__info-item">
            <label className="profile__label" for="name">
              Имя
            </label>
            <input className="profile__input" value={ name } 
            id="name"></input>
          </li>
          <li className="profile__info-item">
            <label className="profile__label" for="email">
              E-mail
            </label>
            <input className="profile__input" id="email" value={ email }></input>
          </li>
        </ul>
        <ul className="profile__buttons">
          <li>
            <button type="button" className="profile__btn">Редактировать</button>
          </li>
          <li>
            <button type="button" className="profile__btn profile__btn_color_red">Выйти из аккаунта</button>
          </li>
        </ul>
      </form>
    </section>
    </>
  );
}

export default Profile;