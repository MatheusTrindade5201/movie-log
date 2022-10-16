import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import MyContext from '../../auth/MyContext';
import Card from '../../Components/Card';
import Header from '../../Components/Header'
import './MyList.css'

const MyList = () => {

    const {setLogged} = useContext(MyContext);
    const [list, setList] = useState([]);
    const [deleted, setDelete] = useState(false)


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

    const signOut = () => {
        sessionStorage.removeItem('@AuthFirebase:user');
        setLogged(false)
    }

    useEffect(() => {
        getList();
    },[deleted])

    return (
        <div>
            <Header 
            myList={<NavLink className='header__myList' to={'/'}>Home</NavLink> } 
            signOut={<button onClick={signOut} className='header__login' >Sign Out</button>}
            />
            <div className='list'>
                <h2 className='list__title'>My list:</h2>
            </div>
            <div className='movies__section'>
                    {list.map(movie => <Card 
                    delete={<button onClick={(e) => {localStorage.removeItem(movie.title)
                    setDelete(prev => prev == false ? true : false)}} className='deleteMovie'>X</button>}
                    id={movie.id}
                    key={movie.id}
                    image={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                    name={movie.title}
                    release={movie.release_date}
                    rating={movie.vote_average}
                    />)}
            </div>
        </div>
    )
}

export default MyList