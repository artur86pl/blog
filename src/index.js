import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fontello/css/awes.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';

import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <main>
      <Content />
    </main>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
