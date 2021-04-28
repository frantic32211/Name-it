import React from "react";
import "./NameCard.css";

const nameCheapURL =
  "https://www.namecheap.com/domains/registration/results/?domain=%27%3B";

const NameCard = ({ suggestedname }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="card-link"
      href={`${nameCheapURL}${suggestedname}`}
    >
      <div className="result-name-card">
        <p className="result-name">{suggestedname}</p>
      </div>
    </a>
  );
};

export default NameCard;
