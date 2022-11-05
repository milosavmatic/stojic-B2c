import classes from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={classes["search-bar"] + " col-xxl-6 col-xl-4"}>
      <input
        className={`${classes["search-bar-input"]} basic-input`}
        type="text"
        placeholder="Traži..."
      />
      <button
        type="button"
        className={`${classes["search-button"]} basic-search-button`}
      >
        <img
          src={"/images/icons/search_icon.png"}
          alt="search"
          className={`${classes["search-button-img"]} basic-search-button-image`}
        />
      </button>
    </div>
  );
};
export default SearchBar;
