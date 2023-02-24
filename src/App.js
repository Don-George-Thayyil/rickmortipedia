import "./App.css";
import { useState } from "react";
import Characters from "./components/characters/characters";
import Episodes from "./components/episodes/episodes";

function App() {
  const [currentPage, setCurrentPage] = useState("characters");

  return (
    <div className="App">
      <div className="App-header">
        {currentPage==="characters"?<div
          className={`nav-item selected-item`}
          onClick={() => {
            setCurrentPage("characters");

          }}>
          Characters
        </div>:
        <div
          className={`nav-item`}
          onClick={() => {
            setCurrentPage("characters");

          }}>
          Characters
        </div>}
        
        {currentPage==="episodes"?<div
          className={`nav-item selected-item`}
          onClick={() => {
            setCurrentPage("episodes");

          }}>
          Episodes
        </div>:
        <div
          className={`nav-item`}
          onClick={() => {
            setCurrentPage("episodes");

          }}>
          Episodes
        </div>}
      </div>
      <div className="container">
        {currentPage === "characters" ? <Characters /> : <Episodes/>}
      </div>
    </div>
  );
}

export default App;
