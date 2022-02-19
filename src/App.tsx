import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">

    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<div>Main</div>} />
        </Routes>
        <Footer dark={true} />
      </BrowserRouter>
    </div>
  );
}

export default App;
