import produce from 'immer';
import { SET_COTTONROPE, ADD_TOCART } from './constants';
import Item1 from '../../images/cottonRope/MV_001.jpg';
import Item2 from '../../images/cottonRope/MV_002.jpg';
import Item3 from '../../images/cottonRope/MV_009.jpg';
import Item4 from '../../images/cottonRope/MV_012.jpg';
import Item5 from '../../images/cottonRope/MV_031.jpg';
import Item6 from '../../images/cottonRope/MV_056.jpg';

export const initState = {
  rope: [
    {
      id: 1,
      title: 'Balta',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 110,
      img: Item1,
    },
    {
      id: 2,
      title: 'Dramblio kaulo',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 80,
      img: Item2,
    },
    {
      id: 3,
      title: 'Žydra',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 120,
      img: Item3,
    },
    {
      id: 4,
      title: 'Šviesi geltona',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 260,
      img: Item4,
    },
    {
      id: 5,
      title: 'Tamsiai melyna / Balta',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 160,
      img: Item5,
    },
    {
      id: 6,
      title: 'Geltona',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 90,
      img: Item6,
    },
  ],
  addedItems: [],
  total: 0,
};

const reducer = (state = initState, action) =>
  produce(state, draft => {
    // const addedItems = state.rope.find(item => item.id === action.id);
    // eslint-disable-next-line default-case
    switch (action.type) {
      case SET_COTTONROPE:
        // eslint-disable-next-line no-param-reassign
        draft.rope = action.rope;
        break;
      // case ADD_TOCART:
      // draft.addedItems = [...state.addedItems, addedItems];
      // bresak;
    }
  });

export default reducer;
