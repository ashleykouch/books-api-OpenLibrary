import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context.jsx";
import "./index.css";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import BookList from "./Components/BookList/BookList";
import BookDetails from "./Containers/BookDetails/BookDetails";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="book" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
