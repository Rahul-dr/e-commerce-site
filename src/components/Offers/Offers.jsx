import React from 'react'
import './Offers.css'
import newC from '../Assets/newC.jpeg'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLER PRODUCT</p>
            <button>Check now</button>
        </div>
        <div className="offers-right">
            <img src={newC} alt="" />
        </div>

    </div>
  )
}

export default Offers