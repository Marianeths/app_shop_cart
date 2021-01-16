import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import Products from './components/productPage/Products'
import style from './app.module.scss'
import CartPage from './components/cartPage/CartPage';
function App() {
  return (
    <div className={style.appWrapper}>
      <Header/>
      <div className={style.container}>
        <div className={style.content}>
          <Route path='/' exact render={() => <Products/>} />
          <Route path='/cart' render={() => <CartPage/>} />
        </div>
      </div>
      

    </div>
  );
}

export default App;
