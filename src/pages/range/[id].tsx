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
} from "@mui/material";
import AppsBar from "@components/AppsBar";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "store/cartSlice";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AltProductRanges from "@components/pages/range/altProductRanges";
import Image from "next/image";
import { url } from "inspector";
import SliderImage from "@components/pages/range/SliderImage";

export default function Page(props: any) {
  // console.log(data);
  // console.log(data.attributes.Price);
  const dispatch = useDispatch();
  props.productOnly

  const imgFileUrl =
    props.productOnly.data.attributes?.Image_Tile_Face.data[0].attributes?.url;
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

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const p = data.attributes;
  const data = props.motif.data.attributes.motif.data.attributes;
  const products =
    props.product.data.attributes.motif.data.attributes.products.data; // array

  console.log(props.alternative1);
  console.log(props.alternative2);
  console.log(props.alternative3);

  // console.log(data);
  // console.log(props.product.data.attributes.motif.data.attributes);

  // const { onChange, onBlur, name, ref } = register("firstName");

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

  const name = watch("quantityBox");

  // const [Evalue, setEvalue] = React.useState("");
  const [coverage, setCoverage] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    setCoverage(name * 1.44);
  }, [name]);

  React.useEffect(() => {
    setTotalPrice(name * 1.44 * 153000);
  }, [name]);

  React.useState();

  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <>
      <>
        <Box
          sx={{
            bgcolor: "#f8f8f8",
            border: "1px solid #999",
            borderRadius: "1px",
            p: "20px",
            mt: "20px",
          }}
        >
          <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
            Order tiles now
          </Typography>
          <TableContainer>
            <Table
              sx={{
                width: "100%",
                fontSize: "14px",
                borderCollapse: "collapse",
                mt: "20px",
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ minWidth: "19%" }}>Required</TableCell>
                  <TableCell sx={{ minWidth: "19%" }} align="right">
                    Quantity
                  </TableCell>
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
                      name={"quantityBox"}
                      control={control}
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                        formState,
                      }) => (
                        <TextField
                          helperText={error ? error.message : null}
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
                  <TableCell align="right">1 Box</TableCell>
                  <TableCell align="right">{coverage + " "}/m²</TableCell>
                  <TableCell align="right">
                    {1.44 * data.attributes?.Price}
                  </TableCell>
                  <TableCell align="right">{"Rp. " + totalPrice} </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#111",
              width: "100%",
              borderRadius: "50px",
              fontSize: "16px",
              "&:hover": {
                bgcolor: "#222",
              },
            }}
          >
            Add to Cart
          </Button>
        </Box>
        {name}
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="number"
            {...register("name", { required: true, maxLength: 50 })}
          />
          <input type="submit" />
        </form>
        <Box>{name}</Box>
        <Box>{coverage + " /m2"}</Box>
        <Box>{"Rp. " + totalPrice}</Box>
        <Typography>{"addasd as asd"}</Typography>
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
        </Box> */}
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
                        SUN GLAZED CERAMIC
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
                          (item, index) => {
                            return (
                              <Link href="#" underline="none" key={index}>
                                {item.attributes.Varian}
                              </Link>
                            );
                          }
                        )}
                        {props.motif.data.attributes.motif.data.attributes.style_motifs.data.map(
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
                        {data.Description}
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
                    <SliderImage productOnly={props?.productOnly?.data.attributes} />
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
                  dispatch(addToCart({ ...data, quantity: 1 }));
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
                  <Box
                    onClick={handleOpen}
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
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{
                      background:
                        "linear-gradient(rgba(30,30,30,.9),#000 1810%)",
                    }}
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Text in a modal
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                      </Typography>
                    </Box>
                  </Modal>
                  <Box sx={{ my: "20px", width: { xs: "100%", md: "75%" } }}>
                    <Link
                      onClick={() => {
                        downloadFileAtUrl(imgFileUrl);
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
                  <Box>
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
                        { title: "Product Varian", value: "-" },
                        { title: "Dimension", value: "600 x 600 x 10.1mm" },
                        { title: "Face", value: "12" },
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
                        { title: "Shade Variation", value: "Slight" },
                        { title: "Suitability", value: "Internal Floor" },
                        { title: "Tiles per Box", value: "4" },
                        { title: "Square Meter per Box", value: "14.4 /m²" },
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
                            <Button
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
                            </Button>
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
                          <Button
                            sx={{
                              flexBasis: "50%",
                            }}
                          >
                            <Button
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
                            </Button>
                          </Box>
                        </Box>
                        <Divider
                          sx={{
                            borderBottomWidth: "2px",
                            borderColor: "#000",
                          }}
                        />
                      </>

                      <Box
                        sx={{
                          bgcolor: "#f8f8f8",
                          border: "1px solid #999",
                          borderRadius: "1px",
                          p: "20px",
                          mt: "20px",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "22px", fontWeight: "bold" }}
                        >
                          Order tiles now
                        </Typography>
                        <TableContainer>
                          <Table
                            sx={{
                              width: "100%",
                              fontSize: "14px",
                              borderCollapse: "collapse",
                              mt: "20px",
                            }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell sx={{ minWidth: "19%" }}>
                                  Required
                                </TableCell>
                                <TableCell
                                  sx={{ minWidth: "19%" }}
                                  align="right"
                                >
                                  Quantity
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
                                    name={"quantity"}
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
                                        // onChange={onChange}
                                        // value={}
                                        fullWidth
                                        label={"Box"}
                                        variant="outlined"
                                        sx={{ width: "100px" }}
                                      />
                                    )}
                                  />
                                </TableCell>
                                <TableCell align="right">1 Box</TableCell>
                                <TableCell align="right">{"1"}/m²</TableCell>
                                <TableCell align="right">Rp. 123123</TableCell>
                                <TableCell align="right">Rp. 999999</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#111",
                            width: "100%",
                            borderRadius: "50px",
                            fontSize: "16px",
                            "&:hover": {
                              bgcolor: "#222",
                            },
                          }}
                        >
                          Add to Cart
                        </Button>
                      </Box>
                      {/* <Box
                        sx={{
                          display: "flex",
                          borderTop: "1px solid #999",
                          width: "100%",
                        }}
                      >
                        <Typography sx={{ flexBasis: "50%" }}>Code:</Typography>
                        <Typography sx={{ flexBasis: "50%" }}>
                          {props.productOnly.data.attributes?.Code}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          borderTop: "1px solid #999",
                          width: "100%",
                        }}
                      >
                        <Typography sx={{ flexBasis: "50%" }}>Size:</Typography>
                        <Typography sx={{ flexBasis: "50%" }}>
                          {
                            props.productOnly.data.attributes?.tile_dimension.data
                              .attributes?.Dimension
                          }
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", borderTop: "1px solid #999" }}>
                        <Typography sx={{ flexBasis: "50%" }}>Finish:</Typography>
                        <Typography sx={{ flexBasis: "50%" }}>
                          {
                            props.productOnly.data.attributes?.surface_finish.data
                              ?.attributes?.Name
                          }
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", borderTop: "1px solid #999" }}>
                        <Typography sx={{ flexBasis: "50%" }}>Color:</Typography>
                        <Typography sx={{ flexBasis: "50%" }}>
                          {props.productOnly.data.attributes?.Motif_Color}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", borderTop: "1px solid #999" }}>
                        <Typography sx={{ flexBasis: "50%" }}>Face:</Typography>
                        <Typography sx={{ flexBasis: "50%" }}>
                          {props.productOnly.data.attributes?.N_Face}
                        </Typography>
                      </Box> */}
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
                {products.map((product, index) => (
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
                      <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
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
                ))}
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
            <AltProductRanges alt1={2} alt2={3} alt3={props.alternative3} />
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

  console.log(responseAlternative1);

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
