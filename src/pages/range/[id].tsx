import React from "react";
import type { GetStaticPaths } from "next";

import {
  Box,
  Button,
  Grid,
  Link,
  Stack,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AppsBar from "@components/AppsBar";

// Icon
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CircleIcon from "@mui/icons-material/Circle";

import AltProductRanges from "@components/pages/range/AltProductRanges";
import ModulSpec from "@components/pages/range/ModulSpec";
import ModulPacking from "@components/pages/range/modulPacking";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import SliderImage from "@components/pages/range/SliderImage";
import { NumericFormat } from "react-number-format";
import TheProduct from "@components/pages/range/TheProduct";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "store/counterSlice";

import HeroProducts from "@components/pages/range/HeroProducts";
import ProductLayout from "@layouts/ProductLayout";
import AddressProduct from "@components/pages/range/AddressProduct";
import ProductDescription from "@components/pages/range/ProductDescription";

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

  const imgFileUrl =
    props.productOnly.data.attributes.Image_Tile_Face?.data?.[0]?.attributes
      ?.url;

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  console.log(watch());

  // @ts-ignore
  const name = watch("quantityBox");

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
      <HeroProducts
        imageHero={
          props.motif.data.attributes.motif.data.attributes
            .Image_Hero_2880x1138px.data?.attributes.url
        }
        nameMotif={data.Name}
        NColor={data.N_Color}
        NDimension={data.N_Dimension}
        NFinish={data.N_Finish}
      />
      <ProductLayout>
        <AddressProduct />
        <ProductDescription props={props} data={data} />

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
                  height={
                    props.productOnly.data.attributes?.tile_dimension.data
                      .attributes.Dimension == "60x60cm"
                      ? "auto"
                      : "600px"
                  }
                  sx={{
                    width: { xs: "100%", md: "75%" },
                    maxWidth: "100%",
                    minHeight: "427.500px",
                    position: "relative",
                  }}
                >
                  {props.productOnly.data.attributes.Image_Tile_Face.data ? (
                    <Image
                      src={
                        props.productOnly.data.attributes.Image_Tile_Face
                          .data[0]?.attributes?.formats?.large?.url
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
                      fontFamily:
                        '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";',
                      fontSize: "14px",
                      mb: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <FileDownloadOutlinedIcon
                      sx={{ pr: "8px", fontSize: "18px" }}
                    />
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
                      value={props.productOnly.data.attributes?.Price}
                      decimalScale={3}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"Rp. "}
                    />
                    /m²
                  </Typography>
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
                      value:
                        props.motif.data.attributes.motif.data.attributes
                          .product_varians?.data?.length > 0
                          ? props.motif.data.attributes.motif.data.attributes.product_varians?.data
                              .map((item: any) => item.attributes.Varian)
                              .join(", ")
                          : "-",
                    },
                    {
                      title: "Dimension",
                      value:
                        props.productOnly.data.attributes?.tile_dimension.data
                          ?.attributes?.Dimension,
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
                        props.productOnly.data.attributes?.surface_finish.data
                          ?.attributes?.Name,
                    },
                    {
                      title: "Rectified Edge",
                      value:
                        props.productOnly.data.attributes?.Rectified.toString(),
                    },
                    {
                      title: "Shade Variation",
                      value:
                        props.productOnly.data.attributes?.Shade_Variation ||
                        "-",
                    },
                    {
                      title: "Suitability",
                      value:
                        props.productOnly.data.attributes?.tile_suitabilities?.data
                          ?.map((item: any) => item.attributes.Suitability)
                          ?.join(", ") || "-",
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
                        <ModulPacking motif={props?.motif?.data.attributes} />
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
                    <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
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
                                      props.productOnly.data.attributes.Price
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
      </ProductLayout>

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

  let temPath: any = [];
  response.data.map((item: any, index: any) => {
    temPath.push({
      params: {
        id: item.id.toString(),
      },
    });
  });

  return {
    paths: temPath,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
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

  return {
    props: {
      product: product,
      motif: motif,
      productOnly: ambience,
      alternative1: responseAlternative1,
      alternative2: responseAlternative2,
      alternative3: responseAlternative3,
    },
  };
};
