

import { createStore, applyMiddleware } from 'redux';
import rootReducer 											from './reducers/index.js';
import { defaultMiddleware } 						from './middlewares/index.js';


const store = createStore(rootReducer, applyMiddleware(defaultMiddleware));

export default store;