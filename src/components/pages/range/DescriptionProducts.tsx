import { Box, Container, Grid, Stack, Typography, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import { GetStaticProps } from "next";
import React from "react";


export default function DescriptionProducts() {
  return (
    <>
      <Grid sx={{}}>
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
              Our selection of concrete effect products range from small-format wall options with a stunning weathered effect, to large-format structured flooring products with PTV 36+ slip resistance ratings. Tile your next project here
              with products ideal for residential or commercial applications, and everything in between.
            </Typography>
            <Typography
              sx={{
                fontWeight: "medium",
                lineHeight: "33px",
                fontSize: { xs: "18px", md: "24px" },
              }}
            >
              We have an inspirational range of tiles covering all size formats, styles, shapes, and colours. Our portfolio consists of three product collections: Intro, Select and Absolute. Navigate through the entire selection of concrete
              products below, co-ordinating both colour and style. Whatever your budget, we’re confident we have what you’re looking for.
            </Typography>
          </Box>
        </Grid>
    </>
  );
}
