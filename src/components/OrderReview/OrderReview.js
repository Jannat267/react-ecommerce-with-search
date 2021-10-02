import React from 'react';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';

const OrderReview = () => {
    const  [products,setProducts]= useProducts();
    const [carts]=useCart(products);
    
    return (
        <div>
            <h2>This is Order Review
            {
              products.length 
               
            }
            </h2>
           <h1>{
           carts.length}</h1>
        </div>
    );
};

export default OrderReview;