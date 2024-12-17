import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} data={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default ContactList;
