import './App.css';
import React from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import { AuthProtectedRoute } from '../AuthProtectedRoute/AuthProtectedRoute';
import { ProtectedRoute } from '../ProptectedRoute/ProtectedRoute';
import { IsLoggedInContext } from '../../contexts/IsLoggedInContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { authorize, register, getInfoAboutMe, signOut, 
  updateInfo } from '../../utils/MainApi';
import { useHistory } from 'react-router';

import { Route, Switch } from 'react-router-dom';

function App() {

  const [ currentUser, setCurrentUser ] = React.useState({});
  const [ isLoggedIn, setIsLoggedIn ] = React.useState(false);
  const [ isLoggedInChecked, setIsLoggedInChecked ] = React.useState(false);
  const [ isSuccessUpdate, setIsSuccessUpdate ] = React.useState(false);
  const [ serverErrorText, setServerErrorText ] = React.useState('');
  const [ isDisabledForm, setIsDisabledForm ] = React.useState(false);
  const history = useHistory();
  
  React.useEffect(() => {
    document.title = "Диплом"
  })

  React.useEffect(() => {
    handleTokenCheck();
  },[])

  function setupCurrentUser(){
    getInfoAboutMe().then(
      ({email, name, _id}) => {
        setCurrentUser({email, name, _id})}
    )
  }

  function resetServerError(){
    setServerErrorText('');
  }

  function resetSuccessUpdate(){
    setIsSuccessUpdate(false);
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

  function handleUpdateUser(name, email){
    setIsDisabledForm(true);
    updateInfo(name, email).then(()=>{
      setCurrentUser({...currentUser, name, email});
      setIsSuccessUpdate(true);
    }).catch(err=>{
      console.log(err);
      handleErrorMessage(err);
    }).finally(()=>{
      setIsDisabledForm(false);
    })
  }

  function handleLogin(email, password){
    setIsDisabledForm(true);
    authorize(email, password)
      .then(() => {
        setIsLoggedIn(true);
        history.push('/movies');
        setServerErrorText('');
        setupCurrentUser();
      })
      .catch(err => {
        console.log(err);
        handleErrorMessage(err);
      })
      .finally(()=>{
        setIsDisabledForm(false)
      })
  }

  function handleRegister(name, email, password){
    setIsDisabledForm(true);
    register(name, email, password).then((res) => {
        if(res){
          setIsLoggedIn(true);
          history.push('/movies');
          setupCurrentUser();
        }
        setServerErrorText('')
      })
      .catch(err => {
        console.log(err)
        handleErrorMessage(err);
      })
      .finally(()=>{
        setIsDisabledForm(false);
      })
  }

  function handleTokenCheck(){

    getInfoAboutMe()
    .then(({email, name, _id}) => {
      setIsLoggedIn(true);
      setCurrentUser({email, name, _id});
    })
    .catch(err => console.log(err))
    .finally(()=>{
      setIsLoggedInChecked(true)
    })
  }

  function handleSignOut(){
    signOut().then(()=>{
      setIsLoggedIn(false);
      history.push('/');
    }).catch(err => console.log(err));
    
    if (localStorage.getItem('resultMovies')){
      localStorage.removeItem('resultMovies')
    }
    if (localStorage.getItem('keyword')) {
      localStorage.removeItem('keyword')
    }
    if (localStorage.getItem('isShortMovies')){
      localStorage.removeItem('isShortMovies')
    }
  }

  function setupIsDisabledForm(value){
    setIsDisabledForm(value)
  }

  return (
    <CurrentUserContext.Provider value={ currentUser }>
      <IsLoggedInContext.Provider value={ isLoggedIn }>
        <div className="page">
        {!isLoggedInChecked ? <Preloader/> :
            <Switch>
              <ProtectedRoute path="/movies" isLoggedIn={ isLoggedIn }>
                <Movies setupIsDisabledForm={setupIsDisabledForm}/>
              </ProtectedRoute>
              <ProtectedRoute path="/saved-movies" isLoggedIn={ isLoggedIn }>
                <SavedMovies setupIsDisabledForm={setupIsDisabledForm}/>
              </ProtectedRoute>
              <ProtectedRoute path="/profile" 
              isLoggedIn={ isLoggedIn }>
                <Profile onChange={ handleUpdateUser }
                onSignOut={ handleSignOut }
                isDisabledForm={ isDisabledForm }
                isSuccessUpdate={ isSuccessUpdate }
                resetSuccessUpdate={ resetSuccessUpdate }
                errorServerText={ serverErrorText }
                resetServerError={ resetServerError }/>
              </ProtectedRoute>
              <AuthProtectedRoute isLoggedIn={isLoggedIn} path="/signin">
                <Login onLogin={ handleLogin }
                isDisabledForm={isDisabledForm}
                errorServerText={ serverErrorText }
                resetServerError={ resetServerError }/>
              </AuthProtectedRoute>
              <AuthProtectedRoute isLoggedIn={isLoggedIn} path="/signup">
                <Register onRegister={ handleRegister }
                isDisabledForm={isDisabledForm}
                errorServerText={ serverErrorText }
                resetServerError={ resetServerError }/>
              </AuthProtectedRoute>
              <Route exact path="/">
                <Main />
              </Route>
              <Route component={ NotFound }/>
            </Switch>
            }
        </div>
      </IsLoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
