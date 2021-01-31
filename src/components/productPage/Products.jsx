import { connect } from 'react-redux'
import { changeQuantity, updateTotalPrice } from '../../redux/products/productsReducer'
import { getProducts } from '../../redux/products/productsSelector'
import ProductBlock from './ProductBlock'
import style from './products.module.scss'
import Slider from './slider/Slider'

const Products = props =>{
    let products = props.products.map(product =>{
        return <ProductBlock name={product.name} price={product.price} key={product.id} img ={product.img} discount={product.discount} quantityInCart={product.quantityInCart} id={product.id} addToCart={props.changeQuantity} updateTotalPrice={props.updateTotalPrice}/>
    })
    return (
        <>
        <Slider/>
        <div className={style.productWrapper}>
            {products}
        </div>
        </>
        
    )
}

const mapStateToProps = (state) =>({
    products:getProducts(state)
})

const mapDispatchToProps ={
    changeQuantity:changeQuantity,
    updateTotalPrice:updateTotalPrice,
}



export default connect(mapStateToProps,mapDispatchToProps)(Products)