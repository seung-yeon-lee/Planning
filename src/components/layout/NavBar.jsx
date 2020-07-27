import React from "react";
import { Link } from "react-router-dom";
import SignInLinks from "./SignedInLinks";
import SignOutLinks from "./SignedOutLinks";

const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          PlanningApp
        </Link>
        <SignInLinks />
        <SignOutLinks />
      </div>
    </nav>
  );
};

export default NavBar;
