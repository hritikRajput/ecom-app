import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <div className="flex items-center gap-8 py-4 min-w-[320px] w-4/5 mx-auto">
                    <h2 className="w-1/2 font-bold text-5xl text-color-dark-text">Discover new worlds with every page</h2>
                    <div className="bg-hero-books bg-no-repeat h-[420px] w-full object-cover rounded-md">
                    </div>
                </div>
            </main>
            <Footer />
        </>

    )
}

export default Home;
