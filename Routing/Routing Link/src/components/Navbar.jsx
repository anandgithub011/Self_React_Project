import React from "react";
// import Home from "./Home";
// import Login from "./Login";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.flex}>
      <Link to="/">
        <h5>Home</h5>
      </Link>
      <Link to="/login">
        <h5>Login</h5>
      </Link>
    </div>
  );
};

export default Navbar;
