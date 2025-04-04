import { NavLink } from "react-router";
import React, { useState } from "react";
import "./fontawesome"; // Import the configuration file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopHeader from "./TopHeader";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="top-header">
        <div className="content_layout">
          <span>
            <TopHeader icon="fa-solid fa-phone" text="9022092046" />
            <TopHeader
              icon="fa-solid fa-phone"
              text="tejasparakhe321@gamil.com"
            />
          </span>
          <span>
            <NavLink to="/signup">
              <p>Sign-up</p>
            </NavLink>
            <NavLink className="applyNow" to="apply">
              <span>Apply Now</span>
            </NavLink>
          </span>
        </div>
      </div>

      <header className="header">
        <div onClick={toggleMenu} className="menu-icon">
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </div>
        <div className="content_layout">
          <span>
            <NavLink to="/anand">TEJAS</NavLink>
          </span>
          <nav>
            <NavLink to="/home">
              <p>Home</p>
            </NavLink>

            <NavLink to="/about">
              <p>About</p>
            </NavLink>

            <NavLink to="/page">
              <p>Pages</p>
            </NavLink>

            <NavLink to="/contact">
              <p>contact</p>
            </NavLink>

            <NavLink
              // Opens in a new tab
              to="/todolist"
              onClick={() => {
                window.open("/todolist", "_blank");
              }}
            >
              <p>To Do List</p>
            </NavLink>
          </nav>
          <div className="search-bar">
            <button>
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>

            <input type="text" placeholder="Search Here...." />
          </div>
        </div>
      </header>
      <div className={`menu-left ${menuOpen ? "open" : ""}`}>
        <NavLink to="/anand">
          <p>Home</p>
        </NavLink>

        <NavLink to="/user">
          <p>About</p>
        </NavLink>

        <NavLink to="/message">
          <p>Pages</p>
        </NavLink>

        <NavLink to="/user">
          <p>About</p>
        </NavLink>
      </div>
    </>
  );
}

export default Header;
