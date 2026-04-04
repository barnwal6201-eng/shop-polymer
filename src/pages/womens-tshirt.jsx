import React from 'react'
import { Link } from 'react-router-dom'

const tshirts = [
 {
  url:"https://shop.polymer-project.org/esm-bundled/data/images/10-23180A.jpg",
  Fname:"Ladies Chrome T-Shirt",
  price:'$13.30',
  id:43
 },
 {
  url:"https://shop.polymer-project.org/esm-bundled/data/images/10-23226A.jpg",
  Fname:"Ladies Google New",
  Lname:"York T-Shirt",
  price:'$18.35',
  id:44
 },
 {
  url:"https://shop.polymer-project.org/esm-bundled/data/images/10-23179A.jpg",
  Fname:"Ladies Gmail T-Shirt",
  price:'$16.40',
  id:45
 },
 {
  url:"https://shop.polymer-project.org/esm-bundled/data/images/10-23178A.jpg",
  Fname:"Ladies G Logo White T-",
  Lname:"Shirt",
  price:'$13.30',
  id:46
 },
 {
  url:"https://shop.polymer-project.org/esm-bundled/data/images/10-23177A.jpg",
  Fname:"Ladies Android Pride",
  Lname:"T-Shirt",
  price:'$19.10',
  id:47
 },
 {
  url:"https://shop.polymer-project.org/esm-bundled/data/images/10-23172A.jpg",
  Fname:"Ladies Ringspun Crew",
  Lname:"Neck",
  price:'$19.70',
  id:48
 },
 {
  url:"https://shop.polymer-project.org/esm-bundled/data/images/10-23227A.jpg",
  Fname:"Ladies Tri-Blend V-",
  Lname:"Neck T-Shirt",
  price:'$35.10',
  id:49
 },
 {
  url:"https://shop.polymer-project.org/esm-bundled/data/images/10-23228A.jpg",
  Fname:"Bella Ladies Favorite",
  Lname:"Tee",
  price:'$10.50',
  id:50
 },
 {
  url:"https://shop.polymer-project.org/esm-bundled/data/images/10-23176A.jpg",
  Fname:"Ladies Bamboo T-Shirt",
  price:'$20.65',
  id:51
 },
 {
  url:"https://shop.polymer-project.org/esm-bundled/data/images/10-23173A.jpg",
  Fname:"Ladies L/S Colorblock",
  Lname:"Raglan",
  price:'$36.95',
  id:52
 },
 {
  url:"https://shop.polymer-project.org/esm-bundled/data/images/10-23171A.jpg",
  Fname:"Bella Scoop-Neck",
  Lname:"Ladies T-Shirt",
  price:'$13.10',
  id:53
 },
 {
  url:"https://shop.polymer-project.org/esm-bundled/data/images/10-23225A.jpg",
  Fname:"Ladies Not For Sale",
  Lname:"T-Shirt",
  price:'$24.00',
  id:54
 },
 {
  url:"https://shop.polymer-project.org/esm-bundled/data/images/10-23198A.jpg",
  Fname:"Ladies Android L/S",
  Lname:"Stretch T-Shirt",
  price:'$20.00',
  id:55
 },
 {
  url:"https://shop.polymer-project.org/esm-bundled/data/images/10-23229A.jpg",
  Fname:"Ladies Mountain View",
  Lname:"T-Shirt",
  price:'$17.50',
  id:56
 },
 {
  url:"https://shop.polymer-project.org/esm-bundled/data/images/10-23169A.jpg",
  Fname:"Ladies Blueprint for a",
  Lname:"Better Inbox T-Shirt",
  price:'$14.30',
  id:57
 }
]

const WomenTshirt = () => {
  return (
    <div>
       <div className='px-6 py-4'>
    
    <img src="https://shop.polymer-project.org/esm-bundled/images/ladies_tshirts.jpg" alt='womensTshirt'
    className='h-70 ml-30 sm:hidden lg:block'
    />
    
    <h2 className='text-center mt-2'>Ladies T-Shirts</h2>
    <h2 className='text-center text-gray-500 mt-3'>15 items</h2>
    
     {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {tshirts.map((elem) => (

          <Link key={elem.id} to={`/product/${elem.id}`}>
          {/* have to add link individual card */}


          <div className="flex flex-col items-center text-center">

            {/* Image */}
            <img
              src={elem.url}
              alt={elem.Fname}
              className="h-52 w-auto object-contain mb-4"
            />

            {/* Name */}
            <p className="font-bold text-gray-800 text-sm leading-snug">
              {elem.Fname} {elem.Lname && <br />} {elem.Lname}
            </p>

            {/* Price */}
            <p className="text-gray-500 text-sm mt-1">{elem.price}</p>

          </div>
          </Link>
        ))}
      </div>

    </div>
    </div>
  )
}

export default WomenTshirt
