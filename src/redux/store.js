import { createStore, combineReducers} from "redux";
import productsReducer from "./products/productsReducer";


let reducers = combineReducers({
    products: productsReducer,
})


const store = createStore(reducers)

export default store; 