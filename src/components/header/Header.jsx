import Cart from '../cart/Cart'
import { NavLink } from 'react-router-dom';
import style from './header.module.scss'
const Header = props =>{
    return(
        <div className={style.headerWrapper}>
            <div className={style.headerContent}>
                <NavLink to='/'>
                    <div className={style.logo}>Logo</div>
                </NavLink>
                <Cart/>
            </div>
        </div>
    )
}



export default Header