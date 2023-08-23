import React from "react";

import { Box, Button, Grid, Link, Stack, Typography, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Divider, useMediaQuery, useTheme } from "@mui/material";
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
  const imgFileUrl = props.productOnly.data.attributes.Image_Tile_Face.data[0].attributes.url;
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<IFormInputs>();
  const name = watch("code");
  console.log(watch());

  const downloadFileAtUrl = () => {
    if (imgFileUrl) {
      fetch(imgFileUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const blobURL = window.URL.createObjectURL(new Blob([blob]));
          const fileName = imgFileUrl.split("/").pop();
          const aTag = document.createElement("a");
          aTag.href = blobURL;
          aTag.setAttribute("download", fileName);
          document.body.appendChild(aTag);
          aTag.click();
          aTag.remove();
        });
    }
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [coverage, setCoverage] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(props);
    console.log("somethingapsdjasasdasdpopajsdoasodjasp");
    console.log(props.productOnly.data.attributes.Image_Tile_Face.data[0].attributes.formats.thumbnail.url);
    dispatch(
      addToCart({
        id: props.product.data.id,
        code: "gs12370",
        name: props.productOnly.data.attributes.Name,
        dimension: props.productOnly.data.attributes.tile_dimension.data.attributes.Dimension,
        imageSrc: props.productOnly.data.attributes.Image_Tile_Face.data[0].attributes.formats.thumbnail.url,
        quantity: 5,
        pricePerBox: 300000,
        priceTotal: 1500000,
      })
    );
  };

  React.useEffect(() => {
    // @ts-ignore
    setCoverage(name * 1.44);
  }, [name]);

  React.useEffect(() => {
    // @ts-ignore
    setTotalPrice(name * 1.44 * 153000);
  }, [name]);

  React.useState();
  const dispatch = useDispatch();

  return (
    <>
      <Box sx={{ position: "relative", pt: "20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            py: "30px",
            textAlign: "center",
            backgroundColor: "#f5f5f5",
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
      <Box sx={{ height: "30px", backgroundColor: "#f5f5f5" }} />
      <Box
        className="product-highlight"
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "#f5f5f5",
        }}
      >
        <Grid
          container
          spacing={0}
          sx={{
            maxWidth: "1200px",
            padding: { xs: "20px 15px", md: "20px 30px" },
            margin: "0 auto",
            width: "100%",
            height: "100%",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              pl: { xs: "0", md: "22px" },
            }}
          >
            <Zoom>
              <Box
                height={props.productOnly.data.attributes?.tile_dimension.data.attributes.Dimension == "60x60cm" ? "auto" : "600px"}
                sx={{
                  width: { xs: "100%", md: "75%" },
                  maxWidth: "100%",
                  minHeight: "427.500px",
                  position: "relative",
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
                    }}
                  />
                ) : (
                  <Box>No tile face image available</Box>
                )}
              </Box>
            </Zoom>
            <Box sx={{ my: "20px", width: { xs: "100%", md: "75%" } }}>
              {imgFileUrl ? (
                <Link
                  onClick={() => {
                    downloadFileAtUrl();
                  }}
                  underline="none"
                  download={imgFileUrl}
                  sx={{
                    bgcolor: "#000",
                    color: "#fff",
                    borderRadius: "5px",
                    p: "8px 8px 8px 8px",
                    fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";',
                    fontSize: "14px",
                    mb: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <FileDownloadOutlinedIcon sx={{ pr: "8px", fontSize: "18px" }} />
                  Download Tile Preview
                </Link>
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
                  <NumericFormat value={props.productOnly.data.attributes?.Price} decimalScale={3} displayType={"text"} thousandSeparator={true} prefix={"Rp. "} />
                  /m²
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
                      props.motif.data.attributes.motif.data.attributes.product_varians?.data?.length > 0 ? props.motif.data.attributes.motif.data.attributes.product_varians?.data.map((item: any) => item.attributes.Varian).join(", ") : "-",
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
                    value: props.productOnly.data.attributes?.Rectified.toString(),
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
                                name={"quantityBox"}
                                control={control}
                                render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
                                  <TextField
                                    helperText={error ? error.message : null}
                                    size="small"
                                    error={!!error}
                                    onChange={onChange}
                                    type="number"
                                    fullWidth
                                    label={"Box"}
                                    variant="outlined"
                                    sx={{ width: "100px" }}
                                  />
                                )}
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Coverage:</TableCell>
                            <TableCell>
                              <NumericFormat value={coverage} decimalScale={3} displayType={"text"} thousandSeparator={true} prefix={"Rp. "} />
                              {" /m²"}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Box Price:</TableCell>
                            <TableCell>
                              <NumericFormat value={1.44 * props.productOnly.data.attributes.Price} decimalScale={3} displayType={"text"} thousandSeparator={true} prefix={"Rp. "} />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Total Price:</TableCell>
                            <TableCell>
                              <NumericFormat value={totalPrice} decimalScale={3} displayType={"text"} thousandSeparator={true} prefix={"Rp. "} />
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
                                  name={"quantityBox"}
                                  control={control}
                                  render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
                                    <TextField
                                      helperText={error ? error.message : null}
                                      size="small"
                                      error={!!error}
                                      onChange={onChange}
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
                                <NumericFormat value={1.44 * props.productOnly.data.attributes.Price} decimalScale={3} displayType={"text"} thousandSeparator={true} prefix={"Rp. "} />
                              </TableCell>
                              <TableCell align="right">
                                <NumericFormat value={totalPrice} decimalScale={3} displayType={"text"} thousandSeparator={true} prefix={"Rp. "} />
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </>
                      )}
                    </Table>
                  </TableContainer>
                  <Typography>Di bawah ini form</Typography>
                  id: number; code: string; name: string; dimension: string; imageSrc: string; quantity: number; pricePerBox: number; priceTotal: number;
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={1} {...register("id")} />
                    <input defaultValue={"adad"} {...register("code")} />
                    <input defaultValue={"adsasd"} {...register("name")} />
                    <input defaultValue={"adasdads"} {...register("dimension")} />
                    <input defaultValue={"adasdasdd"} {...register("imageSrc")} />
                    <input defaultValue={1} {...register("quantity")} />
                    <input defaultValue={100} {...register("pricePerBox")} />
                    <input defaultValue={1000} {...register("priceTotal")} />
                    <input type="submit" />
                  </form>
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
                    onClick={() => {
                      dispatch(increment());
                    }}
                  >
                    Add to Cart
                  </Button>
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
                    onClick={() => {
                      dispatch(
                        addToCart({
                          id: 3,
                          code: "gs12370",
                          name: "Lasa Bianca",
                          dimension: "30x60cm",
                          imageSrc: "https://strapi-rezero-space.sgp1.digitaloceanspaces.com/a1b4ac4d518697d8ae6d688493fbdbad.webp",
                          quantity: 5,
                          pricePerBox: 300000,
                          priceTotal: 1500000,
                        })
                      );
                    }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
