import { TypographyP } from "../ui/Typography/TypographyP";
import style from "./style.module.css";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <TypographyP>© 2024 AstroCompany, Inc</TypographyP>
    </footer>
  );
};
