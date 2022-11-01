import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AdDesigner from "./components/AdDesigner";
import Votes from "./components/Votes";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AdDesigner />
        <Votes />
      </main>
    </div>
  );
}

export default App;
