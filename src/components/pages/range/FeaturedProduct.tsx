import {
  Grid,
  Stack,
  Typography,
  Container,
  Button,
  InputLabel,
  MenuItem,
  Select,
  Box,
} from '@mui/material';
// import { GetStaticProps } from "next";
import React from 'react';
import Image from 'next/image';

export default function FeaturedProducts({props, pageTitle,alt1,alt2,alt3} : any) {

    const Title  =
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

    console.log('props.pageTitle:', Title);
    let featurproduct = [];

    // Push alternative 1 data into featurproduct
    featurproduct.push({
      name: props.alternative1.data.attributes.motif.data.attributes.Name,
      style: props.alternative1.data.attributes.motif.data.attributes.style_motifs.data[0]?.attributes.Style,
      varian: props.alternative1.data.attributes.motif.data.attributes.product_varians.data[0]?.attributes.Varian,
      image: props.alternative1.data.attributes.Image_Ambience.data[0]?.attributes.formats.large.url,
    });
    
    // Push alternative 2 data into featurproduct
    featurproduct.push({
      name: props.alternative2.data.attributes.motif.data.attributes.Name,
      style: props.alternative2.data.attributes.motif.data.attributes.style_motifs.data[0]?.attributes.Style,
      varian: props.alternative2.data.attributes.motif.data.attributes.product_varians.data[0]?.attributes.Varian,
      image: props.alternative2.data.attributes.Image_Ambience.data[0]?.attributes.formats.large.url,
    });
    
    // Push alternative 3 data into featurproduct
    featurproduct.push({
      name: props.alternative3.data.attributes.motif.data.attributes.Name,
      style: props.alternative3.data.attributes.motif.data.attributes.style_motifs.data[0]?.attributes.Style,
      varian: props.alternative3.data.attributes.motif.data.attributes.product_varians.data[0]?.attributes.Varian,
      image: props.alternative3.data.attributes.Image_Ambience.data[0]?.attributes.formats.large.url,
    });

  return (
    <>
      <Container sx={{ p: { xs: "20px 0x", md: "20px 30px" }}}>
        <Box
          sx={{
            letterSpacing: "2px",
            position: "relative",
            textAlign: "center",
            pb: "30px",

          }}
        >
          <Typography sx={{ fontSize: "27px", fontWeight: "bold",textTransform:"uppercase" }}>Featured {Title} Collection</Typography>
        <Box
            component="span"
            sx={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              width: "100px",
              height: "3px",
              backgroundColor: "black",
              transform: "translateX(-50%)",
              content: "''",
            }}
          />
        </Box>
        <Grid container spacing={3} sx={{ mt: "40px", justifyContent:"center" }}>
          {featurproduct.map((item, index) => (
            <Grid key={index} item md={4} sm={6}  sx={{ width: "359px" }}>
              <Grid item md={12} sx={{ position: "relative", width: "100%", height: "462px" }}>
              <Image src={item.image} layout='fill' alt={""} style={{objectFit:"cover"}} />
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
