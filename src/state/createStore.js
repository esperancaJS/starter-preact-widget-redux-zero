import createStore from "redux-zero";
import { applyMiddleware } from 'redux-zero/middleware';
import { connect } from 'redux-zero/devtools';

import initialState from './state';

const middlewares = connect ? applyMiddleware(connect(initialState)): [];
const store = createStore(initialState, middlewares);

export default store;
