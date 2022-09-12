import React, { useState } from "react";
import { Button } from "reactstrap";

const State = () => {
  let [mode, setMode] = useState("light");
  
  console.log(mode);
  

  const handleMode = () => {
    setMode("light");
  };

  return (
    <div
      className={`p-5 d-flex justify-content-around ${
        mode === "dark" ? "bg-dark text-light" : ""
      } `}
    >
      Hello World
      <Button onClick={() => setMode("dark")}>Dark Mode</Button>
      <Button onClick={handleMode}>Light Mode</Button>
    </div>
  );
};

export default State;
