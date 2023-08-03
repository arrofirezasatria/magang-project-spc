import { Box, Container, Grid, Stack, Typography, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import { GetStaticProps } from "next";
import React from "react";
import Image from "next/image";

export default function FeaturedProducts() {
  return (
    <>
      <Grid>
      <Box
            sx={{
              letterSpacing: "2px",
              paddingBottom: { md: "40px", xs: "0" },
              position: "relative",
              textAlign: "center",
            }}
          >
            <Typography sx={{ fontSize: "27px", fontWeight: "bold" }}>FEATURED PRODUCT RANGES: CONCRETE</Typography>
          </Box>
        <Grid>
          <Box
            display="flex"
            flexDirection={{ xs: "column", lg: "row" }}
            sx={{
              marginTop: { xs: "60px", md: "0" },
              alignItems: { xs: "center" },
            }}
          >
            <Box sx={{ width: "359px", marginRight: { xs: "0", md: "30px" } }}>
              <Box sx={{ position: "relative", width: "359px", height: "462px" }}>
                <Image src={"/static/images/contoh.jpg"} fill alt={""} />
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
                Esential
              </Typography>
              <Box display="flex" flexDirection="row" sx={{ justifyContent: "center", marginTop: "5px" }}>
                <Typography
                  sx={{
                    borderRadius: "5px",
                    color: "white",
                    display: "inline-block",
                    fontSize: "13px",
                    fontWeight: "medium",
                    letterSpacing: "1px",
                    padding: "6px 8px 1px",
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
                    fontSize: "13px",
                    fontWeight: "medium",
                    letterSpacing: "1px",
                    padding: "6px 8px 1px",
                    textTransform: "uppercase",
                  }}
                >
                  select
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row" sx={{ justifyContent: "center", marginTop: "18px" }}>
                <Box display="flex" flexDirection="row" sx={{ lineHeight: "25px", marginRight: "20px" }}>
                  <Box
                    sx={{
                      width: "25px",
                      height: "25px",
                      position: "relative",
                      marginRight: "15px",
                    }}
                  >
                    <Image src={"/static/images/icon-colour-black.svg"} fill alt={""} style={{}} />
                  </Box>
                  <Typography sx={{ fontSize: "18x", fontWeight: "medium" }}>05</Typography>
                </Box>
                <Box display="flex" flexDirection="row" sx={{ lineHeight: "25px", marginRight: "20px" }}>
                  <Box
                    sx={{
                      width: "25px",
                      height: "25px",
                      position: "relative",
                      marginRight: "15px",
                    }}
                  >
                    <Image src={"/static/images/icon-size-black.svg"} fill alt={""} style={{}} />
                  </Box>
                  <Typography sx={{ fontSize: "18x", fontWeight: "medium" }}>05</Typography>
                </Box>
                <Box display="flex" flexDirection="row" sx={{ lineHeight: "25px" }}>
                  <Box
                    sx={{
                      width: "25px",
                      height: "25px",
                      position: "relative",
                      marginRight: "15px",
                    }}
                  >
                    <Image src={"/static/images/icon-finish-black.svg"} fill alt={""} style={{}} />
                  </Box>
                  <Typography sx={{ fontSize: "18x", fontWeight: "medium" }}>05</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "359px",
                marginRight: "30px",
                marginTop: { xs: "24px", md: "0" },
              }}
            >
              <Box sx={{ position: "relative", width: "359px", height: "462px" }}>
                <Image src={"/static/images/contoh.jpg"} fill alt={""} />
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
                Esential
              </Typography>
              <Box display="flex" flexDirection="row" sx={{ justifyContent: "center", marginTop: "5px" }}>
                <Typography
                  sx={{
                    borderRadius: "5px",
                    color: "white",
                    display: "inline-block",
                    fontSize: "13px",
                    fontWeight: "medium",
                    letterSpacing: "1px",
                    padding: "6px 8px 1px",
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
                    fontSize: "13px",
                    fontWeight: "medium",
                    letterSpacing: "1px",
                    padding: "6px 8px 1px",
                    textTransform: "uppercase",
                  }}
                >
                  select
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row" sx={{ justifyContent: "center", marginTop: "18px" }}>
                <Box display="flex" flexDirection="row" sx={{ lineHeight: "25px", marginRight: "20px" }}>
                  <Box
                    sx={{
                      width: "25px",
                      height: "25px",
                      position: "relative",
                      marginRight: "15px",
                    }}
                  >
                    <Image src={"/static/images/icon-colour-black.svg"} fill alt={""} style={{}} />
                  </Box>
                  <Typography sx={{ fontSize: "18x", fontWeight: "medium" }}>05</Typography>
                </Box>
                <Box display="flex" flexDirection="row" sx={{ lineHeight: "25px", marginRight: "20px" }}>
                  <Box
                    sx={{
                      width: "25px",
                      height: "25px",
                      position: "relative",
                      marginRight: "15px",
                    }}
                  >
                    <Image src={"/static/images/icon-size-black.svg"} fill alt={""} style={{}} />
                  </Box>
                  <Typography sx={{ fontSize: "18x", fontWeight: "medium" }}>05</Typography>
                </Box>
                <Box display="flex" flexDirection="row" sx={{ lineHeight: "25px" }}>
                  <Box
                    sx={{
                      width: "25px",
                      height: "25px",
                      position: "relative",
                      marginRight: "15px",
                    }}
                  >
                    <Image src={"/static/images/icon-finish-black.svg"} fill alt={""} style={{}} />
                  </Box>
                  <Typography sx={{ fontSize: "18x", fontWeight: "medium" }}>05</Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ width: "359px", marginTop: { xs: "24px", md: "0" } }}>
              <Box sx={{ position: "relative", width: "359px", height: "462px" }}>
                <Image src={"/static/images/contoh.jpg"} fill alt={""} />
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
                Esential
              </Typography>
              <Box display="flex" flexDirection="row" sx={{ justifyContent: "center", marginTop: "5px" }}>
                <Typography
                  sx={{
                    borderRadius: "5px",
                    color: "white",
                    display: "inline-block",
                    fontSize: "13px",
                    fontWeight: "medium",
                    letterSpacing: "1px",
                    padding: "6px 8px 1px",
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
                    fontSize: "13px",
                    fontWeight: "medium",
                    letterSpacing: "1px",
                    padding: "6px 8px 1px",
                    textTransform: "uppercase",
                  }}
                >
                  select
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row" sx={{ justifyContent: "center", marginTop: "18px" }}>
                <Box display="flex" flexDirection="row" sx={{ lineHeight: "25px", marginRight: "20px" }}>
                  <Box
                    sx={{
                      width: "25px",
                      height: "25px",
                      position: "relative",
                      marginRight: "15px",
                    }}
                  >
                    <Image src={"/static/images/icon-colour-black.svg"} fill alt={""} style={{}} />
                  </Box>
                  <Typography sx={{ fontSize: "18x", fontWeight: "medium" }}>05</Typography>
                </Box>
                <Box display="flex" flexDirection="row" sx={{ lineHeight: "25px", marginRight: "20px" }}>
                  <Box
                    sx={{
                      width: "25px",
                      height: "25px",
                      position: "relative",
                      marginRight: "15px",
                    }}
                  >
                    <Image src={"/static/images/icon-size-black.svg"} fill alt={""} style={{}} />
                  </Box>
                  <Typography sx={{ fontSize: "18x", fontWeight: "medium" }}>05</Typography>
                </Box>
                <Box display="flex" flexDirection="row" sx={{ lineHeight: "25px" }}>
                  <Box
                    sx={{
                      width: "25px",
                      height: "25px",
                      position: "relative",
                      marginRight: "15px",
                    }}
                  >
                    <Image src={"/static/images/icon-finish-black.svg"} fill alt={""} style={{}} />
                  </Box>
                  <Typography sx={{ fontSize: "18x", fontWeight: "medium" }}>05</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            sx={{
              justifyContent: "center",
              marginTop: "50px",
              marginBottom: "152px",
            }}
          >
            <Button
              sx={{
                textTransform: "capitalize",
                border: "1px solid #000",
                color: "#000",
                padding: "8px 10px 5px",
                borderRadius: "5px",
              }}
            >
              View All Product Ranges
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
