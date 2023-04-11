import { useState } from 'react';
import styles from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { add as addContact } from 'redux/Contacts/contactsSlice';
import { nanoid } from 'nanoid';

const initialState = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => {
      return { ...prevForm, [name]: value };
    });
  };

  const hendleSubmit = e => {
    const { value } = e.target;
    e.preventDefault();
    const newContact = { ...form, id: nanoid() };
    dispatch(addContact(newContact));
    resetForm();

    const isContactExist = newContact.some(
      el => el.name.toLowerCase() === value.toLowerCase()
    );
    if (isContactExist) {
      alert(`${value} is already in contacts`);
      return;
    }
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
