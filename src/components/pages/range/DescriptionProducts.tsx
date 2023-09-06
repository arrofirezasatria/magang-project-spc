import { Box, Grid, Typography } from "@mui/material";
// import { GetStaticProps } from "next";
import React from "react";

export default function DescriptionProducts({ props, pageDescription }: any) {
  const description = pageDescription;
  return (
    <>
      <Grid sx={{ mt: "30px" }}>
        <Box
          sx={{
            textAlign: "justify",
            marginBottom: { xs: "85px", md: "40px" },
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
