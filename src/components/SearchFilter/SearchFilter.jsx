import PropTypes from "prop-types";

const Filter = ({ filter, onChange }) => (
  <div>
    <label>
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </label>
  </div>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
