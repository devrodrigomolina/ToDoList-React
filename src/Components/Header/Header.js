import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import Logo from "./Logo";

const Header = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        <Logo />
        <NavLink exact='true' to="/" className={style.link}>
          Tasks
        </NavLink>
        <NavLink to="completeds" className={style.link}>
          Completas
        </NavLink>
        <NavLink to="incompleteds" className={style.link}>
          Incompletas
        </NavLink>
      </ul>

    </nav>
  );
};

export default Header;
