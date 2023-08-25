import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { FilterProvider } from "./context/FilterContext"
import { WishListProvider } from './context/WishListContext'
import { AuthProvider } from "./context/AuthContext/AuthContext"
import { CartProvider } from './context/CartContext/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <WishListProvider>
          <AuthProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </AuthProvider>
        </WishListProvider>
      </FilterProvider>

    </BrowserRouter>
  </React.StrictMode>,
)
