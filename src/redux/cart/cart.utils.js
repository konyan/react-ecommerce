export const addItemToCart = (cartItems, cartItem) => {
  const existingCartItem = cartItems.find(item => item.id === cartItem.id);
  if (existingCartItem) {
    return cartItems.map(item => item.id === cartItem.id ? { ...item, quantity: parseInt(item.quantity) + 1 } : item);
  }
  return [...cartItems, { ...cartItem, quantity: 1 }];
}


export const removeItemFromCart = (cartItems, cartItem) => {
  return cartItems.filter(item => item.id !== cartItem.id)
}

export const removeItem = (cartItems, cartItem) => {
  const existingCartItem = cartItems.find(item => item.id === cartItem.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== cartItem.id);
  }

  return cartItems.map(item => item.id === cartItem.id ? { ...item, quantity: item.quantity - 1 } : item);

}