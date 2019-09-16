import React,{ Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import i18n from "./translations/i18n";
const Loader = () => <div>...</div>;
ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <CookiesProvider>
            <BrowserRouter basename="/cgadmin-react-primeng/">
                <Suspense fallback={<Loader />}>
        <App />
                </Suspense>
            </BrowserRouter>
        </CookiesProvider>
    </I18nextProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
