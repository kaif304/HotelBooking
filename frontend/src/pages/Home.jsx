import React from 'react'
import {Link} from "react-router-dom"
import HotelCard from "../components/HotelCard"
import "./Home.css"

function Home() {

  let hotels = [
    {
      image1:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2:"https://th.bing.com/th/id/OIP.QWI8Giug40sitW7phbSvMwHaFj?w=3200&h=2400&rs=1&pid=ImgDetMain",
      image3:"https://th.bing.com/th/id/OIP.hQmb72S54gr3Y461vFkwJAHaE7?w=800&h=532&rs=1&pid=ImgDetMain",
      image4:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",

      name:"DownTown Arambol - The River Side Hostel",
      description: "The rooms at the hostel are fitted with a seating area.",
      location: "Arambol Beach Road, 403524 Arambol, India Excellent location — rated 9.3/10!(score from 44 reviews)Real guests • Real stays • Real opinions",
      price: 2828,
    },
    {
      image1:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2:"https://th.bing.com/th/id/OIP.QWI8Giug40sitW7phbSvMwHaFj?w=3200&h=2400&rs=1&pid=ImgDetMain",
      image3:"https://th.bing.com/th/id/OIP.hQmb72S54gr3Y461vFkwJAHaE7?w=800&h=532&rs=1&pid=ImgDetMain",
      image4:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",

      name:"DownTown Arambol - The River Side Hostel",
      description: "The rooms at the hostel are fitted with a seating area, a flat-screen TV with satellite channels and a private bathroom with a hairdryer and a shower.",
      location: "Arambol Beach Road, 403524 Arambol, India Excellent location — rated 9.3/10!(score from 44 reviews)Real guests • Real stays • Real opinions",
      price: 2828,
    },
    {
      image1:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2:"https://th.bing.com/th/id/OIP.QWI8Giug40sitW7phbSvMwHaFj?w=3200&h=2400&rs=1&pid=ImgDetMain",
      image3:"https://th.bing.com/th/id/OIP.hQmb72S54gr3Y461vFkwJAHaE7?w=800&h=532&rs=1&pid=ImgDetMain",
      image4:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",

      name:"DownTown Arambol - The River Side Hostel",
      description: "The rooms at the hostel are fitted with a seating area, a flat-screen TV with satellite channels and a private bathroom with a hairdryer and a shower.",
      location: "Arambol Beach Road, 403524 Arambol, India Excellent location — rated 9.3/10!(score from 44 reviews)Real guests • Real stays • Real opinions",
      price: 2828,
    },
    {
      image1:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2:"https://th.bing.com/th/id/OIP.QWI8Giug40sitW7phbSvMwHaFj?w=3200&h=2400&rs=1&pid=ImgDetMain",
      image3:"https://th.bing.com/th/id/OIP.hQmb72S54gr3Y461vFkwJAHaE7?w=800&h=532&rs=1&pid=ImgDetMain",
      image4:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",

      name:"DownTown Arambol - The River Side Hostel",
      description: "The rooms at the hostel are fitted with a seating area, a flat-screen TV with satellite channels and a private bathroom with a hairdryer and a shower.",
      location: "Arambol Beach Road, 403524 Arambol, India Excellent location — rated 9.3/10!(score from 44 reviews)Real guests • Real stays • Real opinions",
      price: 2828,
    },
    {
      image1:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2:"https://th.bing.com/th/id/OIP.QWI8Giug40sitW7phbSvMwHaFj?w=3200&h=2400&rs=1&pid=ImgDetMain",
      image3:"https://th.bing.com/th/id/OIP.hQmb72S54gr3Y461vFkwJAHaE7?w=800&h=532&rs=1&pid=ImgDetMain",
      image4:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",

      name:"DownTown Arambol - The River Side Hostel",
      description: "The rooms at the hostel are fitted with a seating area, a flat-screen TV with satellite channels and a private bathroom with a hairdryer and a shower.",
      location: "Arambol Beach Road, 403524 Arambol, India Excellent location — rated 9.3/10!(score from 44 reviews)Real guests • Real stays • Real opinions",
      price: 2828,
    },
    {
      image1:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2:"https://th.bing.com/th/id/OIP.QWI8Giug40sitW7phbSvMwHaFj?w=3200&h=2400&rs=1&pid=ImgDetMain",
      image3:"https://th.bing.com/th/id/OIP.hQmb72S54gr3Y461vFkwJAHaE7?w=800&h=532&rs=1&pid=ImgDetMain",
      image4:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",

      name:"DownTown Arambol - The River Side Hostel",
      description: "The rooms at the hostel are fitted with a seating area, a flat-screen TV with satellite channels and a private bathroom with a hairdryer and a shower.",
      location: "Arambol Beach Road, 403524 Arambol, India Excellent location — rated 9.3/10!(score from 44 reviews)Real guests • Real stays • Real opinions",
      price: 2828,
    },
    {
      image1:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2:"https://th.bing.com/th/id/OIP.QWI8Giug40sitW7phbSvMwHaFj?w=3200&h=2400&rs=1&pid=ImgDetMain",
      image3:"https://th.bing.com/th/id/OIP.hQmb72S54gr3Y461vFkwJAHaE7?w=800&h=532&rs=1&pid=ImgDetMain",
      image4:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",

      name:"DownTown Arambol - The River Side Hostel",
      description: "The rooms at the hostel are fitted with a seating area, a flat-screen TV with satellite channels and a private bathroom with a hairdryer and a shower.",
      location: "Arambol Beach Road, 403524 Arambol, India Excellent location — rated 9.3/10!(score from 44 reviews)Real guests • Real stays • Real opinions",
      price: 2828,
    },
    {
      image1:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2:"https://th.bing.com/th/id/OIP.QWI8Giug40sitW7phbSvMwHaFj?w=3200&h=2400&rs=1&pid=ImgDetMain",
      image3:"https://th.bing.com/th/id/OIP.hQmb72S54gr3Y461vFkwJAHaE7?w=800&h=532&rs=1&pid=ImgDetMain",
      image4:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",

      name:"DownTown Arambol - The River Side Hostel",
      description: "The rooms at the hostel are fitted with a seating area, a flat-screen TV with satellite channels and a private bathroom with a hairdryer and a shower.",
      location: "Arambol Beach Road, 403524 Arambol, India Excellent location — rated 9.3/10!(score from 44 reviews)Real guests • Real stays • Real opinions",
      price: 2828,
    },
    {
      image1:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2:"https://th.bing.com/th/id/OIP.QWI8Giug40sitW7phbSvMwHaFj?w=3200&h=2400&rs=1&pid=ImgDetMain",
      image3:"https://th.bing.com/th/id/OIP.hQmb72S54gr3Y461vFkwJAHaE7?w=800&h=532&rs=1&pid=ImgDetMain",
      image4:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",

      name:"DownTown Arambol - The River Side Hostel",
      description: "The rooms at the hostel are fitted with a seating area, a flat-screen TV with satellite channels and a private bathroom with a hairdryer and a shower.",
      location: "Arambol Beach Road, 403524 Arambol, India Excellent location — rated 9.3/10!(score from 44 reviews)Real guests • Real stays • Real opinions",
      price: 2828,
    },
    {
      image1:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2:"https://th.bing.com/th/id/OIP.QWI8Giug40sitW7phbSvMwHaFj?w=3200&h=2400&rs=1&pid=ImgDetMain",
      image3:"https://th.bing.com/th/id/OIP.hQmb72S54gr3Y461vFkwJAHaE7?w=800&h=532&rs=1&pid=ImgDetMain",
      image4:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",

      name:"DownTown Arambol - The River Side Hostel",
      description: "The rooms at the hostel are fitted with a seating area, a flat-screen TV with satellite channels and a private bathroom with a hairdryer and a shower.",
      location: "Arambol Beach Road, 403524 Arambol, India Excellent location — rated 9.3/10!(score from 44 reviews)Real guests • Real stays • Real opinions",
      price: 2828,
    },
    {
      image1:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2:"https://th.bing.com/th/id/OIP.QWI8Giug40sitW7phbSvMwHaFj?w=3200&h=2400&rs=1&pid=ImgDetMain",
      image3:"https://th.bing.com/th/id/OIP.hQmb72S54gr3Y461vFkwJAHaE7?w=800&h=532&rs=1&pid=ImgDetMain",
      image4:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",

      name:"DownTown Arambol - The River Side Hostel",
      description: "The rooms at the hostel are fitted with a seating area, a flat-screen TV with satellite channels and a private bathroom with a hairdryer and a shower.",
      location: "Arambol Beach Road, 403524 Arambol, India Excellent location — rated 9.3/10!(score from 44 reviews)Real guests • Real stays • Real opinions",
      price: 2828,
    },
    {
      image1:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2:"https://th.bing.com/th/id/OIP.QWI8Giug40sitW7phbSvMwHaFj?w=3200&h=2400&rs=1&pid=ImgDetMain",
      image3:"https://th.bing.com/th/id/OIP.hQmb72S54gr3Y461vFkwJAHaE7?w=800&h=532&rs=1&pid=ImgDetMain",
      image4:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",

      name:"DownTown Arambol - The River Side Hostel",
      description: "The rooms at the hostel are fitted with a seating area, a flat-screen TV with satellite channels and a private bathroom with a hairdryer and a shower.",
      location: "Arambol Beach Road, 403524 Arambol, India Excellent location — rated 9.3/10!(score from 44 reviews)Real guests • Real stays • Real opinions",
      price: 2828,
    },
    {
      image1:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2:"https://th.bing.com/th/id/OIP.QWI8Giug40sitW7phbSvMwHaFj?w=3200&h=2400&rs=1&pid=ImgDetMain",
      image3:"https://th.bing.com/th/id/OIP.hQmb72S54gr3Y461vFkwJAHaE7?w=800&h=532&rs=1&pid=ImgDetMain",
      image4:"https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",

      name:"DownTown Arambol - The River Side Hostel",
      description: "The rooms at the hostel are fitted with a seating area, a flat-screen TV with satellite channels and a private bathroom with a hairdryer and a shower.",
      location: "Arambol Beach Road, 403524 Arambol, India Excellent location — rated 9.3/10!(score from 44 reviews)Real guests • Real stays • Real opinions",
      price: 2828,
    },
  ]
  
  return (
    // <div className="home-container">
      <div className="home">
        <Link to="/hotel">Checkout</Link>
        {
          hotels.map((hotel, index) => <HotelCard key={index} hotel={hotel}/>)
        }
        {/* <HotelCard hotel={hotel}/> */}
      </div>
    // {/* </div> */}
  )
}

export default Home