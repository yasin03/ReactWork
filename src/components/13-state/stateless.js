import React from "react";
import { Button } from "reactstrap";

const Stateless = () => {
  let mode = "dark";

  const setMode = () => {
    mode = "light";
    console.log(mode);
  };

  return (
    <div
      className={`p-5 d-flex justify-content-around ${
        mode === "dark" ? "bg-dark text-light" : ""
      } `}
    >
      Hello World
      <Button onClick={() => (mode = "dark")}>Dark Mode</Button>
      <Button onClick={setMode}>Light Mode</Button>
    </div>
  );
};

export default Stateless;
