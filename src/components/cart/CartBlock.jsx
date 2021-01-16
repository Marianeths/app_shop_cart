import style from './cartBlock.module.scss'

const CartBlock = props => {
    const click = (id, quantity) =>{
        props.changeQuantity(id, quantity)
        props.updateTotalPrice(id, quantity)
    }
    return (
        <div className={style.cartBlockWrapper}>
            <div className={style.close} onClick={()=>click(props.id, -props.quantity)}>x</div>
            <div className={style.name}>
                {props.name}
            </div>
            <div className={style.content}>
                <img src={props.img} alt="" />
                <div className={style.buttonBlock}>
                    <button className={style.decrement} onClick={() => click(props.id, -1)}>-</button>
                    <span>{props.quantity}</span>
                    <button className={style.increment} onClick={() => click(props.id, 1)}>+</button>
                </div>
            </div>
            <div className={style.priceBlock}>
                <div>{props.price}$ за кг</div>
                {props.discount
                    ? <div className={style.discount}>
                        скидка за 3кг
                    <div className={style.discountHover}>
                            {props.discount}$
                    </div>
                    </div>
                    : <></>}

            </div>
        </div>
    )

}

export default CartBlock