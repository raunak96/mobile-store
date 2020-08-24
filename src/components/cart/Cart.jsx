import React, { useContext } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import { ProductContext } from "../../contexts/ProductsProvider";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";

const Cart = () => {
	const { carts } = useContext(ProductContext);
	return carts.length > 0 ? (
		<section>
			<Title name='your' title='cart' />
			<CartColumns />
            <CartItems />
            <CartSummary />
		</section>
	) : (
		<div className='container mt-5 text-center'>
			<h1 className='text-title text-capitalize'>
				your cart is currently empty
			</h1>
		</div>
	);
};

export default Cart;
