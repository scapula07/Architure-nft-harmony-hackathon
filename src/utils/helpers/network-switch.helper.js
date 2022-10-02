import toast from 'react-hot-toast';
import { ethereum, networks, shardId } from "utils/constants";

const changeNetwork = async ({ networkName }) => {
    await ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
            {
                ...networks[networkName]
            }
        ],
    });
}

export const isHarmonyNetwork = (chainId) => `0x${Number(chainId).toString(16)}` === `0x${Number(1666700000 + shardId).toString(16)}`

export const handleNetworkSwitch = async (networkName) => {
    const notification = toast.loading("Switching to Harmony network...")
    try {
        if (!ethereum) return toast.error("You must install Metamask in your browser extension.", {
            id: notification
        })
        await changeNetwork({ networkName })
        toast.success('Network switch was successful', {
            id: notification
        })
    } catch (error) {
        console.error(error)
        toast.error("Something went wrong", {
            id: notification
        })
    }
}