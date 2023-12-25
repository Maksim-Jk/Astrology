import * as React from "react";

import style from "./style.module.css";
import { Button } from "@/components/ui/button";
import burgerIcon from "@/assets/burger-icon.svg";
import { Navbar } from "@/components/NavBar/Navbar";

export const Header = () => {
  const [open, setOpen] = React.useState(false);

  const linkClick = () => {
    setOpen(false);
  };
  return (
    <header className={style.header}>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setOpen(!open)}
        className={style.burgerButton}
      >
        <img src={burgerIcon} alt="burger" />
      </Button>
      <div className={`${style.headerMenu} ${open ? style.headerMenuOpen : ""}`}>
        <Navbar linkClick={linkClick} />
      </div>
    </header>
  );
};
