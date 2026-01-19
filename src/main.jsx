import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './Components/ScrollTop.jsx'
import { Contextprovider } from './Appcontext/Appcontext.jsx'
import { CartProvider } from './Appcontext/CartContext.jsx'

createRoot(document.getElementById('root')).render(
    <Contextprovider>
      <CartProvider >
        <StrictMode>
          <BrowserRouter>
            <ScrollToTop />
            <App />
          </BrowserRouter>
        </StrictMode>
      </CartProvider>
    </Contextprovider>
)
