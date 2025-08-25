import ctdLogo from '../assets/icons/mono-blue-logo.svg';
import '../css/Header.css';
import shoppingCartIcon from '../assets/icons/shoppingCart.svg';
import { useEffect } from 'react';

export default function Header({ cart, handleOpenCart }) {
  const cartNumber = cart.length;
  function getItemCount() {
    return cart.reduce((acc, item) => acc + item.itemCount, 0);
  }

  // log carts item
  // useEffect(()=>{
  //     cart.forEach((item)=>{
  //       console.log(item.baseName, item.cartItemId)
  //     })

  //     if(cartNumber > 0){
  //         console.log('--end of cart--');
  //     }
  // })

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
          <button type="button" onClick={handleOpenCart}>
            <img className="shopping-cart-icon" src={shoppingCartIcon} />

            <span className="cart-number">{getItemCount()}</span>
          </button>
        </div>
      </header>
    </>
  );
}
