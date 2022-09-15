import React from "react";
import { useStateValue } from "../../context/StateProvider";
import { star } from "../../assets";

import "./product.scss";

export default function Product({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",

      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <img
                className="product__rating__img"
                key={i}
                src={star}
                alt="star"
              />
            ))}
        </div>
      </div>

      <img src={image} alt="products" className="product__image" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}
