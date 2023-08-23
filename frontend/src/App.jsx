import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import WishList from "./pages/Wishlist/WishList";
const App = () => {
    return (
        <div className="font-baskerville">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/wishlist" element={<WishList />} />
            </Routes>
        </div>
    )
}

export default App;


