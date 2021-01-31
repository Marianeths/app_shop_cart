import { createStore, combineReducers} from "redux";
import productsReducer from "./products/productsReducer";
import productSliderReducer from "./productSlider/productSliderReducer";


let reducers = combineReducers({
    products: productsReducer,
    productSlider:productSliderReducer
})


const store = createStore(reducers)

export default store; 