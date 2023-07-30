import PropTypes from 'prop-types';
    
const Filter = ({search, handlInput}) => {
    return (
        <label> Find contacts by name
            <input
            type="text"
            value={search}
            onChange={handlInput} />
        </label>
        
    )
}
   

export default Filter;

Filter.propTypes = {
    search: PropTypes.string,
    handlInput: PropTypes.func
}