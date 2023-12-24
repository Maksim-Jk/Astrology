import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export const Header = () => {
  return (
    <header className={style.header}>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavLink to="/" className={({ isActive }) => (isActive ? style.active : "")}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Главная страница
              </NavigationMenuLink>
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink
              to="/horoscope/astrology"
              className={({ isActive }) => (isActive ? style.active : "")}
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
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                О проекте
              </NavigationMenuLink>
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
