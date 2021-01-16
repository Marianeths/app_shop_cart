import { connect } from "react-redux"
import { Redirect } from 'react-router-dom';
import { getProductInCart } from "../../redux/products/productsSelector"
import style from './cartPage.module.scss'
import CartPageInfoBlock from "./CartPageInfoBlock"

const CartPage = props => {
    const productsInCart = props.productsInCart.map(product => {
        return (<CartPageInfoBlock price={product.price} name={product.name} quantity={product.quantityInCart} discount={product.discount} />)
    })
    if (props.productsInCart.length === 0) return <Redirect to='/' />
    return (
        <div className={style.cartPage}>
            <div className={style.InfoBloks}>
                {productsInCart}
            </div>
            <div className={style.totalPrice}>
                Общая цена: {props.totalPrice}$
                <button>Оформить заказ</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    productsInCart: getProductInCart(state),
    totalPrice: state.products.totalPrice
})

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(CartPage)