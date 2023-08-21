import {
  Box,
  Button,
  Grid,
  Typography,
  Divider,
  MenuItem,
  Toolbar,
  Link,
  Popover,
  Collapse,
} from "@mui/material";
// import { GetStaticProps } from "next";
import Image from "next/image";
import zIndex from "@mui/material/styles/zIndex";
import React, { useEffect, useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";

const headers = {
  Authorization:
    "Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c",
};

const fetcher2 = (url: RequestInfo | URL) =>
  fetch(url, { headers }).then((res) => res.json());

export default function TheProduct(props: any) {
  console.log(props.showp);

  const showTheProduct =
    props.showp.data.attributes?.motif.data.attributes?.products;

  return (
    <>
      <Box>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "medium",
            letterSpacing: "2px",
            mb: "10px",
          }}
        >
          RELATED PRODUCTS:
        </Typography>
        <Grid container spacing={0}>
          {showTheProduct.data.map((item: any, index: any) => (
            <Grid item key={index} xs={12} md={6} sx={{ mt: "10px" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    minWidth: "40px",
                    minHeight: "40px",
                    position: "relative",
                    border: "0.1px solid #cdc",
                  }}
                >
                  {/* <Image
                    src={item.attributes?.Image_Tile_Face.data[0].attributes?.formats.thumbnail.url}
                    alt=""
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  /> */}
                  {item.attributes.Image_Tile_Face.data ? (
                    <Image
                      src={
                        item.attributes?.Image_Tile_Face.data[0].attributes
                          ?.formats.thumbnail.url
                      }
                      fill
                      alt=""
                      style={{
                        borderRadius: "0px",
                        background: "#e0e0e0",
                        boxShadow:
                          "5px 5px 10px #cacaca, -5px -5px 10px #f6f6f6",
                      }}
                    />
                  ) : (
                    <Box>Tidak ada gambar</Box>
                  )}
                </Box>
                <Box sx={{ ml: "10px" }}>
                  <Typography sx={{ fontSize: "12px", fontWeight: "medium" }}>
                    {item.attributes?.Name}
                  </Typography>
                  <Typography
                    sx={{ fontSize: "12px", fontWeight: "400", color: "#111" }}
                  >
                    {item.attributes?.tile_dimension.data.attributes?.Dimension}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
