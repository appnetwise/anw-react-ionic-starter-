import React, { useState } from "react";
import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Button clicked!");
  };

  return (
    <div id="container">
      <button onClick={handleClick} id="sayButton">
        Say Hi
      </button>
      <div>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ExploreContainer;
