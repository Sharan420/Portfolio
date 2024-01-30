import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { VideoState } from './Contexts/VideoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VideoState>
      <App />
    </VideoState>
  </React.StrictMode>,
)
