import React, { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Contact, Contents1, Content, OurThesis, Portfolio1, Portfolio2, Team1, Team2, Stake } from "./Page";

import "./App.scss";

function App() {
  const [clickedSideBar, setClickedSideBar] = useState(false);
  const clickMenu = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setClickedSideBar(!clickedSideBar);
  };

  return (
    <div id="container">
      <BrowserRouter>
        <Header clickMenu={clickMenu} />
        <SideBar clickMenu={clickMenu} clickedSideBar={clickedSideBar} />
        {/*<main id="mainContainer">*/}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ourThesis" element={<OurThesis />} />
          <Route path="/portfolio" element={<Portfolio1 />} />
          <Route path="/portfolio/:id" element={<Portfolio2 />} />
          <Route path="/contents" element={<Contents1 />} />
          <Route path="/content/:contentId" element={<Content />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/team" element={<Team1 />} />
          <Route path="/team/:id" element={<Team2 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/*</main>*/}
        <Footer dark={true} />
      </BrowserRouter>
    </div>
  );
}

export default App;
