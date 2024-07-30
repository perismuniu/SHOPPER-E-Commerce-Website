import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import Shop from './components/pages/Shop.jsx';
import ShopCategory from './components/pages/ShopCategory.jsx';
import Product from './components/pages/Product.jsx';
import Cart from './components/pages/Cart.jsx';
import LoginSignup from './components/pages/LoginSignup.jsx';

function App() {
  return (
    <BrowserRouter>
      {/* Render Navbar only once, outside the Routes */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory category="men" />} />
        <Route path='/women' element={<ShopCategory category="women"/>} />
        <Route path='/kids' element={<ShopCategory category="kids"/>} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;