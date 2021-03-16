import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { NavBar, NavItem, NavItems,NavWrapper, NavIcon } from "./NavBarElements";

const Navbar = () => {
  const [openNavBar, setOpenNavBar] = useState(false);

  const handleNavbar = () => {
    setOpenNavBar(!openNavBar);
    console.log("hellpo from handleNavbar");
  };

  return (
    <NavBar className="container-fluid">
      <NavLink to="/">Navbar</NavLink>

      <NavWrapper>
        <NavIcon onClick={handleNavbar}>
          {openNavBar ? <FaTimes /> : <FaBars />}
        </NavIcon>
        <NavItems openNavBar={openNavBar}>
          <NavItem>
            <NavLink exact to="/movies">
              Movies <span className="sr-only">(current)</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/customers">Customers</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/rentals">Rentals</NavLink>
          </NavItem>
        </NavItems>
      </NavWrapper>
    </NavBar>
  );
};

export default Navbar;