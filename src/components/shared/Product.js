import {React , useContext} from 'react';
import {shorten , isInCart , quantityCount} from '../../helper/functions';
import {Link} from 'react-router-dom';
import {cartContext} from '../../context/CartContextProvider';
import styles from '../shared/Product.module.css';
import trash  from '../../assets-icons/trash.svg'

const Product = ({productDetails}) => {
    const {state , dispatch} = useContext(cartContext);
    return (
        <div className={styles.product_container}>
            <img src={productDetails.image} alt="product"></img>
            <h3>{shorten(productDetails.title)}</h3>
            <p>{productDetails.price} $</p>
            <Link to= {`/products/${productDetails.id}`}>details</Link>
            <div>
                <div className={styles.buttons}>
                {
                isInCart(state , productDetails.id)?
                 <button onClick={() => dispatch({type: "INCREASE" , payload: productDetails})}>+</button>
                 : <button onClick={() => dispatch({type: "ADD_ITEM" , payload: productDetails})}>add to basket</button>
                 }

                 {quantityCount(state , productDetails.id)}

                 {
                     quantityCount(state , productDetails.id) === 1 &&
                     <button onClick={() => dispatch({type: "REMOVE_ITEM" , payload: productDetails})}><img className={styles.icon} src={trash} /></button>
                 }

                {
                     quantityCount(state , productDetails.id) > 1 &&
                     <button onClick={() => dispatch({type: "DECREASE" , payload: productDetails})}>-</button>
                 }


                </div> 
            </div>
        </div>
    );
};

export default Product;