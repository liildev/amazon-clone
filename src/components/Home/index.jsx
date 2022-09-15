import React from "react";
import Product from "../Product";
import { home, ipad, startUp, tv, mixer, watch, speaker } from "../../assets";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={home} alt="home" className="home__image" />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates
Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image={startUp}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish 
Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 
Litre Glass Bowl"
            price={239.0}
            rating={4}
            image={mixer}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved Smart Watch"
            price={199.99}
            rating={3}
            image={watch}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image={speaker}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image={ipad}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image={tv}
          />
        </div>
      </div>
    </div>
  );
}
