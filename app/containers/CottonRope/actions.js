import { SET_COTTONROPE } from './constants';

export function setCottonRope(rope) {
  return {
    type: SET_COTTONROPE,
    rope,
  };
}
