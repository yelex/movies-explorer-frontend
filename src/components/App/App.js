import './App.css';
import React from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { Route, Switch } from 'react-router-dom';

function App() {

  const [ isLoggedIn, setIsLoggedIn ] = React.useState(true);
  
  React.useEffect(()=>{
    document.title = "Диплом"
  })

  return (
    <div className="page">
      <Header isLoggedIn={ isLoggedIn }/>
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
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
