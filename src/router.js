import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' exact />
                <Route element={<Movie />} path='/movie/:id'/> 
            </Routes>
        </BrowserRouter>
    )
}

export default Router