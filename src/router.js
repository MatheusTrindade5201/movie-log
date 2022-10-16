import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import HomeLoged from "./Pages/HomeLoged";
import Login from "./Pages/Login";
import Movie from "./Pages/Movie";
import MovieLoged from "./Pages/MovieLoged";
import Register from "./Pages/Register";

const Router = () => {
    const session = sessionStorage.getItem('@AuthFirebase:user');
    console.log(!!session);
    if(!!session){
        return (
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLoged />} path='/' />
                    <Route element={<MovieLoged />} path='movie/:id'/> 
                    <Route element={<Register />} path='/register'/>
                    <Route element={<Login />} path='/Login' />
                </Routes>
            </BrowserRouter>
        )
    }
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