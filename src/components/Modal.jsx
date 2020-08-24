import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductsProvider';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Modal = () => {
    const {modalProduct:{img,title,price},closeModal}= useContext(ProductContext);
    return (
		<ModalContainer className='d-flex align-items-center justify-content-center'>
			<div className='container'>
				<div className='my-modal col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-3'
					style={{ maxHeight: "90vh" }}>
					<h5>Item added to cart</h5>
					<img src={img} alt='product' className='image-fluid' style={{maxHeight:'30vh' }}/>
					<h5>{title}</h5>
					<h5 className='text-muted'>
						price : <span>₹</span>
						{price * 2000}
					</h5>
					<button className='btn btn-outline-success mr-3' onClick={() => closeModal()}>
						Continue Shopping
					</button>
					<Link to='/cart'>
						<button className='btn btn-outline-info my-3' onClick={() => closeModal()}>
							Go to Cart
						</button>
					</Link>
				</div>
			</div>
		</ModalContainer>
	);
};

const ModalContainer= styled.div`
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    .my-modal{
        background: var(--mainWhite);
    }
`;
export default Modal;