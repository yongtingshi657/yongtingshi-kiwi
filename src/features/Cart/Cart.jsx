import { useState } from 'react';
import placeholderImage from '../../../data/placeholder.png';
import CartItem from './CartItem';


import "../../css/Cart.css"

export default function Cart({ cart, setCart, handleCloseCart }) {
    const [workingCart, setWoringCart]= useState(cart)
    const [isFormDirty, setIsFormDirty]= useState(false)


    function getWorkingCartPrice(){
        return workingCart
        .reduce((acc,item)=> acc+ item.price * item.itemCount, 0)
        .toFixed(2)
    }

    function handleUpdateField({event, id}){
      event.preventDefault()
      if(!isFormDirty){
        setIsFormDirty(true)
      }

      const targetProduct = cart.find((item)=> item.id === id)
      const targetIndex = cart.findIndex((item)=> item.id === id)

      if(!targetProduct){
        console.error('cart error: item not found')
        return
      }
        //reject negative values or if user deletes value
      if(event.target.value < 0 ){
        return
      }

      const updatedProduct ={
        ...targetProduct,
        itemCount:parseInt(event.target.value, 10)
      }

      setWoringCart([
        ...workingCart.slice(0,targetIndex),
        updatedProduct,
        ...workingCart.slice(targetIndex + 1)
      ])
    }


    function handleCancel(e){
      e.preventDefault();
      setIsFormDirty(false);
      setWoringCart([...cart])
    }

   function removeEmptyItems(cartArray) {
  return cartArray.filter(item => item.itemCount > 0);
}

function handleConfirm(event) {
  event.preventDefault();
  const cleanedCart = removeEmptyItems(workingCart);
  setCart(cleanedCart);
  setIsFormDirty(false);
}


  return (
    <>
      <div className="cartScreen">
        {/*
              .cartScreen covers the product list with
              a div that has a blur effect placed on it.
              this makes the product buttons unclickable
              */}
      </div>
      <div className="cartListWrapper">
        {workingCart.length === 0 ? (
          <p>Cart is Empty</p>
        ) : (
          <form>
          <ul className="cartList">
            {workingCart.map((item) => {
              return (
               <CartItem 
               key={item.id}
               item={item}
               onHandleItemUpdate={handleUpdateField}
               />
              );
            })}
          </ul>
          {isFormDirty && (
            <div>
              <button onClick={handleConfirm}>Confirm Update</button>
              <button onClick={handleCancel}>Cancel Update</button>
            </div>
          )}
          </form>
        )}
        
        <h2>Cart Total:${getWorkingCartPrice() || 0}</h2>
        <button onClick={handleCloseCart}>Close Cart</button>
      </div>
    </>
  );
}
