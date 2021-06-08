import {createStore} from "redux";
import AuthReducer from "./Authreducer";

let store = createStore(AuthReducer)

export default store;