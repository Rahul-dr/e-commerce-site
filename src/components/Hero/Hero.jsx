import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/assets/frontend_assets/hand_icon.jpeg'
import arrow_icon from '../Assets/right-arrow (3).png'
import hero_image from '../Assets/assets/frontend_assets/hero_img.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>New Arrivals Only</h2>
            <div>
                <div className='hand-hand-icon'>
                    <p>new</p>
                    <img src={hand_icon} alt=""/>
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>

    <div className='hero-latest-btn'>
        <div>Latest Collection</div>
        {/* <img src={arrow_icon} alt=''/> */}
    </div>
    </div>
    <div className='hero-right'>
        {/* <img src={hero_image} alt=''/> */}
    </div>
    </div>
  )
}

export default Hero