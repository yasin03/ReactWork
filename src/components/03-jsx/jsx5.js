import React from "react";

const Jsx5 = () => {
  const names = ["Ali", "Ayşe", "Veli", "Fatma"];
  const cities = ["İstanbul", "Ankara", "İzmir", "Antalya"];

  return (
    <>
      <ul className="test">
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <select>
        {cities.map((city, index) => (
          <option key={index}>{city}</option>
        ))}
      </select>
    </>
  );
};

export default Jsx5;
