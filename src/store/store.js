import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import PositionReducer from './mapReducer'


let reducers = combineReducers({
    position:  PositionReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;