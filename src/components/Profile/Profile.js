import './Profile.css';
import React from 'react';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Profile(props) {

  const [ isEditMode, setIsEditMode ] = React.useState(false);
  const currentUser = React.useContext(CurrentUserContext);
  const { values, setValues, isValid, setIsValid, handleChange } = useFormWithValidation((event)=>{
    props.resetSuccessUpdate();
    props.resetServerError();
  });
  const { name, email } = values;

  React.useEffect(()=>{
    const strValues = JSON.stringify(values);
    const {name, email} = currentUser;
    const strCurrentUser = JSON.stringify({name, email});
    if (strValues===strCurrentUser){
      setIsValid(false);
    }
  },[values.name, values.email])

  React.useEffect(()=>{
    if (props.isSuccessUpdate){
      handleEditMode()
    }
  },[props.isSuccessUpdate])

  React.useEffect(()=>{
    props.resetSuccessUpdate()
  },[])

  React.useEffect(()=>{
    setValues({name: currentUser.name, email: currentUser.email})
  }, [currentUser.name, currentUser.email])

  function handleEditMode(){
    setIsEditMode(!isEditMode);
  }

  function handleSubmit(e){
    e.preventDefault();
    props.onChange(name, email);
    setIsValid(false);
  }

  return (
    <>
    <Header isLanding={false}/>
    <section className="profile">
      <form name="profileForm" action="#"
            onSubmit={handleSubmit}
            className="profile__container">
        <h1 className="profile__greetings">{`Привет, ${name}!`}</h1>
        <ul className="profile__info">
          <li className="profile__info-item">
            <label className="profile__label" htmlFor="name">
              Имя
            </label>
            <input className="profile__input"
            type="text"
            onChange={handleChange} 
            value={ name || ''}
            name="name"
            minLength="2" 
            maxLength="40" 
            required={true}
            readOnly={!isEditMode}></input>
          </li>
          <li className="profile__info-item">
            <label className="profile__label" htmlFor="email">
              E-mail
            </label>
            <input className="profile__input" 
            name="email"
            minLength="2" 
            maxLength="40" 
            pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
            required={true}
            type="email"
            value={ email || ''} 
            onChange={handleChange} 
            readOnly={!isEditMode}></input>
          </li>
        </ul>
        {props.isSuccessUpdate ? 
        <p className="profile__result profile__result_color_green">Профиль успешно обновлен</p>
        : 
        <p className="profile__result profile__result_color_red">{props.errorServerText}</p>}
        <ul className="profile__buttons">
          {isEditMode ?
            <li className="profile__btn-item" key="submit">
              <button type="submit"
              className={`profile__save-btn ${!isValid && 'profile__save-btn_disabled'}`}
              disabled={!isValid}>Сохранить</button>
            </li> :
            <>
              <li className="profile__btn-item" key="edit">
                <button type="button" className="profile__btn" onClick={handleEditMode}>Редактировать</button>
              </li>
              <li className="profile__btn-item" key="signout">
                <button type="button" 
                className="profile__btn profile__btn_color_red"
                onClick={ props.onSignOut }>Выйти из аккаунта</button>
              </li>
            </>

          }

        </ul>
      </form>
    </section>
    </>
  );
}

export default Profile;