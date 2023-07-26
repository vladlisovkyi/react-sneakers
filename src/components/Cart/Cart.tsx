import React from "react";
import CartItem from "../../UI/CartItem";
import { useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeCart } from "../../app/features/cart/cartSlice";
const Cart = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  const total = cart?.reduce((acc, item) => acc + item.totalPrice, 0);
  const dispatch = useDispatch();
  const handleCloseCart = () => {
    dispatch(closeCart());
  };
  return (
    <div className="absolute top-20 right-0 md:right-4 p-6 max-h-[400px] w-full md:w-[700px] rounded-xl z-10 bg-[color:var(--bkg-color)] border overflow-y-scroll">
      {cart.length === 0 ? (
        <h4 className="text-center py-3">Looks like the cart is empty!</h4>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="border-t flex justify-between items-end gap-3 pt-6">
            <div>
              <Link
                to="/submit"
                onClick={handleCloseCart}
                className="text-red-500 hover:underline"
              >
                Go To Check Out
              </Link>
            </div>
            <p className="text-xl">
              Total : <span>{+total.toFixed(2)}$</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
