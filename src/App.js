import "./App.css";
import { useState } from "react";
import Characters from "./components/characters/characters";
import Episodes from "./components/episodes/episodes";

function App() {
  const [currentPage, setCurrentPage] = useState("characters");

  return (
    <div className="App">
      <div className="App-header">

        <div
          className={currentPage=="characters"?`nav-item selected-item`:"nav-item"}
          onClick={() => {
            setCurrentPage("characters");

          }}>
          Characters
        </div>
        
        <div
          className={currentPage=="episodes"?`nav-item selected-item`:"nav-item"}
          onClick={() => {
            setCurrentPage("episodes");

          }}>
          Episodes
        </div>
      </div>
      
      <div className="container">
        {currentPage === "characters" ? <Characters /> : <Episodes/>}
      </div>
    </div>
  );
}

export default App;
