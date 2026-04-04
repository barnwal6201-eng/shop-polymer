import React from 'react'
import { Link } from 'react-router-dom'

const outerwear = [
  {
    image: "https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg",
    id: 1,
    name: "Men's Outerwear",
    pages: "/menswear"
  },
  {
    image: "https://shop.polymer-project.org/esm-bundled/images/ladies_outerwear.jpg",
    id: 2,
    name: "Ladies Outerwear",
    pages:"/womenswear"
  },
]

const tshirts = [
  {
    image: "https://shop.polymer-project.org/esm-bundled/images/mens_tshirts.jpg",
    id: 3,
    name: "Men's T-Shirts",
    pages: "/mens-tshirt"
  },
  {
    image: "https://shop.polymer-project.org/esm-bundled/images/ladies_tshirts.jpg",
    id: 4,
    name: "Ladies T-Shirts",
    pages: "/womens-tshirt"
  }
]

const Card = ({ elem }) => (
  <div key={elem.id} className="flex flex-col items-center mt-6">
    <Link to={elem.pages}>
    <img
      src={elem.image}
      alt={elem.name}
      className="w-full h-80 object-cover"
    />
    </Link>
    <p className="mt-6 mb-4 tracking-wider">
      {elem.name}
    </p>
    <Link to={elem.pages}>
    <button className="mb-8 px-10 py-3 border-2 text-x tracking-widest cursor-pointer active:bg-black active:text-white">
      SHOP NOW
    </button>
    </Link>
  </div>
)

const LandingPage = () => {

  return (
    <div>

      {/* Outerwear - stacked vertically, full width */}
      {outerwear.map((elem) => (
        <Card key={elem.id} elem={elem} />
      ))}

      {/* T-Shirts - side by side */}
      <div className=" grid grid-cols-2 lg:ml-10 lg:mr-10 ">
        {tshirts.map((elem) => (
          <Card key={elem.id} elem={elem} />
        ))}
      </div>

    </div>
  )
}

export default LandingPage
