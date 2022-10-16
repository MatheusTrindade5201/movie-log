import { useEffect, useState } from 'react'
import { json, NavLink, useParams } from 'react-router-dom'
import Details from '../../Components/Details'
import Header from '../../Components/Header'
import './Movie.css'

const MovieLoged = () => {

    const [movie, setMovie] = useState(false)
    const [list, setList] = useState([])


    const urlBase = process.env.REACT_APP_URL_BASE
    const apiKey = process.env.REACT_APP_API_KEY

    const addOnList = () => {
        localStorage.setItem(movie.title, JSON.stringify(movie) )
    }

    const getList = () => {
        if(localStorage.length > 0){
        let list = []
        for(let i = 0; i < localStorage.length; i++ ){
            let key = localStorage.key(i)
            let movie = JSON.parse(localStorage.getItem(key)) 
            list.push(movie)
        }
        setList(list)
        }
    }

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
    getList()
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
                addMovie={<button className='header__myList' onClick={addOnList}>Add to my list</button>}
                key={movie.title}
                image ={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                name = {movie.title}
                rating={movie.vote_average}
                release={movie.release_date}
                language={movie.spoken_languages[0].english_name}
                duration={movie.runtime}
                overview={movie.overview}
                bg={movie.backdrop_path}
                genre={movie.genres.map(genre => <li className='genre'>{genre.name}</li>)}
                />
            </div>
        </div>
    )
}
}

export default MovieLoged