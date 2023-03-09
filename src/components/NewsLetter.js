import React from 'react'
const NewsLetter = () => {
  return (
    <div className='news'>
       <div className="news-content">
            <h5 className='text-center'>Newsletter</h5>
            <div className="news-sub">
                 <input type="search" placeholder='Enter Email' />
                 <button>Subscribe</button>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, incidunt.</p>
       </div>
    </div>
  )
}

export default NewsLetter