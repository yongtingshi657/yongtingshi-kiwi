import ProductCard from './ProductCard';
import '../css/ProductList.css';
import { useEffect, useState } from 'react';

export default function ProductList({
  productList,
  children,
  handleAddItemToCart,
}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const workingProducts = [];

    productList.forEach((item) => {
      console.log("Processing item:", item.baseName, "inStock:", item.inStock);
      if (!item.inStock || item.inStock.toString().toLowerCase() !== 'true') {
        return;
      }
      if (
        !workingProducts.find(
          (productItem) => productItem.baseName === item.baseName
        )
      ) {
        workingProducts.push({
          baseName: item.baseName,
          price: item.price,
          baseDescription: item.baseDescription,
          variants: [{ ...item }],
        });
      } else {
        const index = workingProducts.findIndex(
          (productItem) => productItem.baseName === item.baseName
        );
        workingProducts[index].variants.push({ ...item });
      }
    });
    console.log("Working products:", workingProducts);
    setProducts([...workingProducts]);
  }, [productList]);

   console.log("products:", products);

  return (
    <ul className="productList">
      {children}
      {products
      .filter(Boolean)
      .map(function (item) {
        return (
          <ProductCard
            key={item.baseName}
            product = {item}
            handleAddItemToCart={handleAddItemToCart}
          />
        );
      })}
    </ul>
  );
}
