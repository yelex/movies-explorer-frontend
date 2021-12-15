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
import { ProtectedRoute } from '../ProptectedRoute/ProtectedRoute';
import { IsLoggedInContext } from '../../contexts/IsLoggedInContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { authorize, register, getInfoAboutMe, signOut, updateInfo } from '../../utils/MainApi';
import { useHistory } from 'react-router';

import { Route, Switch } from 'react-router-dom';

function App() {

  const [ currentUser, setCurrentUser ] = React.useState({});
  const [ isLoggedIn, setIsLoggedIn ] = React.useState(false);
  const [ isLoggedInChecked, setIsLoggedInChecked ] = React.useState(false);
  const [ isSuccessUpdate, setIsSuccessUpdate ] = React.useState(false);
  const [ serverErrorText, setServerErrorText ] = React.useState('');
  const history = useHistory();

  React.useEffect(()=>{
    console.log(`isSuccess: ${isSuccessUpdate}`)
  },[isSuccessUpdate])

  React.useEffect(()=>{
    console.log(isLoggedIn)
  }, [isLoggedIn])
  
  React.useEffect(() => {
    document.title = "Диплом"
  })

  React.useEffect(() => {
    handleTokenCheck();
  },[])

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
    updateInfo(name, email).then(()=>{
      console.log('profile changed');
      setCurrentUser({...currentUser, name, email});
      setIsSuccessUpdate(true);
      console.log('im in end')
    }).catch(err=>{
      console.log(err);
      handleErrorMessage(err);
    })
  }

  function handleLogin(email, password){
    authorize(email, password)
      .then(() => {
        setIsLoggedIn(true);
        history.push('/movies');
        setServerErrorText('')
        getInfoAboutMe().then(
          ({email, name, _id}) => {
            setCurrentUser({email, name, _id})}
        )
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
    getInfoAboutMe()
    .then(({email, name, _id}) => {
      setIsLoggedIn(true);
      setCurrentUser({email, name, _id});
    })
    .catch(err => console.log(err))
    .finally(()=>{
      setIsLoggedInChecked(true)
    }) // сюда придет 401 если пользователь неавторизован
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
        {!isLoggedInChecked ? <Preloader/> :
            <Switch>
              <ProtectedRoute path="/movies" isLoggedIn={ isLoggedIn }>
                <Movies />
              </ProtectedRoute>
              <ProtectedRoute path="/saved-movies" isLoggedIn={ isLoggedIn }>
                <SavedMovies />
              </ProtectedRoute>
              <ProtectedRoute path="/profile" 
              isLoggedIn={ isLoggedIn }>
                <Profile onChange={ handleUpdateUser }
                onSignOut={ handleSignOut }
                isSuccessUpdate={ isSuccessUpdate }
                resetSuccessUpdate={ resetSuccessUpdate }
                errorServerText={ serverErrorText }
                resetServerError={ resetServerError }/>
              </ProtectedRoute>
              <Route path="/signin">
                <Login onLogin={ handleLogin } 
                errorServerText={ serverErrorText }
                resetServerError={ resetServerError }/>
              </Route>
              <Route path="/signup">
                <Register onRegister={ handleRegister } 
                errorServerText={ serverErrorText }
                resetServerError={ resetServerError }/>
              </Route>
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
