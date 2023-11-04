import React , { useContext } from 'react';
import trash from "../../assets-icons/trash.svg";
import {cartContext} from "../../context/CartContextProvider";
import styles from './Cart.module.css';
import {shorten} from '../../helper/functions'

const Cart = (props) => {
    const { title , price , image , quantity } = props.data;
    const { dispatch } = useContext(cartContext);

    return (
        <div className={styles.cart_container}>
            <img src={image} alt="cart-img" className={styles.cart_image}/>
            <div className={styles.title}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>

            <div className={styles.buttons}>

            {
            quantity === 1 ?
            <button onClick={() => dispatch({type : "REMOVE_ITEM", payload : props.data})}><img className={styles.icon} src={trash} /></button> :
            <button onClick={() => dispatch({type : "DECREASE", payload : props.data})}>-</button>
            }
            <span>{quantity}</span>
            {
            <button onClick={() => dispatch({type : "INCREASE", payload : props.data})}>+</button>
            }
            </div>

            
        </div>
    );
};

export default Cart;