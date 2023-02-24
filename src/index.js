import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Context} from "./Context";
//fonts
import './assets/fonts/SFPro/stylesheet.css'
import './assets/fonts/Inter/stylesheet.css'
import './assets/fonts/PragmaticaCondCTT/stylesheet.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context>
        <App/>
    </Context>
);