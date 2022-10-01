import Layout from "component/layout"
import CreateNft from "./create-nft"
import Hero from "./hero"
import NewCollection from "./new-collection"
import TopNftCreator from "./top-nft-creator"

const Home = () => {
    return (
        <Layout>
            <Hero />
            <NewCollection />
            <TopNftCreator/>
            <CreateNft />
        </Layout>)
}

export default Home