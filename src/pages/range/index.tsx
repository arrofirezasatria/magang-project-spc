import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  Link,
} from "@mui/material";
// import { GetStaticProps } from "next";
import React from "react";
import axios from "axios";
import { data } from "cypress/types/jquery";
import useSWR from "swr";
import Image from "next/image";
import AppsContainer from "@layouts/AppsContainer";
import FeaturedProducts from "@components/pages/range/FeaturedProducts";

const headers = {
  Authorization:
    "Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c",
};

const fetcher2 = (url: RequestInfo | URL) =>
  fetch(url, { headers }).then((res) => res.json());

export default function Index() {
  const { data, error, isLoading, isValidating } = useSWR(
    `https://strapi-app-tnshv.ondigitalocean.app/api/motifs?pagination[page]=0&pagination[pageSize]=999&populate=*`,
    fetcher2
  );

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

  return (
    <>
      <Grid>
        <Box></Box>
      </Grid>
      <Container>
        <Grid>
          <Box
            display="flex"
            flexDirection="row"
            sx={{
              fontSize: "16px",
              color: "#999999",
              margin: { xs: "30px 0", md: "40px 30px" },
            }}
          >
            <Typography sx={{ marginRight: "11px" }}>Product</Typography>
            <Typography sx={{ marginRight: "11px" }}>&gt;</Typography>
            <Typography sx={{ marginRight: "11px" }}>Product Style</Typography>
            <Typography sx={{ marginRight: "11px" }}>&gt;</Typography>
            <Typography>Concrete</Typography>
          </Box>
          <Box
            sx={{
              margin: { xs: "0", md: "0 30px" },
              textAlign: "left",
              marginBottom: { xs: "85px", md: "110px" },
            }}
          >
            <Typography
              sx={{
                fontWeight: "medium",
                lineHeight: "33px",
                fontSize: { xs: "18px", md: "24px" },
                marginBottom: { xs: "18px", md: "24px" },
              }}
            >
              Our selection of concrete effect products range from small-format
              wall options with a stunning weathered effect, to large-format
              structured flooring products with PTV 36+ slip resistance ratings.
              Tile your next project here with products ideal for residential or
              commercial applications, and everything in between.
            </Typography>
            <Typography
              sx={{
                fontWeight: "medium",
                lineHeight: "33px",
                fontSize: { xs: "18px", md: "24px" },
              }}
            >
              We have an inspirational range of tiles covering all size formats,
              styles, shapes, and colours. Our portfolio consists of three
              product collections: Intro, Select and Absolute. Navigate through
              the entire selection of concrete products below, co-ordinating
              both colour and style. Whatever your budget, we’re confident we
              have what you’re looking for.
            </Typography>
          </Box>
        </Grid>
        <Grid>
          <Box
            sx={{
              letterSpacing: "2px",
              paddingBottom: { md: "40px", xs: "0" },
              position: "relative",
              textAlign: "center",
            }}
          >
            <Typography sx={{ fontSize: "27px", fontWeight: "bold" }}>
              FEATURED PRODUCT RANGES: CONCRETE
            </Typography>
          </Box>
          <FeaturedProducts />
        </Grid>
        <Grid>
          <Box
            sx={{
              letterSpacing: "2px",
              marginBottom: "40px",
              paddingBottom: { md: "40px", xs: "0" },
              position: "relative",
              textAlign: "center",
            }}
          >
            <Typography sx={{ fontSize: "27px", fontWeight: "bold" }}>
              PRODUCT RANGES: CONCRETE
            </Typography>
          </Box>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="space-between"
            sx={{ marginBottom: "30px" }}
          >
            <Stack direction="row">
              <Box
                display="flex"
                flexDirection="row"
                sx={{ marginRight: "35px" }}
              >
                <Box
                  sx={{ width: "30px", height: "30px", position: "relative" }}
                >
                  <Image
                    src={"/static/images/icon-colour-black.svg"}
                    fill
                    alt={""}
                    style={{}}
                  />
                </Box>
                <Typography
                  sx={{
                    fontWeight: "medium",
                    fontSize: "16px",
                    textAlign: "center",
                    paddingLeft: "10px",
                    paddingTop: "5px",
                  }}
                >
                  Colours
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                sx={{ marginRight: "35px" }}
              >
                <Box
                  sx={{ width: "30px", height: "30px", position: "relative" }}
                >
                  <Image
                    src={"/static/images/icon-size-black.svg"}
                    fill
                    alt={""}
                    style={{}}
                  />
                </Box>
                <Typography
                  sx={{
                    fontWeight: "medium",
                    fontSize: "16px",
                    textAlign: "center",
                    paddingLeft: "10px",
                    paddingTop: "5px",
                  }}
                >
                  Sizes
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row">
                <Box
                  sx={{ width: "30px", height: "30px", position: "relative" }}
                >
                  <Image
                    src={"/static/images/icon-finish-black.svg"}
                    fill
                    alt={""}
                    style={{}}
                  />
                </Box>
                <Typography
                  sx={{
                    fontWeight: "medium",
                    fontSize: "16px",
                    textAlign: "center",
                    paddingLeft: "10px",
                    paddingTop: "5px",
                  }}
                >
                  Finishes
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row">
              <Box
                display="flex"
                flexDirection="row"
                sx={{ marginTop: { xs: "20px", md: "0" } }}
              >
                <Box display="flex" flexDirection="row">
                  <Typography
                    sx={{
                      fontWeight: "medium",
                      fontSize: "16px",
                      textAlign: "center",
                      paddingTop: "5px",
                    }}
                  >
                    Sort ranges by:
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  sx={{ marginLeft: "20px" }}
                >
                  <Typography
                    sx={{
                      fontWeight: "medium",
                      fontSize: "16px",
                      textAlign: "center",
                      paddingTop: "5px",
                    }}
                  >
                    A-Z
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  sx={{ marginLeft: "6px" }}
                >
                  <Typography
                    sx={{
                      fontWeight: "medium",
                      fontSize: "16px",
                      textAlign: "center",
                      paddingTop: "5px",
                    }}
                  >
                    /
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  sx={{ marginLeft: "6px" }}
                >
                  <Typography
                    sx={{
                      fontWeight: "medium",
                      fontSize: "16px",
                      textAlign: "center",
                      paddingTop: "5px",
                    }}
                  >
                    /
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  sx={{ marginLeft: "6px" }}
                >
                  <Typography
                    sx={{
                      fontWeight: "medium",
                      fontSize: "16px",
                      textAlign: "center",
                      paddingTop: "5px",
                    }}
                  >
                    NEW
                  </Typography>
                </Box>
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <Box
                    sx={{
                      width: "30px",
                      height: "30px",
                      position: "relative",
                      marginLeft: "25px",
                      ":hover": {
                        backgroundImage:
                          'url("/static/images/icon-five-col-selected.svg")',
                      },
                    }}
                  >
                    <Image
                      src={"/static/images/icon-five-col.svg"}
                      fill
                      alt={""}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: "30px",
                      height: "30px",
                      position: "relative",
                      marginLeft: "12px",
                    }}
                  >
                    <Image
                      src={"/static/images/icon-three-col.svg"}
                      fill
                      alt={""}
                      style={{}}
                    />
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Grid>
        <Grid container spacing={2}>
          {data &&
            data.data.map((item: any, index: React.Key | null | undefined) => {
              return (
                <Grid item key={index} xs={6} md={2.4}>
                  <Link
                    href={"/range/" + item.id}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: "217.6px",
                        backgroundColor: "lightGray",
                      }}
                    >
                      <Image
                        fill
                        alt="ads"
                        src={
                          item.attributes.Image_Thumbnail_350px.data?.attributes
                            .url
                        }
                        blurDataURL={
                          item.attributes.Image_Thumbnail_350px.data?.attributes
                            .hash
                        }
                      />
                    </Box>
                    <Box sx={{ backgroundColor: "#F2F1F0", p: 1 }}>
                      <Typography
                        sx={{ fontSize: "18px", fontWeight: "medium" }}
                      >
                        {item.attributes.Name}
                      </Typography>
                      <Box display="flex" flexDirection="row" sx={{}}>
                        <Typography
                          sx={{
                            borderRadius: "5px",
                            color: "white",
                            display: "inline-block",
                            fontSize: "12px",
                            fontWeight: "medium",
                            letterSpacing: "1px",
                            marginTop: "5px",
                            padding: "3px 6px 0",
                            textTransform: "uppercase",
                            backgroundColor: "grey",
                            border: "1px solid grey",
                            marginRight: "5px",
                          }}
                        >
                          concrate
                        </Typography>
                        <Typography
                          sx={{
                            border: "1px solid black",
                            borderRadius: "5px",
                            color: "black",
                            display: "inline-block",
                            fontSize: "12px",
                            fontWeight: "medium",
                            letterSpacing: "1px",
                            marginTop: "5px",
                            padding: "3px 6px 0",
                            textTransform: "uppercase",
                          }}
                        >
                          select
                        </Typography>
                      </Box>

                      <Box
                        display="flex"
                        flexDirection="row"
                        sx={{
                          marginTop: "12px",
                          borderTop: "1px solid black",
                          justifyContent: "space-between",
                          paddingTop: "12px",
                          right: "10px",
                        }}
                      >
                        <Box display="flex" flexDirection="row">
                          <Box
                            sx={{
                              width: "24px",
                              height: "24px",
                              position: "relative",
                              marginRight: "5px",
                            }}
                          >
                            <Image
                              src={"/static/images/icon-colour-black.svg"}
                              fill
                              alt={""}
                              style={{}}
                            />
                          </Box>
                          <Typography
                            sx={{ fontSize: "24x", fontWeight: "medium" }}
                          >
                            0{item.attributes.N_Color}
                          </Typography>
                        </Box>
                        <Box display="flex" flexDirection="row">
                          <Box
                            sx={{
                              width: "23px",
                              height: "23px",
                              position: "relative",
                              marginRight: "5px",
                            }}
                          >
                            <Image
                              src={"/static/images/icon-size-black.svg"}
                              fill
                              alt={""}
                              style={{}}
                            />
                          </Box>
                          <Typography
                            sx={{ fontSize: "14x", fontWeight: "medium" }}
                          >
                            0{item.attributes.N_Dimension}
                          </Typography>
                        </Box>
                        <Box display="flex" flexDirection="row">
                          <Box
                            sx={{
                              width: "24px",
                              height: "24px",
                              position: "relative",
                              marginRight: "5px",
                            }}
                          >
                            <Image
                              src={"/static/images/icon-finish-black.svg"}
                              fill
                              alt={""}
                              style={{}}
                            />
                          </Box>
                          <Typography
                            sx={{ fontSize: "14x", fontWeight: "medium" }}
                          >
                            0{item.attributes.N_Finish}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
}
