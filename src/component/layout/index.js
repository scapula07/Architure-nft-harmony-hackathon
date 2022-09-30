import Footer from "./footer"
import Navbar from "./navbar"

const Layout = ({children}) => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="content">
                <Navbar />
                <div className="">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout