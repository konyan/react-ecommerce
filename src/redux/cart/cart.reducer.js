import { CartActionTypes } from './cart.type';
import { addItemToCart, removeItemFromCart, removeItem } from './cart.utils';

const INIT_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {

    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload)
      };

    case CartActionTypes.CLEAR_ITEM_FROM_CART:

      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };

    default:
      return state;
  }
}

export default cartReducer;