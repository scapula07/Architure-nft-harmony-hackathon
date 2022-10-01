import { Toaster } from "react-hot-toast"
import Layout from "./component/layout"

const App = () => {
  return (
    <Layout>
      <Toaster />
      <h1>hello world</h1>
    </Layout>
  )
}

export default App