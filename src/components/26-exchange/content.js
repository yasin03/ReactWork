import React, { useContext, useRef, useState } from "react";
import { Button, Input, InputGroup, InputGroupText } from "reactstrap";
import StoreContext from "../../store";

const Content = () => {
  const [result, setResult] = useState(null);
  const store = useContext(StoreContext);
  const { currencies } = store;
  const refAmount = useRef();
  const refType = useRef();

  const convertCurrency = () => {
    setResult(
      (refAmount.current.value / currencies[refType.current.value]).toFixed(2)
    );
  };

  return (
    <div className="mt-3">
      <InputGroup size="lg">
        <Input innerRef={refAmount} />
        <Input innerRef={refType} type="select">
          <option>EUR</option>
          <option>USD</option>
        </Input>
        <Button onClick={convertCurrency}>Convert</Button>
      </InputGroup>
      {result && (
        <h4 className="mt-3">
          {refAmount.current.value} {refType.current.value} = {result} TRY
        </h4>
      )}
    </div>
  );
};

export default Content;
