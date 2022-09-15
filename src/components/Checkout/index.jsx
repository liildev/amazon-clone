import React from "react";
import CheckoutProduct from "../CheckoutProduct/";
import Subtotal from "../Subtotal";
import { useStateValue } from "../../context/StateProvider";
import { ad } from "../../assets";

import "./checkout.scss";

export default function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__block">
        <div className="checkout__left">
          <img src={ad} alt="ad" />

          <h2 className="checkout__title">Your shopping basket</h2>
        </div>
        <div className="checkout__right">
          <h2>The subtotal will go here</h2>
          <Subtotal />
        </div>

        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
