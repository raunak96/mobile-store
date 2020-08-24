import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductsProvider';

const CartItem = ({ id, title, img, price, total, count }) => {
    const {addToCart,removeFromCart,removeItemFromCart}= useContext(ProductContext);
	return (
		<div className='row my-lg-4 my-1 text-capitalize text-center align-items-center justify-content-center'>
			<div className='col-10 mx-auto col-lg-2'>
				<img src={img} style={{ width: "5rem", heigth: "5rem" }} className='img-fluid' alt=''/>
			</div>
			<div className='col-10 mx-auto col-lg-2 '>
				<span className='d-lg-none'>product :</span> {title}
			</div>
			<div className='col-10 mx-auto col-lg-2 '>
				<strong>
					<span className='d-lg-none'>price :</span> ₹{price * 2000}
				</strong>
			</div>
			<div className='col-10 mx-auto col-lg-2 my-2 my-lg-0 '>
				<div className='d-flex justify-content-center'>
					<div>
						<span className='btn btn-black mx-1' onClick={() => removeFromCart(id)}>-</span>
						<span className='btn btn-black mx-1'>{count}</span>
						<span className='btn btn-black mx-1' onClick={() => addToCart(id)}>+</span>
					</div>
				</div>
			</div>
			<div className='col-10 mx-auto col-lg-2 '>
				<div className=' cart-icon' onClick={() => removeItemFromCart(id)}>
					<i className='fas fa-trash' />
				</div>
			</div>

			<div className='col-10 mx-auto col-lg-2 '>
				<strong><span className='d-lg-none'>total :</span> ₹{total*2000} </strong>
			</div>
		</div>
	);
};

export default CartItem;