import './App.css';
import { useState } from 'react';
import inventoryData from './assets/inventory.json';
import Header from './Components/Header';
import ProductCard from './Components/ProductCard';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';

function App() {
  const [inventory, setInventory] = useState(inventoryData.inventory);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleAddItemToCart(id) {
    const inventoryItem = inventory.find((item) => item.id === id);

    //if no inventory items are found
    //we want to prevent the app from crashing
    //by exiting this function now
    if (!inventoryItem) {
      console.error('cart error: item not found');
      return;
    }
    const itemToUpdate = cart.find((item) => item.id === id);
    let updatedCartItem;
    if (itemToUpdate) {
      updatedCartItem = {
        ...itemToUpdate,
        itemCount: itemToUpdate.itemCount + 1,
      };
    } else {
      updatedCartItem = { ...inventoryItem, itemCount: 1 };
    }

    setCart([...cart.filter((item) => item.id !== id), updatedCartItem]);
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

  function handleCloseCart() {
    if (isCartOpen) {
      setIsCartOpen(false);
    }
  }

  function handleOpenCart() {
    if (!isCartOpen) {
      setIsCartOpen(true);
    }
  }

  // function promoteItem() {
  //   return (
  //     <ProductCard
  //       product={{
  //         baseName: 'Limited Edition Tee!',
  //         baseDescription:
  //           'Special limited edition neon green shirt with a metallic Code the Dream Logo shinier than the latest front-end framework! Signed by the legendary Frank!',
  //         variants: [], // empty array if no variants or add variants if you want
  //       }}
  //       handleAddItemToCart={handleAddItemToCart}
  //     />
  //   );
  // }

  return (
    <>
      <main>
        <Header cart={cart} handleOpenCart={handleOpenCart} />
        <ProductList
          productList={inventory}
          handleAddItemToCart={handleAddItemToCart}
        >
          {/* {promoteItem()} */}
        </ProductList>
        {/*`isCartOpen has to be true for the cart to be rendered*/}
        {isCartOpen && (
          <Cart
            cart={cart}
            setCart={setCart}
            handleCloseCart={handleCloseCart}
          />
        )}
      </main>
      {/* <footer>
        <p>
          Made with ❤️ | &copy; {year.current}{' '}
          <a href="https://codethedream.org/">CTD </a>
        </p>
      </footer> */}
    </>
  );
}

export default App;
