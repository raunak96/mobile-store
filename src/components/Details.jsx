import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../contexts/ProductsProvider';
import { Link } from 'react-router-dom';
import PageNotFound from './PageNotFound';

const Details = ({match}) => {
	const {products,addToCart,openModal,product,setProduct}= useContext(ProductContext);
	useEffect(()=>{
		setProduct(products.find(prod=>prod.id===parseInt(match.params.id)));
		// eslint-disable-next-line
	},[]);
    return product!==undefined ? product!==null?(
		<div className='container py-5'>
			<div className='row'>
				<div className='col-10 mx-auto text-center text-primary my-3'>
					<h1>{product.title}</h1>
				</div>
			</div>
			<div className='row'>
				<div className='col-10 mx-auto col-md-6 my-2'>
					<img src={`/${product.img}`} className='img-fluid' alt='prod' /> {/* img-fluid ensures img stays inside div bootstrap class*/}
				</div>
				<div className='col-10 mx-auto col-md-6 my-2'>
					<h1>Model : {product.title}</h1>
					<h4 className='text-title text-uppercase text-info mt-3 mb-2'>
						made by :
						<span className='text-uppercase'> {product.company}</span>
					</h4>
					<h4 className='text-success'>
						<strong>
							Price : <span>₹</span>
							{product.price*2000}
						</strong>
					</h4>
					<p className='text-capitalize font-weight-bold mt-3 mb-1'>
						some info about product :
					</p>
					<p className='text-muted lead'>{product.info}</p>
					<Link to="/">
						<button className="btn btn-outline-warning mx-2">Back to Products</button>
					</Link>
					<button className="btn btn-outline-success mx-2" disabled={product.inCart} onClick={()=>{addToCart(product.id);openModal(product.id);}}>
						{!product.inCart ? 'Add To Cart' : 'In Cart'}
					</button>
				</div>
			</div>
		</div>
	):(<div>Loading...</div>):(<PageNotFound />);
};

export default Details;