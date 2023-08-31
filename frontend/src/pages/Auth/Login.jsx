import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import useAuth from "../../context/AuthContext/useAuth";
import { logIn } from "../../services/authService";

const Login = () => {
    const { state, dispatch } = useAuth();
    const navigate = useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("name:" + name, "value:" + value)
        dispatch({
            type: 'UPDATE_FIELD',
            payload: { [name]: value },
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await logIn({
            email: state.email,
            password: state.password,
        });

        dispatch({
            type: 'UPDATE_FIELD',
            payload: data.user,
        })

        // save the user to local storage
        localStorage.setItem('user', JSON.stringify(data.user))
        navigate("/")
    };

    return (
        <div>
            <Header />
            <main className="bg-color-callout h-full">
                <div className="w-1/3 py-12 px-8 mx-auto">
                    <h2 className="text-4xl mb-8">Login</h2>
                    <div className="py-8 px-8 bg-white border-[1px] border-solid border-color-border p-2 rounded w-full text-color-dark-text outline-none">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label htmlFor="email" className="mb-2 text-color-dark-text">Email</label>
                                <input onChange={handleChange} name="email" type="email" id="email" className="border-[1px] border-solid border-color-border p-2 rounded w-full text-color-dark-text outline-none" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="mb-2 text-color-dark-text">Password</label>
                                <input onChange={handleChange} name="password" type="password" id="password" className="border-[1px] border-solid border-color-border p-2 rounded w-full text-color-dark-text outline-none" />
                            </div>
                            <button type="submit" className="px-2 py-1 border-solid border-2 bg-color-primary text-white rounded-md w-full">LOGIN</button>
                        </form>
                    </div >
                </div >
            </main>
            <Footer />
        </div>
    )
}

export default Login;