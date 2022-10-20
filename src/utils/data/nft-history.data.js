import AllisonAvatar from 'assests/landingPage/top-nft-creators/allison-avatar.png'

const nftHistoryList = Array(20).fill({
    image: AllisonAvatar,
    address: '0xcb4...ba5',
    option: 'Wiz buildings',
    vote: '14',
    amount: '11234 ONE'
})

const nftHistoryHeading = ['TO', 'OPTION', 'VOTE', 'ONE']

export {
    nftHistoryHeading,
    nftHistoryList
}

