import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

// stores
import heroesStore from './features/heroes/heroesSlice';

// sagas
import sagaWatcher from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    heroesStore,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagaWatcher);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export default store;
