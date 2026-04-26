import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { useSelector } from 'react-redux'


const Checkout = () => {

  const cartSelector = useSelector((state)=>state.cart.items)


  return (
    
    <div className="min-h-screen">
      <div className=' flex items-center justify-between px-6 py-4 '>
              <div className='w-9'> </div> 
               <Link to='/'>
            <h1 className='text-center mt-6 text-2xl font-semibold'>SHOP</h1>
            </Link>
            <Link to='/cart-page'>
            {cartSelector.length>0?
            <button className='h-4 w-4 rounded-full text-xs text-center mb-0  bg-black text-white'>{cartSelector.length}</button>:null}
            <img src="/cart.png" className='h-6' />
            </Link>
           </div>

           <h2 className='text-center mt-8 text-xl font-nomal'>Checkout</h2>
           <p className='text-center font-extralight'>Shop is a demo app - form data will not be sent</p>

           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12 lg:px-20 pb-16 mt-10">
            {/*Form */}
            <form className='flex flex-col gap-6'>
          <h3 className='text-red-500'>Account Information</h3>

           <label>Email</label>
           <input type="email" name='email' className='border h-8 w-55' />
           
           <label>Phone Number</label>
           <input type="number" name='phone' className='border h-8 w-55' />

           <h3 className='text-red-500'>Shipping Address</h3>
           <label>Address</label>
           <input type="text" name='address' className='border h-8 w-55' />

           <label>City</label>
           <input type="text" name='city' className='border h-8 w-55'/>

           <label>Country</label>
           <select className='border w-55 h-8'>
            <option value="us">United States</option>
            <option value="india">India</option>
           </select>
         </form>
          
         <div className='flex-1 flex flex-col gap-6'>

          <h2 className='font-medium text-sm text-red-400'>Payment Method</h2>

          <input type="text" placeholder='Cardholder Name'
          name='cardName'
          className='border h-8 w-55'
          />

          <h3 className='font-medium text-sm mt-2'>Order Summary</h3>
                     
            {cartSelector.map((item) => (
            <div key={item.id} className='flex justify-between text-sm text-gray-600 py-2'>
             <span>{item.name}</span>
               <span>
               ${(parseFloat(item.price.replace('$', '')) * (item.quantity || 1)).toFixed(2)}
                 </span>
                       </div>
                         ))}

                <hr className='border-gray-200' />

             {/* Total — map ke bahar, sirf ek baar dikhega */}
              <div className="flex justify-between text-sm font-medium py-3">
           <span>Total</span>
               <span>
               ${cartSelector.reduce((sum, item) => {
               return sum + parseFloat(item.price.replace('$', '')) * (item.quantity || 1)
               }, 0).toFixed(2)}
               </span>
            </div>

          <Link to='/placed-order'> 
           <button 
           className='mt-10 mb-20 border-2 h-10 w-30 hover:bg-blue-950 hover:text-white'
           >
            PLACE ORDER</button>
            </Link> 
          
         </div> 
         </div> 
         <Footer className='flex items-baseline-last'/>
    </div>
       
    
  )
}

export default Checkout
