import React from "react";
import { products } from "../../utils/products";
import Product from "../Product";
import { home } from "../../assets/";

import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={home} alt="home" className="home__image" />

        <div className="home__row">
          {products.map((product) => (
            <Product
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
