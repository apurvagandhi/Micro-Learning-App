import React from "react";
import { useParams } from "react-router-dom";

const Module = () => {
  const { id } = useParams();
  return (
    <div>
      <h1 className="module-title">Module {id} Details</h1>
      <p>Here goes the content for the module. You can render text, visuals, audio, or exercises based on module type.</p>
    </div>
  );
};

export default Module;
