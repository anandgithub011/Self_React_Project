import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className={styles.flex}>
        <div className="navbar bg-body-tertiary">
          <div className="container-fluid justify-content-start">
            <p
              onClick={handleHomeClick}
              className="btn btn-outline-success me-2"
            >
              Home
            </p>
          </div>
        </div>
        <div className="navbar bg-body-tertiary">
          <div className="container-fluid justify-content-start">
            <p
              onClick={() => {
                navigate("/login");
              }}
              className="btn btn-outline-success me-2"
            >
              Login
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
