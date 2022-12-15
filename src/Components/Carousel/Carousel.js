import React from 'react'
import "./Carousel.css"
import { Link } from 'react-router-dom'



function Carousel() {

  return (
    <div>
  <div className="carousel-inner" >
    <div className="carousel-item active ">
      <img src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  className="w-100 banner" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1 className='car-title'>FINAL CLEARANCE</h1>
        <p className='car-des'>Flat 30% Off '+ Free shipping on your 1st order'</p>
        <p className='car-des'>'+ Free shipping on your 1st order'</p>
         <button style={{fontSize:"30px"}} className='btn btn-dark'>
         <Link to="/Pages/Products" style={{cursor:'pointer'}} className="nav-link active text-light fw-bold " >
         Shop Now
         </Link>
           </button>
      </div>
    </div>
  </div> 
    </div>
  )
}

export default Carousel