import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Link,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  FormControl,
  useMediaQuery,
  useTheme,
  TextField,
  IconButton,
  Divider,
  createTheme,
} from "@mui/material";
import swr from "swr";
import Image from "next/image";
import { url } from "inspector";
import axios from "axios";
import { title } from "process";
import { Controller } from "react-hook-form";
import { props } from "cypress/types/bluebird";
import { NumericFormat } from "react-number-format";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CloseIcon from "@mui/icons-material/Close";
import ProductLayout from "@layouts/ProductLayout";
import { useDispatch, useSelector } from "react-redux";
import { dropCart } from "store/cartSlice";

const headers = {
  Authorization:
    "Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c",
};

const fetcher2 = (url: RequestInfo | URL) =>
  fetch(url, { headers }).then((res) => res.json());
// axios.get(url, { headers }).then((res) => res.data())

export default function productExample() {
  const dispatch = useDispatch();
  const { data, error, isLoading, isValidating } = swr(
    `https://strapi-app-tnshv.ondigitalocean.app/api/products/93?populate[motif][populate][products][populate]=*`,
    fetcher2
  );

  // table breakpoint
  // const theme = useTheme();
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1000,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // table data content
  // const initialCartData = [
  //   {
  //     img: data?.data?.attributes?.Image_Tile_Face.data[0].attributes?.formats.thumbnail.url,
  //     quantity: 3,
  //     code: data?.data?.attributes?.Code,
  //     description: data?.data?.attributes?.Name + ' - ' + data?.data?.attributes?.tile_dimension.data.attributes?.Dimension,
  //     boxPrice: 'Rp. 123.123.123',
  //     totalPrice: 'Rp. 123.123.123'
  //   },
  //   {
  //     img: data?.data?.attributes?.Image_Tile_Face.data[0].attributes?.formats.thumbnail.url,
  //     quantity: 5,
  //     code: 'DEF456',
  //     description: 'Product GHIJKL' + ' - ' + '120x120cm',
  //     boxPrice: 'Rp. 123.123.123',
  //     totalPrice: 'Rp. 123.123.123'
  //   },
  // ];
  const headers = [
    null,
    "range name",
    "dimension",
    "code",
    "quantity",
    "box price",
    "total price",
    null,
  ];
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: any
  ): void {
    throw new Error("Function not implemented.");
  }

  const handleClearbasket = () => {
    dispatch(dropCart());
  };

  const cart = useSelector(
    (state) =>
      // @ts-ignore
      state.cart.cartItems
  );
  const totalPrice = useSelector(
    (state) =>
      // @ts-ignore
      state.cart.totalPrice
  );

  console.log(cart);

  return (
    <>
      <Box sx={{ height: "64px" }}></Box>
      <ProductLayout backgroundColor="#f2f1f0">
        <Box
          className="cart"
          sx={{
            my: { xs: "0", md: "20px" },
            p: { xs: "20px 20px", md: "20px 30px" },
          }}
        >
          <Typography component="h1" sx={{ fontWeight: "medium" }}>
            My Cart {`(${cart.length})`}
          </Typography>
          <TableContainer
            sx={{
              mt: { xs: "0", sm: "20px" },
            }}
          >
            <Table
              sx={{
                width: "100%",
                borderCollapse: "collapse",
                "& .MuiTableCell-root": {
                  borderColor: "#c6c6c6",
                },
              }}
              aria-label="simple table"
            >
              {isMobile ? (
                <>
                  <Box className="cart-mobile">
                    {cart.map((item, index) => (
                      <Box
                        className="cart-row"
                        key={index}
                        sx={{
                          my: "1rem",
                          py: "1rem",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box sx={{ width: "100%", display: "flex" }}>
                            <Box
                              sx={{
                                width: "60px",
                                height: "60px",
                                aspectRatio: "1 / 1",
                                position: "relative",
                              }}
                            >
                              <Image
                                src={
                                  item.attributes.Image_Tile_Face.data[0]
                                    .attributes.formats.thumbnail.url
                                }
                                alt=""
                                fill
                              />
                            </Box>
                            <Box
                              sx={{
                                pl: "1rem",
                                display: "flex",
                                flexDirection: "column",
                                gap: "2px",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "16px",
                                  lineHeight: "1.5em",
                                  fontWeight: "500",
                                }}
                              >
                                {item.attributes.Name}
                              </Typography>
                              <Box display="flex">
                                <Typography
                                  sx={{
                                    fontSize: "12px",
                                    lineHeight: "1.5em",
                                    fontWeight: "400",
                                  }}
                                >
                                  {item.attributes.Code}
                                </Typography>
                                <Divider
                                  orientation="vertical"
                                  flexItem
                                  sx={{ mx: "10px" }}
                                />
                                <Typography
                                  sx={{
                                    fontSize: "12px",
                                    lineHeight: "1.5em",
                                  }}
                                >
                                  {
                                    item.attributes.tile_dimension.data
                                      .attributes.Dimension
                                  }
                                </Typography>
                              </Box>
                              <Box>
                                <Typography
                                  sx={{
                                    fontSize: "14px",
                                    lineHeight: "1.25em",
                                  }}
                                >
                                  <NumericFormat
                                    // value={item.pricePerBox * item.quantity}
                                    value={item.attributes.Price}
                                    decimalScale={3}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"Rp. "}
                                  />{" "}
                                  / Box
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                          <IconButton
                            sx={{
                              width: "40px",
                              height: "40px",
                              "&:hover": {
                                bgcolor: "#fcebeb",
                              },
                            }}
                            onClick={() => handleDelete(index)}
                          >
                            <DeleteForeverIcon sx={{ color: "#DC362E" }} />
                          </IconButton>
                        </Box>
                        <Box
                          display="flex"
                          sx={{
                            justifyContent: "space-between",
                            alignItems: " center",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "16px",
                              lineHeight: "1.25em",
                              fontWeight: "bold",
                            }}
                          >
                            <NumericFormat
                              // value={item.pricePerBox * item.quantity}
                              value={item.attributes.Price * 5}
                              decimalScale={3}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"Rp. "}
                            />
                          </Typography>
                          <Box
                            display="flex"
                            alignItems="center"
                            sx={{
                              width: "120px",
                              height: "40px",
                              p: "5px",
                              // border: '1px solid #999',
                              // borderRadius: '5px',
                            }}
                          >
                            <IconButton
                              onClick={() => handleDecrement(index)}
                              size="small"
                            >
                              <RemoveIcon />
                            </IconButton>
                            <TextField
                              sx={{
                                m: "dense",
                                "& .MuiInputBase-input": {
                                  fontWeight: "medium",
                                  textAlign: "center",
                                },
                                "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button":
                                  {
                                    appearance: "none",
                                  },
                              }}
                              type="number"
                              value={5}
                              onChange={(event) => handleChange(event, index)}
                              variant="standard"
                              InputProps={{
                                disableUnderline: true,
                              }}
                              size="small"
                            />
                            <IconButton
                              onClick={() => handleIncrement(index)}
                              size="small"
                            >
                              <AddIcon />
                            </IconButton>
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </>
              ) : (
                <>
                  <TableHead>
                    <TableRow
                      sx={{
                        "& .MuiTableCell-root": {
                          fontWeight: "400",
                          fontSize: "1rem",
                          letterSpacing: "0.5px",
                        },
                      }}
                    >
                      {headers.map((item, index) => (
                        <TableCell
                          key={index}
                          align="left"
                          sx={{
                            textTransform: "capitalize",
                          }}
                        >
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cart.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "& .MuiTableCell-root": {
                            fontWeight: "medium",
                            fontSize: "1rem",
                            letterSpacing: "0.5px",
                          },
                        }}
                      >
                        <TableCell align="left">
                          <Box
                            sx={{
                              width: "60px",
                              height: "60px",
                              position: "relative",
                              aspectRatio: "1 / 1",
                            }}
                          >
                            <Image src={row.imageSrc} alt="" fill />
                          </Box>
                        </TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.dimension}</TableCell>
                        <TableCell align="left">{row.code}</TableCell>
                        <TableCell align="left">
                          <Box display="flex" alignItems="center">
                            <Box
                              display="flex"
                              alignItems="center"
                              sx={{
                                width: "120px",
                                height: "40px",
                                p: "5px",
                                // border: '1px solid #999',
                                // borderRadius: '5px',
                              }}
                            >
                              <IconButton
                                // onClick={() => handleDecrement(index)}
                                size="small"
                                // sx={{ display: "none" }}
                              >
                                <RemoveIcon />
                              </IconButton>
                              <TextField
                                sx={{
                                  m: "dense",
                                  "& .MuiInputBase-input": {
                                    fontWeight: "medium",
                                    textAlign: "center",
                                  },
                                  "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button":
                                    {
                                      appearance: "none",
                                    },
                                }}
                                type="number"
                                value={row.quantity}
                                onChange={(event) => handleChange(event, index)}
                                variant="standard"
                                InputProps={{
                                  disableUnderline: true,
                                }}
                                size="small"
                              />
                              <IconButton
                                // onClick={() => handleIncrement(index)}
                                size="small"
                                // sx={{ display: "none" }}
                              >
                                <AddIcon />
                              </IconButton>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell align="left">
                          <NumericFormat
                            // value={item.pricePerBox * item.quantity}
                            value={row.pricePerBox}
                            decimalScale={3}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"Rp. "}
                          />
                        </TableCell>
                        <TableCell align="left">
                          <NumericFormat
                            // value={item.pricePerBox * item.quantity}
                            value={row.pricePerBox}
                            decimalScale={3}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"Rp. "}
                          />
                        </TableCell>
                        <TableCell align="left">
                          <IconButton
                            sx={{
                              "&:hover": {
                                bgcolor: "#fcebeb",
                              },
                            }}
                            onClick={() => handleDelete(index)}
                          >
                            <DeleteForeverIcon sx={{ color: "#DC362E" }} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </>
              )}
            </Table>
          </TableContainer>
          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              justifyContent: "space-between",
              mt: "40px",
            }}
          >
            <Grid container columnSpacing={4}>
              <Grid item xs={12} md={6}>
                <Box
                  display={{ xs: "block", md: "flex" }}
                  sx={{
                    gap: 2,
                  }}
                >
                  <Box>
                    <Button
                      size="small"
                      sx={{
                        width: { xs: "100%", md: "auto" },
                        height: "40px",
                        color: "#000",
                        border: "2px solid #000",
                        borderRadius: "5px",
                        mb: { xs: "1em", lg: "0" },
                        textAlign: "center",
                        px: "16px",
                      }}
                    >
                      Continue Browsing
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      size="small"
                      sx={{
                        width: { xs: "100%", md: "auto" },
                        height: "40px",
                        border: "2px solid #000",
                        borderRadius: "5px",
                        display: "flex",
                        mb: { xs: "1em", lg: "0" },
                        justifyContent: "center",
                        color: "#000",
                        px: "16px",
                      }}
                      onClick={() => {
                        dispatch(dropCart());
                      }}
                    >
                      <CloseIcon sx={{ mr: "5px" }} />
                      Clear Basket
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: { xs: "block", md: "flex" },
                  justifyContent: "end",
                }}
              >
                <Box sx={{ mb: { xs: "1em", md: "0" }, width: "100%" }}>
                  <Box sx={{ mb: { xs: "1em", md: "0" } }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box>
                        <Typography sx={{ fontSize: "20px", pr: "20px" }}>
                          Total:
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{ fontSize: "20px", fontWeight: "bold" }}
                        >
                          <NumericFormat
                            // value={item.pricePerBox * item.quantity}
                            value={totalPrice}
                            decimalScale={3}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"Rp. "}
                          />
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      sx={{ fontSize: "12px", mt: "10px", textAlign: "end" }}
                    >
                      Tax & shipping rates are calculated during checkout
                    </Typography>
                  </Box>
                  <Box
                    className="cart-form"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      mt: "36px",
                      gap: "10px",
                      mb: "1em",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                        Contact
                      </Typography>
                      <TextField
                        size="small"
                        required
                        id="outlined-required"
                        label="Name"
                        sx={{ flexGrow: 1 }}
                      />
                      <TextField
                        size="small"
                        type="email"
                        required
                        fullWidth
                        id="demo-helper-text-aligned"
                        label="Email"
                      />
                      <TextField
                        size="small"
                        type="phone"
                        required
                        fullWidth
                        helperText="Please enter your email and mobile phone number"
                        id="demo-helper-text-aligned"
                        label="Phone Number"
                      />
                    </Box>
                    <Box
                      sx={{
                        gap: "10px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                        Shipping Address
                      </Typography>
                      <TextField
                        size="small"
                        required
                        id="outlined-required"
                        label="Address"
                        sx={{ flexGrow: 1 }}
                      />
                      <TextField
                        size="small"
                        required
                        id="outlined-required"
                        label="City"
                        sx={{ flexGrow: 1 }}
                      />
                      <TextField
                        size="small"
                        required
                        id="outlined-required"
                        label="State"
                        sx={{ flexGrow: 1 }}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Button
                      size="small"
                      sx={{
                        width: "100%",
                        height: "40px",
                        color: "#fff",
                        bgcolor: "#000",
                        px: "16px",
                        "&:hover": {
                          bgcolor: "#111",
                        },
                      }}
                    >
                      Checkout
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mt: "50px" }}>
            <Typography>
              To reduce the environmental impact our free samples are provided
              as 100x100mm cuts.
              <br />
              If you wish to order a larger sample, call 01782 524043 or email
              samples@johnson-tiles.com.
            </Typography>
          </Box>
        </Box>
      </ProductLayout>
    </>
  );
}
