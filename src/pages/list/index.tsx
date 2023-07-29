import { Box, Container, Grid, Stack, Typography } from "@mui/material";
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

const fetcher2 = (url: RequestInfo | URL) => fetch(url, { headers }).then((res) => res.json());

export default function Index() {
  const { data, error, isLoading, isValidating } = useSWR(`https://strapi-app-tnshv.ondigitalocean.app/api/motifs?populate=*`, fetcher2);

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
      <Box sx={{ fontSize: "27px", fontWeight: "bold", letterSpacing: "2px", marginBottom: "40px", paddingBottom: {md:"40px", xs:"0"}, position: "relative", textAlign: "center", textTransform: "uppercase" }}>
        <Typography sx={{ fontSize: "27px", fontWeight: "bold" }}>PRODUCT RANGES: CONCRETE</Typography>
      </Box>
      <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent="space-between" sx={{marginBottom:"30px"}}>
        <Stack direction="row">
          <Box display="flex" flexDirection="row" sx={{ marginRight: "35px" }}>
            <Box sx={{ width: "30px", height: "30px", position: "relative" }}>
              <Image src={"/static/images/icon-colour-black.svg"} fill alt={""} style={{}} />
            </Box>
            <Typography sx={{ fontWeight: "medium", fontSize: "16px", textAlign: "center", paddingLeft: "10px", paddingTop: "5px" }}>Colours</Typography>
          </Box>
          <Box display="flex" flexDirection="row" sx={{ marginRight: "35px" }}>
            <Box sx={{ width: "30px", height: "30px", position: "relative" }}>
              <Image src={"/static/images/icon-size-black.svg"} fill alt={""} style={{}} />
            </Box>
            <Typography sx={{ fontWeight: "medium", fontSize: "16px", textAlign: "center", paddingLeft: "10px", paddingTop: "5px" }}>Sizes</Typography>
          </Box>
          <Box display="flex" flexDirection="row">
            <Box sx={{ width: "30px", height: "30px", position: "relative" }}>
              <Image src={"/static/images/icon-finish-black.svg"} fill alt={""} style={{}} />
            </Box>
            <Typography sx={{ fontWeight: "medium", fontSize: "16px", textAlign: "center", paddingLeft: "10px", paddingTop: "5px" }}>Finishes</Typography>
          </Box>
        </Stack>
        <Stack direction="row" >
          <Box display="flex" flexDirection="row" sx={{ marginTop: { xs: "20px", md:"0"} }}>
            <Box display="flex" flexDirection="row">
              <Typography sx={{ fontWeight: "medium", fontSize: "16px", textAlign: "center", paddingTop: "5px" }}>Sort ranges by:</Typography>
            </Box>
            <Box display="flex" flexDirection="row" sx={{ marginLeft: "20px" }}>
              <Typography sx={{ fontWeight: "medium", fontSize: "16px", textAlign: "center", paddingTop: "5px" }}>A-Z</Typography>
            </Box>
            <Box display="flex" flexDirection="row" sx={{ marginLeft: "6px" }}>
              <Typography sx={{ fontWeight: "medium", fontSize: "16px", textAlign: "center", paddingTop: "5px" }}>/</Typography>
            </Box>
            <Box display="flex" flexDirection="row" sx={{ marginLeft: "6px" }}>
              <Typography sx={{ fontWeight: "medium", fontSize: "16px", textAlign: "center", paddingTop: "5px" }}>/</Typography>
            </Box>
            <Box display="flex" flexDirection="row" sx={{ marginLeft: "6px" }}>
              <Typography sx={{ fontWeight: "medium", fontSize: "16px", textAlign: "center", paddingTop: "5px" }}>NEW</Typography>
            </Box>
            <Box sx={{ display: { xs:"none", md:"flex"}}}>
            <Box sx={{ width: "30px", height: "30px", position: "relative", marginLeft: "25px", ":hover": {backgroundImage: 'url("/static/images/icon-five-col-selected.svg")',} }}>
              <Image src={"/static/images/icon-five-col.svg"} fill alt={""} />
            </Box>
            <Box sx={{ width: "30px", height: "30px", position: "relative", marginLeft: "12px" }}>
              <Image src={"/static/images/icon-three-col.svg"} fill alt={""} style={{}} />
            </Box>
            </Box>
          </Box>
        </Stack>
      </Stack>
      <Grid container spacing={2}>
        {data &&
          data.data.map((item: any, index: React.Key | null | undefined) => {
            return (
              <Grid item key={index} xs={6} md={2.4} >
                <Box
                  sx={{
                    position: "relative",
                    height: "217.6px",
                    backgroundColor: "lightGray",
                    cursor:"pointer"
                  }}
                >
                  <Image fill alt="ads" src={item.attributes.Image_Thumbnail_350px.data?.attributes.url} />
                </Box>
                <Box sx={{ backgroundColor: "#F2F1F0", p: 1 }}>
                  <Typography sx={{ fontSize: "18px", fontWeight: "medium" }}>{item.attributes.Name}</Typography>
                  <Box display="flex" flexDirection="row" sx={{}}>
                    <Typography
                      sx={{
                        borderRadius: "5px",
                        color: "white",
                        display: "inline-block",
                        fontSize: "12px",
                        fontWeight: "medium",
                        letterSpacing: "1px",
                        marginTop: "5px",
                        padding: "3px 6px 0",
                        textTransform: "uppercase",
                        backgroundColor: "grey",
                        border: "1px solid grey",
                        marginRight: "5px",
                      }}
                    >
                      concrate
                    </Typography>
                    <Typography
                      sx={{
                        border: "1px solid black",
                        borderRadius: "5px",
                        color: "black",
                        display: "inline-block",
                        fontSize: "12px",
                        fontWeight: "medium",
                        letterSpacing: "1px",
                        marginTop: "5px",
                        padding: "3px 6px 0",
                        textTransform: "uppercase",
                      }}
                    >
                      select
                    </Typography>
                  </Box>

                  <Box display="flex" flexDirection="row" sx={{ marginTop: "12px", borderTop: "1px solid black", justifyContent: "space-between", paddingTop: "12px", right: "10px" }}>
                    <Box display="flex" flexDirection="row">
                      <Box sx={{ width: "24px", height: "24px", position: "relative", marginRight: "5px" }}>
                        <Image src={"/static/images/icon-colour-black.svg"} fill alt={""} style={{}} />
                      </Box>
                      <Typography sx={{ fontSize: "24x", fontWeight: "medium" }}>0{item.attributes.N_Color}</Typography>
                    </Box>
                    <Box display="flex" flexDirection="row">
                      <Box sx={{ width: "23px", height: "23px", position: "relative", marginRight: "5px" }}>
                        <Image src={"/static/images/icon-size-black.svg"} fill alt={""} style={{}} />
                      </Box>
                      <Typography sx={{ fontSize: "14x", fontWeight: "medium" }}>0{item.attributes.N_Dimension}</Typography>
                    </Box>
                    <Box display="flex" flexDirection="row">
                      <Box sx={{ width: "24px", height: "24px", position: "relative", marginRight: "5px" }}>
                        <Image src={"/static/images/icon-finish-black.svg"} fill alt={""} style={{}} />
                      </Box>
                      <Typography sx={{ fontSize: "14x", fontWeight: "medium" }}>0{item.attributes.N_Finish}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}
