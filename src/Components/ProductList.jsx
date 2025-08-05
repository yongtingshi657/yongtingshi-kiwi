import ProductCard from "./ProductCard";
import "../css/ProductList.css"

export default function ProductList( {productList, children, handleAddItemToCart } ){
    return (
        <ul className="productList">
        {children}
          {productList.map(function (item) {
            return (
              <ProductCard 
                key = {item.id}
                id = {item.id}
                name = {item.baseName}
                description = {item.baseDescription}
                handleAddItemToCart = {handleAddItemToCart}
              />
            );
          })}
        </ul>
    )
}