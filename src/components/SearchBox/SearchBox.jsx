import css from "./SearchBox.module.css";
import { useId } from "react";

const SearchBox = ({ value, onFilter }) => {
  const searchId = useId();

  return (
    <div className={css.searchBox}>
      <label className={css.title} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        type="search"
        inputMode="search"
        value={value}
        id={searchId}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
