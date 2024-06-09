import React from "react";

import "./styles.css";
import Header from "./Header";
import Temperature from "./Temperature";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Header />
        <Temperature />
        <Footer />
      </div>
    </div>
  );
}
