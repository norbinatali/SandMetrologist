import React, { Component } from "react";
import LoginForm from '../Authorization/LoginForm'
import {Route} from "react-router";
import Registration from './Registration';
import {Link} from "react-router-dom";

import { Form, Input, Button, Icon, notification } from 'antd';
const FormItem = Form.Item;


class SignIn extends Component {

    constructor(pops) {
        super(pops);
        this.state = {
            username: '',
            password: '',
            error: '',
        };
    }

    render() {
        const loginStyle={
            display: "flex",
            float: "left",
            width: "10%",
        };
        const AntWrappedLoginForm = Form.create()(LoginForm);
        return (
            <div >

                    <AntWrappedLoginForm onLogin={this.props.login}/>

            </div>
        );
    }
}
    export default SignIn;


