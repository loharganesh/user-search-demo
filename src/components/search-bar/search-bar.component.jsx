// Styles
import "./search-bar.styles.css";

export const SearchBar = ({ placeholder, handleChange, value }) => {
  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
