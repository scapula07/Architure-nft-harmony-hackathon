import Layout from 'component/layout';
import CreateNft from 'pages/create-nft';
import CreatePool from 'pages/create-pool';
import Home from 'pages/home'
import Profile from 'pages/profile';
import Stake from 'pages/stake';
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/create-nft" element={<CreateNft />} />
            <Route path="/stake" element={<Stake />} />
            <Route path="/create-pool" element={<CreatePool />} />
            <Route path="/profile" element={<Profile />} />
        </Route>
    )
)



const AppRouter = () => {

    return (
        <>
            <Toaster />
            <RouterProvider router={router} />
        </>
    )

}

export default AppRouter