import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import ResultsContainer from "./Components/ResultsContainer";
import SearchBox from "./Components/SearchBox";

const name = require("@rstacruz/startup-name-generator");

const App = () => {
  const [headerExpanded, setHeaderExpanded] = useState(true);
  const [suggestedNames, setSuggestedNames] = useState([]);

  const handleInputChange = (inputText) => {
    setHeaderExpanded(!inputText);
    setSuggestedNames(inputText ? name(inputText) : []);
  };

  return (
    <div>
      <Header headerExpanded={headerExpanded} />
      <SearchBox onInputChange={handleInputChange} />
      <ResultsContainer suggestedNames={suggestedNames} />
    </div>
  );
};

export default App;
