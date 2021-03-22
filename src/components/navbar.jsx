import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Total items in Shopping Cart: <span>{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
