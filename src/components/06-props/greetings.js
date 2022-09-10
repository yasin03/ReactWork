import React from "react";
import Welcome from "./welcome";

const Greetings = () => {
  return (
    <div>
      <Welcome firstName="Ali" lastName="Gel" />
      <Welcome firstName="Veli" lastName="Koş" />
    </div>
  );
};

export default Greetings;
