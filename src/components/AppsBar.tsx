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
]

export default function AppsBar() {
  const { toggleDarkMode, darkMode } = useThemeContext();

  const theme = useTheme();

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        // borderWidth: "2px",
        // borderStyle: "solid",
        margin: 0
      }}
    >
      <Container
        maxWidth={"xl"}
        disableGutters
        sx={{
          width: "100%",
          // borderWidth: "2px",
          backdropFilter: "blur(20px)",
          boxShadow: `inset 0px -1px 1px ${theme.palette.mode === "dark"
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
          <Box
            sx={{
              bgcolor: "#FFF",
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              alignContent: "center",
              borderBottom: 0.5,
              borderColor: "#000"
            }}
          >
            {/* <IconButton onClick={toggleDarkMode} sx={{ my: "1.5px", mr: 0.5 }}>
              {darkMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton> */}

            <Typography
              component={"ul"}
              sx={{ alignContent: "center", color: "grey" }}
            >Visit our  online Factory Outlet</Typography>
            <Stack
              component={"ul"}
              direction="row"
              spacing={0}
              sx={{
                listStyleType: "none",
                padding: 0,
                margin: 0,
                px: "10px",
                "& li": {
                  // backgroundColor: "red",
                  py: 1,
                  px: 1.5,
                  my: "4px !important",
                  borderRadius: "8px",
                  "& a": {
                    fontFamily: "",
                    fontSize: "14px",
                    textDecoration: "none",
                    color: "gray",
                    "&:hover": {
                      fontWeight: "bold",
                    },
                  },
                },
              }}
            >
              {linkNav.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                );
              })}
            </Stack>
          </Box>
          <Box
            component="nav"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#FFF",
              width: "100%",
              overflow: "hidden",
              flexGrow: 1,
              gap: 4,
              "& ul": {},
            }}
          >
            <Typography component={"ul"} sx={{ color: "red", fontWeight: 400 }}>LE BRANDE</Typography>
            <Stack
              component={"ul"}
              direction="row"
              spacing={0}
              sx={{
                alignItems: "center",
                listStyleType: "none",
                padding: 0,
                margin: 0,
                px: "10px",
                "& li": {
                  // backgroundColor: "red",
                  py: 1,
                  px: 1.5,
                  my: "4px !important",
                  borderRadius: "8px",
                  "& a": {
                    fontFamily: "",
                    fontSize: "14px",
                    textDecoration: "none",
                    color: "gray",
                    "&:hover": {
                      fontWeight: "bold",
                    },
                  },
                },
              }}
            >
              {link.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.link}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
