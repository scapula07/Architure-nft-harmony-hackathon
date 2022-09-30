import { Bars3Icon } from '@heroicons/react/24/solid'
import Logo from "assests/navbar/logo.png"
import Button from 'component/button'
import ConnectWalletModal from 'component/modal/connect-wallet-modal'
import { useContractContext } from 'context/contract-context'
import { useState } from 'react'
import { navbarLinks } from 'utils/data'
import { formatWalletAddress } from 'utils/helpers/format.helper'
import SideBar from './sidebar'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [showConnectWalletModal, setShowConnectWalletModal] = useState(false);

    const { account, isWalletConnected } = useContractContext()


    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleConnectWallet = () => {
        if (!isWalletConnected) {
            setShowConnectWalletModal(true)
        }
    }
    return (
        <>
            <SideBar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                toggleMenu={toggleMenu}
            />
            <ConnectWalletModal {...{ setShowConnectWalletModal, showConnectWalletModal }} />

            <header className="fixed top-0 left-0 w-full flex items-center z-[99] h-14 md:h-[86px] bg-b1">
                <div className="layout-container flex items-center justify-between">
                    <img src={Logo} alt="" />
                    <nav className='hidden md:flex items-center space-x-8'>
                        <ul className='text-stroke text-sm leading-4 space-x-8'>
                            {navbarLinks.map((item, index) => (
                                <a key={index} href={item.to}>{item.name}</a>
                            ))}
                        </ul>

                        <Button
                            title={isWalletConnected ? formatWalletAddress(account) : "connect wallet"}
                            className="w-[142px] h-[38px]"
                            handleClick={handleConnectWallet}
                        />
                    </nav>
                    <Bars3Icon className='text-white h-6 w-6 md:hidden' onClick={toggleMenu} />
                </div>
            </header>
        </>
    )
}

export default Navbar
