import React , {useState , useEffect} from 'react';
import {getProducts} from '../Services/api'

export const ProductContext = React.createContext();

const ProductContextProvider = ({children}) => {

    const [products , setProducts] = useState([]);

    useEffect( () =>{
        const fetchAPI = async () =>{
            setProducts(await getProducts());
        }
        fetchAPI();
    },[]

    );


    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;