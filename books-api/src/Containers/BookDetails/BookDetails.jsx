import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loader/Loader";
import coverImg from "../../assets/images/no-cover.png";
import "./BookDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if (data) {
          const {
            description,
            descriptionValue,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;
          const newBook = {
            description: description ? description : "No description found",

            title: title,
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
            subject_places: subject_places
              ? subject_places.join(", ")
              : "No subject places found",
            subject_times: subject_times
              ? subject_times.join(", ")
              : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found",
          };

          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if (loading) return <Loading />;
  console.log(book);

  return (
    <>
      <Navbar />
      <section className="book-details">
        <div className="container">
          <button
            type="button"
            className="flex flex-c back-btn"
            onClick={() => navigate("/")}
          >
            <FaArrowLeft size={22} />
            <span className="fs-18 fw-6"> Go Back</span>
          </button>

          <div className="book-details-content grid">
            <div className="book-details-img">
              <img src={book?.cover_img} alt="cover-img" />
            </div>
            <div className="book-details-info">
              <div className="book-details-item title">
                <span className="fw-6 fs-24">{book?.title}</span>
              </div>
              <div className="book-details-item description">
                <span>{book?.description.value}</span>
              </div>
              <div className="book-details-item description">
                <span>{book?.description}</span>
              </div>

              <div className="book-details-item">
                <span className="fw-6">Subject Places: </span>
                <span className="text-italic">{book?.subject_places}</span>
              </div>
              <div className="book-details-item">
                <span className="fw-6">Subject Times: </span>
                <span className="text-italic">{book?.subject_times}</span>
              </div>
              <div className="book-details-item">
                <span className="fw-6">Subjects: </span>
                <span>{book?.subjects}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDetails;
