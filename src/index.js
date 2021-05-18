import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ContactService from './services/contact-service';
import ContactServiceContext from './components/contact-service-context/';

const contactService = new ContactService();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <ContactServiceContext.Provider value={contactService}>
                <App />
            </ContactServiceContext.Provider>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
