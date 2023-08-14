import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { useSelector } from "react-redux";

export default function AppsbarExample() {
  const count = useSelector((state) => state.counter.count);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2, color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "black" }}
            >
              News
            </Typography>
            <Stack direction={"row"} display={"flex"} alignItems={"center"}>
              <Button sx={{ color: "black" }}>Cart</Button>
              <Typography sx={{ color: "black", fontWeight: "bold" }}>
                {count}
              </Typography>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
