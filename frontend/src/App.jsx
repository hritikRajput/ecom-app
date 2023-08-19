import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
const App = () => {
    return (
        <div className="font-baskerville">
            <Routes>
                <Route path="/products" element={<Products />} />
            </Routes>
        </div>
    )
}

export default App;


