import React from 'react'
import './Banner.css'

const banner = () => {
    return (
        <div className='bannerContainer'>
            <div className="bannerBox">
                <div className="element1">
                    <img className=' img oneImg' src="../../../assets/wine.png" alt="" />
                    <img className=' img secondImg' src="../../../assets/salad.png" alt="" />
                </div>
                <div className="element2">
                    <img className='threeImg' src="../../../assets/IMAGE (3).png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default banner