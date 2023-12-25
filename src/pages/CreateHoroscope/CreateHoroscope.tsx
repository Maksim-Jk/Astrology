import { useState } from "react";
import { CreateHoroscopeForm } from "@/components/CreateHoroscopeForm/CreateHoroscopeForm";
import { TypographyH1 } from "@/components/ui/Typography/TypographyH1";
import style from "./style.module.css";
import { TypographyP } from "@/components/ui/Typography/TypographyP";
import { Button } from "@/components/ui/button";

export const CreateHoroscope = () => {
  const [horoscope, setHoroscope] = useState("");

  return (
    <div className={style.createHoroscope}>
      {!horoscope ? (
        <>
          <TypographyH1>Сгенерировать гороскоп</TypographyH1>
          <CreateHoroscopeForm setHoroscope={setHoroscope} />
        </>
      ) : (
        <>
          <TypographyH1>Ваш гороскоп:</TypographyH1>
          <TypographyP>Данные для отправки на сервер:</TypographyP>
          <TypographyP className={style.horoscopeText}>{horoscope}</TypographyP>
          <Button onClick={() => setHoroscope("")}>Сгенерировать новый гороскоп</Button>
        </>
      )}
    </div>
  );
};
