import React from "react";
import "./NameCard.css";

const nameCheapURL =
  "https://www.namecheap.com/domains/registration/results/?domain=%27%3B";

const NameCard = ({ suggestedname }) => {
  return (
    <div className="result-name-card">
      <a
        target="_blank"
        rel="noreferrer"
        className="card-link"
        href={`${nameCheapURL}${suggestedname}`}
      >
        <p className="result-name">{suggestedname}</p>
      </a>
    </div>
  );
};

export default NameCard;
