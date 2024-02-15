import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CategoryProvider from './provider/CategoryProvider.jsx'
import SearchProvider from './provider/SearchProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CategoryProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </CategoryProvider>
  </React.StrictMode>,
)
