import Header from '../../Components/Header'
import './Home.css'
import SearchInput from '../../Components/SearchInput'
import Card from '../../Components/Card'
import { useEffect, useState } from 'react'
import FilterButton from '../../Components/FilterButton'
import Pagination from '../../Components/Pagination'
import { NavLink } from 'react-router-dom'

const Home = () => {
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState(false)
    const [filter, setFilter] = useState('popular')
    const [currentPage, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const urlBase = process.env.REACT_APP_URL_BASE
    const apiKey = process.env.REACT_APP_API_KEY
    const searchUrl = process.env.REACT_APP_SEARCH_URL

    const getMovies = async () => {
        if(search.length === 0){
            try {
                const data = await fetch(`${urlBase}${filter}?api_key=${apiKey}&page=${currentPage}`);
                const json = await data.json();
                console.log(json);
                setMovies(json.results);
                setTotalPages(json.total_pages)
            } catch (error) {
                console.log(error.message);
            }
        }else{
            try {
                const data = await fetch(`${searchUrl}?api_key=${apiKey}&query=${search}&page=${currentPage}`);
                const json = await data.json();
                console.log(json);
                setMovies(json.results);
                setTotalPages(json.total_pages)
            } catch (error) {
                console.log(error.message);
            }
        }
    }

    useEffect(() => {
        getMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[filter, currentPage, search])

    if(movies === false){
        return (
            <div>
                <Header 
                login={<NavLink className='header__login' to={'/Login'}>Login</NavLink> } 
                register={<NavLink className='header__register' to={'/Register'}>Sign Up</NavLink> } 
                />
                <div className='search__section'>
                    <SearchInput
                     placeholder={'Search for a movie'}
                     value={search}
                     onTyping={valor => setSearch(valor)} />
                </div>
                <div className='filters'>
                    <FilterButton
                     btnValue={'popular'}
                     changeFilter={value => {setFilter(value);
                    setPage(1);
                    setSearch('') }}
                     text={'Popular'} />
                    <FilterButton
                     btnValue={'top_rated'}
                     changeFilter={value => {setFilter(value);
                    setPage(1);
                    setSearch('') }}
                     text={'Top Rated'} />
                    <FilterButton
                     btnValue={'now_playing'}
                     changeFilter={value => {setFilter(value);
                    setPage(1);
                    setSearch('') }}
                     text={'Now Playing'} />
                    <FilterButton
                     btnValue={'upcoming'}
                     changeFilter={value => {setFilter(value);
                    setPage(1);
                    setSearch('') }}
                     text={'Upcoming'} />
                </div>
            </div>
        )
    }else {
        return (
            <div>
                <Header 
                login={<NavLink className='header__login' to={'/Login'}>Login</NavLink> } 
                register={<NavLink className='header__register' to={'/Register'}>Sign Up</NavLink> } 
                />
                <div className='search__section'>
                    <SearchInput
                     placeholder={'Search for a movie'}
                     value={search}
                     onTyping={valor => setSearch(valor)} />
                </div>
                <div className='filters'>
                    <FilterButton
                     btnValue={'popular'}
                     changeFilter={value => {setFilter(value);
                        setPage(1);
                        setSearch('') }}
                     text={'Popular'} />
                    <FilterButton
                     btnValue={'top_rated'}
                     changeFilter={value => {setFilter(value);
                        setPage(1);
                        setSearch('') }}
                         text={'Top Rated'} />
                    <FilterButton
                     btnValue={'now_playing'}
                     changeFilter={value => {setFilter(value);
                        setPage(1);
                        setSearch('') }}
                         text={'Now Playing'} />
                    <FilterButton
                     btnValue={'upcoming'}
                     changeFilter={value => {setFilter(value);
                        setPage(1);
                        setSearch('') }}
                         text={'Upcoming'} />
                </div>
                <div className='movies__section'>
                    {movies.map(movie => <NavLink to={`/movie/${movie.id}`} className='card'><Card 
                    id={movie.id}
                    key={movie.id}
                    image={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                    name={movie.title}
                    release={movie.release_date}
                    rating={movie.vote_average}
                    /></NavLink>)}
                </div>
                <div className='home__pagination'>
                    <Pagination 
                    orientation={'Previous Page'}
                    reload={() => {
                        if(currentPage > 1){
                            let page = currentPage - 1;
                            setPage(page)
                        }
                    }} />
                    <Pagination 
                        orientation={'Next Page'}
                        reload={() => {
                        if(currentPage < 500 && currentPage < totalPages){
                            let page = currentPage + 1;
                            setPage(page)
                        }
                    }} />
                </div>
            </div>
        )
    }

    
}

export default Home