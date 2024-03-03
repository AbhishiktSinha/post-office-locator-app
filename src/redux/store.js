import { legacy_createStore as createStore, applyMiddleware } from "redux";

import createSagaMiddleware from 'redux-saga';

import postalSaga from "./saga";
import postalReducer from "./reducer";



const sagaMiddleware = createSagaMiddleware();

const store = createStore(postalReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(postalSaga);

export default store;
