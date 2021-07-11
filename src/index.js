import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Logo from './components/logo';
import Menu from './components/menu';
import Content from './components/content';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';

import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <Logo />
    <Menu />
    <Content />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
