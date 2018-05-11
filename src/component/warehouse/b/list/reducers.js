import { getSize } from 'shein-middlewares/pagesize';
import * as types from './types';

export const defaultState = {
  ready: true,
  list: [],
  formData: {
    kkk: [
      'name',
      '',
    ],
  },
  secondaryProcess: '',
  produceOrderId: '',
  handleLoading1: '',
  handleLoading2: '',
  dataLoading: false,
  idList: [],
  pageIndex: 1,
  pageSizeOptions: [20, 50, 100].map(value => String(value)),
  perPage: getSize(),
  recordCount: '',
};

export default {
  defaultState,
  [types.init]() {
    return defaultState;
  },
  [types.initSet](draft, action) {
    draft.ready = false;
    draft.data = action.data;
    draft.list = action.data.list;
  },
  [types.search](draft) {
    draft.dataLoading = true;
  },
  [types.searchSet](draft, action) {
    draft.dataLoading = false;
    draft.data = action.data;
    draft.list = action.data.list;
  },
};
