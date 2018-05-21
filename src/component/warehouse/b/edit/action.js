import { makeActionCreator } from 'shein-lib/dealFunc';

import * as types from './types';

export const init = makeActionCreator(types.init, 'props');
export const initSet = makeActionCreator(types.initSet, 'data');
export const post = makeActionCreator(types.post, 'data');
export const postSet = makeActionCreator(types.postSet, 'result');
