import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { hidePopup } from '../redux/slice';


const Header = () => {
  const navigate = useNavigate();
  const location = useLocation()

  const isProductPage = location.pathname.includes('/product/') || location.pathname.includes('/checkout')

  const cartSelector = useSelector((state)=>state.cart.items)
  console.log(cartSelector)

  const showPopup = useSelector((state) => state.cart.showPopup)
  const dispatch = useDispatch()

  return (
    <div className='flex flex-col'>
     <div className=' flex items-center justify-between px-6 py-4'>
      
       <div className='w-9'>
        {/*Back icon */}
      {isProductPage && 
      <img src="/back_icon.png" alt="Back"
       className="cursor-pointer h-6 m-4"
       onClick={()=> navigate(-1)}
      />}
       </div>

         <Link to='/'>
      <h1 className='text-center mt-6 text-2xl font-semibold'>SHOP</h1>
      </Link>

      <Link to='/cart-page'>
      {cartSelector.length>0?<button className='h-4 w-4 rounded-full text-xs text-center mb-0  bg-black text-white'>{cartSelector.length}</button>:null}
      <img src="/cart.png" className='h-6' />
      </Link>
     </div>

     {/* Popup message */}
      {showPopup?
    <div className='h-25 w-50 border-2 sm:ml-135 lg:ml-320 mt-20 bg-white fixed'>
      <p className='flex justify-around mt-1'><span>added to cart</span>
      <span className='text-xl h-4 w-5 cursor-pointer' onClick={()=> dispatch(hidePopup())}>✕</span>
      </p>
      <div className='flex justify-around mt-6'>
        <Link to="/cart-page">
        <button className='border h-8 w-20 cursor-pointer'>VIEWCART</button>
        </Link>
       <Link t0="/checkout">
       <button className='border h-8 w-20'>CHECKOUT</button>
        </Link>
       </div>
    </div>:null  
    }

      <div className='mt-4 text-center '>

      <Link to='/menswear'>
      <span className='mr-5 active:bg-gray-200'>Men's Outerwear</span>
      </Link>

      <Link to='/womenswear'>
      <span className='mr-5 active:bg-gray-200'>Ladies Outerwear</span>
      </Link>

      <Link to='/mens-tshirt'>
      <span className='mr-5 active:bg-gray-200'>Men's T-Shirts</span>
      </Link>

      <Link to='/womens-tshirt'>
      <span className='active:bg-gray-200'>Ladies T-Shirts</span>
      </Link>
      </div>
    </div>
  )
}

export default Header
