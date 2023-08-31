import React, { useState } from "react";

import { Box, Button, Grid, Stack, Typography, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Divider, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { NumericFormat } from "react-number-format";
import ModulSpec from "@components/pages/range/ModulSpec";
import ModulPacking from "@components/pages/range/modulPacking";
import CircleIcon from "@mui/icons-material/Circle";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "store/counterSlice";
import { addToCart } from "store/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IFormInputs {
  id: number;
  code: string;
  name: string;
  dimension: string;
  imageSrc: string;
  quantity: number;
  pricePerBox: number;
  priceTotal: number;
}

export default function ProductSpecification({ props, data }: any) {
  const dispatch = useDispatch();
  const imgFileUrl = props.productOnly.data.attributes.Image_Tile_Face.data?.[0]?.attributes.url;
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<IFormInputs>();
  const qtt = watch("quantity");
  // console.log(name);

  const downloadFileAtUrl = () => {
    if (imgFileUrl) {
      fetch(imgFileUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const blobURL = window.URL.createObjectURL(new Blob([blob]));
          // const fileName = imgFileUrl.split("/").pop();
          const fileNameFromAPI = props.productOnly.data.attributes.Name + " " + props.productOnly.data.attributes.tile_dimension.data.attributes?.Dimension;

          const urlParts = imgFileUrl.split("/");
          const urlFileName = urlParts.pop();
          const urlFileNameParts = urlFileName.split(".");
          const fileExtension = urlFileNameParts.pop();

          const fileNameWithExtension = `${fileNameFromAPI}.${fileExtension}`;
          const aTag = document.createElement("a");
          aTag.href = blobURL;
          aTag.setAttribute("download", fileNameWithExtension);
          document.body.appendChild(aTag);
          aTag.click();
          aTag.remove();
        });
    }
  };

  const [expanded, setExpanded] = useState(false);

  const handleBoxClick = () => {
    setExpanded(!expanded);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [coverage, setCoverage] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    if (!data.quantity || data.quantity < 1) {
      toast.error("Please enter a valid quantity", {
        position: isSizeLessThan380 ? toast.POSITION.TOP_CENTER : toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
      });
    } else {
      dispatch(
        addToCart({
          id: props.product.data.id,
          code: props.productOnly.data.attributes.Code,
          name: props.productOnly.data.attributes.Name,
          dimension: props.productOnly.data.attributes.tile_dimension.data.attributes.Dimension,
          imageSrc: props.productOnly.data.attributes.Image_Tile_Face.data[0].attributes.formats.thumbnail.url,
          quantity: data.quantity,
          pricePerBox: props.productOnly.data.attributes.SQM_Box * props.productOnly.data.attributes.Price,
          priceTotal: totalPrice,
        })
      );
      toast.success("Item added to cart", {
        position: isSizeLessThan380 ? toast.POSITION.TOP_CENTER : toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
      });
    }
  };

  React.useEffect(() => {
    // @ts-ignore

    if (qtt !== 0) {
      setCoverage(qtt * props.productOnly.data.attributes.SQM_Box);
    } else {
      setCoverage(0);
    }
  }, [props.productOnly.data.attributes.SQM_Box, qtt]);

  React.useEffect(() => {
    // @ts-ignore
    setTotalPrice(qtt * props.productOnly.data.attributes.SQM_Box * props.productOnly.data.attributes.Price);
  }, [props.productOnly.data.attributes.Price, props.productOnly.data.attributes.SQM_Box, qtt]);
  const isSizeLessThan380 = useMediaQuery(theme.breakpoints.down(481));
  const isSizeLessThan900 = useMediaQuery(theme.breakpoints.down(900));
  React.useState();

  return (
    <>
      <ToastContainer style={{ marginLeft: isSizeLessThan380 ? "4%" : "0", width: isSizeLessThan380 ? "92%" : "", marginTop: isSizeLessThan380 ? "70px" : "50px", marginRight: isSizeLessThan900 ? "0px" : "0" }} />
      <Box sx={{ p: { xs: "20px 0x", md: "20px 30px" } }}>
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              pt: "20px",
              pb: "30px",
              mb: "40px",
              textAlign: "center",
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: "27px",
                fontWeight: "bold",
                letterSpacing: "2px",
              }}
            >
              PRODUCT SPECIFICATION
            </Typography>
          </Box>
          <Box
            component="span"
            sx={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              width: "100px",
              height: "3px",
              backgroundColor: "black",
              transform: "translateX(-50%)",
              content: "''",
            }}
          />
        </Box>
        <Box
          className="product-highlight"
          sx={{
            width: "100%",
            pt: "30px",
          }}
        >
          <Grid container spacing={6} sx={{ pb: "30px" }}>
            <Grid item xs={12} md={6}>
              <Zoom>
                <Box
                  height={
                    props.productOnly.data.attributes?.tile_dimension.data.attributes.Dimension == "60x60cm" ? "auto" : { xs: "auto", sm: "715px" } // 600-610px responsive problem
                  }
                  sx={{
                    width: { xs: "100%", md: "80%" },
                    minHeight: props.productOnly.data.attributes?.tile_dimension.data.attributes.Dimension == "60x60cm" ? "none" : "100%",
                    maxHeight: props.productOnly.data.attributes?.tile_dimension.data.attributes.Dimension == "60x60cm" ? "427.500px" : "none",
                    position: "relative",
                    aspectRatio: "1 / 1",
                  }}
                >
                  {props.productOnly.data.attributes.Image_Tile_Face.data ? (
                    <Image
                      src={props.productOnly.data.attributes.Image_Tile_Face.data[0]?.attributes?.formats?.large?.url}
                      fill
                      alt=""
                      style={{
                        borderRadius: "0px",
                        background: "#e0e0e0",
                        boxShadow: "5px 5px 10px #cacaca, -5px -5px 10px #f6f6f6",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <Box>No tile face image available</Box>
                  )}
                </Box>
              </Zoom>
              <Box
                sx={{
                  my: "20px",
                  display: "flex",
                  justifyContent: "center",
                  width: { md: "80%" },
                }}
              >
                {imgFileUrl ? (
                  <Button
                    href=""
                    onClick={() => {
                      downloadFileAtUrl();
                    }}
                    download={imgFileUrl}
                    style={{
                      backgroundColor: "#000",
                      color: "#fff",
                      borderRadius: "5px",
                      padding: "8px 8px 8px 8px",
                      fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";',
                      fontSize: "14px",
                      marginBottom: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textTransform: "capitalize",
                      width: "100%",
                    }}
                  >
                    <FileDownloadOutlinedIcon sx={{ pr: "8px", fontSize: "18px" }} />
                    <Typography sx={{ fontSize: "14px" }}>Download Tile Preview</Typography>
                  </Button>
                ) : (
                  <Box>No download face image available</Box>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ width: "100%", overflow: "auto" }}>
                <Box sx={{}}>
                  <Box
                    sx={{
                      background: "#3aad6c",
                      borderRadius: "5px",
                      color: "#fff",
                      display: "flex",
                      mb: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexBasis: "50%",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src="/static/icons/icon-leaf.svg"
                        alt=""
                        width={15}
                        height={15}
                        style={{
                          padding: "6px 0 3px 10px",
                        }}
                      />
                      <Typography
                        sx={{
                          p: "6px 6px 6px 10px",
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                      >
                        Recycled Content
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        p: "6px 6px 6px 10px",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      Up to 40%
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Typography sx={{ fontSize: "26px", fontWeight: "bold" }}>
                      {props.productOnly.data.attributes?.Name} - {props.productOnly.data.attributes?.Code}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "#14b9b9",
                      mb: "20px",
                    }}
                  >
                    <NumericFormat value={props.productOnly.data.attributes?.Price} decimalScale={0} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} suffix="/m²" />
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    borderBottomWidth: "2px",
                    borderColor: "#000",
                  }}
                />
                <Box>
                  {[
                    {
                      title: "Code",
                      value: props.productOnly.data.attributes?.Code,
                    },
                    {
                      title: "Product Varian",
                      value:
                        props.motif.data.attributes.motif.data.attributes.product_varians?.data?.length > 0
                          ? props.motif.data.attributes.motif.data.attributes.product_varians?.data.map((item: any) => item.attributes.Varian).join(", ")
                          : "-",
                    },
                    {
                      title: "Dimension",
                      value: props.productOnly.data.attributes?.tile_dimension.data?.attributes?.Dimension,
                    },
                    {
                      title: "Face",
                      value: props.productOnly.data.attributes?.N_Face,
                    },
                    {
                      title: "Colour",
                      value: props.productOnly.data.attributes?.Motif_Color,
                    },
                    {
                      title: "Finish",
                      value: props.productOnly.data.attributes?.surface_finish.data?.attributes?.Name,
                    },
                    {
                      title: "Rectified Edge",
                      value: props.productOnly.data.attributes?.Rectified.toString() == "true" ? "Yes" : "No",
                    },
                    {
                      title: "Shade Variation",
                      value: props.productOnly.data.attributes?.Shade_Variation || "-",
                    },
                    {
                      title: "Suitability",
                      value: props.productOnly.data.attributes?.tile_suitabilities?.data?.map((item: any) => item.attributes.Suitability)?.join(", ") || "-",
                    },
                    {
                      title: "Tiles per Box",
                      value: props.productOnly.data.attributes?.Tile_Per_Box,
                    },
                    {
                      title: "Square Meter per Box",
                      value: props.productOnly.data.attributes?.SQM_Box + "/m²",
                    },
                  ].map((item, index) => {
                    return (
                      <>
                        <Box
                          sx={{
                            display: "flex",
                            width: "100%",
                          }}
                          key={index}
                        >
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: "400",
                              flexBasis: "50%",
                              p: "12px 10px 8px",
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              flexBasis: "50%",
                              fontWeight: "bold",
                              p: "12px 10px 8px",
                              textTransform: "capitalize",
                            }}
                          >
                            {item.value}
                          </Typography>
                        </Box>
                        <Divider
                          sx={{
                            borderBottomWidth: "2px",
                            borderColor: "#000",
                          }}
                        />
                      </>
                    );
                  })}
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        width: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "400",
                          flexBasis: "50%",
                          p: "12px 10px 8px",
                        }}
                      >
                        {"Technical Specification"}
                      </Typography>
                      <Box
                        sx={{
                          flexBasis: "50%",
                        }}
                      >
                        <ModulSpec motif={props?.motif?.data.attributes} name={props.productOnly.data.attributes} />
                      </Box>
                    </Box>
                    <Divider
                      sx={{
                        borderBottomWidth: "2px",
                        borderColor: "#000",
                      }}
                    />
                  </>

                  <>
                    <Box
                      sx={{
                        display: "flex",
                        width: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "400",
                          flexBasis: "50%",
                          p: "12px 10px 8px",
                        }}
                      >
                        {"Packing Details"}
                      </Typography>
                      <Box
                        sx={{
                          flexBasis: "50%",
                        }}
                      >
                        <ModulPacking motif={props?.motif?.data.attributes} name={props.productOnly.data.attributes} />
                      </Box>
                    </Box>
                    <Divider
                      sx={{
                        borderBottomWidth: "2px",
                        borderColor: "#000",
                      }}
                    />
                  </>
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        width: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "400",
                          flexBasis: "50%",
                          p: "12px 10px 8px",
                        }}
                      >
                        {"Stock"}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          flexBasis: "50%",
                          my: "8px",
                        }}
                      >
                        <CircleIcon color={props.productOnly.data.attributes?.IsInStock ? "success" : "error"} fontSize="inherit" sx={{ mt: "2px" }} />
                        <Typography
                          sx={{
                            fontSize: "16px",
                            fontWeight: 700,
                            ml: 1,
                          }}
                        >
                          {props.productOnly.data.attributes?.IsInStock ? "Available" : "Not Available"}
                        </Typography>
                      </Box>
                    </Box>
                  </>

                  <Box
                    sx={{
                      bgcolor: "#f8f8f8",
                      border: "1px solid #999",
                      borderRadius: "1px",
                      p: "20px",
                      mt: "20px",
                      overflow: "auto",
                      height: "100%",
                    }}
                  >
                    <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>Order tiles now</Typography>
                    <TableContainer
                      component="div"
                      sx={{
                        overflow: "auto",
                      }}
                    >
                      <Table
                        sx={{
                          width: "100%",
                          fontSize: "14px",
                          borderCollapse: "collapse",
                          mt: "20px",
                        }}
                        aria-label="simple table"
                      >
                        {isMobile ? (
                          <>
                            <TableRow>
                              <TableCell>Required:</TableCell>
                              <TableCell>
                                <Controller
                                  // @ts-ignore
                                  name={"quantity"}
                                  control={control}
                                  render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
                                    <TextField helperText={error ? error.message : null} size="small" error={!!error} onChange={onChange} type="number" fullWidth label={"Box"} variant="outlined" sx={{ width: "100px" }} />
                                  )}
                                />
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Coverage:</TableCell>
                              <TableCell>
                                <NumericFormat value={coverage} decimalScale={0} displayType={"text"} decimalSeparator={","} prefix={"Rp. "} />
                                {" /m²"}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Box Price:</TableCell>
                              <TableCell>
                                <NumericFormat
                                  value={props.productOnly.data.attributes.SQM_Box * props.productOnly.data.attributes.Price}
                                  decimalScale={0}
                                  displayType={"text"}
                                  thousandSeparator={"."}
                                  decimalSeparator={","}
                                  prefix={"Rp. "}
                                />
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Total Price:</TableCell>
                              <TableCell>
                                <NumericFormat value={totalPrice} decimalScale={0} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} prefix={"Rp. "} />
                              </TableCell>
                            </TableRow>
                          </>
                        ) : (
                          <>
                            <TableHead>
                              <TableRow>
                                <TableCell sx={{ minWidth: "19%" }}>Required</TableCell>
                                <TableCell sx={{ minWidth: "19%" }} align="right">
                                  Coverage
                                </TableCell>
                                <TableCell sx={{ minWidth: "19%" }} align="right">
                                  Box Price
                                </TableCell>
                                <TableCell sx={{ minWidth: "19%" }} align="right">
                                  Total Price
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              <TableRow>
                                <TableCell component="th" scope="row">
                                  <Controller
                                    // @ts-ignore
                                    name={"quantity"}
                                    control={control}
                                    render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
                                      <TextField
                                        helperText={error ? error.message : null}
                                        size="small"
                                        error={!!error}
                                        onChange={(event) => {
                                          const inputValue = event.target.value;
                                          // @ts-ignore
                                          if (inputValue >= 0) {
                                            onChange(inputValue);
                                          }
                                        }}
                                        type="number"
                                        fullWidth
                                        label={"Box"}
                                        variant="outlined"
                                        sx={{ width: "100px" }}
                                      />
                                    )}
                                  />
                                </TableCell>
                                <TableCell align="right">
                                  <NumericFormat value={coverage} decimalScale={3} displayType={"text"} thousandSeparator={true} prefix={"Rp. "} />
                                  {" /m²"}
                                </TableCell>
                                <TableCell align="right">
                                  <NumericFormat
                                    value={props.productOnly.data.attributes.SQM_Box * props.productOnly.data.attributes.Price}
                                    decimalScale={0}
                                    displayType={"text"}
                                    thousandSeparator={"."}
                                    decimalSeparator={","}
                                    prefix={"Rp. "}
                                  />
                                </TableCell>
                                <TableCell align="right">
                                  <NumericFormat value={totalPrice} decimalScale={0} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} prefix={"Rp. "} />
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </>
                        )}
                      </Table>
                    </TableContainer>
                    <Button
                      variant="contained"
                      sx={{
                        mt: "20px",
                        bgcolor: "#111",
                        width: "100%",
                        borderRadius: "50px",
                        fontSize: "16px",
                        "&:hover": {
                          bgcolor: "#222",
                        },
                      }}
                      onClick={handleSubmit(onSubmit)}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
