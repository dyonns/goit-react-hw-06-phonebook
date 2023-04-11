import { useDispatch, useSelector } from 'react-redux';
import s from './ContactList.module.css';
import { remove as removeContact } from 'redux/Contacts/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      <div className={s.list}>
        <h2 className={s.headerCont}>Contacts</h2>
        <ul>
          {visibleContacts.map(({ id, name, number }) => (
            <li key={id}>
              <p className={s.info}>
                {name}............
                {number}
              </p>
              <button
                type="submit"
                onClick={() => dispatch(removeContact(id))}
                className={s.btnContlist}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
