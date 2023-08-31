import { Box, Grid, Typography } from "@mui/material";
// import { GetStaticProps } from "next";
import React from "react";


export default function DescriptionProducts({props,pageDescription}: any) {
  const description =
  pageDescription === "wall-tile-set"
    ? props.walltile.data[0]?.attributes.product_varians.data[0]?.attributes.Description || "No data Description"
    : pageDescription === "wood"
    ? props.woodMotif.data[0]?.attributes.style_motifs.data[0]?.attributes.Description || "No data Description"
    : pageDescription === "sss"
    ? props.sss.data[0]?.attributes.product_varians.data[0]?.attributes.Description || "No data Description"
    : pageDescription === "stone"
    ? props.stone.data[0]?.attributes.style_motifs.data[0]?.attributes.Description || "No data Description"
    : pageDescription === "plain"
    ? props.plain.data[0]?.attributes.style_motifs.data[0]?.attributes.Description || "No data Description"
    : pageDescription === "mixture"
    ? props.mixture.data[0]?.attributes.product_varians.data[0]?.attributes.Description || "No data Description"
    : pageDescription === "marble"
    ? props.marble.data[0]?.attributes.style_motifs.data[0]?.attributes.Description || "No data Description"
    : pageDescription === "infinity"
    ? props.infinity.data[0]?.attributes.product_varians.data[0]?.attributes.Description || "No data Description"
    : pageDescription === "endmatch"
    ? props.endmatch.data[0]?.attributes.product_varians.data[0]?.attributes.Description || "No data Description"
    : pageDescription === "concrete"
    ? props.concrete.data[0]?.attributes.style_motifs.data[0]?.attributes.Description || "No data Description"
    : pageDescription === "bookmatch"
    ? props.bookmatch.data[0]?.attributes.product_varians.data[0]?.attributes.Description || "No data Description"
    : "asjdoiqduqiowdquiooqwdiu";
  return (
    <>
      <Grid sx={{mt:"100px"}}>
          <Box
            sx={{
              textAlign: "justify",
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
              {description}
            </Typography>
            {/* <Typography
              sx={{
                fontWeight: "medium",
                lineHeight: "33px",
                fontSize: { xs: "18px", md: "24px" },
              }}
            >
              We have an inspirational range of tiles covering all size formats, styles, shapes, and colours. Our portfolio consists of three product collections: Intro, Select and Absolute. Navigate through the entire selection of concrete
              products below, co-ordinating both colour and style. Whatever your budget, we’re confident we have what you’re looking for.
            </Typography> */}
          </Box>
        </Grid>
    </>
  );
}
