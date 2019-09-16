import React, { Component } from 'react';
import './App.css';
import Navbar, { ElementsWrapper } from './menu/navbar';
import singin from './Authorization/SignIn';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import { withCookies } from 'react-cookie';
import { Trans, withTranslation} from "react-i18next";
import { options } from './translations/options';
import Select from 'react-select';
import {Form} from "antd";
import SignIn from './Authorization/SignIn'
import Registration from './Authorization/Registration'



class Home extends Component {
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
    changeLang = (lang) => {
        const { i18n } = this.props;
        const { value } = lang;
        this.setState({
            lang,
        });
        i18n.changeLanguage(value);
    };

    login() {
        let port = (window.location.port ? ':' + window.location.port : '');
        window.location.href = '//' + window.location.hostname + port;
    }
    registration() {
        let port = (window.location.port ? ':' + window.location.port : '');
        window.location.href = '//' + window.location.hostname + port;
    }

    render() {
        const AntWrappedLoginForm = Form.create()(SignIn);
        const { lang } = this.state;
        const { t } = this.props;
        const navbarItems = [{
            label: t("Welcome"),
            target: "item-1"
        }, {
            label: t("Products"),
            target: "item-2"
        }, {
            label: t("About"),
            target: "item-3"
        }, {
            label: t("Contacts"),
            target: "item-4"
        }, {
            label: t("Login"),
            target: "item-5"
        }, {
            label: t("Costumers"),
            target: "item-6"
        }, ];
        const containerStyle = {
            width: "100%",
            margin: "100px 0 100px"
        };

        const AntWrappedSignUpForm = Form.create()(Registration);
        return (


            <div>

                <Navbar items={navbarItems} offset={-80} duration={500} delay={0}>
                        <AntWrappedLoginForm onLogin={this.props.login} style={{marginTop:100}}/>
                    <Select style={{height:200, width:20}} defaultValue={options[0]} options={options} value={lang} onChange={this.changeLang}/>
                </Navbar>
                <div style={containerStyle}>
                    <ElementsWrapper items={navbarItems}>
                        <div name="item-1" style={{ width: 100, height: 800}} >1</div>

                        <div name="item-2" style={{ width: 100, height: 800}} >item 2</div>
                        <div name="item-3" style={{ width: 100, height: 800}} >item 3</div>
                        <div name="item-4" style={{ width: 100, height: 800}}>item 4</div>
                        <div name="item-5" style={{ width: 100, height: 800}} >

                            <p>{t("Please login in")}</p>
                            <div>
                                <AntWrappedSignUpForm onSignUp={this.props.registration}/>
                            </div>
                        </div>
                        <div name="item-6" style={{ width: 100, height: 800}}>item 6</div>


                    </ElementsWrapper>


                </div>
            </div>
        );
    }
}

export default (withTranslation('translations')(withCookies(Home)));
