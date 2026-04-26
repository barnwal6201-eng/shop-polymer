import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'


const AppLayout = () => {

  const location = useLocation()

  useEffect(()=>{
    const titles ={
      '/': 'Home',
      '/menswear': "Men's Outerwear",
      '/womenswear': "Ladies Outerwear",
      '/mens-tshirt': "Men's T-Shirts",
      '/womens-tshirt': "Ladies T-Shirts",
      '/cart-page': "Cart",
      '/checkout': "Checkout",
      '/placed-order': "Ordered"
    }
    document.title = titles[location.pathname] || 'Cart'
  },[location.pathname])

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppLayout
