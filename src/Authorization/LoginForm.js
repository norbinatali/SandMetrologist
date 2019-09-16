import React, { Component } from 'react';
import SignIn  from '../Authorization/SignIn';
import { Link } from 'react-router-dom';
import { signin} from "../"
import Registration from '../Authorization/Registration'
import { Auth } from "aws-amplify";
import {Form, Input, Button, Icon, notification } from 'antd';
import FormItem from "antd/lib/form/FormItem";
import "../Authorization/Login.css";
import {FormControl, FormGroup} from "react-bootstrap";
import {PluginObj as axios} from "@babel/core";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';
const ACCESS_TOKEN = 'accessToken';




   class LoginForm extends Component {

       constructor(props, context) {
           super(props,context);
           this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
           this.state = {
               isLoading: false,
               username:"",
               password: "",

           };
       }
       validateForm() {
           return (
               this.state.username.length > 0 &&
               this.state.password.length > 0);
       }
       changeLang = (lang) => {
           const { i18n } = this.props;
           const { value } = lang;
           this.setState({
               lang,
           });
           i18n.changeLanguage(value);
       };
       handleLoginChange = event => {
           this.setState({
                   [event.target.username]: event.target.username,
                   [event.target.password]: event.target.password,


               });
           };


       handleLoginSubmit= async event => {
           const { username, password } = this.state;
           event.preventDefault();
           console.log(this.state)
           this.props.form.validateFields((err, values) => {
               fetch('http://localhost:8080/signin',{
                   method: 'POST',
                   headers: {
                       Accept: 'application/json',
                       'Content-Type': 'application/json',
                   },
                   body: JSON.stringify(this.state)
               }).then(response => {
                   console.log(response)
               })
                   .catch(error =>{
                       console.log(error)
                   })
       })
       }


       render() {
           const { t } = this.props;
           const loginStyle={display: "flex", float: "left", marginTop: "100 0 100",};
           return (

               <Form onSubmit={this.handleLoginSubmit}  layout={"inline"} className="Login" >
                   <FormGroup controlId={this.state.username} bssize="large">
                       <FormControl
                           autoFocus
                           type="username"
                           placeholder={this.state.username}
                           onChange={this.handleLoginChange}
                       />
                   </FormGroup>
                   <FormGroup controlId={this.state.password} bssize="large">
                       <FormControl
                       onChange={this.handleLoginChange}
                      defaultValue={this.state.password}
                       type="password"
                       />
                   </FormGroup>
                   <Button
                       bssize="large"
                       disabled={!this.validateForm()}
                       type="submit">
                       Login
                   </Button>

               </Form>

           );
       }

   }

export default LoginForm;
