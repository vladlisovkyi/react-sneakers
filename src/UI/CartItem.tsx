import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decrimentCart,
  removeFromCart,
} from "../app/features/cart/cartSlice";
import { ICartItem } from "../types/ICartItem";
import { MdOutlineDeleteOutline } from "react-icons/md";
const CartItem: React.FC<ICartItem> = ({
  id,
  description,
  price,
  image,
  quantity,
  title,
  totalPrice,
}) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(addToCart({ id, title, description, price, image }));
  };
  const handleDecriment = () => {
    dispatch(decrimentCart(id));
  };
  const removeItem = () => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="flex items-center mb-2">
      <img src={image} alt="" width={80} height={80} className="w-20 h-20" />
      <div className="ml-8">
        <p>{title}</p>
      </div>
      <p className="ml-auto pl-2 mr-8">{+totalPrice.toFixed(2)}$</p>
      <div className="flex items-center gap-3 justify-end">
        <button className="text-xl" onClick={handleDecriment}>
          -
        </button>
        <span>{quantity}</span>
        <button className="text-xl" onClick={handleIncrement}>
          +
        </button>
        <button className="p-2" onClick={removeItem}>
          <MdOutlineDeleteOutline size={32} className="hover:text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
