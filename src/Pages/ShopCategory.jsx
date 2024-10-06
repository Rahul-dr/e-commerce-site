import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import drop_down from '../components/Assets/right-arrow (4).png';
import Item from '../components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  
  return (
    <div className='shop-category'>
      {/* Display the banner first */}
      <img className='shopcategory-banner' src={props.banner} alt="Shop Banner" />

      {/* Display the showing product count */}
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {all_product.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={drop_down} alt="Sort Options" />
        </div>
      </div>

      {/* Display the products */}
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          console.log(typeof props.category, typeof item.category); 
          console.log('Category prop:', props.category, 'Item category:', item.category);

          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          return null;
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
