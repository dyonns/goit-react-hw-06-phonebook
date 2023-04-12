import { useState } from 'react';
import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { add as addContact } from 'redux/Contacts/contactsSlice';
import { nanoid } from 'nanoid';

const initialState = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const contacts = useSelector(state => state.contacts.items);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => {
      return { ...prevForm, [name]: value };
    });
  };

  const hendleSubmit = e => {
    e.preventDefault();
    const { name, number } = form;

    const isContactExist = contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactExist) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = { name, number, id: nanoid() };

    dispatch(addContact(newContact));
    resetForm();

    console.log('value', form.name);
  };

  const resetForm = () => {
    setForm(() => ({ name: '', number: '' }));
  };

  return (
    <>
      <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>

      <form onSubmit={hendleSubmit} className={styles.contForm}>
        <h1 className={styles.header}>Phonebook</h1>
        <p className={styles.tag}>Enter your name:</p>
        <input
          className={styles.inp}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={form.name}
          onChange={handleChange}
        />
        <p className={styles.tag}>Enter your number:</p>
        <input
          className={styles.inp}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={form.number}
          onChange={handleChange}
        />
        <br />
        <button type="submit" className={styles.btnContForm}>
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
