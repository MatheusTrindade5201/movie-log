import './SearchInput.css'

const SearchInput = (props) => {
    return (
        <input placeholder={props.placeholder} className='searchInput'/>
    )
}

export default SearchInput