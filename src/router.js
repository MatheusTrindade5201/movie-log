import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Movie from "./Pages/Movie";
import Register from "./Pages/Register";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' exact />
                <Route element={<Movie />} path='/movie/:id'/> 
                <Route element={<Register />} path='/register'/>
                <Route element={<Login />} path='/Login' />
            </Routes>
        </BrowserRouter>
    )
}

export default Router