import { SET_COTTONROPE, ADD_TOCART } from './constants';

export function setCottonRope(rope) {
  return {
    type: SET_COTTONROPE,
    rope,
  };
}
export function addToCart(id) {
  return {
    type: ADD_TOCART,
    id,
  };
}
