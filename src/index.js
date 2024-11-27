import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {FaStar} from "react-icons/fa";
//import App from './App';

const createArray = (length) =>[
  ...Array(length)
];

function Star() {
  return <FaStar />;
}

function StarRating({totalStars}){
  return createArray(totalStars).map((n,i)=>(
  <Star key={i} />
));
}
function App(){
  return <StarRating totalStars={10} />;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

