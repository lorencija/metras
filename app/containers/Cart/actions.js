import { SET_CARTITEMS, ADD_TOCART } from './constants';

export function setCartItem(items) {
  return {
    type: SET_CARTITEMS,
    items,
  };
}
export function addToCart(item) {
  return {
    type: ADD_TOCART,
    item,
  };
}
