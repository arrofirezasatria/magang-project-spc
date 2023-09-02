import React from "react";
import { Box, Grid, Typography } from "@mui/material";
// import { GetStaticProps } from "next";
import Image from "next/image";

export default function ProductHero({ pageTitle, pageImage }: any) {
  const title = pageTitle;
  const image = pageImage;
  return (
    <Grid>
      <Box
        className="hero-container"
        sx={{
          height: "70vh",
          minHeight: "400px",
          maxHeight: "680px",
          width: "100%",
          color: "white",
        }}
      >
        <Box sx={{ height: "100%", position: "relative" }}>
          <Image
            src={image}
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
                  fontWeight: "700",
                  letterSpacing: "5px",
                  mb: "1rem",
                  textTransform: "uppercase",
                  textShadow: "0 0 5px rgba(0,0,0,.3)",
                }}
              >
                {title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "18px", md: "25px" },
                    fontWeight: "500",
                    textAlign: "center",
                    mx: "5px",
                    textShadow: "0 0 5px rgba(0,0,0,.3)",
                  }}
                >
                  A Selection Of Timeless And Classics Products
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
