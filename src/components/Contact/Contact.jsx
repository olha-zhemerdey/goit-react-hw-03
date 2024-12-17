import { IoIosContact } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number }, onDelete }) {
  // console.log(id);
  return (
    <li className={css.wrapperItem}>
      <ul>
        <li className={css.itemContact}>
          <IoIosContact />
          <p>{name}</p>
        </li>
        <li className={css.itemContact}>
          <MdPhoneInTalk />
          <p>{number}</p>
        </li>
      </ul>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}
