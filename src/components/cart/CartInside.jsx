import CartBlock from './CartBlock'
import { NavLink } from 'react-router-dom';
import style from './cartInside.module.scss'


const CartInside = props => {
    const productsInCart = props.productsInCart.map(product => {
        return (<CartBlock key={product.id} name={product.name} price={product.price} discount={product.discount} img={product.img} quantity={product.quantityInCart} id={product.id} changeQuantity={props.changeQuantity} updateTotalPrice={props.updateTotalPrice} />)
    })
    return (
        <div className={props.open ? style.cartInsideWrapper + ' ' + style.active : style.cartInsideWrapper} onClick={() => props.setOpen(false)}>
            <div className={props.open ? style.cartInsideContent + ' ' + style.active : style.cartInsideContent} onClick={(e) => e.stopPropagation()}>
                        {productsInCart}
                    <div className={style.totalCount}>Итоговая цена: {props.totalPrice}$</div>
                    <div className={style.toTheCart}>
                        <NavLink to='/cart' activeClassName={style.toTheCartActive} onClick={()=>{props.setOpen(false)}}>В корзину</NavLink>
                    </div>
            </div>
        </div>
    )
}

export default CartInside