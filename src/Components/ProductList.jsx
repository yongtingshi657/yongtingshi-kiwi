import ProductCard from "./ProductCard";

export default function ProductList( props ){
    return (
        <ul>
        {props.children}
          {props.productList.map(function (item) {
            return (
              <ProductCard 
                key = {item.id}
                name = {item.baseName}
                description = {item.baseDescription}
              />
            );
          })}
        </ul>
    )
}