import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

const UseEffect = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  console.log("CLG: Bu satır render ve rerender durumlarında çalışır.");

  // useEffect asenkron çalıştığı için JSX render edildikten sonra çalışır.
  useEffect(() => {
    console.log(`
        MOUNTING: Bu satır component ilk render olduğunda çalışır. 
        Sonra bir daha çalışmaz. 
        Tek sefer çalışmasını istediğimiz kodları buraya yazarız`);
  }, []);

  useEffect(() => {
    return () => {
      console.log(
        "UNMOUNTING: Component hafızadan atılamdan hemen önce çalışır"
      );
    };
  }, []);

  useEffect(() => {
    console.log(`
        UPDATING: Bu satır render ve rerender durumlarında çalışır.`);
  });

  useEffect(() => {
    console.log(`
        UPDATING ERROR : Bu satır sadece error isimli state değiştiğinde çalışır.`);
  }, [error]);

  return (
    <div>
      <Button onClick={() => setMessage("Hello")}>Say Hello</Button>
      <Button onClick={() => setError("An error occured")}>Throw Error</Button>
    </div>
  );
};

export default UseEffect;
