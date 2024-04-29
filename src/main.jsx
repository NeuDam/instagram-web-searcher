import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'boxicons'
import { ContextStateProvider } from './Context/ContextState.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextStateProvider>
    <App />
  </ContextStateProvider>
)
