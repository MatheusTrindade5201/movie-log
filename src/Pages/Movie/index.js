import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Details from '../../Components/Details'
import Header from '../../Components/Header'
import './Movie.css'

const Movie = () => {

    const [movie, setMovie] = useState(false)

    const urlBase = process.env.REACT_APP_URL_BASE
    const apiKey = process.env.REACT_APP_API_KEY

    const {id} = useParams();

    const getMovie = async () =>{
        try {
            const data = await fetch(`${urlBase}${id}?api_key=${apiKey}&append_to_response=watch/providers`);
            const json = await data.json();
            console.log(json);
            setMovie(json);
        } catch (error) {
            console.log(error.message);
        }
    }

useEffect(() => {
    getMovie();
},[])

if(movie === false){
    return (
        <div>
            <Header />
            <div className='return'>
                <NavLink className='return__button' to={'/'} >Return</NavLink>
            </div>
        </div>
    )
}else {
    return (
        <div>
            <Header />
            <div className='return'>
                <NavLink className='return__button' to={'/'} >Return</NavLink>
            </div>
            <div className='movie'>
                <Details 
                image ={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                name = {movie.title}
                rating={movie.vote_average}
                release={movie.release_date}
                language={movie.spoken_languages[0].english_name}
                duration={movie.runtime}
                overview={movie.overview}
                genre={movie.genres.map(genre => <li className='genre'>{genre.name}</li>)}
                />
            </div>
        </div>
    )
}
}

export default Movie