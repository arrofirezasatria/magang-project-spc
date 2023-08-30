import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
// import { GetStaticProps } from "next";
import React from "react";
import axios from "axios";
import useSWR from "swr";
import Image from "next/image";
import HoverInProduct from "@components/pages/range/hoverInProduct";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";
import AddressProduct from "@components/pages/range/AddressProduct";
import DescriptionProducts from "@components/pages/range/DescriptionProducts";
import ProductRange from "@components/pages/range/ProductRange";

export default function Index(props: any) {
  console.log(
    props.response.data[0].attributes.Image_Hero_2880x1138px.data?.attributes
      .url
  );
  return (
    <>
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
              src={
                props.response.data[1].attributes.Image_Hero_2880x1138px.data
                  ?.attributes.url
              }
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
                  Stepani Floriska
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
      <Container>
        <Grid>
          <AddressProduct />
          <DescriptionProducts />
        </Grid>
        <ProductRange props={props} />
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://strapi-app-tnshv.ondigitalocean.app/api/motifs?pagination[pageSize]=999&populate=*&filters[product_varians][Varian][$eq]=Endmatch",
    {
      headers: {
        Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
      },
    }
  );

  const response = await res.json();

  console.log(response);
  return {
    props: { response: response },
  };
};
