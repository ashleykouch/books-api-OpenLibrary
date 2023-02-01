import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalise text-black">
            find your book of choice
          </h2>
          <br />
          <p className="header-text fs-18 fw-3 text-black">
            Welcome to LibraryofBooks! Here, you have the power to search for
            your favorite books by name and find what you're looking for. From
            classic novels to popular bestsellers, we've got something for
            everyone. So, whether you're in the mood for a nostalgic trip down
            memory lane or want to discover a new author, simply type in the
            book's name and let our search do the rest. Happy reading!
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
