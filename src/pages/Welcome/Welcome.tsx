import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { Button } from "@/components/ui/button";

export const Welcome = () => {
  const navigate = useNavigate();
  return (
    <main className={style.main}>
      <div className={style.container}>
        <h1 className={style.title}>Astrology</h1>
        <Button
          onClick={() => {
            navigate("/horoscope/create");
          }}
        >
          Создать гороскоп
        </Button>
      </div>
    </main>
  );
};
