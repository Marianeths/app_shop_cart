import style from './productBlock.module.scss'

const ProductBlock = props =>{
    const click =(id, quantity) =>{
        props.addToCart(id, quantity)
        props.updateTotalPrice(id,quantity)
    }
    return(
        <div className={style.productBlockWrapper}>
            <div className={style.productImg}>
                <img src={props.img} alt="Картинка пропала,скоро найдем"/>
            </div>
            <div className={style.productInfo}>
                <div>
                    {props.name}
                </div>
                <div>
                    {props.price}$
                </div>
            </div>
            {props.quantityInCart === 0 ? <button className={style.addToCartButton} onClick={()=>{click(props.id, 1)}}><p>Добавить в корзину</p></button> : <button disabled className={style.addToCartButtonDisabled} ><p>Добавить в корзину</p></button>}
        </div>
    )
}

export default ProductBlock