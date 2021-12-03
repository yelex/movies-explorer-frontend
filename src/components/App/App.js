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

import { Route, Switch } from 'react-router-dom';

function App() {

  const [ isLoggedIn, setIsLoggedIn ] = React.useState(false);
  
  React.useEffect(()=>{
    document.title = "Диплом"
  })

  return (
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
              <Login />
            </Route>
            <Route path="/signup">
              <Register />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
            <Route component={NotFound}/>
          </Switch>
      </div>
    </IsLoggedInContext.Provider>
  );
}

export default App;
