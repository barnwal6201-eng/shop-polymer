import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart, updateQuantity } from '../redux/slice'

const CartPage = () => {
  const cartSelector = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

   

  return (
    <div className='max-w-4xl mx-auto px-6'>
      <Link to='/'>
        <h1 className='text-center mt-6 text-2xl font-semibold tracking-widest'>SHOP</h1>
      </Link>

      <h1 className='text-center mt-8 text-xl font-semibold'>Your Cart</h1>
      <p className='text-center text-gray-400 text-sm mb-8'>({cartSelector.length} items)</p>

      {cartSelector.length === 0 ? (
        <p className='flex justify-center items-center mt-40 text-2xl text-gray-400 gap-2'>
          Your <img src="/cart.png" className='h-8' /> is Empty
        </p>
      ) : (
        <>
          <div className='flex flex-col divide-y border-t border-b'>
            {cartSelector.map((item, index) => (
              <div key={index} className='flex items-center gap-4 py-4'>
                
                <img src={item.url} className='h-16 w-16 object-contain ' />

                <p className='w-48 text-sm font-medium'>{item.name}</p>

                <div className='flex items-center gap-3 text-sm text-gray-500'>
                  <label>Qty:</label>
                  <select
                  value={item.quantity || 1}
                  onChange={(e)=>dispatch(updateQuantity({id: item.id, quantity: parseInt(e.target.value)}))}
                  className='bg-transparent outline-none cursor-pointer font-semibold text-black'>
                    {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>

                  <label>Size:</label>
                  <select defaultValue="M" className='bg-transparent outline-none cursor-pointer font-semibold text-black'>
                    {['XS','S','M','L','XL'].map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <p className='ml-auto font-medium text-sm'>{(item.quantity?`$${(parseFloat(item.price.replace('$', ''))*item.quantity).toFixed(2)}`:item.price)}</p>

                <span
                  className='cursor-pointer text-gray-400 hover:text-black ml-4'
                  onClick={() => dispatch(removeFromCart(item))}
                >✕</span>

              </div>
            ))}
          </div>

          <div className='flex justify-end items-center mt-8 gap-6'>

            <p className='font-semibold'>Total:
               <span className='ml-2'>
             ${cartSelector.reduce((sum, item) => {
              return sum + parseFloat(item.price.replace('$', '')) * (item.quantity || 1)
             }, 0).toFixed(2)
             }
                </span></p>

            <Link to='/checkout'>
              <button className='border-2 border-gray-800 px-8 py-3 text-sm tracking-widest font-medium hover:bg-gray-800 hover:text-white transition-colors'>
                CHECKOUT
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage
