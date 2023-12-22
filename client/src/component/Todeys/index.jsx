import React from 'react'
import TodaysSwiper from './TodaysSwiper'
import './index.scss'
function Todeys() {
  return (
    <div className='container'>
      <h1>Flash Sales</h1>
        <TodaysSwiper/>
        <div className="btn">
        <button>View All Products</button>
        </div>
    </div>
  )
}

export default Todeys