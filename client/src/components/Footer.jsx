import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <Link
            className="btn btn-outline-light btn-floating m-1"
            to="/"
            role="button"
          >
            <i className="fab fa-facebook-f" />
            About
          </Link>

          <Link
            className="btn btn-outline-light btn-floating m-1"
            to="/"
            role="button"
          >
            <i className="fab fa-twitter" />
            Contacts
          </Link>

          <Link
            className="btn btn-outline-light btn-floating m-1"
            to="/"
            role="button"
          >
            <i className="fab fa-google" />
            Facebook
          </Link>

          <Link
            className="btn btn-outline-light btn-floating m-1"
            to="/"
            role="button"
          >
            <i className="fab fa-instagram" />
            Tel
          </Link>
          <Link
            className="btn btn-outline-light btn-floating m-1"
            to="/"
            role="button"
          >
            <i className="fab fa-github" />
            Github
          </Link>
        </section>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright: EasyEffort
        <Link className="text-white" to="/"></Link>
      </div>
    </footer>
  );
};
