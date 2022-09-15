import React from "react";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { getBasketTotal } from "../../utils/reducer";
import "./subtotal.scss";

export default function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            {" "}
            <div className="subtotal__price">
              <p>Subtotal ({basket.length} items): </p>
              <strong>{value}</strong>
            </div>
            <small className="subtotal__gift">
              <input type="checkbox" />
              <span>This order contains a gift</span>
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={() => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}
