import React from 'react'
import './header.css'


const Header = () => {
    return (
        <div className='header'>
            <div className="headerLeft">
                <ul className='header-menu'>
                    <li className='header-menu-elem'>About<a href="#"></a></li>
                    <li className='header-menu-elem'>Menu<a href="#"></a></li>
                    <li className='header-menu-elem'>Info<a href="#"></a></li>
                    <li className='header-menu-elem'>Booking<a href="#"></a></li>
                </ul>
            </div>
            <div className="headerCenter">
                <img className='logo' src="../../../logo.svg" alt="" />
            </div>
            <div className="headerRight">
                <img className='headerImg' src="../../../assets/IMAGE.svg" alt="" />
                <img className='headerImg' src="../../../assets/facebook.svg" alt="" />
                <img className='headerImg' src="../../../assets/off.svg" alt="" />
                
            </div>
        </div>
    )
}

export default Header