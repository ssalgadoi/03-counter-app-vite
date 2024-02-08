import React from 'react'
import  ReactDOM from 'react-dom/client'
import { HelloWoldApp } from './HelloWoldApp';
import { FirstApp } from './FirstApp';





ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWoldApp />
        <FirstApp />
    </React.StrictMode>
);