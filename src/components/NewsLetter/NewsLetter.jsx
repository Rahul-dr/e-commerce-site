import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offer To Your email</h1>
        <p>Subscribe to out news letter and stay updated</p>
        <div>
            <input type="email" placeholder='your e-mail'/>
            <button>Subscribe</button>
        </div>
    </div>

  )
}

export default NewsLetter