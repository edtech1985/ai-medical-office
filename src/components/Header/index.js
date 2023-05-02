import React, { useState } from "react";
import { BurgerMenuButton, HeaderContainer, Logo } from "./Header";
import NavMenu from "./NavMenu";
import { FaLaptopMedical } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const closeMenu = () => setOpen(false);

  return (
    <HeaderContainer>
      <Logo href="/">
        <FaLaptopMedical size={25} color="white" />
        AI.MED-X
      </Logo>

      <BurgerMenuButton open={open} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </BurgerMenuButton>
      {open && <NavMenu isOpen={true} closeMenu={closeMenu} />}
      <NavMenu isOpen={false} closeMenu={closeMenu} />
    </HeaderContainer>
  );
}

export default Header;
