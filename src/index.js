import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './Nav';
import Heading from './Heading';
import Earth from './Earth';
import All_geminids from './All_geminids';
import Stars from './Stars';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Nav />
  <Heading />
  <Earth />
  <All_geminids />
  <Stars />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
