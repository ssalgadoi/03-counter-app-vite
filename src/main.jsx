import React from 'react'
import  ReactDOM from 'react-dom/client'
import { HelloWoldApp } from './HelloWoldApp';
import { FirstApp } from './FirstApp';
import './styles.css'





ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWoldApp />
        <FirstApp  
        title="Hola , soy el Shipy" 
        subTitle={ 123 }/>
    </React.StrictMode>
);