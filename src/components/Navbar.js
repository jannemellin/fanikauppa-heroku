import React from 'react';

const Navbar = ()=>{
    return(
       <div>
           <navigator>
              <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ</a></li>
                <li className="cart"><a href="#">Cart</a></li>
              </ul>
              </navigator>
            </div>
            
    )
}

export default Navbar;