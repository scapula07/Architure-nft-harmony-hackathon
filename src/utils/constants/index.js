import Web3 from "web3"

const rpcUrl = {
    mainnet: 'https://api.s0.t.hmny.io',
    testnet: 'https://api.s0.b.hmny.io'
}

const web3 = new Web3(rpcUrl.testnet)

const { ethereum } = window

export {
    rpcUrl,
    web3,
    ethereum
}