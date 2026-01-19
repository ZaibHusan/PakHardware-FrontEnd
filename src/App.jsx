import React, { useContext, useState } from 'react'
import Topbar from './Components/Topbar/Topbar.jsx'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Shop from './Pages/Shop/Shop.jsx'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Navbottom from './Components/Navbottom/Navbottom.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Foooter/Foooter.jsx'
import Product from './Pages/Product/Product.jsx'
import WhatsAppFloat from './Components/WhatsAppFloat/WhatsAppFloat.jsx'
import { Appcontext } from './Appcontext/Appcontext.jsx'
import { ToastContainer } from 'react-toastify'
import AuthPage from './Pages/logSign/logSign.jsx'
import Profile from './Pages/Profile/Profile.jsx'
import PrivateRoute from './Appcontext/authwrapper.jsx'
import CartPage from './Pages/CartPage/CartPage.jsx'
import Checkout from './Pages/CheckoutPage/CheckoutPage.jsx'

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
