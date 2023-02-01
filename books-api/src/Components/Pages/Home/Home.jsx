import React from "react";
import Header from "../../Header/Header";
import { Outlet } from "react-router-dom";
import BookList from "../../BookList/BookList";
import Footer from "../../../Containers/Footer/Footer";

const Home = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <BookList />
      <Footer />
    </main>
  );
};

export default Home;
