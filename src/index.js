import React from 'react';
// import ReactDOM from 'react-dom';
// import * as ReactDOMServer from 'react-dom/server';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';

import { hydrate, render } from "react-dom";
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
