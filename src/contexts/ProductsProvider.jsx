import React, { createContext, useReducer,useEffect} from 'react';
import actionTypes from './actionTypes';
import { addItemToCart, decreaseItemCount, clearItemFromCart,clearEntireCart } from './utils';
import { storeProducts } from "../data";


export const ProductContext= createContext();
const INITIAL_STATE =  {products: [],carts: [],modalOpen: false,modalProduct: null,product:null,
    cartSubTotal: 0,cartTax: 0,cartTotal: 0
};
const rootReducer= (state,action)=>{
    switch (action.type) {
		case actionTypes.SET_PRODUCTS:
            return { ...state, products: action.payload };
        case actionTypes.SET_PRODUCT_TO_DISPLAY:
            return {...state, product: action.payload}
		case actionTypes.ADD_TO_CART:
		case actionTypes.REMOVE_FROM_CART:
        case actionTypes.REMOVE_ITEM_FROM_CART:
            return { ...state, ...action.payload };
        case actionTypes.UPDATE_CART_VALUES:
            return {...state,...action.payload};
		case actionTypes.CLEAR_CART:
			return { ...state, carts: [], products: action.payload };
		case actionTypes.MODAL_OPEN:
			return { ...state, modalOpen: true, modalProduct: action.payload };
		case actionTypes.MODAL_CLOSE:
			return { ...state, modalOpen: false };
		default:
			return state;
	}
}
const ProductsProvider = ({children}) => {
    const [state,dispatch]= useReducer(rootReducer,INITIAL_STATE);
    const addToCart= (id)=>{ 
        const product = state.products.find((product) => product.id === id);
        dispatch({type:actionTypes.ADD_TO_CART, payload:addItemToCart(product,state.carts,state.products)});
    };
    const setProduct=(product)=>dispatch({type:actionTypes.SET_PRODUCT_TO_DISPLAY,payload:product});

    const removeFromCart= (id)=>dispatch({type:actionTypes.REMOVE_FROM_CART, payload: decreaseItemCount(id,state.carts,state.products)});
    const removeItemFromCart = (id)=>dispatch({type:actionTypes.REMOVE_FROM_CART, payload: clearItemFromCart(id,state.carts,state.products)});
    
    const setProducts=(products)=>dispatch({ type: "SET_PRODUCTS", payload: products });

    const clearCart =()=>dispatch({type:actionTypes.CLEAR_CART,payload:clearEntireCart(state.products)});
    const openModal=(id)=>{
        const product= state.products.find(product=>product.id===id);
        dispatch({type:actionTypes.MODAL_OPEN,payload:product})
    }
    const closeModal = _=> dispatch({type:actionTypes.MODAL_CLOSE});
    
    useEffect(()=>{
        const cartSubTotal= state.carts.reduce((total,current)=>total+current.total,0);
        const tempTax = cartSubTotal * 0.18;
		const cartTax = parseFloat(tempTax.toFixed(2));
		const cartTotal = parseFloat((cartSubTotal + cartTax).toFixed(2));
        dispatch({type:actionTypes.UPDATE_CART_VALUES,payload:{cartSubTotal,cartTax,cartTotal}});
    },[state.carts]);

    useEffect(() => {
		let products = [];
		storeProducts.forEach((prod) => {
			const prodObj = { ...prod };
			products = [...products, prodObj];
		});
		setProducts(products);
		// eslint-disable-next-line
	}, []);
    
    return (
        <ProductContext.Provider value={{...state,setProducts,setProduct,addToCart,removeFromCart,removeItemFromCart,clearCart,openModal,closeModal}}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductsProvider;