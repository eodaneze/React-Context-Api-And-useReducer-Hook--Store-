import React from 'react'
import HeroBanner from "../assets/banner-img.png"

const Hero = () => {
  return (
   <>
      <div className='all-hero'>
          <div className="hero-content">
             <div className="hero-left">
                  <h1>Sales</h1>
                  <p>Welcome to Dev_Daniels Headphone store. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat animi laborum quo, aspernatur blanditiis et temporibus facere. Sed minus ad tenetur vel error molestiae quisquam.</p>

                  <div className="hero-btn">
                      <button>Read More</button>
                      <button>Shop Now</button>
                  </div>
             </div>
             <div className="hero-right">
                 <img src={HeroBanner} alt="" />
             </div>
          </div>
    </div>
   </>
  )
}

export default Hero