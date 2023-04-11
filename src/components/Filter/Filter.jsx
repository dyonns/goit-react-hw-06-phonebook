import { useDispatch, useSelector } from 'react-redux';
import s from './Filter.module.css';
import { changeFilter } from 'redux/Contacts/contactsSlice';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  return (
    <div>
      <label className={s.filter}>
        <p>Filter</p>
        <input
          type="name"
          value={filter}
          onChange={e => dispatch(changeFilter(e))}
          className={s.filterInput}
        />
      </label>
    </div>
  );
};

export default Filter;
