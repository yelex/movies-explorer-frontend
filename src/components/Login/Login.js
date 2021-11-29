import { AuthForm } from '../AuthForm/AuthForm';
import { Link } from 'react-router-dom';

function Login() {

  return (
    <AuthForm formName="login" 
    submitBtnText="Войти" 
    title="Добро пожаловать!">
      <p className="auth__caption">
      Ещё не зарегистрированы? <Link to="/signup" className="auth__link">Регистрация</Link>
      </p>
    </AuthForm>
  );
}

export default Login;