import {
  Grid,
  Typography,
  Tooltip,
  Button,
  Box,
  Container,
  Stack,
  useMediaQuery,
} from "@mui/material";
// import { GetStaticProps } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function FeaturedProducts({
  props,
  pageTitle,
  alt1,
  alt2,
  alt3,
}: any) {
  const sliderRef = React.useRef(null);
  const Title = pageTitle;
  let featurproduct = [];
  featurproduct.push({
    slug: props.alternative1.data.attributes.Slug,
    name: props.alternative1.data.attributes.motif.data.attributes.Name,
    style:
      props.alternative1.data.attributes.motif.data.attributes.style_motifs
        .data[0]?.attributes.Style,
    varian:
      props.alternative1.data.attributes.motif.data.attributes.product_varians
        .data[0]?.attributes.Varian,
    image:
      props.alternative1.data.attributes.Image_Ambience.data[0]?.attributes
        .formats.large.url,
    color: props.alternative1.data.attributes.motif.data.attributes.N_Color,
    size: props.alternative1.data.attributes.motif.data.attributes.N_Dimension,
    finish: props.alternative1.data.attributes.motif.data.attributes.N_Finish,
  });
  featurproduct.push({
    slug: props.alternative2.data.attributes.Slug,
    name: props.alternative2.data.attributes.motif.data.attributes.Name,
    style:
      props.alternative2.data.attributes.motif.data.attributes.style_motifs
        .data[0]?.attributes.Style,
    varian:
      props.alternative2.data.attributes.motif.data.attributes.product_varians
        .data[0]?.attributes.Varian,
    image:
      props.alternative2.data.attributes.Image_Ambience.data[0]?.attributes
        .formats.large.url,
    color: props.alternative2.data.attributes.motif.data.attributes.N_Color,
    size: props.alternative2.data.attributes.motif.data.attributes.N_Dimension,
    finish: props.alternative2.data.attributes.motif.data.attributes.N_Finish,
  });
  featurproduct.push({
    slug: props.alternative2.data.attributes.Slug,
    name: props.alternative3.data.attributes.motif.data.attributes.Name,
    style:
      props.alternative3.data.attributes.motif.data.attributes.style_motifs
        .data[0]?.attributes.Style,
    varian:
      props.alternative3.data.attributes.motif.data.attributes.product_varians
        .data[0]?.attributes.Varian,
    image:
      props.alternative3.data.attributes.Image_Ambience.data[0]?.attributes
        .formats.large.url,
    color: props.alternative3.data.attributes.motif.data.attributes.N_Color,
    size: props.alternative3.data.attributes.motif.data.attributes.N_Dimension,
    finish: props.alternative3.data.attributes.motif.data.attributes.N_Finish,
  });

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const isLargeScreen = useMediaQuery((theme: any) =>
    theme.breakpoints.up("md")
  );

  return (
    <>
      <Stack sx={{ width: "100%", overflow: "hidden" }}>
        <Box
          sx={{
            letterSpacing: "2px",
            position: "relative",
            textAlign: "center",
            pb: "30px",
            pt: "40px",
          }}
        >
          <Typography
            sx={{
              fontSize: "27px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Featured {Title} Collection
          </Typography>
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
        {isLargeScreen ? (
          // Content for screen size >= 900px
          <Box>
            <Grid
              container
              spacing={3}
              sx={{ mt: "40px", justifyContent: "center" }}
            >
              {featurproduct.map((item, index) => (
                <Grid
                  key={index}
                  item
                  md={4}
                  sm={6}
                  sx={{ width: "359px", cursor: "pointer" }}
                >
                  <Link
                    href={`/range/${item.slug ? item.slug : 153}`}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    <Grid
                      item
                      md={12}
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "462px",
                      }}
                    >
                      <Image
                        src={item.image}
                        layout="fill"
                        alt={""}
                        objectFit="cover"
                      />
                    </Grid>
                    <Grid item md={12}>
                      <Typography
                        sx={{
                          marginTop: "20px",
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          letterSpacing: "2px",
                          textAlign: "center",
                          fontSize: "24px",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Grid>
                    <Grid
                      display="flex"
                      flexDirection="row"
                      sx={{ justifyContent: "center", marginTop: "5px" }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            borderRadius: "5px",
                            color: "white",
                            display: "inline-block",
                            fontSize: "13px",
                            fontWeight: "medium",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                            backgroundColor: item.varian
                              ? "grey"
                              : "transparent", // Conditional background color
                            border: item.varian ? "1px solid grey" : "none", // Conditional border
                            marginRight: item.varian ? "5px" : "0px",
                            py: item.varian ? "3px" : "0px",
                            px: item.varian ? "4px" : "0px",
                          }}
                        >
                          {item.varian ? item.varian : ""}
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          border: "1px solid black",
                          borderRadius: "5px",
                          color: "black",
                          display: "inline-block",
                          fontSize: "13px",
                          fontWeight: "medium",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          py: "3px",
                          px: "4px",
                        }}
                      >
                        {item.style}
                      </Typography>
                    </Grid>
                    <Box
                      display="flex"
                      flexDirection="row"
                      sx={{
                        marginTop: "12px",
                        justifyContent: "center",
                        paddingTop: "12px",
                        right: "10px",
                      }}
                    >
                      <Tooltip title="Colours" arrow>
                        <Box
                          display="flex"
                          flexDirection="row"
                          sx={{ alignItems: "center", mr: "16px" }}
                        >
                          <Box
                            sx={{
                              width: "30px",
                              height: "30px",
                              position: "relative",
                              marginRight: "6px",
                            }}
                          >
                            <Image
                              src={"/static/images/colour.svg"}
                              layout="fill"
                              alt={""}
                              style={{}}
                            />
                          </Box>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: "medium",
                            }}
                          >
                            0{item.color}
                          </Typography>
                        </Box>
                      </Tooltip>
                      <Tooltip title="Sizes" arrow>
                        <Box
                          display="flex"
                          flexDirection="row"
                          sx={{ alignItems: "center", mr: "16px" }}
                        >
                          <Box
                            sx={{
                              width: "30px",
                              height: "30px",
                              position: "relative",
                              marginRight: "5px",
                              ml: "20px",
                            }}
                          >
                            <Image
                              src={"/static/images/sizes.svg"}
                              layout="fill"
                              alt={""}
                              style={{}}
                            />
                          </Box>
                          <Typography
                            sx={{
                              fontSize: "14x",
                              fontWeight: "medium",
                            }}
                          >
                            0{item.size}
                          </Typography>
                        </Box>
                      </Tooltip>
                      <Tooltip title="Finishes" arrow>
                        <Box
                          display="flex"
                          flexDirection="row"
                          sx={{ alignItems: "center" }}
                        >
                          <Box
                            sx={{
                              width: "30px",
                              height: "30px",
                              position: "relative",
                              marginRight: "5px",
                              ml: "20px",
                            }}
                          >
                            <Image
                              src={"/static/images/finishies.svg"}
                              layout="fill"
                              alt={""}
                              style={{}}
                            />
                          </Box>
                          <Typography
                            sx={{
                              fontSize: "14x",
                              fontWeight: "medium",
                            }}
                          >
                            0{item.finish}
                          </Typography>
                        </Box>
                      </Tooltip>
                    </Box>
                  </Link>
                </Grid>
              ))}
            </Grid>
            <Box
              display="flex"
              sx={{
                justifyContent: "center",
                marginTop: "50px",
                marginBottom: "40px",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "black !important",
                  textTransform: "capitalize",
                  border: "1px solid #000",
                  color: "#ffffff",
                  padding: "10px 10px",
                  borderRadius: "5px",
                }}
              >
                View All Product Ranges
              </Button>
            </Box>
          </Box>
        ) : (
          // Content for screen size < 900px
          <Box>
            <Box
              sx={{
                maxWidth: "100%",
                width: "100%",
                margin: "0 auto",
                mt: "40px",
                "& .slick-track": {
                  display: "flex",
                  gap: { xs: "0px", md: "20px" },
                },
              }}
            >
              <Slider
                {...settings}
                ref={sliderRef}
                dotsClass={"slick-dots"}
                style={{
                  maxWidth: "89vw",
                  margin: "0 auto",
                }}
              >
                {featurproduct.map((item, index) => (
                  <Box key={index} sx={{}}>
                    {/* <Link href={`/range/${item.slug ? item.slug : 153}`} style={{ color: "black", textDecoration: "none" }}> */}
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "462px",
                      }}
                    >
                      <Image
                        src={item.image}
                        layout="fill"
                        alt={""}
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        marginTop: "20px",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        letterSpacing: "2px",
                        textAlign: "center",
                        fontSize: "24px",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Grid
                      display="flex"
                      flexDirection="row"
                      sx={{ justifyContent: "center", marginTop: "5px" }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            borderRadius: "5px",
                            color: "white",
                            display: "inline-block",
                            fontSize: "13px",
                            fontWeight: "medium",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                            backgroundColor: item.varian
                              ? "grey"
                              : "transparent", // Conditional background color
                            border: item.varian ? "1px solid grey" : "none", // Conditional border
                            marginRight: item.varian ? "5px" : "0px",
                            py: item.varian ? "3px" : "0px",
                            px: item.varian ? "4px" : "0px",
                          }}
                        >
                          {item.varian ? item.varian : ""}
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          border: "1px solid black",
                          borderRadius: "5px",
                          color: "black",
                          display: "inline-block",
                          fontSize: "13px",
                          fontWeight: "medium",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          py: "3px",
                          px: "4px",
                        }}
                      >
                        {item.style}
                      </Typography>
                    </Grid>
                    <Box
                      display="flex"
                      flexDirection="row"
                      sx={{
                        marginTop: "12px",
                        justifyContent: "center",
                        paddingTop: "12px",
                        right: "10px",
                      }}
                    >
                      <Tooltip title="Colours" arrow>
                        <Box
                          display="flex"
                          flexDirection="row"
                          sx={{ alignItems: "center", mr: "16px" }}
                        >
                          <Box
                            sx={{
                              width: "30px",
                              height: "30px",
                              position: "relative",
                              marginRight: "6px",
                            }}
                          >
                            <Image
                              src={"/static/images/colour.svg"}
                              layout="fill"
                              alt={""}
                              style={{}}
                            />
                          </Box>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: "medium",
                              fontFamily:
                                '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                            }}
                          >
                            0{item.color}
                          </Typography>
                        </Box>
                      </Tooltip>
                      <Tooltip title="Sizes" arrow>
                        <Box
                          display="flex"
                          flexDirection="row"
                          sx={{ alignItems: "center", mr: "16px" }}
                        >
                          <Box
                            sx={{
                              width: "30px",
                              height: "30px",
                              position: "relative",
                              marginRight: "5px",
                              ml: "20px",
                            }}
                          >
                            <Image
                              src={"/static/images/sizes.svg"}
                              layout="fill"
                              alt={""}
                              style={{}}
                            />
                          </Box>
                          <Typography
                            sx={{
                              fontSize: "14x",
                              fontWeight: "medium",
                              fontFamily:
                                '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                            }}
                          >
                            0{item.size}
                          </Typography>
                        </Box>
                      </Tooltip>
                      <Tooltip title="Finishes" arrow>
                        <Box
                          display="flex"
                          flexDirection="row"
                          sx={{ alignItems: "center" }}
                        >
                          <Box
                            sx={{
                              width: "30px",
                              height: "30px",
                              position: "relative",
                              marginRight: "5px",
                              ml: "20px",
                            }}
                          >
                            <Image
                              src={"/static/images/finishies.svg"}
                              layout="fill"
                              alt={""}
                              style={{}}
                            />
                          </Box>
                          <Typography
                            sx={{
                              fontSize: "14x",
                              fontWeight: "medium",
                              fontFamily:
                                '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                              marginLeft: "3px",
                            }}
                          >
                            0{item.finish}
                          </Typography>
                        </Box>
                      </Tooltip>
                    </Box>
                    {/* </Link> */}
                  </Box>
                ))}
              </Slider>
            </Box>
            <Box
              display="flex"
              sx={{
                justifyContent: "center",
                marginTop: "50px",
                marginBottom: "40px",
              }}
            >
              <Button onClick={() => sliderRef.current.slickPrev()}>
                <KeyboardArrowLeftIcon
                  sx={{ fontSize: "40px", color: "black" }}
                />
              </Button>
              <Button
                sx={{
                  backgroundColor: "black !important",
                  textTransform: "capitalize",
                  border: "1px solid #000",
                  color: "#ffffff",
                  padding: "10px 10px",
                  borderRadius: "5px",
                }}
              >
                View All Product Ranges
              </Button>
              <Button onClick={() => sliderRef.current.slickNext()}>
                <KeyboardArrowRightIcon
                  sx={{ fontSize: "40px", color: "black" }}
                />
              </Button>
            </Box>
          </Box>
        )}
      </Stack>
    </>
  );
}
