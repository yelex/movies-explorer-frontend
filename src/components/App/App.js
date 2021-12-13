import './App.css';
import React from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import { IsLoggedInContext } from '../../contexts/IsLoggedInContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { authorize, register, checkToken } from '../../utils/MainApi';
import { useHistory, useLocation } from 'react-router';

import { Route, Switch } from 'react-router-dom';

function App() {

  const [ currentUser, setCurrentUser ] = React.useState({});
  const [ isLoggedIn, setIsLoggedIn ] = React.useState(true);
  const [ userEmail, setUserEmail ] = React.useState('');
  const history = useHistory();
  const location = useLocation();
  
  React.useEffect(() => {
    document.title = "Диплом"
  })

  React.useEffect(() => {
    handleTokenCheck();
  }, [])

  function handleLogin(email, password){
    authorize(email, password)
      .then(() => {
        setUserEmail(email);
        setIsLoggedIn(true);
        history.push('/movies');
      })
      .catch(err => {
        console.log(err)
      })
  }

  function handleRegister(name, email, password){
    console.log(name, email, password);
    register(name, email, password).then((res) => {
        console.log(res);
        if(res){
          history.push('/signin');
        }
      })
      .catch(err => {
        console.log(err);
      }
        )
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

  return (
    <CurrentUserContext.Provider value={ currentUser }>
      <IsLoggedInContext.Provider value={ isLoggedIn }>
          <div className="page">
            <Switch>
              <Route path="/movies">
                <Movies />
              </Route>
              <Route path="/saved-movies">
                <SavedMovies />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/signin">
                <Login onLogin={ handleLogin }/>
              </Route>
              <Route path="/signup">
                <Register onRegister={ handleRegister }/>
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
