import Logo from "assests/footer/logo.png"

const Footer = () => {
    return (
        <footer className="bg-b1 text-white py-10">
            <div className="layout-container">
                {/* logo and terms of condition */}
                <div className="space-y-2">
                    <img src={Logo} alt="" />
                    <ul className="capitalize space-x-3">
                        <a href="/">Privacy policy</a>
                        <a href="/">Terms of service</a>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer