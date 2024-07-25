import React from 'react';
import ReactDOM from 'react-dom/client';
import Heading from './Heading';
import Nav from './Nav';
import Pictures from './Pictures';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Nav/>
  <Heading />
  <Pictures />
  
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
