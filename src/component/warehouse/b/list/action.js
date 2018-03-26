import { makeActionCreator } from 'shein-lib/dealFunc';

import * as types from './types';

export const init = makeActionCreator(types.init, 'props');
export const initSet = makeActionCreator(types.initSet, 'data');
export const search = makeActionCreator(types.search, 'props');
export const searchSet = makeActionCreator(types.searchSet, 'data');
export const handle = makeActionCreator(types.handle, 'types', 'idList');
export const handleSet = makeActionCreator(types.handleSet, 'types');
