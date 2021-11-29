import React from 'react';
import { AuthForm } from '../AuthForm/AuthForm';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <AuthForm formName="register" 
    submitBtnText="Зарегистрироваться" 
    title="Рады видеть!">
      <p className="auth__caption">
      Уже зарегистрированы? <Link to="/signin" className="auth__link">Войти</Link>
      </p>
    </AuthForm>
  );
}

export default Register;