import Header from '../../Components/Header'
import './Home.css'
import SearchInput from '../../Components/SearchInput'
import Card from '../../Components/Card'
import { useEffect, useState } from 'react'

const Home = () => {

    const [topRated, setTopReated] = useState(false)

    const urlBase = process.env.REACT_APP_URL_BASE
    const apiKey = process.env.REACT_APP_API_KEY

    const getTopRated = async () => {
        try {
            const data = await fetch(`${urlBase}top_rated?api_key=${apiKey}`);
            const json = await data.json();
            console.log(json);
            setTopReated(json.results)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getTopRated();
    },[])

    if(topRated === false){
        return (
            <div>
                <Header />
                <div className='search__section'>
                    <SearchInput placeholder={'Search for a movie'}/>
                </div>
            </div>
        )
    }else {
        return (
            <div>
                <Header />
                <div className='search__section'>
                    <SearchInput placeholder={'Search for a movie'}/>
                </div>
                <div className='movies__section'>
                    {topRated.map(movie => <Card 
                    image={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                    name={movie.original_title}
                    release={movie.release_date}
                    rating={movie.vote_average}
                    />)}
                </div>
            </div>
        )
    }

    
}

export default Home