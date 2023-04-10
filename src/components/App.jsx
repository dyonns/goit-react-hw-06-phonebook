import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  // const handleAddContact = ({ name, number }) => {
  //   const isContactExist = setContacts(prevContacts =>
  //     prevContacts.some(el => el.name.toLowerCase() === name.toLowerCase())
  //   );
  //   if (isContactExist) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }
  //   const newContact = {
  //     name,
  //     number,
  //     id: nanoid(),
  //   };
  //   setContacts(prevContacts => [...prevContacts, newContact]);
  // };
  const handleAddContact = ({ name, number }) => {
    const isContactExist = contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };
  // const getVisibleContacts = () => {
  //   const normalizedFilter = setFilter(prevFilter => prevFilter.toLowerCase());

  //   return setContacts(prevContacts =>
  //     prevContacts.filter(el =>
  //       el.name.toLowerCase().includes(normalizedFilter)
  //     )
  //   );
  // };
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const deleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(el => el.id !== id));
  };
  // deleteContact = todoId => {
  //     this.setState(prevState => ({
  //       contacts: prevState.contacts.filter(contact => contact.id !== todoId),
  //     }));
  //   };
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  //   componentDidMount() {
  //     const contacts = localStorage.getItem('contacts');
  //     const parsedContact = JSON.parse(contacts);
  //     if (parsedContact) {
  //       this.setState({ contacts: parsedContact });
  //     }
  //   }

  //   componentDidUpdate(PrevProps, prevState) {
  //     if (this.state.contacts !== prevState.contacts) {
  //       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //     }
  //   }
  return (
    <div>
      <ContactForm onSubmit={handleAddContact} />
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
