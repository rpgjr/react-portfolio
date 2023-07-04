import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Sections/Banner";
import Footer from "./Components/Footer";
import Experiences from "./Sections/Experiences";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <Experiences />
      <Footer />
    </React.Fragment>
  );
}

export default App;
