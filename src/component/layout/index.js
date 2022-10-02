import { useContractContext } from "context/contract-context"
import { useEffect } from "react"
import toast from "react-hot-toast"
import { ethereum, web3 } from "utils/constants"
import { handleNetworkSwitch, isHarmonyNetwork } from "utils/helpers/network-switch.helper"
// import { handleNetworkSwitch } from "utils/helpers/nerwork-switch.helper"
import Footer from "./footer"
import Navbar from "./navbar"

const Layout = ({ children }) => {
    const { isWalletConnected } = useContractContext()

    const networkChanged = async (chainId) => {
        if (!(isHarmonyNetwork(chainId))) {
            await handleNetworkSwitch("testnet")
        }
    }
    useEffect(() => {
        ethereum?.on('chainChanged', networkChanged)
        return () => {
            ethereum?.removeListener("chainChanged", networkChanged);
        };
    }, [])

    useEffect(() => {
        const switchNetwork = async () => {
            if (!ethereum) return toast.error("You must install Metamask in your browser extension.")
            const chainId = await web3.eth.getChainId().then()
            if (!isHarmonyNetwork(chainId)) {
                await handleNetworkSwitch("testnet")
            }
        }
        switchNetwork()
    }, [isWalletConnected])

    return (
        <div className="flex flex-col min-h-screen">
            <div className="content">
                <Navbar />
                <div className="mt-14 md:mt-[86px]">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout