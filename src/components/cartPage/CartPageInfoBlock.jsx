import { calculatePriceFn } from '../../redux/products/productsReducer'
import style from './cartPageInfoBlock.module.scss'


const CartPageInfoBlock = props =>{
    const sumPrice = calculatePriceFn(props.quantity,props.price,props.discount)
    const discountPrice = Math.floor(props.quantity / 3) * props.discount
    return(
        <div className={style.cartPageInfoBlock}>
            <div className={style.productName}> {props.name}</div>
            <div> Цена за кг <span>{props.price}$</span></div>
            <div> Количество <span>{props.quantity}кг</span></div>

            <div> Итоговая скидка <span>{discountPrice}$</span></div>
            <div> Итоговая цена <span>{sumPrice}$</span></div>
        </div>
    )
}

export default CartPageInfoBlock