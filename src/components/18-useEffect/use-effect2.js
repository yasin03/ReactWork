import React, { useState } from "react";
import { Button } from "reactstrap";

const UseEffect2 = () => {
  const [counter, setCounter] = useState(0);
  document.title = `Hello ${counter}`;
  return (
    <div className="text-center m-3">
      <h3>{counter} kere tıkladınız</h3>
      <Button color="primary" onClick={() => setCounter((prev) => prev + 1)}>
        Click Me
      </Button>
    </div>
  );
};

export default UseEffect2;
