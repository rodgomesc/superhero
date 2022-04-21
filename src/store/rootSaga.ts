import {takeLatest} from 'redux-saga/effects';

import handleGetHeroes from './features/heroes/heroesSaga';
import {getHeroes} from './features/heroes/heroesSlice';

export function* sagaWatcher() {
  yield takeLatest(getHeroes.type, handleGetHeroes);
}

export default sagaWatcher;
