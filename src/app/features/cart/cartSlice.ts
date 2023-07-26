// cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "../../../types/ICartItem";
import { ICard } from "../../../types/ICard";

interface CartState {
  cart: ICartItem[];
  isCartOpen: boolean;
}

const storedData = JSON.parse(localStorage.getItem("cart") || "[]");

const initialState: CartState = {
  cart: !storedData || storedData.length === 0 ? [] : storedData,
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICard>) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += +newItem.price;
      } else {
        state.cart.push({
          id: newItem.id,
          description: newItem.description,
          price: +newItem.price,
          quantity: 1,
          totalPrice: +newItem.price,
          title: newItem.title,
          image: newItem.image,
        });
      }
      window.localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        state.cart = state.cart.filter((item) => item.id !== id);
        window.localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    decrimentCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.cart = state.cart.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
      }
      window.localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart(state) {
      state.cart = [];
      window.localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    handleCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decrimentCart,
  clearCart,
  handleCartOpen,
  closeCart,
} = cartSlice.actions;

export default cartSlice.reducer;
