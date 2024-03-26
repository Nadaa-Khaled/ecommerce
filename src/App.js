import React from 'react'
import Navbar from './components/Navbar/Navbar'
import MainSlider from './components/MainSlider/MainSlider'
import Categories from './components/Categories/Categories'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Brands from './components/Brands/Brands'
import Cart from './components/Cart/Cart'
import Wishlist from './components/Wishlist/Wishlist'
import Signin from './components/Signin/Signin'
import AuthLayout from './Layouts/AuthLayout'
import Signup from './components/Signup/Signup'
import NotFound from './components/NotFound/NotFound'
import { Offline, Online } from "react-detect-offline";
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import ProductDetails from './components/ProductDetails/ProductDetails'
import StoreContextProvider from './context/storeContext'
import { ToastContainer, toast } from 'react-toastify';
import Address from './components/Address/Address'
import BrandDetails from './components/BrandDetails/BrandDetails'





export default function App() {
  let routes = createBrowserRouter([
    {path: '/', element:<MainLayout/>,children:[
      {index:true,element:<ProtectedRoutes> <Home/> </ProtectedRoutes>},
      {path:'home',element:<ProtectedRoutes> <Home/> </ProtectedRoutes>},
      {path:'products',element:<ProtectedRoutes> <Products/> </ProtectedRoutes>},
      {path:'categories',element:<ProtectedRoutes> <Categories/> </ProtectedRoutes>},
      {path:'brands',element:<ProtectedRoutes> <Brands/> </ProtectedRoutes>},
      {path:'cart',element:<ProtectedRoutes> <Cart/> </ProtectedRoutes>},
      {path:'wishlist',element:<ProtectedRoutes> <Wishlist/> </ProtectedRoutes>},
      {path:'product-details/:id',element:<ProtectedRoutes> <ProductDetails/> </ProtectedRoutes>},
      {path:'brand-details/:idd',element:<ProtectedRoutes> <BrandDetails/> </ProtectedRoutes>},
      {path:'address/:id',element:<ProtectedRoutes> <Address/> </ProtectedRoutes>},
      {path:"*",element:<NotFound/>}
    ]},
    {path: '/', element:<AuthLayout/>,children:[
      {path:'signup',element:<Signup/>},
      {path:'signin',element:<Signin/>}
    ]}
  ])
  return (
    <>
    <StoreContextProvider>
    <RouterProvider router={routes} />

    </StoreContextProvider>
  
<ToastContainer theme='colored' autoClose={700}/>
    <Offline>
      <div className='offline'>You are offline Now!</div>
    </Offline>
    
     
    </>
  )
}
