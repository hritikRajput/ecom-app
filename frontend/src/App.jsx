import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import WishList from "./pages/Wishlist/WishList";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
const App = () => {
    return (
        <div className="font-baskerville">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default App;


