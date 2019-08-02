// @flow

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';

import App from './components/App';
import './style.scss';

// polyfill startsWith for IE
if (!String.prototype.startsWith) {
  (String.prototype: any).startsWith = function startsWithExtend(search, pos) {
    return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
  };
}

const root = document.getElementById('root');

if (root !== null) {
  ReactDOM.render(<App />, root);
}
