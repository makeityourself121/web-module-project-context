import React, {useContext} from 'react';
import CartContext from '../contexts/CartContext'
const Item = props => {
	
	const {cart, setCart}= useContext(CartContext)

	const handleClick=(id)=>{
		setCart(cart.filter(item =>(id !== item.id)))
	}
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={()=>handleClick(props.id)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
