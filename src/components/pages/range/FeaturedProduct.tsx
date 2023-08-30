import { Grid, Stack, Typography, Container, Button, InputLabel, MenuItem, Select, Box } from "@mui/material";
// import { GetStaticProps } from "next";
import React from "react";
import Image from "next/image";

export default function FeaturedProducts(props : any) {
  console.log("isaudy87qec7ye87ywe87rcw6rcwec6r78we67rwe");
  console.log(props.alt1);
  console.log(props?.alt1?.data?.attributes.motif.data.attributes.Name)
  console.log(props.alt2);
  console.log(props.alt3);
  let featurproduct = [];
  featurproduct.push({
    name: props?.alt1?.data?.attributes.motif.data.attributes.Name,
    style: props?.alt1?.data?.attributes.motif.data.attributes.style_motifs.data[0].attributes.Style,
    varian: props?.alt1?.data?.attributes.motif.data.attributes.product_varians.data[0].attributes.Varian,
    image: props?.alt1?.data?.attributes.Image_Ambience.data[0].attributes.formats.large.url
  });

  featurproduct.push({
    name: props?.alt2?.data?.attributes.motif.data.attributes.Name,
    style: props?.alt2?.data?.attributes.motif.data.attributes.style_motifs.data[0].attributes.Style,
    varian: props?.alt2?.data?.attributes.motif.data.attributes.product_varians.data[0].attributes.Varian,
    image: props?.alt2?.data?.attributes.Image_Ambience.data[0].attributes.formats.large.url

  });

  featurproduct.push({
    name: props?.alt3?.data?.attributes.motif.data.attributes.Name,
    style: props?.alt3?.data?.attributes.motif.data.attributes.style_motifs.data[0].attributes.Style,
    varian: props?.alt3?.data?.attributes.motif.data.attributes.product_varians.data[0].attributes.Varian,
    image: props?.alt3?.data?.attributes.Image_Ambience.data[0].attributes.formats.large.url

  });


  return (
    <>
      <Container sx={{ p: { xs: "20px 0x", md: "20px 30px" }}}>
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
          {featurproduct.map((item, index) => (
            <Grid key={index} item md={4} sm={6}  sx={{ width: "359px" }}>
              <Grid item md={12} sx={{ position: "relative", width: "100%", height: "462px" }}>
              <Image src={item.image} fill alt={""} style={{objectFit:"cover"}} />
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
              <Grid display="flex" flexDirection="row" sx={{ justifyContent: "center", marginTop: "5px" }}>
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
                      backgroundColor: "grey",
                      border: "1px solid grey",
                      marginRight: "5px",
                      py: "3px",
                      px: "4px",
                    }}
                  >
                    {item.varian}
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
            </Grid>
          ))}
        </Grid>

        <Box
          display="flex"
          sx={{
            justifyContent: "center",
            marginTop: "50px",
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
      </Container>
    </>
  );
}
