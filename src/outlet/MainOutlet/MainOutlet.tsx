import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Outlet } from "react-router-dom";
import style from "./style.module.css";
export const MainOutlet = () => {
  return (
    <div className={style.pageContainer}>
      <Header />
      <main className={style.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
