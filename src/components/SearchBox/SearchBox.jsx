import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.searchBox}>
      <label className={css.title}>
        Find contacts by name
        <input
          type="search"
          inputMode="search"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
