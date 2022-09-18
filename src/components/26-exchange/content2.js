import React, { useContext, useRef, useState } from "react";
import { Button, Input, InputGroup, InputGroupText } from "reactstrap";
import StoreContext from "../../store";

const Content2 = () => {
  const [amount, setAmount] = useState(1);
  const [currency, setCurrency] = useState("USD");
  
  const store = useContext(StoreContext);
  const { currencies } = store;

  const result = (amount / currencies[currency]).toFixed(2);

  return (
    <div className="mt-3">
      <InputGroup size="lg">
        <Input
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <Input
          type="select"
          value={currency}
          onChange={(e) => {
            setCurrency(e.target.value);
          }}
        >
          <option>EUR</option>
          <option>USD</option>
        </Input>
      </InputGroup>
      {result && (
        <h4 className="mt-3">
          {amount} {currency} = {result} TRY
        </h4>
      )}
    </div>
  );
};

export default Content2;
