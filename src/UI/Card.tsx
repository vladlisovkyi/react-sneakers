import React from "react";
import { ICard } from "../types/ICard";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../app/features/cart/cartSlice";
import { useAppSelector } from "../app/hooks";
import { truncateString } from "../helpers/truncateString";

const Card: React.FC<ICard> = ({ id, title, description, price, image }) => {
  const dispatch = useDispatch();
  const cart = useAppSelector((state) => state.cart.cart);
  const inCart = cart.some((item) => item.id === id);

  const handleCartAction = () => {
    if (inCart) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(
        addToCart({
          id,
          title,
          description,
          price,
          image,
        })
      );
    }
  };

  return (
    <div className="p-2 text-center card rounded-xl relative">
      <div className="img-wrapper overflow-hidden  rounded-xl z-0">
        <img
          className="w-full sm:w-80 h-64 transition-all"
          src={image}
          alt={title}
        />
      </div>
      <p className="m-2 tracking-wide font-light text-lg">{title}</p>
      <p className="text-sm">{truncateString(description, 60)}</p>
      <p className="mt-4 px-4 py-3 text-xl">{price}$</p>
      <button
        className={`cart opacity-0 w-full py-3 ${
          inCart
            ? "bg-red-400 hover:bg-red-500"
            : "bg-purple-400 hover:bg-purple-500"
        } transition-all duration-300`}
        onClick={handleCartAction}
      >
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default Card;
