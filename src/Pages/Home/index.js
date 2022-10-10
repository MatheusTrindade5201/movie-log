import Header from '../../Components/Header'
import './Home.css'
import SearchInput from '../../Components/SearchInput'
import Card from '../../Components/Card'

const Home = () => {
    return (
        <div>
            <Header />
            <div className='search__section'>
                <SearchInput placeholder={'Search for a movie'}/>
            </div>
            </div>
    )
}

export default Home