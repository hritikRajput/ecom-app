import Header from "../../components/Header/Header";

const Signup = () => {
    return (
        <div>
            <Header />
            <main className="bg-color-callout">
                <div className="w-1/3 py-12 px-8 mx-auto">
                    <h2 className="text-4xl mb-8">Signup</h2>
                    <div className="py-8 px-8 bg-white border-[1px] border-solid border-color-border p-2 rounded w-full text-color-dark-text outline-none">
                        <form action="">
                            <div className="mb-6">
                                <label htmlFor="username" className="mb-2 text-color-dark-text">Name</label>
                                <input type="text" id="username" className="border-[1px] border-solid border-color-border p-2 rounded w-full text-color-dark-text outline-none" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="mb-2 text-color-dark-text">Email</label>
                                <input type="email" id="email" className="border-[1px] border-solid border-color-border p-2 rounded w-full text-color-dark-text outline-none" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="number" className="mb-2 text-color-dark-text">Number</label>
                                <input type="text" id="number" className="border-[1px] border-solid border-color-border p-2 rounded w-full text-color-dark-text outline-none" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="mb-2 text-color-dark-text">Password</label>
                                <input type="password" id="password" className="border-[1px] border-solid border-color-border p-2 rounded w-full text-color-dark-text outline-none" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password-confirmation" className="mb-2 text-color-dark-text">Password Confirmation</label>
                                <input type="password" id="password-confirmation" className="border-[1px] border-solid border-color-border p-2 rounded w-full text-color-dark-text outline-none" />
                            </div>
                            <div className="mb-6">
                                <input type="checkbox" name="rememberMe" id="rememberMe" />
                                <label htmlFor="rememberMe" className="ml-2">Remember me</label>
                            </div>

                            <button type="submit" className="px-2 py-1 border-solid border-2 bg-color-primary text-white rounded-md w-full">REGISTER</button>
                        </form>
                    </div >
                </div >
            </main>
        </div>
    )
}

export default Signup;