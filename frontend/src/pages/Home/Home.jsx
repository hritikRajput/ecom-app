import Header from "../../components/Header/Header"
import useWishList from "../../context/useWishList"

const Home = () => {
    const { state } = useWishList()
    console.log(state)

    return (
        <>
            <Header />
        </>

    )
}

export default Home;
