import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Contact, Contents1, Content, OurThesis, Portfolio1, Portfolio2, Team1, Team2 } from "./Page";
import "./App.scss";

function App() {
  return (
    <div id="container">
      <BrowserRouter>
        <Header dark={true} />
        {/* <main id="mainContainer"> */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ourThesis" element={<OurThesis />} />
          <Route path="/portfolio1" element={<Portfolio1 />} />
          <Route path="/portfolio2" element={<Portfolio2 />} />
          <Route path="/content1" element={<Contents1 />}></Route>
          <Route path="/content/:contentId" element={<Content />} />
          <Route path="/team1" element={<Team1 />} />
          <Route path="/team2" element={<Team2 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* </main> */}
        <Footer dark={true} />
      </BrowserRouter>
    </div>
  );
}

export default App;
