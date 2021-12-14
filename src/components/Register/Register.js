import { AuthForm } from '../AuthForm/AuthForm';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Register(props) {
  const formData = useFormWithValidation(props.resetServerError);
  const { name, email, password } = formData.values;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRegister(name, email, password);
  };

  return (
    <AuthForm formName="register" 
    submitBtnText="Зарегистрироваться" 
    title="Добро пожаловать!"
    formData={ formData }
    onSubmit={ handleSubmit }
    errorServerText={ props.errorServerText }
    resetServerError={ props.resetServerError }>
      <p className="auth__caption">
      Уже зарегистрированы? <Link to="/signin" className="auth__link">Войти</Link>
      </p>
    </AuthForm>
  );
}

export default Register;