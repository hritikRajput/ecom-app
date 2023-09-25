import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import WishList from "./pages/WishList/WishList";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Cart from "./pages/Cart/Cart";
import About from "./pages/About/About";
import ProductDescrition from "./pages/ProductDescription/ProductDescrition";
const App = () => {
    return (
        <div className="font-baskerville min-h-[100vh]">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/description" element={<ProductDescrition />} />
            </Routes>
        </div>
    )
}

export default App;


