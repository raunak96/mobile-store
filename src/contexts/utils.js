export const addItemToCart = (item, carts, products) => {
	const index = carts.findIndex((cart) => cart.id === item.id);
	if (index !== -1) {
		return {
			carts: carts.map((cartItem) =>
				cartItem.id === item.id? {...cartItem,count: cartItem.count + 1,total: cartItem.total + cartItem.price}: cartItem
			)
		};
	} else {
		const ind = products.findIndex((product) => product.id === item.id);
		products[ind].inCart = true;
		return {products,carts: [...carts, { ...item, count: 1, total: item.price }]};
	}
};

export const decreaseItemCount = (id, carts,products) => {
	const item = carts.find((cartItem) => cartItem.id === id);
	if (item.count === 1) {
		return clearItemFromCart(id, carts,products);
	} else {
		return {
			carts: carts.map((cartItem) =>cartItem.id === id ? {...cartItem,count: cartItem.count - 1,total: cartItem.total - cartItem.price}: cartItem)
		};
	}
};
export const clearItemFromCart = (id, carts,products) =>{
    const ind = products.findIndex((product) => product.id === id);
	products[ind].inCart = false;
    return {carts:carts.filter((cartItem) => cartItem.id !== id),products};
};

export const clearEntireCart = (products)=>products.map(product=>{
        if(product.inCart)
            product.inCart=false;
        return product;
    })

