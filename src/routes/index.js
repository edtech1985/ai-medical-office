import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors";
import Appointments from "../pages/Appointments";
import Contacts from "../pages/Contacts";
import { Main } from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AppRouter() {
  return (
    <Main>
      <ToastContainer />
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/doctors" element={<Doctors />} />
          <Route exact path="/appointments" element={<Appointments />} />
          <Route exact path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </Main>
  );
}
