import { useState, useEffect } from "react";
import css from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import contactsData from "./contacts.json";

const LS_CONTACTS_KEY = "initial-contacts";

const initialContacts = () => {
  const localStorageContacts = localStorage.getItem(LS_CONTACTS_KEY);
  return localStorageContacts ? JSON.parse(localStorageContacts) : contactsData;
};

function App() {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(initialContacts);

  useEffect(() => {
    localStorage.setItem(LS_CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={css.fullForm}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
