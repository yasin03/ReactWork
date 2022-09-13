import React, { useRef, useState } from "react";

const UseRef = () => {
  const inputRef = useRef();
  const [ph, setPh] = useState("");

  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div className="text-center mt-5">
      <input type="text" placeholder={ph} ref={inputRef} />
      <button onClick={handleFocus}>Click to focus</button>
    </div>
  );
};

export default UseRef;
