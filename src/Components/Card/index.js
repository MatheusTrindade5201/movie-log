import './Card.css'

const Card = (props) => {
    return (
        <div className='card'>
        <div className='card__presentation' style={{backgroundImage: `url(${props.image})`}}>
                <h2 className='card__name'>{props.name}</h2>
            </div>
            <div className='card__description'>
                <p className='card__iten'><strong>Genre:</strong>{props.genre}</p>
                <p className='card__iten'><strong>Realease date:</strong>{props.release}</p>
                <p className='card__iten'><strong>Rating</strong>{props.rating}</p>
            </div>
        </div>
    )
}

export default Card