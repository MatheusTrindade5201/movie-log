import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Header from '../../Components/Header'
import './Movie.css'

const Movie = () => {

    const [movies, setMovies] = useState(false)

    const urlBase = process.env.REACT_APP_URL_BASE
    const apiKey = process.env.REACT_APP_API_KEY

    const {id} = useParams();

    const getMovie = async () =>{
        try {
            const data = await fetch(`${urlBase}${id}?api_key=${apiKey}`);
            const json = await data.json();
            console.log(json);
            setMovies(json.results);
        } catch (error) {
            console.log(error.message);
        }
    }

useEffect(() => {
    getMovie();
},[])

if(movies === false){
    return (
        <div>
            <Header />
            <NavLink className='return__button' to={'/'} >Return</NavLink>
        </div>
    )
}else {
    return (
        <div>
            <Header />
            <NavLink className='return__button' to={'/'} >Return</NavLink>
        </div>
    )
}
}

export default Movie