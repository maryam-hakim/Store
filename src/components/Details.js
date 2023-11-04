import {React , useContext , useEffect , useState} from 'react';
import axios from 'axios';
import {ProductContext} from '../context/ProductContextProvider';
import { Link , useParams} from 'react-router-dom';
import styles from './Details.module.css'

const Details = (props) => {
    const [product , setProduct] = useState({})
    const params = useParams();
    const id = params.id;
    //const id = props.match.param.id
    
    useEffect(()=>{
       const fetch = async() =>{
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
       }
       fetch();
    },[]

    )

    return (
        <div className={styles.details_component}>
    
            <img src={product.image} alt="product-img"></img>
            <div>
            <h3>{product.title}</h3>
            <p>category: {product.category}</p>
            <p>{product.price} $</p>
            <Link to="/products" >back to store </Link>
            </div>
            
        </div>
    );
};

export default Details;