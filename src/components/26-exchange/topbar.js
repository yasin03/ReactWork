import React, { useContext } from "react";
import StoreContext from "../../store";
import "./topbar.scss";

const Topbar = () => {
  const store = useContext(StoreContext);

  const { currencies } = store;

  return (
    <nav className="exchange-topbar">
      <ul>
        <li>
          <h2>Exchange</h2>
        </li>
        <li>
          <span>$ : {(1 / currencies.USD).toFixed(2)}</span>
          <span>€ : {(1 / currencies.EUR).toFixed(2)}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Topbar;
