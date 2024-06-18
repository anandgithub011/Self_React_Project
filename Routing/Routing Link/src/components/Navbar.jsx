import React from "react";
// import Home from "./Home";
// import Login from "./Login";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.flex}>
      <Link to="/">
        <div className="navbar bg-body-tertiary">
          <div className="container-fluid justify-content-start">
            <p className="btn btn-outline-success me-2">Home</p>
          </div>
        </div>
      </Link>
      <Link to="/login">
        <div className="navbar bg-body-tertiary">
          <div className="container-fluid justify-content-start">
            <p className="btn btn-outline-success me-2">Login</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
