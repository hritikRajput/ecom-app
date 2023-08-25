import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import useWishList from "../../context/useWishList"
import bookstack from "../../assets/bookstack1.jpg"

const Home = () => {
    const { state } = useWishList()
    console.log(state)

    return (
        <>
            <Header />
            <main>
                <div className="flex items-center gap-8 py-4 min-w-[320px] w-4/5 mx-auto">
                    <h2 className="w-1/2 font-bold text-5xl text-color-dark-text">Discover new worlds with every page</h2>
                    <div className="h-[420px] w-full object-cover bg-[url('src/assets/bookstack1.jpg')] rounded-md">
                    </div>
                </div>
            </main>
            <Footer />
        </>

    )
}

export default Home;
