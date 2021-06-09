import {createStore, combineReducers} from "redux";
import AuthReducer from "./Authreducer";
import CartReducer from "./Cartreducer";

var reducers = combineReducers({AuthReducer, CartReducer});
let store = createStore(reducers);

export default store;