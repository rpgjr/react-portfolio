import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Sections/Banner";
import Footer from "./Components/Footer";
import Experiences from "./Sections/Experiences";
import Skills from "./Sections/Skills";
import Contacts from "./Sections/Contacts";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <Experiences />
      <Skills />
      <Contacts />
      <Footer />
    </React.Fragment>
  );
}

export default App;
