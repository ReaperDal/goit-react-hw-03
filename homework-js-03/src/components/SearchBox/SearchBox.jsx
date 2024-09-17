/* eslint-disable react/prop-types */
//import styles from './SearchBox.module.cs';

const SearchBox = ({ filterValue, onFilterChange }) => {
  return (
    <input
      type="text"
      value={filterValue}
      onChange={e => onFilterChange(e.target.value)}
      //className={styles.input}
      placeholder="Find contacts by name"
    />
  );
};

export default SearchBox;
