import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";

interface INavbarProps {
  linkClick?: () => void;
}

export const Navbar: React.FC<INavbarProps> = ({ linkClick }) => {
  return (
    <NavigationMenu className={style.navbar}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? style.active : "")}
            onClick={linkClick}
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Главная страница
            </NavigationMenuLink>
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink
            to="/horoscope/astrology"
            className={({ isActive }) => (isActive ? style.active : "")}
            onClick={linkClick}
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Что такое астология?
            </NavigationMenuLink>
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink
            to="/horoscope/create"
            className={({ isActive }) => (isActive ? style.active : "")}
            onClick={linkClick}
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Сгенерировать гороскоп
            </NavigationMenuLink>
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink
            to="/horoscope/about"
            className={({ isActive }) => (isActive ? style.active : "")}
            onClick={linkClick}
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              О проекте
            </NavigationMenuLink>
          </NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
