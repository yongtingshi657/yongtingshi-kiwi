import './App.css';
import { useState } from 'react';
import inventoryData from './assets/inventory.json';
import Header from './Components/Header';
import ProductCard from './Components/ProductCard';
import ProductList from './Components/ProductList';

function App() {
  const [inventory, setInventory] = useState(inventoryData.inventory);
  const [cart, setCart] = useState([]);

  function handleAddItemToCart(id) {
    const target = inventory.find((item) => item.id === id);
    
    //if no inventory items are found
    //we want to prevent the app from crashing
    //by exiting this function now
    if (!target) {
      console.error('cart error: item not found');
      return;
    }
    //create an new object, spread the contents of the item selected
    //and add a `cartItemId`
    const cartItem = { ...target, cartItemId: Date.now() };
    console.log(cartItem);
    setCart([...cart, cartItem]);
  }

  // function addItemToCart(item) {
  //   setCart([...cart, item]);
  // }

  // function removeItemFromCart(id) {
  //   const updatedCart = cart.filter((item) => {
  //     item.id !== id;
  //   });
  //   setCart([...updatedCart]);
  // }

  function promoteItem() {
    return (
      <ProductCard
        name="Limited Edition Tee!"
        description="Special limited edition neon green shirt with a metallic Code the Dream Logo shinier than the latest front-end framework! Signed by the legendary Frank!"
      />
    );
  }

  return (
    <>
      <main>
        <Header cart={cart}
        />
        <ProductList productList={inventory}
                     handleAddItemToCart={handleAddItemToCart}
        >
          {promoteItem()}
        </ProductList>
      </main>
    </>
  );
}

export default App;
