import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="p-4 pb-0">
        <section className="mb-4">
          <Link
            className="btn btn-outline-light btn-floating m-1"
            to="/"
            role="button"
          >
            About
          </Link>

          <Link
            className="btn btn-outline-light btn-floating m-1"
            to="/"
            role="button"
          >
            Contacts
          </Link>

          <Link
            className="btn btn-outline-light btn-floating m-1"
            to="/"
            role="button"
          >
            Facebook
          </Link>

          <Link
            className="btn btn-outline-light btn-floating m-1"
            to="/"
            role="button"
          >
            Tel
          </Link>
          <Link
            className="btn btn-outline-light btn-floating m-1"
            to="/"
            role="button"
          >
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
