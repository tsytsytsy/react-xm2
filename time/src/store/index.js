import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import home from "./reducers/home"
import my from "./reducers/my"
import shops from "./reducers/shops"

const reducers = combineReducers({
	home,
	shops,
	my
})

const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));

export default store