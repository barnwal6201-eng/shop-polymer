import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { useSelector } from 'react-redux'


const Checkout = () => {

  const cartSelector = useSelector((state)=>state.cart.items)

  return (
    <div>
      <div className=' flex items-center justify-between px-6 py-4'>
              <div className='w-9'> </div> 
               <Link to='/'>
            <h1 className='text-center mt-6 text-2xl font-semibold'>SHOP</h1>
            </Link>
            <Link to='/cart-page'>
            {cartSelector.length>0?<button className='h-4 w-4 rounded-full text-xs text-center mb-0  bg-black text-white'>{cartSelector.length}</button>:null}
            <img src="/cart.png" className='h-6' />
            </Link>
           </div>

           <h2 className='text-center mt-8 text-xl font-nomal'>Checkout</h2>
           <p className='text-center font-extralight'>Shop is a demo app - form data will not be sent</p>

           {/*Form */}
         <form className='flex flex-col gap-3 ml-5 mt-7'>
          <h3 className='text-red-500'>Account Information</h3>

           <label>Email</label>
           <input type="email" className='border h-8 w-55' />
           
           <label>Phone Number</label>
           <input type="number" className='border h-8 w-55' />

           <h3 className='text-red-500'>Shipping Address</h3>
           <label>Address</label>
           <input type="text" className='border h-8 w-55' />

           <label>City</label>
           <input type="text" className='border h-8 w-55'/>

           <label>Country</label>
           <select className='border w-55 h-8'>
            <option value="us">United States</option>
            <option value="india">India</option>
           </select>
         </form>
         <button className='mt-10 ml-50 mb-20 border-2 h-10 w-30 hover:bg-blue-950 hover:text-white'>PLACE ORDER</button>

      <Footer/>
    </div>
  )
}

export default Checkout
