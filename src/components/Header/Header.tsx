import React, { useRef } from "react";
import DarkModeToggle from "../../UI/DarkModeToggle/DarkModeToggle";
import CartButton from "../../UI/CartButton";
import { useDarkMode, useOnClickOutside } from "usehooks-ts";
import Cart from "../Cart/Cart";
import { useDispatch } from "react-redux";
import { closeCart, handleCartOpen } from "../../app/features/cart/cartSlice";
import { useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";

const Header = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useDarkMode();
  const dispatch = useDispatch();
  const cartOpen = useAppSelector((state) => state.cart.isCartOpen);
  const handleCartButtonClick = () => {
    dispatch(handleCartOpen());
  };
  const handleCloseCart = () => {
    dispatch(closeCart());
  };
  useOnClickOutside(ref, handleCloseCart);
  return (
    <header
      className={`sticky top-0 z-10 bg-[color:var(--bkg-color)] w-full h-20 px-[5%] py-2 flex justify-between items-center border-b  ${
        isDarkMode ? "border-white border-opacity-25" : "border-transparent"
      }  shadow-[0_0_6px_0_rgba(0,0,0,0.15)]`}
    >
      <Link className="flex justify-center items-center gap-2" to={"/"}>
        <img src="./assets/images/logo.svg" alt="" width={40} height={40} />
        <span className="font-semibold">Sneakers</span>
      </Link>
      <div className="flex gap-8 items-center" ref={ref}>
        <DarkModeToggle />
        <CartButton onClick={handleCartButtonClick} />
        {cartOpen && <Cart />}
      </div>
    </header>
  );
};

export default Header;
