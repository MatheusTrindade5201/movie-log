import './Details.css'

const Details = (props) => {
    return (
        <div className='details'>
            <div className='details__general'>
                <img className='details__image' src={props.image}/>
                <div className='infos'>
                    <div className='infos__header'>
                        <h2 className='details__title'>{props.name}</h2>
                        <p className='details__rating'>{props.rating.toFixed(1)}</p>
                    </div>
                    <div className='infos__detail'>
                        <p className='info'><strong>Release date: </strong>{props.release ? props.release.substr(0, 4) : props.release}</p>
                        <p className='info'><strong>Original Language: </strong>{props.language}</p>
                        <p className='info'><strong>Duration: </strong>{Math.floor(props.duration/60)+':'+props.duration%60}</p>
                        <div className='info'><strong>Genres: </strong><ul className='info__list'>{props.genre}</ul></div>
                    </div>
                </div>
            </div>
            <h2 className='details__title'>Summary</h2> 
            <p className='infos__detail summary'>{props.overview}</p>
        </div>
    )
}

export default Details;