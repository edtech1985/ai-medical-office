import React from "react";
import navRoutes from "./navRoutes.json";
import { Menu, MenuItem, NavMenuContainer } from "./NavMenu";
import { Link, useLocation } from "react-router-dom";

function NavMenu({ isOpen, closeMenu }) {
  const location = useLocation();

  return (
    <NavMenuContainer isOpen={isOpen} closeMenu={closeMenu}>
      <Menu>
        {navRoutes.map((route, index) => (
          <MenuItem
            key={index}
            onClick={closeMenu}
            className={location.pathname === route.to ? "active" : ""}
          >
            <Link to={route.to}>{route.label}</Link>
          </MenuItem>
        ))}
      </Menu>
    </NavMenuContainer>
  );
}

export default NavMenu;
