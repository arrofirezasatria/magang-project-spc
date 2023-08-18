import React from "react";
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import {
  Box,
  Button,
  Grid,
  Link,
  List,
  Stack,
  Typography,
  TextField,
  Table,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
  Modal,
  Chip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AppsBar from "@components/AppsBar";
import { addToCart } from "store/cartSlice";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AltProductRanges from "@components/pages/range/altProductRanges";
import ModulSpec from "@components/pages/range/ModulSpec";
import ModulPacking from "@components/pages/range/modulPacking";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import SliderImage from "@components/pages/range/SliderImage";
import { NumericFormat } from "react-number-format";
import CircleIcon from "@mui/icons-material/Circle";

import { packingDetailsData } from "data/packingDetailsData";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "store/counterSlice";

interface IFormInputs {
  name: string;
  code: string;
  quantity: number;
  coverage: number;
  showAge: boolean;
  age: number;
}

export default function Page(props: any) {
  const dispatch = useDispatch();

  // const imgFileUrl =
  //   props.productOnly.data.attributes?.Image_Tile_Face?.data[0]?.attributes
  //     ?.url;
  const downloadFileAtUrl = () => {
    fetch(
      props.productOnly.data.attributes?.Image_Tile_Face.data[0].attributes?.url
    )
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName =
          props.productOnly.data.attributes?.Image_Tile_Face.data[0].attributes?.url
            .split("/")
            .pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const p = data.attributes;
  const data = props.motif.data.attributes.motif.data.attributes;
  const products =
    props.product.data.attributes.motif.data.attributes.products.data; // array

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<IFormInputs>();

  // Callback version of watch.  It's your responsibility to unsubscribe when done.
  // React.useEffect(() => {
  //   const subscription = watch((value, { name, type }) =>
  //     console.log(value, name, type)
  //   );
  //   return () => subscription.unsubscribe();
  // }, [watch]);

  console.log(watch());

  // @ts-ignore
  const name = watch("quantityBox");

  // const [Evalue, setEvalue] = React.useState("");
  const [coverage, setCoverage] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    // @ts-ignore
    setCoverage(name * 1.44);
  }, [name]);

  React.useEffect(() => {
    // @ts-ignore
    setTotalPrice(name * 1.44 * 153000);
  }, [name]);

  React.useState();

  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <>
      <>
        <Typography>{packingDetailsData[1].name}</Typography>
        <Box
          className="hero-container"
          sx={{
            height: "70vh",
            minHeight: "400px",
            maxHeight: "680px",
            width: "100%",
            // bgcolor: "#C4C4C4",
            color: "white",
          }}
        >
          <Box sx={{ height: "100%", position: "relative" }}>
            <Image
              src={data.Image_Hero_2880x1138px?.data.attributes.url}
              // src={
              //   "/static/images/shelf-lay_white_crop.jpg__2880x0_q85_subsampling-2.jpg"
              // }
              fill
              alt="hero"
              style={{
                objectFit: "cover",
              }}
            />
            <Box
              className="transparent-bg"
              sx={{
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.1)",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
              }}
            >
              <Box
                sx={{
                  color: "#FFF",
                  mx: "auto",
                  position: "absolute",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "40px", md: "70px" },
                    fontWeight: "600",
                    letterSpacing: "5px",
                    mb: "1rem",
                    textTransform: "uppercase",
                    textShadow: "0 0 5px rgba(0,0,0,.3)",
                  }}
                >
                  {data.Name}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src="/static/icons/range-hero-colour-icon.svg"
                    alt="Colors Icon"
                    width={30}
                    height={30}
                    style={{}}
                  />
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "18px", md: "25px" },
                      fontWeight: "400",
                      mx: "5px",
                      textShadow: "0 0 5px rgba(0,0,0,.3)",
                    }}
                  >
                    {data.N_Color}
                  </Typography>

                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "18px", md: "25px" },
                      fontWeight: "400",
                      mr: "20px",
                      textShadow: "0 0 5px rgba(0,0,0,.3)",
                    }}
                  >
                    Colors
                  </Typography>

                  <Image
                    src="/static/icons/range-hero-size-icon.svg"
                    alt="Sizes Icon"
                    width={30}
                    height={30}
                    style={{
                      marginLeft: "20px",
                    }}
                  />
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "18px", md: "25px" },
                      fontWeight: "400",
                      mx: "5px",
                      textShadow: "0 0 5px rgba(0,0,0,.3)",
                    }}
                  >
                    {data.N_Dimension}
                  </Typography>

                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "18px", md: "25px" },
                      fontWeight: "400",
                      mr: "20px",
                      textShadow: "0 0 5px rgba(0,0,0,.3)",
                    }}
                  >
                    Sizes
                  </Typography>

                  <Image
                    src="/static/icons/range-hero-finish-icon.svg"
                    alt="Finish Icon"
                    width={30}
                    height={30}
                    style={{
                      marginLeft: "20px",
                    }}
                  />
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "18px", md: "25px" },
                      fontWeight: "400",
                      mx: "5px",
                      textShadow: "0 0 5px rgba(0,0,0,.3)",
                    }}
                  >
                    {data.N_Finish}
                  </Typography>

                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "18px", md: "25px" },
                      fontWeight: "400",
                      textShadow: "0 0 5px rgba(0,0,0,.3)",
                    }}
                  >
                    Finish
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="product-wrap-white" sx={{ display: "flex" }}>
          <Box
            className="product-container"
            sx={{
              maxWidth: "1200px",
              padding: { xs: "20px 15px", md: "20px 30px" },
              margin: "0 auto",
            }}
          >
            <Box className="nav" sx={{ display: "block", mb: "30px" }}>
              <List
                sx={{
                  listStyleType: "disc",
                  pl: { xs: 0, md: 4 },
                  display: "flex",
                  alignItems: "baseline",
                  color: "#999",
                  fontWeight: "medium",
                  fontSize: "16px",
                  fontFamily:
                    '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";',
                }}
              >
                <Link href="#" underline="always" sx={{ color: "#999" }}>
                  Product
                </Link>
                <ArrowForwardIosIcon sx={{ fontSize: "10px", mx: "6px" }} />
                <Link href="#" underline="always" sx={{ color: "#999" }}>
                  Product Style
                </Link>
                <ArrowForwardIosIcon sx={{ fontSize: "10px", mx: "6px" }} />
                <Link underline="none" sx={{ color: "#999" }}>
                  Stone
                </Link>
              </List>
            </Box>
            <Box>
              <>
                <Grid
                  container
                  spacing={6}
                  sx={{ p: { xs: "20px 0x", md: "20px 30px" } }}
                >
                  <Grid item xs={12} md={6} sx={{}}>
                    <Box
                      sx={{ textTransform: "uppercase", letterSpacing: "2px" }}
                    >
                      <Typography
                        component="h2"
                        sx={{
                          mb: "10px",
                          fontSize: "32px",
                          fontWeight: "bold",
                        }}
                      >
                        {props.product.data.attributes.Name}
                      </Typography>
                      <Typography
                        sx={{ fontSize: "18px", fontWeight: "medium" }}
                      >
                        {data.tile_type.data === null
                          ? "Porcelain Tiles"
                          : data.tile_type.data.attributes.Type === "Sun Glazed"
                          ? "Sun Glazed Ceramic Tiles"
                          : "Porcelain Tiles"}
                      </Typography>
                      <Typography
                        sx={{
                          mb: "10px",
                          fontSize: "18px",
                          fontWeight: "medium",
                        }}
                      >
                        FLOOR & WALL TILES
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={0}
                        sx={{
                          mt: "15px",
                          display: "flex",
                          fontFamily:
                            '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";',
                          fontSize: "12px",
                          fontWeight: "medium",
                          flexWrap: "wrap",
                          "& .MuiLink-root": {
                            mb: "5px",
                            mr: "5px",
                            bgcolor: "grey",
                            border: "1px solid grey",
                            color: "#fff",
                            p: "6px 6px",
                            borderRadius: "5px",
                          },
                          "& .white-link": {
                            mb: "5px",
                            mr: "5px",
                            bgcolor: "#fff",
                            border: "1px solid #000",
                            color: "#000",
                            p: "6px 6px",
                            borderRadius: "5px",
                          },
                        }}
                      >
                        {props.motif.data.attributes.motif.data.attributes.product_varians.data.map(
                          // @ts-ignore
                          (item, index) => {
                            return (
                              <Link href="#" underline="none" key={index}>
                                {item.attributes.Varian}
                              </Link>
                            );
                          }
                        )}
                        {props.motif.data.attributes.motif.data.attributes.style_motifs.data.map(
                          // @ts-ignore
                          (item, index) => {
                            return (
                              <Link
                                href="#"
                                underline="none"
                                key={index}
                                className="white-link"
                              >
                                {item.attributes.Style}
                              </Link>
                            );
                          }
                        )}

                        <Link href="#" underline="none" className="white-link">
                          {
                            props.productOnly.data.attributes.surface_finish
                              .data.attributes.Name
                          }
                        </Link>
                        <Link href="#" underline="none" className="white-link">
                          {props.productOnly.data.attributes.tile_color.data
                            .attributes.Name + " color"}
                        </Link>
                      </Stack>
                    </Box>

                    <Box
                      sx={{
                        borderTop: "2px solid #000",
                        mt: "15px",
                        pt: "20px",
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "16px", fontWeight: "medium" }}
                      >
                        {data.Description === null
                          ? "Minim fugiat culpa culpa veniam do tempor aliquip aliquip id amet qui proident. Nostrud sunt aliquip ipsum et voluptate commodo. Ullamco sint quis aliquip do nisi. Do culpa duis deserunt adipisicing. Officia culpa voluptate fugiat veniam laboris excepteur duis. Sunt voluptate reprehenderit tempor aliqua reprehenderit. Culpa deserunt qui sint eiusmod."
                          : data.Description}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={0}
                        sx={{
                          mt: "15px",
                          display: "flex",
                          position: "relative",
                          flexWrap: "wrap",
                        }}
                      >
                        {/* <Image
                          alt=""
                          src="https://www.johnson-tiles.com/media/filer_public/5d/bc/5dbc78a2-c345-4e00-8622-74de46632280/made_in_the_uk_icon.svg"
                          width={80}
                          height={80}
                          style={{
                            margin: "0 12px 12px 0",
                          }}
                        /> */}
                        {/* <Image
                          alt=""
                          src="https://www.johnson-tiles.com/media/filer_public/98/38/983888a0-b4fa-433b-aa1d-257ca557a8d3/20_recycled_content_icon.svg"
                          width={80}
                          height={80}
                          style={{
                            margin: "0 12px 12px 0",
                          }}
                        />
                        <Image
                          alt=""
                          src="https://www.johnson-tiles.com/media/filer_public/e0/d8/e0d849ce-c25b-4e88-9b4c-4dcb9fe2066e/epd_icon.svg"
                          width={80}
                          height={80}
                          style={{
                            margin: "0 12px 12px 0",
                          }}
                        />
                        <Image
                          alt=""
                          src="https://www.johnson-tiles.com/media/filer_public/e3/d0/e3d0d3a4-4eca-4531-bcf4-1c43de0adf32/36_slip_rating_4s_icon.svg"
                          width={80}
                          height={80}
                          style={{
                            margin: "0 12px 12px 0",
                          }}
                        />
                        <Image
                          alt=""
                          src="https://www.johnson-tiles.com/media/filer_public/68/9f/689f3e2c-4bac-4841-9d2c-fe4d36644b7f/neutral_colour_palette_icon.svg"
                          width={80}
                          height={80}
                          style={{
                            margin: "0 12px 12px 0",
                          }}
                        /> */}
                      </Stack>
                    </Box>

                    <Box
                      sx={{
                        borderTop: "2px solid #000",
                        mt: "13px",
                        pt: "20px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box>
                        <Box sx={{ mb: "10px" }}>
                          <Link
                            href="#"
                            underline="none"
                            sx={{
                              bgcolor: "#000",
                              color: "#fff",
                              borderRadius: "5px",
                              p: "6px 10px 6px 10px",
                              fontFamily:
                                '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";',
                              fontSize: "14px",
                              mb: "5px",
                              display: "flex",
                              justifyContent: "center",
                              alignItem: "center",
                            }}
                          >
                            <FileDownloadOutlinedIcon
                              sx={{ pr: "8px", fontSize: "18px" }}
                            />
                            Download Range Overview
                          </Link>
                        </Box>
                        <Stack direction="row" spacing={1}>
                          <FacebookIcon />
                          <TwitterIcon />
                          <PinterestIcon />
                          <LinkedInIcon />
                        </Stack>
                      </Box>
                      <Box>
                        <Link href="#">
                          {/* <Image
                            alt=""
                            src="https://www.johnson-tiles.com/static/img/outlet-buy.svg"
                            width={0}
                            height={0}
                            style={{ width: "130px", height: "auto" }}
                          /> */}
                        </Link>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ pb: "50px" }}>
                    <Box
                      sx={{
                        width: "100%",
                        height: { xs: "480px", md: "715px" },
                        position: "relative",
                      }}
                    >
                      <SliderImage
                        productOnly={props?.productOnly?.data.attributes}
                      />
                      {/* <Image src={props?.productOnly?.data.attributes?.Image_Ambience?.data[0].attributes.formats.large.url} fill alt="hero" style={{ objectFit: "cover" }} /> */}
                    </Box>
                    {/* <Typography sx={{ color: "#999", mt: "10px", fontWeight: "" }}>{props.product.data.attributes.Name} 120x60cm</Typography> */}
                  </Grid>
                </Grid>
              </>
            </Box>

            <Box sx={{ display: "none" }}>
              <AppsBar />
              <Box>{data.attributes?.Slug}</Box>
              <Typography>Product name : {data.attributes?.Name}</Typography>
              <Typography>Price : {data.attributes?.Price}</Typography>
              <Button
                onClick={() => {
                  console.log("somethinsadasd");
                  dispatch(increment());
                }}
              >
                add to Cart
              </Button>
            </Box>
            {/* <Box
              className="product-highlight"
              sx={{
                display: "flex",
                justifyContent: "center",
                bgcolor: "#f5f5f5",
                p: "20px",
              }}
            >
              <Grid container spacing={6}> */}
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
                <Grid item xs={12} md={6} sx={{ pl: { xs: "0", md: "22px" } }}>
                  <Zoom>
                    <Box
                      sx={{
                        width: { xs: "100%", md: "75%" },
                        height: "427.500px",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={
                          props.productOnly.data.attributes?.Image_Tile_Face
                            .data[0].attributes?.formats.large.url
                        }
                        fill
                        alt=""
                        style={{
                          borderRadius: "0px",
                          background: "#e0e0e0",
                          boxShadow:
                            "5px 5px 10px #cacaca, -5px -5px 10px #f6f6f6",
                        }}
                      />
                    </Box>
                  </Zoom>
                  <Box sx={{ my: "20px", width: { xs: "100%", md: "75%" } }}>
                    <Link
                      onClick={() => {
                        // @ts-ignore
                        // downloadFileAtUrl(imgFileUrl);
                      }}
                      underline="none"
                      download={
                        props.productOnly.data.attributes?.Image_Tile_Face
                          .data[0].attributes?.url
                      }
                      sx={{
                        bgcolor: "#000",
                        color: "#fff",
                        borderRadius: "5px",
                        p: "8px 8px 8px 8px",
                        fontFamily:
                          '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";',
                        fontSize: "14px",
                        mb: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItem: "center",
                        cursor: "pointer",
                      }}
                    >
                      <FileDownloadOutlinedIcon
                        sx={{ pr: "8px", fontSize: "18px" }}
                      />
                      Download Tile Preview
                    </Link>
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
                        <Typography
                          sx={{ fontSize: "26px", fontWeight: "bold" }}
                        >
                          {props.productOnly.data.attributes?.Name} -{" "}
                          {props.productOnly.data.attributes?.Code}
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
                        <NumericFormat
                          value={153000}
                          decimalScale={3}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"Rp. "}
                        />
                        /m²
                      </Typography>
                      {/* Rp. {props.productOnly.data.attributes?.Price} */}
                    </Box>
                    <Divider
                      sx={{
                        borderBottomWidth: "2px",
                        borderColor: "#000",
                      }}
                    />
                    <Box sx={{}}>
                      {[
                        {
                          title: "Code",
                          value: props.productOnly.data.attributes?.Code,
                        },
                        {
                          title: "Product Varian",
                          value: props.motif.data.attributes.motif.data
                            .attributes.product_varians?.data[0]
                            ? props.motif.data.attributes.motif.data.attributes
                                .product_varians?.data[0].attributes.Varian
                            : "-",
                        },
                        {
                          title: "Dimension",
                          value:
                            props.productOnly.data.attributes?.tile_dimension
                              .data?.attributes?.Dimension,
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
                          value:
                            props.productOnly.data.attributes?.surface_finish
                              .data?.attributes?.Name,
                        },
                        {
                          title: "Rectified Edge",
                          value:
                            props.productOnly.data.attributes?.Rectified.toString(),
                        },
                        {
                          title: "Shade Variation",
                          value:
                            props.productOnly.data.attributes?.Shade_Variation,
                        },
                        {
                          title: "Suitability",
                          value:
                            props.productOnly.data.attributes
                              ?.tile_suitabilities?.data[0].attributes
                              ?.Suitability,
                        },
                        {
                          title: "Tiles per Box",
                          value:
                            props.productOnly.data.attributes?.Tile_Per_Box,
                        },
                        {
                          title: "Square Meter per Box",
                          value:
                            props.productOnly.data.attributes?.SQM_Box + "/m²",
                        },
                        // {
                        //   title: "Technical Specification",
                        //   value: "Glazed Ceramic",
                        // },
                        // { title: "Packing Details", value: "80.00" },
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
                            {/* <Button
                              sx={{
                                // backgroundColor: "black",
                                border: "2px solid black",
                                my: "8px",
                                height: "28px",
                                typography: {
                                  fontWeight: "medium", // Change the fontWeight value as needed
                                  color: "black",
                                  letterSpacing: 1, // Use a number for letter spacing
                                  fontSize: "14px",
                                  textTransform: "lowercase",
                                },
                              }}
                            >
                              click for full specification
                            </Button> */}
                            {/* <ModulSpec /> */}
                            <ModulSpec motif={props?.motif?.data.attributes} />
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
                            {/* <Button
                            sx={{
                              // backgroundColor: "black",
                              border: "2px solid black",
                              my: "8px",
                              height: "28px",
                              typography: {
                                fontWeight: "medium", // Change the fontWeight value as needed
                                color: "black",
                                letterSpacing: 1, // Use a number for letter spacing
                                fontSize: "14px",
                                textTransform: "lowercase",
                              },
                            }}
                          >
                            click for full packing details
                          </Button> */}
                            <ModulPacking
                              motif={props?.motif?.data.attributes}
                            />
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
                        <Divider
                          sx={{
                            borderBottomWidth: "2px",
                            borderColor: "#000",
                          }}
                        />
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
                            <CircleIcon
                              color={
                                props.productOnly.data.attributes?.IsInStock
                                  ? "success"
                                  : "error"
                              }
                              fontSize="inherit"
                              sx={{ mt: "2px" }}
                            />
                            <Typography
                              sx={{
                                fontSize: "16px",
                                fontWeight: 700,
                                ml: 1,
                              }}
                            >
                              {props.productOnly.data.attributes?.IsInStock
                                ? "Available"
                                : "Not Available"}
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
                        <Typography
                          sx={{ fontSize: "22px", fontWeight: "bold" }}
                        >
                          Order tiles now
                        </Typography>
                        <Typography
                          sx={{ fontSize: "22px", fontWeight: "bold" }}
                        >
                          Order tiles now
                        </Typography>
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
                                      render={({
                                        field: { onChange, value },
                                        fieldState: { error },
                                        formState,
                                      }) => (
                                        <TextField
                                          helperText={
                                            error ? error.message : null
                                          }
                                          size="small"
                                          error={!!error}
                                          onChange={onChange}
                                          type="number"
                                          // value={}
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
                                    <NumericFormat
                                      value={coverage}
                                      decimalScale={3}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={"Rp. "}
                                    />
                                    {" /m²"}
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Box Price:</TableCell>
                                  <TableCell>
                                    <NumericFormat
                                      value={
                                        1.44 *
                                        props.productOnly.data.attributes.Price
                                      }
                                      decimalScale={3}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={"Rp. "}
                                    />
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Total Price:</TableCell>
                                  <TableCell>
                                    <NumericFormat
                                      value={totalPrice}
                                      decimalScale={3}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={"Rp. "}
                                    />
                                  </TableCell>
                                </TableRow>
                              </>
                            ) : (
                              <>
                                <TableHead>
                                  <TableRow>
                                    <TableCell sx={{ minWidth: "19%" }}>
                                      Required
                                    </TableCell>
                                    <TableCell
                                      sx={{ minWidth: "19%" }}
                                      align="right"
                                    >
                                      Coverage
                                    </TableCell>
                                    <TableCell
                                      sx={{ minWidth: "19%" }}
                                      align="right"
                                    >
                                      Box Price
                                    </TableCell>
                                    <TableCell
                                      sx={{ minWidth: "19%" }}
                                      align="right"
                                    >
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
                                        render={({
                                          field: { onChange, value },
                                          fieldState: { error },
                                          formState,
                                        }) => (
                                          <TextField
                                            helperText={
                                              error ? error.message : null
                                            }
                                            size="small"
                                            error={!!error}
                                            onChange={onChange}
                                            type="number"
                                            // value={}
                                            fullWidth
                                            label={"Box"}
                                            variant="outlined"
                                            sx={{ width: "100px" }}
                                          />
                                        )}
                                      />
                                    </TableCell>
                                    <TableCell align="right">
                                      <NumericFormat
                                        value={coverage}
                                        decimalScale={3}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"Rp. "}
                                      />
                                      {" /m²"}
                                    </TableCell>
                                    <TableCell align="right">
                                      <NumericFormat
                                        value={
                                          1.44 *
                                          props.productOnly.data.attributes
                                            .Price
                                        }
                                        decimalScale={3}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"Rp. "}
                                      />
                                    </TableCell>
                                    <TableCell align="right">
                                      <NumericFormat
                                        value={totalPrice}
                                        decimalScale={3}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"Rp. "}
                                      />
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
                          onClick={() => {
                            dispatch(increment());
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
          </Box>
        </Box>
        <Box
          className="product-wrap-grey"
          // sx={{ display: "flex", bgcolor: "#F5F5F5" }}
          sx={{ display: "none", bgcolor: "#F5F5F5" }}
        >
          <Box
            className="product-container"
            sx={{
              maxWidth: "1200px",
              padding: { xs: "20px 15px", md: "20px 30px" },
              margin: "0 auto",
              width: "100%",
            }}
          >
            <Box sx={{ py: "40px", px: { xs: 0, md: 4 } }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <Typography
                  component="h2"
                  sx={{
                    fontSize: "27px",
                    fontWeight: "bold",
                    mb: "15px",
                    letterSpacing: "2px",
                  }}
                >
                  THE PRODUCTS
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: "15px",
                  pb: "30px",
                  position: "relative",
                  "& .MuiTypography-root": {
                    fontSize: "16px",
                    fontWeight: "medium",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mx: "20px",
                    position: "relative",
                  }}
                >
                  {/* <Image
                    src="/static/icons/icon-colour-black.svg"
                    alt="Colors Icon"
                    width={25}
                    height={25}
                  /> */}
                  <Typography
                    variant="h2"
                    sx={{
                      mx: "5px",
                    }}
                  >
                    {/* {N_Color} */}
                  </Typography>

                  <Typography variant="h2" sx={{}}>
                    Colors
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mx: "20px",
                    position: "relative",
                  }}
                >
                  {/* <Image
                    src="/static/icons/icon-size-black.svg"
                    alt="Sizes Icon"
                    width={25}
                    height={25}
                  /> */}
                  <Typography
                    variant="h2"
                    sx={{
                      mx: "5px",
                    }}
                  >
                    {/* {N_Dimension} */}
                  </Typography>

                  <Typography variant="h2" sx={{}}>
                    Sizes
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mx: "20px",
                    position: "relative",
                  }}
                >
                  {/* <Image
                    src="/static/icons/icon-finish-black.svg"
                    alt="Finish Icon"
                    width={25}
                    height={25}
                  /> */}
                  <Typography
                    variant="h2"
                    sx={{
                      mx: "5px",
                    }}
                  >
                    {/* {N_Finish} */}
                  </Typography>

                  <Typography variant="h2" sx={{}}>
                    Finish
                  </Typography>
                </Box>
                <Box
                  component="span"
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    width: "100px",
                    height: "2px",
                    backgroundColor: "black",
                    transform: "translateX(-50%)",
                    content: "''",
                  }}
                />
              </Box>
              <Grid container spacing={2} sx={{ mt: "44px" }}>
                {products.map(
                  // @ts-ignore
                  (product, index) => (
                    <Grid item key={index} xs={6} md={2} sx={{}}>
                      <Box
                        sx={{
                          height: "173px",
                          width: "auto",
                          position: "relative",
                        }}
                      >
                        <Image
                          fill
                          alt=""
                          src={`/static/images/${product.attributes?.Image_Tile_Face.data[0].attributes.formats.thumbnail.url}`}
                        />
                      </Box>
                      <Box
                        sx={{
                          mt: "7px",
                          pt: "7px",
                          pb: "10px",
                          border: "2px",
                          textAlign: "center",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "14px", fontWeight: "bold" }}
                        >
                          {
                            product.product?.attributes?.Image_Tile_Face.data[0]
                              .attributes.formats.thumbnail.url
                          }
                        </Typography>
                        <Typography
                          sx={{
                            fontsize: "14px",
                            fontWeight: "medium",
                            color: "#999",
                          }}
                        >
                          KETERANGAN
                        </Typography>
                      </Box>
                    </Grid>
                  )
                )}
              </Grid>
            </Box>
          </Box>
        </Box>
        <Box className="product-wrap-white" sx={{ display: "flex" }}>
          <Box
            className="product-container"
            sx={{
              maxWidth: "1200px",
              padding: { xs: "20px 15px", md: "20px 30px" },
              margin: "0 auto",
              width: "100%",
            }}
          >
            <AltProductRanges
              alt1={props.alternative1}
              alt2={props.alternative2}
              alt3={props.alternative3}
            />
          </Box>
        </Box>
      </>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const headers = {
    Authorization:
      "Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c",
  };

  const res = await fetch(
    "https://strapi-app-tnshv.ondigitalocean.app/api/products?pagination[page]=0&pagination[pageSize]=999",
    {
      headers: {
        Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
      },
    }
  );

  const response = await res.json();

  // console.log(response);

  let temPath: any = [];
  response.data.map((item: any, index: any) => {
    // console.log(item.attributes.Slug);

    temPath.push({
      params: {
        id: item.id.toString(),
      },
    });
  });

  // console.log("ininini");
  // console.log(temPath.length());

  return {
    paths: temPath,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  // console.log("ini darimana");
  // console.log(params.slug);
  // console.log(params);
  console.log();
  console.log(params.id);
  const responseProduct = await fetch(
    "https://strapi-app-tnshv.ondigitalocean.app/api/products/" +
      params.id +
      "?populate[motif][populate][products][populate]=*",
    {
      headers: {
        Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
      },
    }
  );

  const responseMotif = await fetch(
    "https://strapi-app-tnshv.ondigitalocean.app/api/products/" +
      params.id +
      "?populate[motif][populate]=*",
    {
      headers: {
        Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
      },
    }
  );

  const responseAmbience = await fetch(
    "https://strapi-app-tnshv.ondigitalocean.app/api/products/" +
      params.id +
      "?populate=*",
    {
      headers: {
        Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
      },
    }
  );

  const product = await responseProduct.json();
  const motif = await responseMotif.json();
  const ambience = await responseAmbience.json();

  const responseAlt1 = await fetch(
    "https://strapi-app-tnshv.ondigitalocean.app/api/motifs/" +
      1 +
      "?populate=*",
    {
      headers: {
        Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
      },
    }
  );

  const responseAlternative1 = await responseAlt1.json();

  const responseAlt2 = await fetch(
    "https://strapi-app-tnshv.ondigitalocean.app/api/motifs/" +
      2 +
      "?populate=*",
    {
      headers: {
        Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
      },
    }
  );

  const responseAlternative2 = await responseAlt2.json();

  const responseAlt3 = await fetch(
    "https://strapi-app-tnshv.ondigitalocean.app/api/motifs/" +
      3 +
      "?populate=*",
    {
      headers: {
        Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
      },
    }
  );

  const responseAlternative3 = await responseAlt3.json();

  // console.log(responseAlternative1);

  return {
    props: {
      product: product,
      motif: motif,
      productOnly: ambience,
      alternative1: responseAlternative1,
      alternative2: responseAlternative2,
      alternative3: responseAlternative3,
      // ambience.data.attributes?.Image_Ambience?.data[0].attributes.formats.large.url,
    },
  };
};

// <TextField
//   id="outlined-number"
//   label="Box"
//   type="number"
//   onChange={handleBoxOnChange()}
//   InputLabelProps={{
//      shrink: true,
//    }}
//   sx={{ width: "100px" }}
// />
