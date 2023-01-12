import PropTypes from 'prop-types';

const Filter = ({ searchInput, handleChange }) => (
  <div>
    <input type="text" onChange={handleChange} value={searchInput} placeholder="Search for a planet" />
  </div>
);

Filter.propTypes = {
  searchInput: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
