import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import cartPng from '../../assets/images/cart.png'
import { changeQuantity, updateTotalPrice } from '../../redux/products/productsReducer'
import { getProductInCart } from '../../redux/products/productsSelector'
import style from './cart.module.scss'
import CartInside from './CartInside'


const Cart = props => {
    const [open, setOpen] = useState(false)
    useEffect(() => {
        if (props.productsInCart.length === 0 && open === true) {
            setOpen(false)
        }
    }, [props.productsInCart.length, open]);
    return (
        <div className={style.cart}>
            <div>{props.totalPrice}</div>
            {props.productsInCart.length === 0 ? <img className={style.cartImg} src={cartPng} alt="Корзина" /> : <img onClick={() => { setOpen(true) }} className={style.cartImg + ' ' + style.cartImgPointer} src={cartPng} alt="Картинка утеряна,просим прощения" />}
            {props.productsInCart.length > 0 ? <CartInside open={open} setOpen={setOpen} productsInCart={props.productsInCart} changeQuantity={props.changeQuantity} updateTotalPrice={props.updateTotalPrice} totalPrice={props.totalPrice}/> : <></>}
        </div>
    )
}

const mapStateToProps = state => ({
    productsInCart: getProductInCart(state),
    totalPrice: state.products.totalPrice
})

const mapDispatchToProps = {
    changeQuantity: changeQuantity,
    updateTotalPrice:updateTotalPrice,
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)