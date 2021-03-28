import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
    {id: 1, postContent: "Эй))", likesCount: "15"},
    {id: 2, postContent: "Кек", likesCount: "20"}
]


let dialogs = [
    {id: "1", name: "Artem"},
    {id: "2", name: "Parahat"},
    {id: "3", name: "Ramil"},
    {id: "4", name: "Anton"},
    {id: "5", name: "Timur"},
    {id: "6", name: "Ildar"}
]

let messages = [
    {id: "1", message: "privet Sergey)"},
    {id: "2", message: "Privet)"},
    {id: "3", message: "kak dela?"},
    {id: "4", message: "Otlichno"},
    {id: "5", message: "u tebya kak?"},
    {id: "6", message: "horosho"},
    {id: "7", message: "Sergey esli mozhno u menya pros'ba est'"},
    {id: "8", message: "u nas segodnya kontrol'niy po diffira"}
]

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
