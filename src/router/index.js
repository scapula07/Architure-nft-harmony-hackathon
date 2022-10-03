import Layout from 'component/layout';
import CreateNft from 'pages/create-nft';
import Home from 'pages/home'
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/create-nft" element={<CreateNft />} />
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