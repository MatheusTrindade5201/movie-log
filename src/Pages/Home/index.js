import CampoPesquisa from '../../Components/CampoPesquisa'
import Header from '../../Components/Header'
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header />
            <div className='search__section'>
                <CampoPesquisa placeholder={'Search for a movie'}/>
            </div>
        </div>
    )
}

export default Home