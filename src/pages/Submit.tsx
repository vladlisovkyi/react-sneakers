import React from "react";
import Header from "../components/Header/Header";
import Form from "../components/Form/Form";
import { useAppSelector } from "../app/hooks";

const Submit = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  const total = cart?.reduce((acc, item) => acc + item.totalPrice, 0);
  return (
    <>
      <Header />
      <div className="mt-14 px-[2.5%] pb-16">
        <h3 className="text-xl text-center mb-10">
          You are purchasing {cart.length || 0} products. Total price is{" "}
          {total || 0}$
        </h3>
        <Form />
      </div>
    </>
  );
};

export default Submit;
