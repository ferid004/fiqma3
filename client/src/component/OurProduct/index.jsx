import React from 'react'
import './index.scss'
import OurProductSwiper1 from './OurProductSwiper1'
import OurProductSwiper2 from './OurProductSwiper2'
function OurProduct() {
  return (
    <div className='container'>
      <h1>Explore Our Products</h1>
        <OurProductSwiper1/>
        <OurProductSwiper2/>
        <div className="btn">
        <button>View All Products</button>
        </div>
    </div>
  )
}

export default OurProduct