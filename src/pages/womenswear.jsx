import React from 'react'
import { Link } from 'react-router-dom'

const outerWear = [
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-24102A.jpg",
    Fname:"Ladies Modern Stretch",
    Lname:"Full Zip",
    price:'$41.60',
     id:17
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-25058A.jpg",
    Fname:"Ladies Colorblock",
    Lname:"Wind Jacket",
    price:'$45.90',
     id:18
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-24101A.jpg",
    Fname:"Ladies Voyage Fleece",
    Lname:"Jacket",
    price:'$48.00',
     id:19
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-24098A.jpg",
    Fname:"Ladies Pullover L/S",
    Lname:"Hood",
    price:'$36.50',
     id:20
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-24097A.jpg",
    Fname:"Ladies Sonoma Hybrid",
    Lname:"Knit Jacket",
    price:'$84.85',
    id:21
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-24099A.jpg",
    Fname:"Ladies Yerba Knit",
    Lname:"Quarter Zip",
    price:'$64.20',
     id:22
  }
]
const WomensWear = () => {
  return (
     <div className='px-4 sm:px-6 lg:px-10 py-4'>

      <div className='w-full h-48 sm:h-64 lg:h-80 overflow-hidden rounded-md mb-4'>

        <img src="https://shop.polymer-project.org/esm-bundled/images/ladies_outerwear.jpg"
         alt='womenswear'
         className='w-full h-full object-cover object-top'
    />
      </div>
    
    <h2 className='text-center text-lg font-semibold mt-2'>Ladies Outerwear</h2>
    <h2 className='text-center text-gray-500 text-sm mt-1'>6 items</h2>
    
     {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-8 mt-6">
        {outerWear.map((elem) => (

          <Link key={elem.id} to={`/product/${elem.id}`}>
          {/* have to add link individual card */}

          <div  className="flex flex-col items-center text-center hover:opacity-80 transition-opacity">

            {/* Image */}
            <img
              src={elem.url}
              alt={elem.Fname}
              className="h-40 sm:h-48 w-auto object-contain mb-3"
            />

            {/* Name */}
            <p className="font-semibold text-gray-800 text-xs sm:text-sm leading-snug">
              {elem.Fname} {elem.Lname && <br />} {elem.Lname}
            </p>

            {/* Price */}
            <p className="text-gray-500 text-xs sm:text-sm mt-1">{elem.price}</p>

          </div>
          </Link>
        ))}
      </div>

    </div>
  )
}

export default WomensWear
