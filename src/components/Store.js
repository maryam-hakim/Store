import React , {useContext} from 'react';
import {ProductContext} from '../context/ProductContextProvider';
import Product from './shared/Product';
import styles from './Store.module.css'

const Store = () => {

    const products = useContext(ProductContext);

    return (
        <div className={styles.store_container}>
            {products.map(product => <Product key={product.id} productDetails={product}/>)}
        </div>
    );
};

export default Store;