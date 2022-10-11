import "./FilterButton.css"

const FilterButton = (props) => {
    return (
        <button className="filter-button" onClick={event => props.changeFilter(event.target.value)} value={props.btnValue}>{props.text}</button>
    )
}

export default FilterButton