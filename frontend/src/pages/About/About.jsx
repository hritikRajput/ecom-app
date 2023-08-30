import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

const About = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="bg-color-callout flex-grow">
                <div className="py-4 min-w-[320px] w-4/5 mx-auto">
                    <h1 className="text-4xl text-center mb-8 text-seconday-dark">Welcome to Booknest – Your Ultimate Bookstore Experience!</h1>
                    <div className="flex flex-col gap-4 text-color-dark-text">
                        <p>
                            Discover the world of literature like never before with Booknest. As passionate book enthusiasts, we've carefully curated a collection that spans genres and eras, ensuring there's a perfect read for every reader.
                        </p>
                        <p>
                            Browse effortlessly through our user-friendly interface and securely checkout with just a few clicks. Join our community to discuss your favorite titles, share insights, and connect with fellow book lovers.
                        </p>
                        <p>
                            At Booknest, we're not just selling books – we're fostering a love for reading. Thank you for being a part of our journey. Happy reading!
                        </p>
                    </div>
                </div>
            </main>
            <Footer />

        </div>
    )
}

export default About
