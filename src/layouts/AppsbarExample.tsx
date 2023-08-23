import { AppBar, Box, Button, Container, IconButton, Stack, Toolbar, Typography, Drawer, List, ListItem, TextField } from "@mui/material";
import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarProduct from "@components/pages/range/NavbarProduct";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { useSelector } from "react-redux";

export default function AppsbarExample() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const isCartExist = false;

  const count = useSelector(
    (state) =>
      // @ts-ignore
      state.counter.count
  );

  const cart = useSelector(
    (state) =>
      // @ts-ignore
      state.cart.cartItems
  );

  return (
    <Box sx={{}}>
      <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
        <NavbarProduct />
      </AppBar>
      <div style={{ paddingTop: "89px" }}></div>
    </Box>
  );
}
