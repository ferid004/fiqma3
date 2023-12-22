import React from 'react'
import './index.scss'
import catagotyE from '../../../assets/img/Category.png'
function ByCatElemet() {
  return (
    <div className='bymain'>
        <div className="imgdiv">
            <img src={catagotyE} alt="" />
        </div>
        <div className="contentt">
        Phones
        </div>
    </div>
  )
}

export default ByCatElemet