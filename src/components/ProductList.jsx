import React, { useContext } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductContext } from '../contexts/ProductsProvider';


const ProductList = () => {
	const {products} = useContext(ProductContext);

    return (
		<div className='container'>
			<Title name='our' title='products' />
			<div className='row'>
				{products.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default ProductList;