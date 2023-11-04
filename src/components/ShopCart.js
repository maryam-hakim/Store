import React , { useContext } from 'react';
import {cartContext} from "../context/CartContextProvider";
import Cart from '../components/shared/Cart';
import { Link } from 'react-router-dom';
import styles from './shopCart.module.css'




const ShopCart = () => {

    const { state , dispatch } = useContext(cartContext);

    return (
        <div className={styles.shopcart_container}>
            <div>
            {
                state.selectedItems.map(item => <Cart key={item.id} data={item}/>)
            }
            </div>
            {state.sumProduct > 0 && <div className={styles.checkOut}>
                
                   <p><span>total payment: </span>{state.sumPrice} $</p> 
                   <p><span>total items: </span>{state.sumProduct}</p> 
                   <div className={styles.buttons}>
                       <button onClick={() => dispatch({type : "CLEAR"})} className={styles.clear_button}>Clear</button>
                       <button onClick={() => dispatch({type : "CHECKOUT"})}>Check out</button>
                   </div>
                   </div>}
                   {state.checkOut && 
                   <div className={styles.checkOut}>
                   <p>You checked out successfully</p>
                   <Link to="/products">Buy more</Link>
                   </div>}

                   {!state.checkOut && state.sumProduct === 0 &&
                   <div className={styles.checkOut}>
                   <p>Buy more?</p>
                   <Link to="/products">Go to shop</Link>
                   </div>}
                
            </div>
        
        
    );
};

export default ShopCart;