import Layout from "component/layout"
import Hero from "./hero"
import NewCollection from "./new-collection"
import TopNftCreator from "./top-nft-creator"

const Home = () => {
    return (
        <Layout>
            <Hero />
            <NewCollection />
            <TopNftCreator/>
        </Layout>)
}

export default Home