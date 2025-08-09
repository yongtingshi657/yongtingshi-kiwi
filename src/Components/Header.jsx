import ctdLogo from '../assets/icons/mono-blue-logo.svg';
import '../css/Header.css';
import shoppingCartIcon from '../assets/icons/shoppingCart.svg';
import { useEffect } from 'react';

export default function Header({ cart }) {
  const cartNumber = cart.length;
  console.log(cartNumber);
  
  // log carts item
  useEffect(()=>{
      cart.forEach((item)=>{
        console.log(item.baseName, item.cartItemId) 
      })

      if(cartNumber > 0){
          console.log('--end of cart--');
      }
  })
  
  return (
    <>
      <header>
        <div className="coming-soon">
          <div style={{ height: 100, width: 100 }}>
            <img src={ctdLogo} alt="Code the Dream Logo" />
          </div>
          <h1>CTD Swag</h1>
        </div>
        <div className="shopping-cart-container">
          <img className="shopping-cart-icon" src={shoppingCartIcon} />
          {cartNumber > 0 && <div className="cart-number">{cartNumber}</div>}
        </div>
      </header>
    </>
  );
}
