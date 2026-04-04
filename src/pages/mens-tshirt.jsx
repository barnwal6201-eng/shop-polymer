import React from 'react'
import { Link } from 'react-router-dom'

const tshirts = [
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-13058A.jpg",
    Fname:"YouTube Organic",
    Lname:"Cotton T-Shirt - Grey",
    price:'$14.75',
    id:23
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-13256A.jpg",
    Fname:"Inbox - Subtle Actions",
    Lname:"T-Shirt",
    price:'$17.05',
    id:24
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-13239A.jpg",
    Fname:"Adult Android",
    Lname:"Superhero T-Shirt",
    price:'$14.95',
    id:25
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-13264A.jpg",
    Fname:"Men's Vintage Heather",
    Lname:"T-Shirt",
    price:'$15.80',
    id:26
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-13265A.jpg",
    Fname:"Basic Black T-Shirt",
    price:'$16.90',
    id:27
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-13280A.jpg",
    Fname:"Local Guides T-Shirt",
    price:'$15.70',
    id:28
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-13213A.jpg",
    Fname:"Go Gopher T-Shirt in",
    Lname:"Teal",
    price:'$10.95',
    id:29
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-13285A.jpg",
    Fname:"Android Ringspun T-",
    Lname:"Shirt - Green",
    price:'$8.75',
    id:30
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-13018A.jpg",
    Fname:"Organic Cotton Android",
    Lname:"walking with dog T-Shirt",
    price:'$17.25',
    id:31
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-13270A.jpg",
    Fname:"Organic Cotton T-Shirt",
    Lname:"-Red",
    price:'$14.40',
    id:32
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-13282A.jpg",
    Fname:"Unisex Gmail T-Shirt",
    price:'$15.00',
    id:33
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-13289A.jpg",
    Fname:"Android Soccer T-Shirt",
    price:'$15.20',
    id:34
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-13262A.jpg",
    Fname:"Basic Google T-Shirt",
    price:'$13.30',
    id:35
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-13273A.jpg",
    Fname:"Tri-Blend V-Neck Tee",
    price:'$14.95',
    id:36
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-13272A.jpg",
    Fname:"Heather Pocket Tee-",
    Lname:"Light Blue",
    price:'$23.30',
    id:37
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-13276A.jpg",
    Fname:"Google Now Skyline",
    Lname:"T-Shirt",
    price:'$20.20',
    id:38
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-11019A.jpg",
    Fname:"Tri-Blend G Logo Men's",
    Lname:"Polo",
    price:'$32.70',
    id:39
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-11017A.jpg",
    Fname:"Tri-Blend Leisure Shirt",
    price:'$32.95',
    id:40
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-13153A.jpg",
    Fname:"Wise Android T-Shirt",
    price:'$19.10',
    id:41
  },
  {
    url:"https://shop.polymer-project.org/esm-bundled/data/images/10-13279A.jpg",
    Fname:"Chrome Unisex T-Shirt",
    price:'$11.35',
    id:42
  }
]
const MensTshirt = () => {
  return (
     <div className='px-6 py-4'>
    
    <img src="https://shop.polymer-project.org/esm-bundled/images/mens_tshirts.jpg" alt='mensTshirt'
    className='h-70 ml-30 sm:hidden lg:block'
    />
    
    <h2 className='text-center mt-2'>Men's T-Shirts</h2>
    <h2 className='text-center text-gray-500 mt-3'>20 items</h2>
    
     {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {tshirts.map((elem) => (

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

export default MensTshirt
