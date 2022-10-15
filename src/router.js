import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Home_loged from "./Pages/Home-loged";
import Login from "./Pages/Login";
import Movie from "./Pages/Movie";
import Movie_loged from "./Pages/Movie_loged";
import Register from "./Pages/Register";

const Router = () => {
    const session = sessionStorage.getItem('@AuthFirebase:user');
    console.log(!!session);
    if(!!session){
        return (
            <BrowserRouter>
                <Routes>
                    <Route element={<Home_loged />} path='/' />
                    <Route element={<Movie_loged />} path='movie/:id'/> 
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