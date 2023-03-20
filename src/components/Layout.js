import { Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";

const Layout = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default Layout;
