import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
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
              <Button onClick={toggleDrawer} sx={{ color: "black" }}>
                Cart
              </Button>
              <Typography sx={{ color: "black", fontWeight: "bold" }}>
                {count}
              </Typography>
            </Stack>
          </Toolbar>
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
            <Box
              sx={{
                px: "1.5rem",
                pt: "1.5rem",
                minWidth: "390px",
                boxSizing: "border-box",
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexGrow: 1,
                }}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  My Cart
                </Typography>
                <IconButton onClick={toggleDrawer}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
            {true ? (
              <>
                {cart.map((item, index) => {
                  return (
                    <Stack key={index}>
                      <Typography>{item.id}</Typography>
                      <Typography>{item.code}</Typography>
                      <Typography>{item.name}</Typography>
                      <Typography>{item.dimension}</Typography>
                      <Typography>{item.quantity}</Typography>
                      <Typography>{item.pricePerBox}</Typography>
                      <Typography>{item.priceTotal}</Typography>
                    </Stack>
                  );
                })}
                <List
                  sx={{
                    p: "1rem",
                    overflow: "auto",
                    flexGrow: "1",
                  }}
                >
                  <ListItem
                    sx={{ borderBottom: "1px solid #ededed", py: "1rem" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <Box>
                          <IconButton
                            sx={{
                              position: "absolute",
                              width: "15px",
                              height: "15px",
                              bgcolor: "#999",
                              ml: "50px",
                              mt: "-0.3rem",
                              "&:hover": {
                                bgcolor: "#999",
                              },
                            }}
                          >
                            <CloseIcon
                              sx={{ fontSize: "15px", color: "#fff" }}
                            />
                          </IconButton>
                          <Box
                            sx={{
                              bgcolor: "#ededed",
                              width: "65px",
                              height: "65px",
                              borderRadius: "0.375rem",
                            }}
                          >
                            {/* <Image src={ } alt="" fill /> */}
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            ml: "16px",
                            overflowWrap: "break-word",
                            flexWrap: "wrap",
                            maxWidth: "130px",
                          }}
                        >
                          <Typography
                            sx={{ fontSize: "16px", fontWeight: "medium" }}
                          >
                            Le Product Ranges
                          </Typography>
                          <Typography
                            sx={{ fontSize: "14px", color: "#737373" }}
                          >
                            Black / 120x60cm
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: "14px" }}>
                          Rp. 123.123.123
                        </Typography>
                        <Box
                          display="flex"
                          alignItems="center"
                          sx={{
                            border: "1px solid #999",
                            borderRadius: "9999px",
                            justifyContent: "space-between",
                          }}
                        >
                          <IconButton
                          // onClick={() => handleDecrement(index)}
                          >
                            <RemoveIcon sx={{ fontSize: "15px" }} />
                          </IconButton>
                          <TextField
                            sx={{
                              width: "24px",
                              "& .MuiInputBase-input": {
                                textAlign: "center",
                                fontSize: "14px",
                              },
                              "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button":
                                {
                                  appearance: "none",
                                },
                            }}
                            type="number"
                            value={0}
                            // onChange={(event) => handleChange(event, index)}
                            variant="standard"
                            InputProps={{
                              disableUnderline: true,
                            }}
                            size="small"
                          />
                          <IconButton
                          // onClick={() => handleIncrement(index)}
                          >
                            <AddIcon sx={{ fontSize: "15px" }} />
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>
                  </ListItem>
                </List>
                <Box sx={{ p: "1.5rem" }}>
                  <Box
                    sx={{
                      py: "1rem",
                      "& .cart-calc": {
                        display: "flex",
                        justifyContent: "space-between",
                        pb: "0.25rem",
                        mb: "0.75rem",
                        borderBottom: "1px solid #ededed",
                      },
                    }}
                  >
                    <Box className="cart-calc">
                      <Typography>Taxes</Typography>
                      <Typography>Rp. 123.123.123</Typography>
                    </Box>
                    <Box className="cart-calc">
                      <Typography>Shipping</Typography>
                      <Typography>Calculated at checkout</Typography>
                    </Box>
                    <Box className="cart-calc">
                      <Typography>Total</Typography>
                      <Typography>Rp. 123.123.123.123</Typography>
                    </Box>
                  </Box>
                </Box>
              </>
            ) : (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    mt: "5rem",
                  }}
                >
                  <ShoppingCartOutlinedIcon sx={{ fontSize: "4rem" }} />
                  <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    Your cart is empty
                  </Typography>
                </Box>
              </>
            )}
          </Drawer>
        </Container>
      </AppBar>
    </Box>
  );
}
