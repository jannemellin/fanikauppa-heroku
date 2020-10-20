import React from "react";

const CartProducts = ({cartProducts, setCartProducts, newCartProducts, setNewCartProducts}) => {
   
    const addCartProduct = () => {
        cartProducts.preventDefault();
        let tempCartProducts = {...newCartProducts};
        setCartProducts(cartProducts.concat(tempCartProducts));
        setNewCartProducts({name:"", price:"", url:"", info:"", id:""});
    }
    return (
        <>
        </>
    );
};

export default CartProducts;