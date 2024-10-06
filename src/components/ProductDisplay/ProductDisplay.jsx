import React, { useContext } from 'react'
import './ProductDisplay.css'
import star from '../Assets/star (2).png'
import star1 from '../Assets/star (3).png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-imd-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />

            </div>
            <div className="productdisplay-img">
               <img className='productdisplay-main-img' src={product.image} alt="" />

            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star1} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>

            </div>
            <div className="productdisplay-right">
            A snug-fitting, short-sleeved pullover shirt with a round neckline, often worn as an undershirt or casual outerwear. Lightweight and versatile, ideal for layering or standalone wear.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>

                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span>Women, T-Shirt, Crop Top </p>
            <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest </p>

        </div>
    </div>
  )
}

export default ProductDisplay