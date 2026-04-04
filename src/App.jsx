import React from 'react'
import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './pages/AppLayout'
import LandingPage from './pages/LandingPage'
import MensWear from './pages/menswear'
import MensTshirt from './pages/mens-tshirt'
import WomensWear from './pages/womenswear'
import WomenTshirt from './pages/womens-tshirt'
import CartPage from './pages/Cart';
import Card1 from './components/card1';
import Checkout from './pages/Checkout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children:[
      {
        path:'/',
        element: <LandingPage />
      },
      {
        path:'/menswear',
        element: <MensWear />
      },
      {
        path:'/mens-tshirt',
        element: <MensTshirt />
      },
      {
        path:'/womenswear',
        element: <WomensWear />
      },
      {
        path:'/womens-tshirt',
        element: <WomenTshirt />
      },
      {
        path:'/product/:id',
        element: <Card1 />
      }
    ]
  },
  {
        path:'/cart-page',
        element: <CartPage />
      },
      {
        path:'/checkout',
        element: <Checkout />
      }
  
])

const App = () => {
  return  <RouterProvider router={router} />
}

export default App

