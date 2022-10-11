import Header from '../../Components/Header'
import './Home.css'
import SearchInput from '../../Components/SearchInput'
import Card from '../../Components/Card'
import { useEffect, useState } from 'react'
import FilterButton from '../../Components/FilterButton'

const Home = () => {

    const [topRated, setTopReated] = useState(false)
    const [filter, setFilter] = useState('popular')

    const urlBase = process.env.REACT_APP_URL_BASE
    const apiKey = process.env.REACT_APP_API_KEY

    const getTopRated = async () => {
        try {
            const data = await fetch(`${urlBase}${filter}?api_key=${apiKey}`);
            const json = await data.json();
            console.log(json);
            setTopReated(json.results)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getTopRated();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[filter])

    if(topRated === false){
        return (
            <div>
                <Header />
                <div className='search__section'>
                    <SearchInput placeholder={'Search for a movie'}/>
                </div>
                <div className='filters'>
                    <FilterButton
                     btnValue={'popular'}
                     changeFilter={value => setFilter(value)}
                     text={'Popular'} />
                    <FilterButton
                     btnValue={'top_rated'}
                     changeFilter={value => setFilter(value)}
                     text={'Top Rated'} />
                    <FilterButton
                     btnValue={'now_playing'}
                     changeFilter={value => setFilter(value)}
                     text={'Now Playing'} />
                    <FilterButton
                     btnValue={'upcoming'}
                     changeFilter={value => setFilter(value)}
                     text={'Upcoming'} />
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
                <div className='filters'>
                    <FilterButton
                     btnValue={'popular'}
                     changeFilter={value => setFilter(value)}
                     text={'Popular'} />
                    <FilterButton
                     btnValue={'top_rated'}
                     changeFilter={value => setFilter(value)}
                     text={'Top Rated'} />
                    <FilterButton
                     btnValue={'now_playing'}
                     changeFilter={value => setFilter(value)}
                     text={'Now Playing'} />
                    <FilterButton
                     btnValue={'upcoming'}
                     changeFilter={value => setFilter(value)}
                     text={'Upcoming'} />
                </div>
                <div className='movies__section'>
                    {topRated.map(movie => <Card 
                    image={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                    name={movie.title}
                    release={movie.release_date}
                    rating={movie.vote_average}
                    />)}
                </div>
            </div>
        )
    }

    
}

export default Home