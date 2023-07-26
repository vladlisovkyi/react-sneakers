import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useAppSelector } from "../app/hooks";

interface ICartButton {
  onClick: () => void;
}

const CartButton: React.FC<ICartButton> = ({ onClick }) => {
  const cart = useAppSelector((state) => state.cart.cart);
  return (
    <button className="relative" onClick={onClick}>
      <FaCartShopping size={32} />
      {cart.length ? (
        <span className="absolute -top-2 -right-2 w-5 h-5 text-xs rounded-full bg-orange-400 text-white flex justify-center items-center">
          {cart.length}
        </span>
      ) : null}
    </button>
  );
};

export default CartButton;
