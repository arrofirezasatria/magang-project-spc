import React from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useThemeContext } from "@modules/components/ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Link from "next/link";
import { alpha, useTheme } from "@mui/material/styles";

import { yaleBlue } from "@modules/brandingTheme";
import { useSelector } from "react-redux";
import { stat } from "fs";

const link = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Blog", link: "/blog" },
];

const linkNav = [
  // { title: "Visit our  online Factory Outlet", link: "/" },
  { title: "Search", link: "/" },
  { title: "Sign", link: "/" },
  { title: "Mood Boards", link: "/" },
  { title: "Cart", link: "/" },
];

export default function AppsBar() {
  const { toggleDarkMode, darkMode } = useThemeContext();

  const theme = useTheme();
  // const { cartItems } = useSelector((state) => state.cart);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        // borderWidth: "2px",
        // borderStyle: "solid",
        margin: 0,
      }}
    >
      <Container
        maxWidth={"xl"}
        disableGutters
        sx={{
          width: "100%",
          // borderWidth: "2px",
          backdropFilter: "blur(20px)",
          boxShadow: `inset 0px -1px 1px ${
            theme.palette.mode === "dark"
              ? yaleBlue[400]
              : theme.palette.grey[100]
          }`,
          // borderRadius: "8px",
          // my: 2,
          overflow: "hidden",
        }}
      >
        <Toolbar
          disableGutters={true}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          {/* <Box sx={{ color: "red" }}>
            <Typography>{cartItems.length}</Typography>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
