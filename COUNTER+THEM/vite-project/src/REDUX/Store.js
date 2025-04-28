import {  combineReducers, legacy_createStore } from 'redux';

import counterReducer from '../REDUX/counterReducer';
import themeReducer from '../REDUX/themeReducer';




const rootReducer = combineReducers({
    counterReducer,
    theme: themeReducer

});

export const store = legacy_createStore(rootReducer);

