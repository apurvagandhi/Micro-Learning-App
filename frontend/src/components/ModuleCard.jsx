import React from "react";

const ModuleCard = ({ title, description, type }) => {
  return (
    <div className="module-card">
      <h2 className="module-title">{title}</h2>
      <p className="module-description">{description}</p>
      <p className="module-type">Type: {type}</p>
      <button className="module-button">Open Module</button>
    </div>
  );
};

export default ModuleCard;
