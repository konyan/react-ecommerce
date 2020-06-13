import SHOP_DATA from './shop.data';

const INIT_STAT = {
  collections: SHOP_DATA
}

const shopReducer = (state = INIT_STAT, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default shopReducer;