import CartItem from "@components/CartItem";
import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div>
      {cartItems.map(
        (item: { id: React.Key | null | undefined }, index: any) => {
          return <CartItem key={item.id} data={item} />;
        }
      )}
    </div>
  );
}
