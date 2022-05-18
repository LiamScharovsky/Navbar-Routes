import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {App} from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Everything in green are considered components */}
    <BrowserRouter> 
    {/* This is the whole application */}
    <App />   
    </BrowserRouter>
  </React.StrictMode>
)
