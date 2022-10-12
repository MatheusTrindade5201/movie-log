import './SearchInput.css'

const SearchInput = (props) => {
    return (
        <input placeholder={props.placeholder} className='searchInput' value={props.value} onChange={event => props.onTyping(event.target.value)}/>
    )
}

export default SearchInput