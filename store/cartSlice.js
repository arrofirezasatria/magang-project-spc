import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [
      {
        id: 1,
        code: "gs12370",
        name: "Lasa Bianca",
        dimension: "30x60cm",
        imageSrc:
          "https://strapi-rezero-space.sgp1.digitaloceanspaces.com/5a942cde164d74474510b44140a35bbc.webp",
        quantity: 5,
        pricePerBox: 300000,
        priceTotal: 1500000,
      },
      {
        id: 2,
        code: "gs12370",
        name: "Lasa Bianca",
        dimension: "30x60cm",
        imageSrc:
          "https://strapi-rezero-space.sgp1.digitaloceanspaces.com/a1b4ac4d518697d8ae6d688493fbdbad.webp",
        quantity: 5,
        pricePerBox: 300000,
        priceTotal: 1500000,
      },
    ],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = action.payload;
      // const item = state.cartItems.find((p) => p.id === action.payload.id);
      // if (item) {
      //   item.quantity++;
      //   item.attributes.price = item.oneQuantityPrice * item.quantity;
      // } else {
      //   state.cartItems.push({ ...action.payload, quantity: 1 });
      // }
    },
    updateCart: (state, action) => {
      state.cartItems = state.cartItems.map((p) => {
        if (p.id === action.payload.id) {
          if (action.payload.key === "quantity") {
            p.attributes.price = p.oneQuantityPrice * action.payload.val;
          }
          return { ...p, [action.payload.key]: action.payload.val };
        }
        return p;
      });
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (p) => p.id !== action.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
