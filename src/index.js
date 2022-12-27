import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* this app can be understood as the entire react application */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// So what's happening here is that our index.js is looking for some element with an idea of root. And as we see in the index.html , there is a div which has the ID of root. So what React is saying is, oh, I want you to take that div and I want you to replace that div and render into it our entire React application(<App/> this is present in the <React.StrictMode> in the index.js itself).And that's what this is doing right here.So that's pretty much how React actually works with HTML.
// For making react applications we need to import react and react dom , react dom is for the web.