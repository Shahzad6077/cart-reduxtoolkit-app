import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartSliceState, CartItem } from "./../../Types/store";

let initialState: CartSliceState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cartBasket",
  initialState,
  reducers: {
    addCarItem(state, action: PayloadAction<CartItem>) {
      const item = action.payload;
      const { id, colors, price } = item;
      const { colorId } = colors;
      //e.g `${id}-${color}`
      const makeCartItemId: string = `${id}-${colorId}`;

      const itemIndex: number = state.items.findIndex(
        (obj) => obj.cartItemId === makeCartItemId
      );
      const cartHasItemAlready: boolean = itemIndex !== -1;

      if (cartHasItemAlready) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push(item);
      }
      state.totalQuantity++;
      state.totalAmount += price;
    },
    removeCarItem: (state, action: PayloadAction<string>) => {
      const cartItemId = action.payload;
      const item: CartItem | undefined = state.items.find(
        (obj) => obj.cartItemId === cartItemId
      );
      if (item) {
        let itemsShallowArr: CartItem[];
        const hasQuantityGreaterThan0: boolean = item.quantity > 1;
        if (hasQuantityGreaterThan0) {
          itemsShallowArr = state.items.map((obj) => {
            if (obj.cartItemId === cartItemId) {
              return { ...obj, quantity: obj.quantity - 1 };
            } else {
              return obj;
            }
          });
        } else {
          itemsShallowArr = state.items.filter(
            (obj) => obj.cartItemId !== cartItemId
          );
        }
        const totalAmount = state.totalAmount - item.price;
        const totalQuantity = state.totalQuantity - 1;
        return { ...state, items: itemsShallowArr, totalAmount, totalQuantity };
      } else {
        return state;
      }
    },
    clearCart: (state, action: PayloadAction) => {
      return { ...initialState };
    },
  },
});
export const { addCarItem, removeCarItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
