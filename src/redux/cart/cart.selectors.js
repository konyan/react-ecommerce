import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectorCartItems = createSelector([selectCart], (cart) => cart.cartItems)

export const selectItemCount = createSelector([selectorCartItems],
  cartItems => cartItems.reduce((accmalatedQuantiy, cartItem) => accmalatedQuantiy + cartItem.quantity, 0))