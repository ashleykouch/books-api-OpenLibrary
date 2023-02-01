import React from "react";
import "./About.css";
import aboutImg from "../../../assets/images/books.png";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <section className="about">
      <div className="container">
        <button
          type="button"
          className="flex flex-c back-btn"
          onClick={() => navigate("/")}
        >
          <FaArrowLeft size={22} />
          <span className="fs-18 fw-6"> Go Back</span>
        </button>
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About LibraryOfBooks</h2>
            <p className="fs-17">
              Our online book library is a virtual hub for book lovers
              everywhere. Our mission is to provide access to a vast collection
              of books, making it easy for readers to find their next favorite
              read. With a simple search by name feature, you can quickly and
              easily find the books you're looking for.
            </p>
            <p className="fs-17">
              We've obtained a diverse collection of titles from<span> </span>
              <span className="about-link">
                <a href="https://openlibrary.org/">'OpenLibrary'</a>
              </span>
              , ensuring that there's something for everyone, no matter what
              your interests may be. From classic literature to popular
              bestsellers, we have it all. So, whether you're in the mood for an
              old favorite or want to discover something new, our book library
              is the perfect destination. Join us on a journey of discovery and
              find your next great read today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
