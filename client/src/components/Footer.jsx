import { Popover, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <footer className="bg-dark text-center text-white">
      <div className="p-4 pb-0">
        <section className="mb-4">
          <Link
            className="btn btn-outline-light btn-floating m-1"
            to="/about"
            role="button"
          >
            About
          </Link>

          <Link
            className="btn btn-outline-light btn-floating m-1"
            to="/contacts"
            role="button"
          >
            Contacts
          </Link>

          <Link
            className="btn btn-outline-light btn-floating m-1"
            to="https://www.facebook.com/donat.lukacs.5"
            role="button"
          >
            Facebook
          </Link>

          <Link
            className="btn btn-outline-light btn-floating m-1"
            to="/"
            role="button"
            aria-describedby={id}
            onClick={handleClick}
          >
            Tel
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography  sx={{ p: 2 }}>+36 20 524 6903</Typography>
            </Popover>
          </Link>
          <Link
            className="btn btn-outline-light btn-floating m-1"
            to="https://github.com/lukacsdonat03"
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
