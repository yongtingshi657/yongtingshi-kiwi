export default function ProductCard(props){
    return (
        <li>
            <div className="itemCard">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
            </div>
        </li>
    )
}