import React from 'react'
import { Link, useParams } from 'react-router-dom'
import CardDetails from './carddesc'
import {useDispatch} from 'react-redux'
import { addToCart } from '../redux/slice'


const Card1 = () => {

   const {id} = useParams();
   
   
   const elem = CardDetails.find((item) => item.id === Number(id))

   const dispatch= useDispatch()
   
   if(!elem) return <p>Product not Found</p>

    
  return (
    <div>
    
    <div className="flex flex-col md:flex-row mt-10 px-10 gap-10 max-w-5xl mx-auto">
      
       <div className="flex-1">
        <img
          src={elem.url}
          alt="tshirt"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col justify-start">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          {elem.name}
        </h1>  
        <p className="text-lg text-gray-400 mb-6">{elem.price}</p>
        <hr className="border-gray-300" />
        
        <div className="flex items-center justify-between py-4">
          <label className="text-gray-400 text-base">
            Size
          </label>
         
         <select defaultValue="M" className="font-semibold text-base bg-transparent outline-none w-90" >
                    {['XS','S','M','L','XL'].map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
        </div>

        <hr className="border-gray-300" />

        
        <div className="flex items-center justify-between py-4">
          <label className="text-gray-400 text-base">
            Quantity
          </label>
         <select  className="font-semibold text-base bg-transparent outline-none w-90">
                    {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
        </div>

        <hr className="border-gray-300 mb-6" />
        
        <div className="text-sm text-gray-600 space-y-3">
          <h2 className="font-bold text-gray-800 text-base">Description</h2>
          <p>{elem.desc} </p>
          <p className="text-gray-400">Features:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {elem.feature1 && <li>{elem.feature1}</li>}
           {elem.feature2 &&  <li>{elem.feature2}</li>}
            {elem.feature3 && <li>{elem.feature3}</li>}
            {elem.feature4 && <li>{elem.feature4}</li>}
          </ul>
        </div>
       
        <button 
        onClick={()=>dispatch(addToCart(elem))}
        className="mt-8 w-full py-4 border-2 border-gray-800 text-gray-800
         text-sm tracking-widest font-medium active:bg-gray-800 active:text-white transition-colors duration-200 mb-10">
          ADD TO CART
        </button>
        

      </div>
    </div>
    </div>
  )
}

export default Card1
