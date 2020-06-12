import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartHidden = createSelector([selectCart],
  (cart) => cart.hidden);

export const selectorCartItems = createSelector([selectCart],
  (cart) => cart.cartItems);

export const selectItemCount = createSelector([selectorCartItems],
  cartItems => cartItems.reduce((accmalatedQuantiy, cartItem) => accmalatedQuantiy + cartItem.quantity, 0))

export const selectCartTotal = createSelector([selectorCartItems], (
  cartItems => cartItems.reduce((accumlatePrice, cartItem) => accumlatePrice + (cartItem.quantity * cartItem.price), 0)
))