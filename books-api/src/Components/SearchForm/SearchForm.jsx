import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";
import { useGlobalContext } from "../../context";
import { useRef } from "react";
import { useEffect } from "react";

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef("");
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length == 0) {
      setSearchTerm("Get lost in a new world");
      setResultTitle("Please enter something...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/");
  };

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white">
              <input
                type="text"
                className="form-control"
                placeholder="Get lost in a new world..."
                ref={searchText}
              />
              <button
                type="submit"
                className="icon-btn flex flex-c"
                onClick={handleSubmit}
              >
                <FaSearch className="text-light-blue" size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
