import './App.css';
//context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

//components
import Store from './components/Store';
import Details from './components/Details';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

import {Routes , Route , Navigate} from 'react-router-dom';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
      <Routes>
        <Route path="/products/:id" element={<Details />} />
        <Route path="/products" element={<Store />} />
        <Route path="/shop" element={<ShopCart />} />
        <Route path="/*" element={<Navigate to="/products"/>} />
      </Routes>
      </CartContextProvider>
    </ProductContextProvider>
    
  );
}

export default App;
