import placeholderImage from '../../../data/placeholder.png';

export default function CartItem({item, onHandleItemUpdate}) {
  return (
  
  <li className="cartListItem">
    <img className="placeholder-img" src={placeholderImage} alt="" />

    <div className="cartListItemInfo">
      <h2>{item.baseName}</h2>
      {item.variantName !== 'Default' ? <p>{item.variantName}</p> : null}
    </div>

    <div className="cartListItemSubtotal">
      <label>
        Count: { " "}
        <input
          type="number"
          value={item.itemCount}
          onChange={(event) => onHandleItemUpdate({ event, id: item.id })}
        />
      </label>
      <p>
        Subtotal:$
        {(item.price * item.itemCount).toFixed(2) || 0}
      </p>
    </div>
  </li>
  )
}


