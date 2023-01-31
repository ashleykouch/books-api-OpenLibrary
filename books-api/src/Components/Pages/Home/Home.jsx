import React from "react";
import Header from "../../Header/Header";
import { Outlet } from "react-router-dom";
import BookList from "../../BookList/BookList";

const Home = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <BookList />
    </main>
  );
};

export default Home;
