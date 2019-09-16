import React, {Component} from "react";
import { Menu } from 'react-burger-menu'


class User extends Component{
    showSettings (event) {
        event.preventDefault();
    }
    state = {
        isLoading: true,
        isAuthenticated: false,
        user: undefined,
        selectedOption: null
    };
    constructor(props) {
        super(props);
        const {cookies} = props;
        this.state.csrfToken = cookies.get('XSRF-TOKEN');
        this.login = this.login.bind(this);

    }

render() {

    return(
        <Menu>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
    );






}

}

export default User;