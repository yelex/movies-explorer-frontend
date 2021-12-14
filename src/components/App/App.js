import './App.css';
import React from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import { ProtectedRoute } from '../ProptectedRoute/ProtectedRoute';
import { IsLoggedInContext } from '../../contexts/IsLoggedInContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { authorize, register, checkToken, signOut } from '../../utils/MainApi';
import { useHistory, useLocation } from 'react-router';

import { Route, Switch } from 'react-router-dom';

function App() {

  const [ currentUser, setCurrentUser ] = React.useState({});
  const [ isLoggedIn, setIsLoggedIn ] = React.useState(false);
  const [ userEmail, setUserEmail ] = React.useState('');
  const [ serverErrorText, setServerErrorText ] = React.useState('');
  const history = useHistory();
  const location = useLocation();
  
  React.useEffect(() => {
    document.title = "Диплом"
  })

  React.useEffect(() => {
    handleTokenCheck();
  }, [])

  function resetServerError(){
    setServerErrorText('');
  }

  function handleErrorMessage(err){
    switch (err.message) {
      case "Validation failed":
        setServerErrorText("Вы ввели некорректный e-mail или пароль");
        break;
      case "Failed to fetch":
        setServerErrorText("Сервер недоступен");
        break;
      default:
        setServerErrorText(err.message);
        break;
    }
  }

  function handleLogin(email, password){
    authorize(email, password)
      .then(() => {
        setUserEmail(email);
        setIsLoggedIn(true);
        history.push('/movies');
        setServerErrorText('')
      })
      .catch(err => {
        console.log(err);
        handleErrorMessage(err);
      })
  }

  function handleRegister(name, email, password){
    console.log(name, email, password);
    register(name, email, password).then((res) => {
        if(res){
          history.push('/signin');
        }
        setServerErrorText('')
      })
      .catch(err => {
        console.log(err)
        handleErrorMessage(err);
      })
  }

  function handleTokenCheck(){
    checkToken()
    .then((data) => {
      setUserEmail(data.email);
      setIsLoggedIn(true);
    })
    .catch(err => console.log(err)) // сюда придет 401 если пользователь неавторизован
    .finally(()=>{
      history.push(location.pathname);
    })
  }

  function handleSignOut(){
    signOut().then(()=>{
      setIsLoggedIn(false);
      history.push('/signin');
    }).catch(err => console.log(err))
  }

  return (
    <CurrentUserContext.Provider value={ currentUser }>
      <IsLoggedInContext.Provider value={ isLoggedIn }>
        <div className="page">
            <Switch>
              <ProtectedRoute path="/movies" isLoggedIn={ isLoggedIn }>
                <Movies />
              </ProtectedRoute>
              <ProtectedRoute path="/saved-movies" isLoggedIn={ isLoggedIn }>
                <SavedMovies />
              </ProtectedRoute>
              <ProtectedRoute path="/profile" 
              isLoggedIn={ isLoggedIn }
              onSignOut={ handleSignOut }>
                <Profile />
              </ProtectedRoute>
              <Route path="/signin">
                <Login onLogin={ handleLogin } 
                errorServerText={serverErrorText}
                resetServerError={resetServerError}/>
              </Route>
              <Route path="/signup">
                <Register onRegister={ handleRegister } 
                errorServerText={serverErrorText}
                resetServerError={resetServerError}/>
              </Route>
              <Route exact path="/">
                <Main />
              </Route>
              <Route component={ NotFound }/>
            </Switch>
        </div>
      </IsLoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
