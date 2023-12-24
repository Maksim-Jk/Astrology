import { MainOutlet } from "@/outlet/MainOutlet/MainOutlet";
import { About } from "@/pages/About/About";
import { Astrology } from "@/pages/Astrology/Astrology";
import { CreateHoroscope } from "@/pages/CreateHoroscope/CreateHoroscope";
import { Welcome } from "@/pages/Welcome/Welcome";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/horoscope" element={<MainOutlet />}>
        <Route index path="create" element={<CreateHoroscope />} />
        <Route path="about" element={<About />} />
        <Route path="astrology" element={<Astrology />} />
      </Route>
    </Routes>
  );
};

export default Router;
