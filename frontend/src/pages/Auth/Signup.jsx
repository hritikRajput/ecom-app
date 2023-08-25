import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import useAuth from "../../context/AuthContext/useAuth";
import { signUp } from "../../services/authService"

const Signup = () => {
    const { state, dispatch } = useAuth();
    console.log(state)

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
        console.log("I am submitted")
        const data = await signUp({
            name: state.name,
            email: state.email,
            number: state.number,
            password: state.password,
        });
        console.log(data)
    };

    return (
        <div>
            <Header />
            <main className="bg-color-callout">
                <div className="w-1/3 py-12 px-8 mx-auto">
                    <h2 className="text-4xl mb-8">Signup</h2>
                    <div className="py-8 px-8 bg-white border-[1px] border-solid border-color-border p-2 rounded w-full text-color-dark-text outline-none">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label htmlFor="name" className="mb-2 text-color-dark-text">Name</label>
                                <input type="text" id="name" name="name" value={state.name} onChange={handleChange} className="border-[1px] border-solid border-color-border p-2 rounded w-full text-color-dark-text outline-none" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="mb-2 text-color-dark-text">Email</label>
                                <input type="email" id="email" name="email" value={state.email} onChange={handleChange} className="border-[1px] border-solid border-color-border p-2 rounded w-full text-color-dark-text outline-none" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="number" className="mb-2 text-color-dark-text">Number</label>
                                <input type="text" id="number" name="number" value={state.number} onChange={handleChange} className="border-[1px] border-solid border-color-border p-2 rounded w-full text-color-dark-text outline-none" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="mb-2 text-color-dark-text">Password</label>
                                <input type="password" id="password" name="password" value={state.password} onChange={handleChange} className="border-[1px] border-solid border-color-border p-2 rounded w-full text-color-dark-text outline-none" />
                            </div>
                            <button type="submit" className="px-2 py-1 border-solid border-2 bg-color-primary text-white rounded-md w-full">SIGN UP</button>
                        </form>
                    </div >
                </div >
            </main>
            <Footer />
        </div>
    )
}


export default Signup;