import { Box, Container, Grid, Typography } from "@mui/material";
// import { GetStaticProps } from "next";
import React from "react";
import axios from "axios";
import { data } from "cypress/types/jquery";
import useSWR from "swr";
import Image from "next/Image";

const headers = {
  Authorization:
    "Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c",
};

const fetcher2 = (url: RequestInfo | URL) =>
  fetch(url, { headers }).then((res) => res.json());

export default function Index() {
  const { data, error, isLoading, isValidating } = useSWR(
    `https://strapi-app-tnshv.ondigitalocean.app/api/motifs?populate=*`,
    fetcher2
  );

  if (isLoading) {
    console.log("masih loading");
  }

  if (isValidating) {
    console.log("masih validating");
  }

  if (error) {
    console.log("error");
  }

  if (data) {
    console.log(data);
  }

  return (
    <Container>
      <Grid container spacing={2}>
        {data &&
          data.data.map((item: any, index: React.Key | null | undefined) => {
            return (
              <Grid item key={index} xs={6} md={2.4}>
                <Box
                  sx={{
                    position: "relative",
                    height: "217.6px",
                    backgroundColor: "lightGray",
                  }}
                >
                  <Image
                    fill
                    alt="ads"
                    src={
                      item.attributes.Image_Thumbnail_350px.data?.attributes.url
                    }
                  />
                </Box>
                <Box sx={{ widt: "100%", backgroundColor: "#F2F1F0", p: 1 }}>
                  <Typography sx={{ fontSize: "18px", fontWeight: "medium" }}>
                    {item.attributes.Name}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}
