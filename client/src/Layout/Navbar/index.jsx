import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"
import  lopa from "../../assets/img/icons/lupa.png"
import  whislist from "../../assets/img/icons/Wishlist.png"
import basket from "../../assets/img/icons/sebetim.png"
function Navbar() {
    return (
        <>
            <div className='Main_container'>
                <div className='header_and_navbar'>
                    <h1>Exclusive</h1>
                    <div className='navbar'>
                        <NavLink activeClassName='active'  to={'/'}>Home</NavLink>
                        <NavLink to={'/about'}>About</NavLink>
                        <div>ele</div>
                        <div>ele</div>
                        <div>ele</div>
                        <div>ele</div>
                    </div>
                </div>
                <div className="search_and_icon">
                    <div className="search">
                        <div className="box">
                            <input type="text" placeholder="Search for products, brands and more" />
                            <div className="lopa">
                                <img src={lopa} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='icon'>
                        <img src={whislist} alt="" />
                        <img src={basket} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar