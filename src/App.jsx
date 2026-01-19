import React, { useContext, useState } from 'react'
import Topbar from './Components/Topbar/Topbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Navbottom from './Components/Navbottom/Navbottom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Foooter/Foooter'
import Product from './Pages/Product/Product'
import WhatsAppFloat from './Components/WhatsAppFloat/WhatsAppFloat'
import { Appcontext } from './Appcontext/Appcontext'
import { ToastContainer } from 'react-toastify'
import AuthPage from './Pages/logSign/logSign'
import Profile from './Pages/Profile/Profile'
import PrivateRoute from './Appcontext/authwrapper'
import CartPage from './Pages/CartPage/CartPage'
import Checkout from './Pages/CheckoutPage/CheckoutPage'

export default function App() {
  const [Routelist, setRoutelist] = useState([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/shop",
      element: <Shop />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/product/:id",
      element: <Product />
    },
    {
      path: "/profile",
      element: <PrivateRoute><Profile /></PrivateRoute>
    },
    {
      path: "/CartPage",
      element: <CartPage />
    },
    {
      path: "/Checkout",
      element: <PrivateRoute><Checkout /></PrivateRoute>
    }
  ])

  const location = useLocation();

  if (location.pathname === '/AuthPage') {
    return <AuthPage />;
  }


  return (
    <div>

      <ToastContainer />
      <WhatsAppFloat />
      <Topbar />
      <Navbar />

      {/* --------- under Navbar-------- */}
      {(location.pathname === '/' || location.pathname === '/shop') && (
        <Navbottom />
      )}
      {/* -------   website routers   ------- */}

      <Routes>
        {Routelist.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>

      <Footer />

    </div>
  )
}
