import '../css/ProductList.css';
import ProductCardVariants from './ProductCardVariants';
import placeholderImage from '../../data/placeholder.png';
import { useState } from 'react';

export default function ProductCard({
  product,
  handleAddItemToCart,
}) {

const [areVariantsShown, setAreVariantsShown] = useState(false)
  console.log('Product object:', product);
  if (!product) {
    return <li>Product data missing</li>; // fallback UI to avoid crash
  }

  console.log(product.variants);

  return (
    <li>
      <div className="itemCard">
        <img className="placeholder-img" src={placeholderImage} />
        <h1>{product?.baseName || 'No product name'}</h1>
        <p>{product.baseDescription}</p>
        <div className="add-cart-button">
          {product.variants.length > 1 ? (
            <button className="add-cart-button"
            onClick={()=>setAreVariantsShown(true)}
            >Show Options</button>
          ) : (
            <button
              className="add-cart-button"
              onClick={() => handleAddItemToCart(product.variants[0].id)}
            >
              Add to Cart
            </button>
          )}
        </div>
        {areVariantsShown && <ProductCardVariants
          variants={product.variants}
          handleAddItemToCart={handleAddItemToCart}
          closeVariants={() => setAreVariantsShown(false)}
        />}
      </div>
    </li>
  );
}
