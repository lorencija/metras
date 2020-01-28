import { SET_CARTITEMS } from './constants';

export function setCartItem(items) {
  return {
    type: SET_CARTITEMS,
    items,
  };
}
