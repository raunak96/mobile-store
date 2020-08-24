import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductsProvider';
import { Link } from 'react-router-dom'


const CartSummary = () => {
    const {cartSubTotal,cartTax,cartTotal,clearCart} = useContext(ProductContext);
    return (
		<div className='container'>
			<div className="d-flex flex-column align-items-center align-items-md-end">
                <Link to='/'>
                    <button className='btn btn-outline-danger mb-3 px-5' type='button' onClick={() => clearCart()}>
                        CLEAR CART
                    </button>
                </Link>
                <h5>
                    <span className="text-title"> subtotal :</span>
                    <strong> ₹{cartSubTotal*2000} </strong>
                </h5>
                <h5>
                    <span className="text-title"> tax :</span>
                    <strong> ₹{cartTax*2000} </strong>
                </h5>
                <h5>
                    <span className="text-title"> total :</span>
                    <strong> ₹{cartTotal*2000} </strong>
                </h5>
            </div>
		</div>
	);
};

export default CartSummary;