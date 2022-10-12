import './Pagination.css'

const Pagination = (props) => {
    return (
        <button className='pagination' onClick={event => props.reload(event.target)}>{props.orientation}</button>
    )
}

export default Pagination