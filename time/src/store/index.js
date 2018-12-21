import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import home from "./reducers/home"
import shops from "./reducers/shops"

const reducers = combineReducers({
	home,
	shops
})

const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));

export default store