import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/slice';

const OrderPlaced = () => {
  const [step, setStep] = useState(-1); // -1 = nothing filled yet
   const cartSelector = useSelector((state) => state.cart.items);
   const dispatch = useDispatch()

  const orderHandler = () => {
   
    [-1, 0, 1, 2, 3].forEach((_, i) => {
      setTimeout(() => setStep(i), i * 1500);
      
    });
  }

  useEffect(() => {
  if (step === 3) {
     setTimeout(()=>alert("Delivered Successfully"), 1000);
     dispatch(clearCart())
  }
}, [step]);

  const circles = ["Ordered", "Shipping", "Out for delivery", "Delivered"];

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-center text-3xl mt-24'>Order Placed</h1>

      <div className='flex justify-center mt-40'>
        {circles.map((string, i) => (
          <React.Fragment key={string}>
            <span className={`h-7 border-2 w-7 rounded-full transition-colors duration-500 
              ${step >= i ? 'bg-green-500 border-green-500' : 'bg-white'}`}
            ></span>
            {i < circles.length - 1 && (
              <span className={`h-1 w-40 mt-3 transition-colors duration-500
                ${step > i ? 'bg-green-500' : 'bg-gray-400'}`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className='flex justify-center mt-2 gap-25'>
        {circles.map((n, i) => (
          <span key={n} className={` text-center text-sm
            ${step >= i ? 'text-green-500 font-semibold' : 'text-gray-400'}`}>
            {n}
          </span>
        ))}
      </div>

      <button
        onClick={orderHandler}
        disabled={step >= 0}
        className='mt-20 text-xl h-15 w-30 bg-gray-500 rounded-2xl cursor-pointer active:bg-blue-900 hover:rotate-6 text-white disabled:opacity-50'
      >Confirm</button>

      <Link to="/">
      <button className='mt-5 text-xl h-15 w-35 border-2 bg-gray-500 rounded-3xl text-white active:bg-white active:text-black cursor-pointer'>Back to Shop</button>
    </Link>
    
    </div>
  )
}

export default OrderPlaced


