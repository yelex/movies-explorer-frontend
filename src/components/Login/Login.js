import React from 'react';
import { AuthForm } from '../AuthForm/AuthForm';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Login(props) {
  const formData = useFormWithValidation(props.resetServerError);
  const { email, password } = formData.values;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLogin(email, password);
  };

  return (
    <AuthForm formName="login" 
    submitBtnText="Войти" 
    title="Рады видеть!"
    formData={ formData }
    onSubmit={ handleSubmit }
    isDisabledForm={ props.isDisabledForm }
    errorServerText={ props.errorServerText }
    resetServerError={ props.resetServerError }>
      <p className="auth__caption">
      Ещё не зарегистрированы? <Link to="/signup" className="auth__link">Регистрация</Link>
      </p>
    </AuthForm>
  );
}

export default Login;