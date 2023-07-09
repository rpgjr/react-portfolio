import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Sections/Banner";
import Footer from "./Components/Footer";
import Experiences from "./Sections/Experiences";
import Skills from "./Sections/Skills";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <Experiences />
      <Skills />
      <Footer />
    </React.Fragment>
  );
}

export default App;
