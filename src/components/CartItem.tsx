import { Typography } from "@mui/material";
import React from "react";

export default function CartItem({ data }: any) {
  const p = data.attributes;

  return (
    <div>
      <Typography>Name : {p.Name}</Typography>
      <Typography>Price : {p.Price}</Typography>
    </div>
  );
}
