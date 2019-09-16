import React, {Component} from 'react';
import SignIn from './Authorization/SignIn';
import Home from './Home';
import User from './User/User';
import Admin from './Admin/Admin';
import Registration from './Authorization/Registration'
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from "react-router-dom";

class App extends Component{
    redirect = () => {
        window.location.href = 'http://localhost:8080/';
        // maybe can add spinner while loading
        return null;
    }
    render() {
        return (
            <CookiesProvider>
                <BrowserRouter>
                    <Route path="/" exact render={props => <Home{...props} />} />
                    <Route path ='/SignIn'  render={props => <SignIn{...props} />} />
                    <Route path='/Registration' render={props => <Registration{...props}/>} />
                    <Route path ='/User'  render={props => <User{...props} />} />
                    <Route path ='/Admin'  render={props => <Admin{...props} />} />
                </BrowserRouter>
            </CookiesProvider>
        );
    }
}

export default App;