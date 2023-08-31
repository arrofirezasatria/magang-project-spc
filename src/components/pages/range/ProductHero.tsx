import React from "react";
import { Box, Grid, Typography } from "@mui/material";
// import { GetStaticProps } from "next";
import Image from "next/image";

export default function ProductHero({ props, pageTitle, pageImage }: any) {
  const title =
    pageTitle === "wall-tile-set"
      ? props.walltile.data[0]?.attributes.product_varians.data[0]?.attributes.Varian
      : pageTitle === "wood"
      ? props.woodMotif.data[0]?.attributes.style_motifs.data[0]?.attributes.Style
      : pageTitle === "sss"
      ? props.sss.data[0]?.attributes.product_varians.data[1]?.attributes.Varian
      : pageTitle === "stone"
      ? props.stone.data[0]?.attributes.style_motifs.data[0]?.attributes.Style
      : pageTitle === "plain"
      ? props.plain.data[0]?.attributes.style_motifs.data[0]?.attributes.Style
      : pageTitle === "mixture"
      ? props.mixture.data[0]?.attributes.product_varians.data[0]?.attributes.Varian
      : pageTitle === "marble"
      ? props.marble.data[0]?.attributes.style_motifs.data[0]?.attributes.Style
      : pageTitle === "infinity"
      ? props.infinity.data[0]?.attributes.product_varians.data[0]?.attributes.Varian
      : pageTitle === "endmatch"
      ? props.endmatch.data[0]?.attributes.product_varians.data[1]?.attributes.Varian
      : pageTitle === "concrete"
      ? props.concrete.data[0]?.attributes.style_motifs.data[0]?.attributes.Style
      : pageTitle === "bookmatch"
      ? props.bookmatch.data[0]?.attributes.product_varians.data[0]?.attributes.Varian
      : "";

  const image =
    pageTitle === "wood"
      ? props.woodMotif.data[0]?.attributes.Image_Hero_2880x1138px.data.attributes.url
      : pageTitle === "wall-tile-set"
      ? props.walltile.data[0]?.attributes.Image_Hero_2880x1138px.data.attributes.url
      : pageTitle === "sss"
      ? props.sss.data[0]?.attributes.Image_Hero_2880x1138px.data.attributes.url
      : pageTitle === "stone"
      ? props.stone.data[0]?.attributes.Image_Hero_2880x1138px.data.attributes.url
      : pageTitle === "plain"
      ? props.plain2.data[1]?.attributes.Image_Hero_2880x1138px.data.attributes.url
      : pageTitle === "mixture"
      ? props.mixture.data[0]?.attributes.Image_Hero_2880x1138px.data.attributes.url
      : pageTitle === "marble"
      ? props.marble.data[0]?.attributes.Image_Hero_2880x1138px.data.attributes.url
      : pageTitle === "infinity"
      ? props.infinity.data[0]?.attributes.Image_Hero_2880x1138px.data.attributes.url
      : pageTitle === "endmatch"
      ? props.endmatch.data[0]?.attributes.Image_Hero_2880x1138px.data.attributes.url
      : pageTitle === "concrete"
      ? props.concrete.data[0]?.attributes.Image_Hero_2880x1138px.data.attributes.url
      : pageTitle === "bookmatch"
      ? props.bookmatch.data[0]?.attributes.Image_Hero_2880x1138px.data.attributes.url
      :"";
  console.log("propszijaidhasdhaishdauisd");
  // const imageUrl = props.woodMotif.data[0]?.attributes.Image_Hero_2880x1138px.data.attributes.url;
  // console.log(TitleWalltile);

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
