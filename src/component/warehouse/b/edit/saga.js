import { Modal } from 'antd';
import { take, put, fork } from 'redux-saga/effects';
import { initSet } from './action';
import * as types from './types';
import { picking } from './server';

function* init() {
  while (true) {
    const action = yield take(types.init);
    const data = yield picking(action.props);
    if (data.code === 0) {
      yield put(initSet(data.info));
    } else {
      Modal.error({ title: data.msg });
    }
  }
}


function* mainSaga() {
  yield fork(init);
}

export default mainSaga;
