import React from "react";
import { About, Footer, Header, Work, Skills   } from "./container";
import Navbar from "./components/Navbar";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />

      <Work />
      <Skills />
      <Footer />
      {/* <Header /> */}
    </div>
  );
}

export default App;
