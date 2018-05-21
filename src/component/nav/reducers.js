import assign from 'object-assign';
import * as types from './types';

const menus = [
  {
    title: '功能组1',
    icon: 'bars',
    link: '/warehouse',
    children: [
      {
        link: '/warehouse/a',
        title: '子功能1',
        icon: 'mail',
      },
      {
        link: '/warehouse/b',
        title: '子功能2',
        icon: 'user',
      },

    ],
  },
];

const defaultState = {
  current: '/',
  menus,
  userName: '',
  expandable: true,
  list: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_VALUE:
      return assign({}, state, {
        [action.key]: action.value,
      });
    default:
      return state;
  }
};
