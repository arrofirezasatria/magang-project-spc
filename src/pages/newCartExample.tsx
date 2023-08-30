import React, { useCallback, useEffect, useState } from "react";
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
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import ProductLayout from "@layouts/ProductLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  dropCart,
  removeItemFromCart,
  incrementItem,
  decrementItem,
} from "store/cartSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

const headers = {
  Authorization:
    "Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c",
};

const fetcher2 = (url: RequestInfo | URL) =>
  fetch(url, { headers }).then((res) => res.json());
// axios.get(url, { headers }).then((res) => res.data())

export default function ProductExample() {
  const router = useRouter();

  type Inputs = {
    name: string;
    email: string;
    number: string;
    address: string;
    city: string;
    state: string;
  };

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

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm<Inputs>();

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
    // null,
    "",
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

  // console.log(cart);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log("masuk sini");
    console.log(data);

    // const isi = {
    //   name: data.name,
    //   company: data.company,
    //   phoneNumber: data.phoneNumber,
    //   email: data.email,
    //   category: data.category,
    //   comment: data.comment,
    //   subscribeNewsletter: data.subscribeNewsletter,
    //   date: new Date(),
    // };

    const isi: any = {
      name: data.name,
      company: "'",
      phoneNumber: data.number,
      email: data.email,
      address: data.address,
      category: "Pembelian",
      comment: JSON.stringify(cart),
      subscribeNewsletter: "",
      date: new Date(),
    };

    const formBody = Object.keys(isi)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(isi[key])
      )
      .join("&");

    const res = await fetch("/api/mailjet", {
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    });

    // toast.success("Berhasil Mengirim");

    console.log(res);

    reset({
      name: "",
      email: "",
      number: "",
      address: "",
      city: "",
      state: "",
    });
  };

  return (
    <>
      <ProductLayout backgroundColor="#f2f1f0" full={cart.length <= 0 ? "calc(100vh - 10vh)" : "auto"}>
        <Box
          className="cart"
          sx={{
            my: { xs: "0", md: "20px" },
            p: { xs: "20px 20px", md: "20px 30px" },
          }}
        >
          <Typography component="h1" sx={{ fontWeight: "medium", mb: '2em' }}>
            My Cart {`(${cart.length})`}
          </Typography>
          {cart.length <= 0 ? (
            <>
              <Box>
                <Typography sx={{ mb: '24px' }}>Your cart is currently empty</Typography>
                <Typography sx={{ mb: '24px' }}>You can add item by pressing add to cart on product page.</Typography>
              </Box>
            </>
          ) : (
            <>
              <TableContainer
                sx={{
                  mt: { xs: "0", sm: "20px" },
                }}
              >
                <Table
                  sx={{
                    tableLayout: 'fixed',
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
                        {cart.map((item: any, index: any) => (
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
                              <Box sx={{ width: "100%", height: '100%', display: "flex" }}>
                                <Box
                                  sx={{
                                    width: "60px",
                                    height: "60px",
                                    aspectRatio: "1 / 1",
                                    position: "relative",
                                  }}
                                >
                                  <Image src={item.imageSrc} alt="" fill />
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
                                    {item.name}
                                  </Typography>
                                  <Box display="flex">
                                    <Typography
                                      sx={{
                                        fontSize: "12px",
                                        lineHeight: "1.5em",
                                        fontWeight: "400",
                                      }}
                                    >
                                      {item.code}
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
                                      {item.dimension}
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
                                        value={item.pricePerBox}
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
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Button
                                  sx={{
                                    minWidth: '40px',
                                    p: 0,
                                    height: '40px',
                                    border: '2px solid #000',
                                    borderRadius: '5px',
                                    "&:hover": {
                                      bgcolor: "#fff",
                                    },
                                  }}
                                  // onClick={() => handleDelete(index)}
                                  // handleDelete tidak ada
                                  onClick={() =>
                                    dispatch(removeItemFromCart({ id: item.id }))
                                  }
                                >
                                  {/* <DeleteForeverIcon sx={{ color: "#DC362E" }} /> */}
                                  <DeleteForeverOutlinedIcon sx={{ color: '#000' }} />
                                </Button>
                              </Box>
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
                                  value={item.priceTotal}
                                  decimalScale={0}
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
                                  onClick={() =>
                                    dispatch(decrementItem({ id: item.id }))
                                  }
                                  // handleDelete tidak ada
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
                                  value={item.quantity}
                                  onChange={(event) => handleChange(event, index)}
                                  variant="standard"
                                  InputProps={{
                                    disableUnderline: true,
                                  }}
                                  size="small"
                                />
                                <IconButton
                                  onClick={() =>
                                    dispatch(incrementItem({ id: item.id }))
                                  }
                                  // handleDelete tidak ada
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
                                width: item == "" ? '90px' : 'auto',
                                textTransform: "capitalize",
                                p: '16px 8px',
                              }}
                            >
                              {item}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {cart.map((row: any, index: any) => (
                          <TableRow
                            key={index}
                            sx={{
                              "& .MuiTableCell-root": {
                                fontWeight: "medium",
                                fontSize: "1rem",
                                letterSpacing: "0.5px",
                                p: '16px 8px',
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
                                    '& .MuiIconButton-root': {
                                      p: 0,
                                    },
                                  }}
                                >
                                  <IconButton
                                    onClick={() =>
                                      dispatch(decrementItem({ id: row.id }))
                                    }
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
                                    onClick={() =>
                                      dispatch(incrementItem({ id: row.id }))
                                    }
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
                                value={row.priceTotal}
                                decimalScale={0}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"Rp. "}
                              />
                            </TableCell>
                            <TableCell align="left">
                              <Button
                                sx={{
                                  maxWidth: '100px',
                                  border: '2px solid #000',
                                  borderRadius: '5px',
                                  textAlign: 'left',
                                  "&:hover": {
                                    bgcolor: "#fff",
                                  },
                                }}
                                onClick={() =>
                                  dispatch(removeItemFromCart({ id: row.id }))
                                }
                              >
                                {/* <DeleteForeverIcon sx={{ color: "#DC362E" }} /> */}
                                <DeleteForeverOutlinedIcon sx={{ color: '#000' }} />
                                <Typography sx={{
                                  color: '#000',
                                  fontSize: '12px',
                                  textTransform: 'none',
                                  pl: '8px',
                                  fontWeight: 'medium',
                                  lineHeight: 1.25,
                                }}>Remove item</Typography>
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </>
                  )}
                </Table>
              </TableContainer>
            </>
          )}
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
                      onClick={() => router.push("/range")}
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
                            decimalScale={0}
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
                      display: cart.length <= 0 ? "none" : "flex",
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
                      <Controller
                        // @ts-ignore
                        name={"name"}
                        control={control}
                        render={({
                          field: { onChange, value },
                          fieldState: { error },
                          formState,
                        }) => (
                          <TextField
                            helperText={error ? error.message : null}
                            size="small"
                            required
                            id="outlined-required"
                            error={!!error}
                            onChange={onChange}
                            fullWidth
                            label={"Name"}
                            variant="outlined"
                          />
                        )}
                      />
                      <Controller
                        // @ts-ignore
                        name={"email"}
                        control={control}
                        render={({
                          field: { onChange, value },
                          fieldState: { error },
                          formState,
                        }) => (
                          <TextField
                            helperText={error ? error.message : null}
                            size="small"
                            required
                            error={!!error}
                            onChange={onChange}
                            fullWidth
                            label={"Email"}
                            variant="outlined"
                          />
                        )}
                      />
                      <Controller
                        // @ts-ignore
                        name={"number"}
                        control={control}
                        render={({
                          field: { onChange, value },
                          fieldState: { error },
                          formState,
                        }) => (
                          <TextField
                            helperText={error ? error.message : null}
                            size="small"
                            required
                            error={!!error}
                            onChange={onChange}
                            fullWidth
                            label={"Phone Number"}
                            variant="outlined"
                          />
                        )}
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
                      <Controller
                        // @ts-ignore
                        name={"address"}
                        control={control}
                        render={({
                          field: { onChange, value },
                          fieldState: { error },
                          formState,
                        }) => (
                          <TextField
                            helperText={error ? error.message : null}
                            size="small"
                            required
                            multiline
                            rows={2}
                            error={!!error}
                            onChange={onChange}
                            fullWidth
                            label={"Address"}
                            variant="outlined"
                          />
                        )}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ display: cart.length <= 0 ? "none" : "flex", alignItems: "center" }}>
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
                      onClick={handleSubmit(onSubmit)}
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
        </Box >
      </ProductLayout >
    </>
  );
}
