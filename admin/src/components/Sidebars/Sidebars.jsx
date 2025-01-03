import React from 'react'
import './Sidebars.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const Sidebars = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Add item</p> 
            </NavLink>
            <NavLink to='/update' className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>update item</p> 
            </NavLink>
            <NavLink to='/list' className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>List item</p>
            </NavLink>
            <NavLink to='/order' className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>Orders</p>
            </NavLink>
        </div>
       
    </div>
  )
}

export default Sidebars
