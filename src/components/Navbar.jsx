import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../logo.svg";
import styled from 'styled-components'

const CartButton = styled.button`
	text-transform: capitalize;
	font-size: 1.4rem;
	background: transparent;
	border: none;
	color: rgba(255, 255, 255, 0.5);
	&:hover {
		color: rgba(255, 255, 255,1);
		transform: scale(1.2);
	}
	transition: all 0.3s ease-in;
`;
const NavWrapper = styled.nav`
	background: var(--mainBlue);
	.nav-link {
		font-size: 1.3rem !important;
	}
`;
const Navbar = () => {
    return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to="/" className="navbar-brand">
                <img src={logo} alt=""/>
            </Link>
            <div className="navbar-nav align-items-center">
                <Link className="nav-item nav-link ml-5" to="/">Products</Link>
            </div>
            <Link to="/cart" className="ml-auto">
                <CartButton><i className="fas fa-cart-plus"></i> My Cart</CartButton>
            </Link>
           
        </NavWrapper>
    );
};

export default Navbar;