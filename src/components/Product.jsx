import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { ProductContext } from '../contexts/ProductsProvider';

const Product = ({product:{id,title,img,price,inCart}}) => {
	const {addToCart,openModal} = useContext(ProductContext);
    return (
		<ProductContainer className='mx-auto my-2 col-9 col-md-6 col-lg-3'>
			<div className='card'>
                <div className="image-container p-5">
                    <Link to={`/details/${id}`}>
                        <img className='card-img-top' src={img} alt='prod-pic' />
                    </Link>
                    <button className="card-btn" disabled={inCart} onClick={(e)=>{e.stopPropagation();addToCart(id);openModal(id);}}>
                        {
                            inCart ? (<p className="text-capitalize mb-0" disabled>in cart</p>):
                            (<i className="fas fa-cart-plus"></i>)
                        }
                    </button>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <p className="mb-0 align-self-center">{title}</p>
                    <h5 className="text-blue font-italic mb-0">
                        <span>₹</span>{price*2000}
                    </h5>
                </div>	
			</div>
		</ProductContainer>
	);
};
Product.propTypes={
    product: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        img: PropTypes.string,
        inCart: PropTypes.bool,
        price: PropTypes.number,
    }).isRequired
}
const ProductContainer = styled.div`
	.card {
		border-color: transparent;
		transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
	}
	.card-footer {
		background: transparent;
		border-top: transparent;
		transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
	}
	&:hover {
		.card {
			border: 0.04rem solid rgba(0, 0, 0, 0.2);
			box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
		}
		.card-footer {
			background: rgb(247, 247, 247);
		}
	}
	.card-img-top {
		transition: all 1s linear;
	}
	.image-container {
		position: relative;
		overflow: hidden; /* Anthing going outside this div hidden */
		&:hover {
			.card-img-top {
				transform: scale(1.2);
			}
			.card-btn {
				transform: translate(0, 0);
			}
		}
	}
	.card-btn {
		position: absolute;
		color: #fff;
		background-color: #007bff;
		bottom: 2px;
		right: 2px;
		padding: 0.2rem 0.4rem;
		border: none;
		border-radius: 0.5rem 0 0 0;
		font-size: 1.4rem;
		transform: translate(107%, 0);
		transition: all 0.6s ease-in;

		&:hover {
			background-color: #0069d9;
		}
	}
`;
export default Product;