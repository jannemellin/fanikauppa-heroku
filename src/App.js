import React, {useState} from 'react';
import './App.css';
import products2 from "./components/product_data";
import Navbar from './components/Navbar';
import Products from "./components/Products";
import Cart from "./components/Cart"
  
function App() {
  
  const [ cartProducts, setCartProducts] = useState(products2);


  return (
   
    <div className="App">
    <header className="App-header">
      <h1>Merch</h1>
    </header>
    <Navbar/> <br/>

    <section>
      {/* <OStuffs products={products}/> */}
      {/* <Menu products={products}/> */}
      <Products cartProducts={cartProducts} setCartProducts={setCartProducts} />
      {/* <ProductForm products={products} setProducts={setProducts}/> */}
      <Cart cartProducts = {cartProducts} setCartProducts={setCartProducts}/>
    </section>
    </div>
  );
}

export default App;
