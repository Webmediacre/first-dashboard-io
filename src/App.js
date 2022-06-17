
import React from "react";
// import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
// import your route components too


import TopBar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

import Home from "./pages/home/Home";

import UserList from "./pages/userlist/UserList";  
import User from "./pages/user/User";
import NewUser from "./pages/newuser/NewUser";

import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newproduct/NewProduct";

import "./app.css";

const App = () => { 

    return (

        <div>
            <TopBar /> 

            <div className="container">

                <Sidebar />

                <BrowserRouter> 
                
                    <Routes>  
                        <Route index path="/*" element={<Home />} /> 
                        <Route path="/users" element={<UserList />} /> 
                        <Route path="/user/:userId" element={<User />} />
                        <Route path="/newUser" element={<NewUser />} />
                        <Route path="/products" element={<ProductList />} />
                        <Route path="/product/:productId" element={<Product />} />
                        <Route path="/newProduct" element={<NewProduct />} /> 
                    </Routes>

                </BrowserRouter> 

            </div> 
        </div>

        
    )

}

export default App;