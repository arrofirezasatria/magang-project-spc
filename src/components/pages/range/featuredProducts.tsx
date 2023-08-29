import { Grid, Typography, Container, Button, InputLabel, MenuItem, Select, Box } from "@mui/material";
// import { GetStaticProps } from "next";
import React from "react";
import Image from "next/image";

export default function FeaturedProducts({ props }: any) {
  // console.log("isaudy87qec7ye87ywe87rcw6rcwec6r78we67rwe");
  const featuredProducts = [
    {
      imgSrc: "/static/images/contoh.jpg",
      text: props.response.data[0].attributes.Name,
      varian: props.response.data[0].attributes.product_varians?.data[0]?.attributes?.Varian || "No Variant",
      style: props.response.data[0].attributes.tile_type?.data?.attributes?.Type || "No Variant",
    },
    {
      imgSrc: "/static/images/contoh.jpg",
      text: props.response.data[1].attributes.Name,
      varian: props.response.data[0].attributes.product_varians?.data[0]?.attributes?.Varian || "No Variant",
      style: props.response.data[0].attributes.tile_type?.data?.attributes?.Type || "No Variant",
    },
    {
      imgSrc: "/static/images/contoh.jpg",
      text: props.response.data[2].attributes.Name,
      varian: props.response.data[0].attributes.product_varians?.data[0]?.attributes?.Varian || "No Variant",
      style: props.response.data[0].attributes.tile_type?.data?.attributes?.Type || "No Variant",
    },
  ];

  return (
    <>
      <Box>
        <Box
          sx={{
            letterSpacing: "2px",
            position: "relative",
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontSize: "27px", fontWeight: "bold" }}>FEATURED PRODUCT RANGES: CONCRETE</Typography>
        </Box>
        <Grid container spacing={3} sx={{ mt: "40px" }}>
          {featuredProducts.map((item, index) => (
            <Grid item md={4} key={index} sx={{ width: "359px" }}>
              <Grid item md={12} sx={{ position: "relative", width: "100%", height: "462px" }}>
                <Image src={item.imgSrc} fill alt={""} />
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
                  {item.text}
                </Typography>
              </Grid>
              <Box display="flex" flexDirection="row" sx={{ justifyContent: "center", marginTop: "5px" }}>
                <Typography
                  sx={{
                    borderRadius: "5px",
                    color: "white",
                    display: "inline-block",
                    fontSize: "13px",
                    fontWeight: "medium",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    backgroundColor: "grey",
                    border: "1px solid grey",
                    marginRight: "5px",
                    py: "3px",
                    px: "4px",
                  }}
                >
                  {item.varian}
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
                    textTransform: "uppercase",
                    py: "3px",
                    px: "4px",
                  }}
                >
                  {item.style}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

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
      </Box>
    </>
  );
}
