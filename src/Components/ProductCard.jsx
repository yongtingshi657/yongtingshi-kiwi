import "../css/ProductList.css"
import placeholderImage from "../../data/placeholder.png"


export default function ProductCard( {id, name, description, handleAddItemToCart}){
  
    return (
        <li>
            <div className="itemCard">
                <img className="placeholder-img" src={placeholderImage} />
                <h1>{name}</h1>
                <p>{description}</p>
                
                     <button className="add-cart-button" onClick= {()=> handleAddItemToCart(id)}>Add to Cart</button>
                
            </div>
           
        </li>
    )
}

