import React from "react";
import NameCard from "./NameCard";
import "./ResultsContainer.css";

const ResultsContainer = ({ suggestedNames }) => {
  const suggestName = suggestedNames.map((suggestedName) => {
    return <NameCard key={suggestedName} suggestedname={suggestedName} />;
  });

  return <div className="results-container">{suggestName}</div>;
};

export default ResultsContainer;
