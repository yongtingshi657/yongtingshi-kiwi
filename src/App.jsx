import './App.css';
import { useState } from 'react';
import inventoryData from './assets/inventory.json';
import Header from './Components/Header';
import ProductCard from './Components/ProductCard';
import ProductList from './Components/ProductList';

function App() {
  const [inventory, setInventory] = useState(inventoryData.inventory);

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
        <Header />
        <ProductList productList={inventory}>{promoteItem()}</ProductList>
      </main>
    </>
  );
}

export default App;
