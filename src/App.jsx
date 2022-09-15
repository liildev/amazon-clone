import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { auth } from "./firebase";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment ";
import Orders from "./components/Orders";
import Login from "./components/Login";
import Home from "./components/Home";
import Layout from "./layout";

const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

export default function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [user, dispatch]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
          index
        />
        <Route
          path="checkout"
          element={
            <Layout>
              <Checkout />
            </Layout>
          }
        />

        <Route
          path="orders"
          element={
            <Layout>
              <Orders />
            </Layout>
          }
        />

        <Route
          path="prime"
          element={
            <Layout>
              <h2>Prime</h2>
            </Layout>
          }
        />

        <Route
          path="payment"
          element={
            <Layout>
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Layout>
          }
          index
        />

        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

// 6:34
