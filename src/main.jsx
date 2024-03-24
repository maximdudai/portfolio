import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/index.scss'

import { Analytics } from "@vercel/analytics/react"

import { WebTheme } from './context/WebTheme/AppTheme.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter>
            <WebTheme>
                <App />
            </WebTheme>

            {/* vercel */}
            <Analytics />
            
        </BrowserRouter>
    </React.StrictMode>,
)
