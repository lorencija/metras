import produce from 'immer';
import { SET_CARTITEMS, ADD_TOCART } from './constants';

export const initState = {
  items: [],
};

const reducer = (state = initState, action) =>
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case SET_CARTITEMS:
        // eslint-disable-next-line no-param-reassign
        draft.items = action.items;
        break;
      case ADD_TOCART:
        // eslint-disable-next-line no-param-reassign
        console.log(action);
        draft.items = [...draft.items, action.item];
        break;
    }
  });

export default reducer;
