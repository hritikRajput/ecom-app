import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
const App = () => {
    return (
        <div className="font-baskerville">
            <Routes>
                <Route path="/products" element={<Products />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App;


