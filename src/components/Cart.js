import React from "react";
import products from "./product_data";
import Products from "./Products"

const Cart = ({cartProducts, setCartProducts}) => {

    const reduceAmount = (id) => {
        const tempAddAmount = cartProducts.map(cartProducts => {
            if (cartProducts.id === id) {
                cartProducts = { ...cartProducts, amount: (cartProducts.amount - 1) }
               
            }  return cartProducts;
        })
        setCartProducts(tempAddAmount);
    }
    
    
    return(
        <div className = "cartpart">
            <h2>Cart :D</h2>
           
           {cartProducts.filter(product => products.amount > 0).map(product => <Products key={products.id} amount={products.amount} product={product}/>)} 



            {cartProducts.filter(product => product.amount > 0).map(product => product.price * product.amount).reduce((a,b) => a + b, 0)}  

        </div>
    )
}


export default Cart;