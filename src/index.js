import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalFont } from './static/iconfont/iconfont';
import {GlobalStyle} from './resetCss'
import App from './App';

const APP = (<div><GlobalStyle/><GlobalFont/><App/></div>)

ReactDOM.render(APP, document.getElementById('root'));

