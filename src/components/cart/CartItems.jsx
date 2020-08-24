import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductsProvider';
import CartItem from './CartItem';

const CartItems = () => {
    const {carts} = useContext(ProductContext);
    return (
        <div className="container-fluid">
            {carts.map(item => (
                <CartItem key={item.id} {...item} />
            ))}
        </div>
    );
};

export default CartItems;