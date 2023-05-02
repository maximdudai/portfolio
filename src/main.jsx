import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { WebTheme } from './context/WebTheme/AppTheme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <WebTheme>
            <App />
        </WebTheme>
    </React.StrictMode>,
)
