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

const headers = {
  Authorization:
    "Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c",
};

const fetcher2 = (url: RequestInfo | URL) =>
  fetch(url, { headers }).then((res) => res.json());
// axios.get(url, { headers }).then((res) => res.data())

export default function productExample() {
  const { data, error, isLoading, isValidating } = swr(
    `https://strapi-app-tnshv.ondigitalocean.app/api/products/93?populate[motif][populate][products][populate]=*`,
    fetcher2
  );

  // table breakpoint
  const theme = useTheme();
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

  // const [cartData, setData] = useState(initialCartData);

  // const handleIncrement = (index) => {
  //   const newData = [...cartData];
  //   newData[index].quantity += 1;
  //   setData(newData);
  // };

  // const handleDecrement = (index) => {
  //   if (cartData[index].quantity > 0) {
  //     const newData = [...cartData];
  //     newData[index].quantity -= 1;
  //     setData(newData);
  //   }
  // };

  // const handleChange = (event, index) => {
  //   const newValue = parseInt(event.target.value);
  //   if (!isNaN(newValue)) {
  //     const newData = [...cartData];
  //     newData[index].quantity = newValue;
  //     setData(newData);
  //   }
  // };

  if (isLoading) {
    console.log("masih loading");
  }

  if (isValidating) {
    console.log("masih validating");
  }

  if (error) {
    console.log("error");
  }

  if (data) {
    console.log(data);
  }
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: any
  ): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <Box sx={{ height: "64px" }}></Box>
      <ProductLayout backgroundColor="#f2f1f0">
        {/* <Box className='cart-wrap' sx={{ bgcolor: '#f2f1f0', display: 'inline-block', width: '100%', height: '100%' }}>
        <Box className='cart-content' sx={{
          margin: '0 auto',
          maxWidth: '1200px',
          padding: '40px 30px',
        }}> */}
        <Box
          className="cart"
          sx={{ width: "100%", my: { xs: "0", md: "20px" } }}
        >
          <Typography component="h1" sx={{ fontWeight: "medium" }}>
            My cart {"(2)"}
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
                    {data?.data?.attributes?.motif.data.attributes?.products.data.map(
                      (item, index) => (
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
                      )
                    )}
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
                    {data?.data?.attributes?.motif.data.attributes?.products.data.map(
                      (row, index) => (
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
                              <Image
                                src={
                                  row.attributes.Image_Tile_Face.data[0]
                                    .attributes.formats.thumbnail.url
                                }
                                alt=""
                                fill
                              />
                            </Box>
                          </TableCell>
                          <TableCell align="left">
                            {row.attributes.Name}
                          </TableCell>
                          <TableCell align="left">
                            {
                              row.attributes.tile_dimension.data.attributes
                                .Dimension
                            }
                          </TableCell>
                          <TableCell align="left">
                            {row.attributes.Code}
                          </TableCell>
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
                                  onChange={(event) =>
                                    handleChange(event, index)
                                  }
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
                          </TableCell>
                          <TableCell align="left">
                            <NumericFormat
                              // value={item.pricePerBox * item.quantity}
                              value={row.attributes.Price}
                              decimalScale={3}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"Rp. "}
                            />
                          </TableCell>
                          <TableCell align="left">
                            <NumericFormat
                              // value={item.pricePerBox * item.quantity}
                              value={row.attributes.Price * 5}
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
                      )
                    )}
                  </TableBody>
                </>
              )}
            </Table>
          </TableContainer>
          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              justifyContent: "space-between",
              mt: "40px",
            }}
          >
            <Box display={{ xs: "block", sm: "flex" }}>
              <Box
                sx={{
                  p: "5px 15px",
                  border: "2px solid #000",
                  borderRadius: "5px",
                  mb: { xs: "16px", sm: "0" },
                  textAlign: "center",
                }}
              >
                <Typography>Continue Browsing</Typography>
              </Box>
              <Box
                sx={{
                  p: "5px 15px",
                  border: "2px solid #000",
                  borderRadius: "5px",
                  display: "flex",
                  ml: { xs: "0", sm: "16px" },
                  mb: { xs: "16px", sm: "0" },
                  justifyContent: "center",
                }}
              >
                <CloseIcon sx={{ mr: "5px" }} />
                <Typography>Clear Basket</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                p: "5px 15px",
                border: "2px solid #000",
                borderRadius: "5px",
                bgcolor: "#000",
                textAlign: "center",
              }}
            >
              <Typography sx={{ color: "#fff" }}>Checkout</Typography>
            </Box>
          </Box>
          <Box sx={{ mt: "40px" }}>
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
