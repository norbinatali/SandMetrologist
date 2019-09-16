import React, { Component } from "react";
import {FormGroup, FormControl} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {HttpHeaders} from '@angular/common/http';



class Registration extends Component{


    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            username:"",
            user_email: "",
            password: "",
            user_fullname:"",
            company_name:"",
            position_name:"",
            confirmPassword: "",

        };
    }

    validateForm() {
        return (
            this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword
        );
    }


    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value,
            [event.target.username]: event.target.username,
            [event.target.password]: event.target.password,
            [event.target.confirmPassword]: event.target.confirmPassword,
            [event.target.user_fullname]: event.target.user_fullname,
            [event.target.user_email]: event.target.user_email,
            [event.target.company_name]: event.target.company_name,
            [event.target.position_name]: event.target.position_name,

        });
    };
    handleSubmit = async event => {
        event.preventDefault();
        let headers = new HttpHeaders();
        this.setState({isloading: true});
        console.log(this.state);
        headers.append('application/json',
            'Content-Type');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');


        return fetch('http://localhost:8080/registration', {
            method: 'POST',
            headers:{'Access-Control-Allow-Origin':'http://localhost:8080',
                'Content-Type':'charset=utf8',
                'Accept': 'application/json'},
            body: JSON.stringify(this.state),
            mode: "no-cors"
        }).then(response => {
            console.log(response)
        })
            .catch(error => {
                console.log(error)
            })
    };
    render() {
        const { t } = this.props;
        return (
            <form method="POST" modelattribute="userForm" onSubmit={this.handleSubmit} >
                <FormGroup controlId="username" bssize="large">
                    <FormControl autoFocus type="username"  value = {this.state.username} onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup controlId="password" bssize="large">
                    <FormControl onChange={this.handleChange} type="password" value={ this.state.password}/>
                </FormGroup>
                <FormGroup controlId="confirmPassword" bssize="large">

                    <FormControl value={this.state.confirmPassword} onChange={this.handleChange} type="password"/>
                </FormGroup>
                <FormGroup controlId="user_fullname" bssize="large">

                    <FormControl autoFocus type="user_fullname" value={this.state.user_fullname} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId="user_email" bssize="large">

                    <FormControl
                        autoFocus
                        type="user_email"
value={this.state.user_email}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="company_name" bssize="large">

                    <FormControl
                        autoFocus
                        type="company_name"

                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="position_name" bssize="large">

                    <FormControl
                        autoFocus
                        type="position_name"

                        onChange={this.handleChange}
                    />
                </FormGroup>

                <Button
                    bssize="large"
                    type="submit">
Registration
                </Button>
            </form>
        );
    }


}

export default  Registration;