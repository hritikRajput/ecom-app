import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { FilterProvider } from "./context/FilterContext"
import { WishListProvider } from './context/WishListContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <WishListProvider>
          <App />
        </WishListProvider>
      </FilterProvider>

    </BrowserRouter>
  </React.StrictMode>,
)
