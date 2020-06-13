import React from "react";

import filterIcon from "../../images/filter-blue.svg";
import FilterModal from "../Modals/filterModal";

import "./search.css";

const Search = () => {
  const [smShow, setSmShow] = React.useState(false);

  return (
    <div className="container search-container">
      <button href="#" className="filter-link" onClick={() => setSmShow(true)}>
        <img src={filterIcon} alt="filter-icon" />
      </button>
      <form className="form-block my-2 search-form ">
        <input
          className="form-control shadow-none search-box"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <span className="search-button" type="submit">
          <ion-icon name="search-outline"></ion-icon>
        </span>
      </form>
      <FilterModal show={smShow} onHide={() => setSmShow(false)} />
    </div>
  );
};

export default Search;
