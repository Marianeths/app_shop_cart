import { createSelector } from "reselect"

export const getProducts = (state) =>{
    return state.products.products
}

export const getProductInCart = createSelector(getProducts,(products) =>{
    return products.filter(product => product.quantityInCart > 0)
})