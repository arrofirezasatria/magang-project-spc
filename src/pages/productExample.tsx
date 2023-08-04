import React from "react";
import {
  Box,
  Stack,
  Typography,
  Paper,
  Button,
  colors,
  List,
  ListItem,
  Icon,
  Grid,
  Link,
} from "@mui/material";
import swr from "swr";
import Image from "next/image";
import { url } from "inspector";
import axios from "axios";
import { data } from "cypress/types/jquery";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AltProductRanges from "@components/pages/range/altProductRanges";

const headers = {
  Authorization:
    "Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c",
};

const fetcher2 = (url: RequestInfo | URL) =>
  fetch(url, { headers }).then((res) => res.json());
// axios.get(url, { headers }).then((res) => res.data())

export default function productExample() {
  const { data, error, isLoading, isValidating } = swr(
    `https://strapi-app-tnshv.ondigitalocean.app/api/motifs/69?populate=*`,
    fetcher2
  );

  const { Name, Description, N_Finish, N_Color, N_Dimension } =
    data?.data?.attributes || {};
  const imageUrl =
    data?.data?.attributes?.Image_Hero_2880x1138px?.data?.attributes?.url;
  const imageThumbnail = [
    "image-darwin1.jpg",
    "image-darwin2.jpg",
    "image-darwin3.jpg",
    "image-darwin4.jpg",
    "image-darwin5.jpg",
    "image-darwin6.jpg",
  ];

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
            src={imageUrl}
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
                }}
              >
                {Name}
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
                  }}
                >
                  {N_Color}
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "18px", md: "25px" },
                    fontWeight: "400",
                    mr: "20px",
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
                  }}
                >
                  {N_Dimension}
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "18px", md: "25px" },
                    fontWeight: "400",
                    mr: "20px",
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
                  }}
                >
                  {N_Finish}
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "18px", md: "25px" },
                    fontWeight: "400",
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
                      sx={{ mb: "10px", fontSize: "32px", fontWeight: "bold" }}
                    >
                      {Name}
                    </Typography>
                    <Typography sx={{ fontSize: "18px", fontWeight: "medium" }}>
                      GLAZED CERAMIC & PORCELAIN
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
                          p: "6px 8px 1px",
                          borderRadius: "5px",
                        },
                        "& .white-link": {
                          mb: "5px",
                          mr: "5px",
                          bgcolor: "#fff",
                          border: "1px solid #000",
                          color: "#000",
                          p: "6px 8px 1px",
                          borderRadius: "5px",
                        },
                      }}
                    >
                      <Link href="#" underline="none">
                        CONCRETE
                      </Link>
                      <Link href="#" underline="none">
                        STRUCTURE
                      </Link>
                      <Link href="#" underline="none">
                        MADE IN THE UK
                      </Link>
                      <Link href="#" underline="none">
                        FLOOR TILES
                      </Link>
                      <Link href="#" underline="none">
                        PTV 36+ TILES
                      </Link>
                      <Link href="#" underline="none" className="white-link">
                        SELECT
                      </Link>
                    </Stack>
                  </Box>

                  <Box
                    sx={{ borderTop: "2px solid #000", mt: "15px", pt: "20px" }}
                  >
                    <Typography sx={{ fontSize: "16px", fontWeight: "medium" }}>
                      {Description}
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
                      <Image
                        alt=""
                        src="https://www.johnson-tiles.com/media/filer_public/5d/bc/5dbc78a2-c345-4e00-8622-74de46632280/made_in_the_uk_icon.svg"
                        width={80}
                        height={80}
                        style={{
                          margin: "0 12px 12px 0",
                        }}
                      />
                      <Image
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
                      />
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
                            p: "8px 8px 5px 8px",
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
                        <Image
                          alt=""
                          src="https://www.johnson-tiles.com/static/img/outlet-buy.svg"
                          width={0}
                          height={0}
                          style={{ width: "130px", height: "auto" }}
                        />
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
                    <Image
                      src={imageUrl}
                      fill
                      alt="hero"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Typography
                    sx={{ color: "#999", mt: "10px", fontWeight: "medium" }}
                  >
                    Darwin Clay Matt Rockfall Structure 450x250mm, Clay Matt
                    Rectangular Structure 450x250mm & Putty Matt 450x450mm
                  </Typography>
                </Grid>
              </Grid>
            </>
          </Box>
        </Box>
      </Box>
      <Box
        className="product-wrap-grey"
        sx={{ display: "flex", bgcolor: "#F5F5F5" }}
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
                <Image
                  src="/static/icons/icon-colour-black.svg"
                  alt="Colors Icon"
                  width={25}
                  height={25}
                />
                <Typography
                  variant="h2"
                  sx={{
                    mx: "5px",
                  }}
                >
                  {N_Color}
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
                <Image
                  src="/static/icons/icon-size-black.svg"
                  alt="Sizes Icon"
                  width={25}
                  height={25}
                />
                <Typography
                  variant="h2"
                  sx={{
                    mx: "5px",
                  }}
                >
                  {N_Dimension}
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
                <Image
                  src="/static/icons/icon-finish-black.svg"
                  alt="Finish Icon"
                  width={25}
                  height={25}
                />
                <Typography
                  variant="h2"
                  sx={{
                    mx: "5px",
                  }}
                >
                  {N_Finish}
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
              {imageThumbnail.map((imageThumbnail, index) => (
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
                      src={`/static/images/${imageThumbnail}`}
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
                      MOTIF
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
          <AltProductRanges />
        </Box>
      </Box>
    </>
  );
}
