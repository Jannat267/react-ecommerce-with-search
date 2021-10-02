import React from 'react';
import Cart from '../Cart/Cart';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const  [products,setProducts]= useProducts();
    const [cart,setCart]=useCart(products);

    const removeHandler=key=>{
        const newCart= cart.filter(product=>product.key!==key);
        setCart(newCart);
    }
    
    return (
        <div className='shop-container'>

            <div className='product-container'>
                <h1>Total ordered product : {cart.length}</h1>
                {
                  cart.map(product=><ReviewItem 
                    key={product.key}
                    removeHandler={removeHandler}
                    product={product}></ReviewItem>)  
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default OrderReview;