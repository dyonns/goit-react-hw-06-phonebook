import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div>
    <label className={s.filter}>
      <p>Filter</p>
      <input
        type="name"
        value={value}
        onChange={onChange}
        className={s.filterInput}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
