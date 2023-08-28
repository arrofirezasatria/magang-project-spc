import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [
      // {
      //   id: 1,
      //   code: "gs12370",
      //   name: "Lasa Bianca",
      //   dimension: "30x60cm",
      //   imageSrc:
      //     "https://strapi-rezero-space.sgp1.digitaloceanspaces.com/5a942cde164d74474510b44140a35bbc.webp",
      //   quantity: 5,
      //   pricePerBox: 300000,
      //   priceTotal: 1500000,
      // },
    ],
    totalSQM: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find((p) => p.id === action.payload.id);

      if (item) {
        // If product is in cart

        //add current quantity and price total and also all total price.
        item.quantity += parseInt(action.payload.quantity);
        item.priceTotal += action.payload.priceTotal;

        state.totalPrice += action.payload.priceTotal;
      } else {
        // If product is not in cart

        //push to cartItems state
        state.cartItems.push({
          id: action.payload.id,
          code: action.payload.code,
          name: action.payload.name,
          dimension: action.payload.dimension,
          imageSrc: action.payload.imageSrc,
          quantity: parseInt(action.payload.quantity),
          pricePerBox: action.payload.pricePerBox,
          priceTotal: action.payload.priceTotal,
        });

        state.totalPrice += action.payload.priceTotal;
      }
    },
    removeItemFromCart: (state, action) => {
      console.log();

      //Make array with removed item throufh filter
      const cartItemsWithRemovedItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.totalPrice -= state.cartItems.find(
        (p) => p.id === action.payload.id
      ).priceTotal;

      state.cartItems = cartItemsWithRemovedItem;
    },
    dropCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalSQM = 0;
    },
    incrementItem: (state, action) => {
      const item = state.cartItems.find((p) => p.id === action.payload.id);
      item.quantity += 1;
    },
    decrementItem: (state, action) => {
      const item = state.cartItems.find((p) => p.id === action.payload.id);
      item.quantity -= 1;
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
export const {
  addToCart,
  updateCart,
  removeFromCart,
  removeItemFromCart,
  dropCart,
  incrementItem,
  decrementItem,
} = cartSlice.actions;

export default cartSlice.reducer;
