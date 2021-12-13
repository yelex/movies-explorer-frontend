import { AuthForm } from '../AuthForm/AuthForm';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Register(props) {
  const formData = useFormWithValidation();
  const { name, email, password } = formData.values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password })
    props.onRegister(name, email, password);
  };

  return (
    <AuthForm formName="register" 
    submitBtnText="Зарегистрироваться" 
    title="Добро пожаловать!"
    formData={ formData }
    onSubmit={ handleSubmit }>
      <p className="auth__caption">
      Уже зарегистрированы? <Link to="/signin" className="auth__link">Войти</Link>
      </p>
    </AuthForm>
  );
}

export default Register;