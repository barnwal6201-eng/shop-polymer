import React from 'react'
import { Link } from 'react-router-dom'

const outerWear = [
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-15068A.jpg",
    Fname:"Men's Tech Shell Full-",
    Lname:"Zip",
    price:'$50.20',
    id:1
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-14154A.jpg",
    Fname:"Anvil L/S Crew Neck-",
    Lname:"Grey",
    price:'$22.15',
     id:2
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-14157A.jpg",
    Fname:"Green Flex Fleece Zip",
    Lname:"Hoodie",
    price:'$45.65',
     id:3
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-15041A.jpg",
    Fname:"Android Nylon",
    Lname:"Packable Jacket",
    price:'$33.60',
     id:4
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-14133A.jpg",
    Fname:"YouTube Ultimate",
    Lname:"Hooded Sweatshirt",
    price:'$32.35',
     id:5
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-14160A.jpg",
    Fname:"Grey Heather Fleece",
    Lname:"Zip Hoodie",
    price:'$38.85',
     id:6
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-14153A.jpg",
    Fname:"Vastrm Hoodie",
    price:'$200.00',
     id:7
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-14158A.jpg",
    Fname:"Recycled Plastic Bottle",
    Lname:"Hoodie - Green",
    price:'$60.95',
     id:8
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-14152A.jpg",
    Fname:"Rowan Pullover Hood",
    price:'$60.85',
     id:9
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-14155A.jpg",
    Fname:"Men's Voyage Fleece",
    Lname:"Jacket",
    price:'$48.00',
     id:10
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-14159A.jpg",
    Fname:"Eco-Jersey Chrome Zip",
    Lname:"Up Hoodie",
    price:'$37.75',
     id:11
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-14146A.jpg",
    Fname:"Android Colorblock",
    Lname:"Hooded Pullover",
    price:'$50.20',
     id:12
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-14216A.jpg",
    Fname:"Tri-blend Full-Zip",
    Lname:"Hoodie",
    price:'$52.20',
     id:13
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-14215A.jpg",
    Fname:"Fleece Full-Zip Hoodie",
    price:'$45.65',
     id:14
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-14217A.jpg",
    Fname:"Jacquard-Knit Full-Zip",
    Lname:"Fleece",
    price:'$74.90',
     id:15
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-15103A.jpg",
    Fname:"YouTube Unisex Flex",
    Lname:"Fleece Zip Hoodie",
    price:'$45.25',
     id:16
  },
]
const MensWear = () => {
  return (
    <div className='px-6 py-4'>
    
    <img src="/menswear.png" alt='menswear'
    className='h-70 ml-30 sm:hidden lg:block'
    />

    <h2 className='text-center mt-2'>Men's Outerwear</h2>
    <h2 className='text-center text-gray-500 mt-3'>16 items</h2>
    
     {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {outerWear.map((elem) => (

          <Link key={elem.id} to={`/product/${elem.id}`}>
          {/* have to add link individual card */}


          <div  className="flex flex-col items-center text-center">

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
  )
}

export default MensWear
