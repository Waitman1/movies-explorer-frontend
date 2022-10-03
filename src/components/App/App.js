import React, {useState} from "react";
import {Route, Switch, Link, useHistory} from 'react-router-dom';
import './App.css';

import PageError from '../PageError/PageError.jsx';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

function App ( ) {

    const history = useHistory();

    const [isNavigationOpen, setIsNavigationOpen] = useState(false);

    function onClose () {
        setIsNavigationOpen(false);
    }


    return (
        <div className="page">
            <div className="page__content">

                <Switch>
                    <Route exact={true} path = '/'>
                        <Header className =" header header-main">
                            <div className = "header__sign">
                                <Link to='/signup' className='header__sign-link'>Регистрация</Link>
                                <button className="header__sign-button" onClick= {() => history.push('./signin')} type='button'>Войти</button>
                            </div>
                        </Header>

                        <Main />
                        
                        <Footer />
                    </Route>

                    <Route  exact={true} path = '/movies'>

                        <Header className='header'>
                            <Navigation 
                            isOpen = {isNavigationOpen}
                            onClose = {onClose}/>
                            <button className='header__profile-burger' type='button' onClick = {()=>setIsNavigationOpen(true)}/>
                        </Header>

                        <Movies/>

                        <Footer />
                    </Route>

                    <Route exact={true} path = '/saved-movies'>
                        <Header className='header'>
                            <Navigation
                                isOpen = {isNavigationOpen}
                                onClose = {onClose}/>
                    
                                <button className='header__profile-burger' onClick = {()=>setIsNavigationOpen(true)} type='button'/>
                            </Header>

                        <SavedMovies />

                         <Footer />
                    </Route>

                    <Route exact={true} path = '/profile'>

                        <Header className='header'>
                            <Navigation  
                                isOpen = {isNavigationOpen}
                                onClose = {onClose}/>

                            <button className='header__profile-burger' onClick = {()=>setIsNavigationOpen(true)} type='button'/>
                        </Header>

                        <Profile />
                    </Route>

                    <Route path = '/signup'>
                        <Register />
                    </Route>

                    <Route path = '/signin'>
                        <Login />
                    </Route>

                    <Route exact={true} path = '*'>
                        <PageError />
                    </Route>
                </Switch>

            </div>
        </div>
    )
}

export default App;
