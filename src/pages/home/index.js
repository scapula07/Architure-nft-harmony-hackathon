import Layout from "component/layout"
import CreateNft from "./create-nft"
import Hero from "./hero"
import NewCollection from "./new-collection"
import TopCollection from "./top-collection"
import TopNftCreator from "./top-nft-creator"

const Home = () => {
    return (
        <Layout>
            <Hero />
            <NewCollection />
            <TopCollection />
            <TopNftCreator/>
            <CreateNft />
        </Layout>)
}

export default Home