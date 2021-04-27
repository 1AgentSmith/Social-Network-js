import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData=[
    {name: 'Valerii', age: '24', message: 'Hey, how are you?'},
    {name: 'Vlad', age: '25', message: 'It`s my first post'},
]

let DialogsData = [
    {id: 1, name: 'Vlad'},
    {id: 2, name: 'Max'},
    {id: 3, name: 'Aleksandra'},
    {id: 4, name: 'Julia'},
    {id: 5, name: 'Lipa'},
    {id: 6, name: 'Illa'}
]

let MessagesData = [
    {id: 1, messages: 'Hey'},
    {id: 2, messages: 'What`s up'},
    {id: 3, messages: 'How are you?'},
]
ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} DialogData={DialogsData} MessagesData={MessagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
