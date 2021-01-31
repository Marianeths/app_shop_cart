const initialState = {
    products: [
        {
            id: 1,
            name: 'Банан',
            price: 10,
            discount: null,
            quantityInCart: 0,
            img: 'https://www.gastronom.ru/binfiles/images/20151029/bddcbbce.jpg',
        },
        {
            id: 2,
            name: 'Яблоко',
            price: 8,
            discount: null,
            quantityInCart: 0,
            img: 'https://lifeglobe.net/x/entry/6259/1a-0.jpg',
        },
        {
            id: 3,
            name: 'Папайя',
            price: 10,
            discount: 5,
            quantityInCart: 0,
            img: 'https://grandkulinar.ru/uploads/posts/2016-12/1481145471_papajya.jpg',
        },
        {
            id: 4,
            name: 'Груша',
            price: 5,
            discount: 2,
            quantityInCart: 0,
            img: 'https://ic.pics.livejournal.com/esmarhov_ss/85882928/510510/510510_800.jpg',
        }
    ],
    totalPrice: 0

}

const CHANGE_QUANTITY = 'CHANGE_QUANTITY'
const UPDATE_TOTAL_PRICE = 'UPDATE_TOTAL_PRICE'

export const calculatePriceFn = (quantity, price, discount) => {
    if (quantity > 2) {
        let quantityWithDiscount = Math.floor(quantity / 3) * 3
        let quantityWithoutDiscount = quantity - (Math.floor(quantity / 3) * 3)
        return ((quantityWithDiscount * price - quantityWithDiscount/3 * discount) + (quantityWithoutDiscount * price))
    }
    else {
        return (quantity * price)
    }
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_QUANTITY:
            return {
                ...state,
                products: state.products.map(p => {
                    if (p.id === action.id) {
                        return { ...p, quantityInCart: p.quantityInCart + action.quantity }
                    }
                    return p

                })
            }

        case UPDATE_TOTAL_PRICE:
            let totalPrice = state.totalPrice
            const quantityInCart = state.products[action.id - 1].quantityInCart
            const price = state.products[action.id - 1].price
            const discount= state.products[action.id - 1].discount

                totalPrice = totalPrice - calculatePriceFn(quantityInCart-action.quantity, price,discount)
                totalPrice = totalPrice + calculatePriceFn(quantityInCart, price,discount)
            return {
                ...state,
                totalPrice: totalPrice

            }
        default:
            return state
    }
}
export const updateTotalPrice =(id,quantity) =>({ type:UPDATE_TOTAL_PRICE, id:id, quantity:quantity})
export const changeQuantity = (id, quantity) => ({ type: CHANGE_QUANTITY, id: id, quantity: quantity })
export default productsReducer