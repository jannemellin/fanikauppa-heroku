import React, {useState} from 'react';
import '../App.css';


// destrukturointi eli olion atribuutit otetaan "ulos" muuttujiin

const Product = ({ product, addAmount }) => {
    const [show, setShow] = useState(false)
    return (
    <div className="product">
    <h1 onClick={e => setShow(!show)}>{product.name}</h1>
    <img src={product.url} alt="kuva" />
    <p>Hinta: {product.price}€</p>
    <button onClick={() =>addAmount(product.id) }>Ostoskoriin </button>
    {show &&
    <div className="lisää">
    <p>{product.info}</p>
    </div>}
    </div>
    
    )
   }

const Products = ({cartProducts, setCartProducts}) => {

   

    const addAmount = id => {
       const tempAddAmount = cartProducts.map(cartProduct => {
           if(cartProduct.id === id){
            cartProduct = {...cartProduct, amount: (cartProduct.amount + 1)};
           }
           return cartProduct;
       })
     setCartProducts(tempAddAmount);
    } 

    return (
        
        <div className = "ProductPart">
        {cartProducts.map(product => <Product key={product.id} product={product} addAmount={addAmount} />)}
        </div>
    )
}

export default Products;