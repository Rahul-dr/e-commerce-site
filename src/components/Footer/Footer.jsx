import React from 'react'
import './Footer.css'
import shopping from '../Assets/shopping.jpeg'
import instagram from '../Assets/instagram.jpeg'
import whatsup from '../Assets/what.jpeg'
import facebook from '../Assets/facebook.jpeg'



const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={shopping} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
        <div className="footer-icons-container">
        <div className="footer-social-icon">
                <div className="footer-icons-container1">
                    <img src={instagram} alt="" />
                </div>
                <div className="footer-icons-container2">
                    <img src={whatsup} alt="" />
                </div>
                <div className="footer-icons-container3">
                    <img src={facebook} alt="" />
                </div>
        </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @2023</p>
        </div>

    </div>
  )
}

export default Footer