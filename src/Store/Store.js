import React from "react";
import StoreItems from "./StoreItems";
import 'bootstrap/dist/css/bootstrap.min.css';
import Storecart from "./Storecart";
import {CartProvider} from 'react-use-cart';


function Store() { 
  
  return (
    <div>
       <section class="Store" id="Store">
      <CartProvider>          
          <StoreItems />
          <Storecart />
      </CartProvider>
      </section>
      
    </div>
  );
}

export default Store;