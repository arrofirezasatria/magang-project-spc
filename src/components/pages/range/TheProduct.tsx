import {
  Box,
  Button,
  Grid,
  Typography,
  Divider,
  MenuItem,
  Toolbar,
  Popover,
  Collapse,
} from "@mui/material";
// import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import zIndex from "@mui/material/styles/zIndex";
import React, { useEffect, useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { packingDetailsData } from "data/packingDetailsData";

const headers = {
  Authorization:
    "Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c",
};

const fetcher2 = (url: RequestInfo | URL) =>
  fetch(url, { headers }).then((res) => res.json());

export default function TheProduct(props: any) {
  console.log(props.showProducts);
  console.log(props.showHightlight); //show last path

  const showTheProduct =
    props.showProducts.data.attributes?.motif.data.attributes?.products;

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
        <Grid container columnSpacing={2}>
          {showTheProduct.data.map((item: any, index: any) => (
            <Grid item key={index} xs={12} md={6} sx={{ mt: "10px" }}>
              <Link
                href={
                  item.id.toString() == props.showHightlight
                    ? `/range/${props.showHightlight}`
                    : `/range/${item.id}`
                }
                style={{
                  cursor:
                    item.id.toString() == props.showHightlight
                      ? "default"
                      : "",
                  textDecoration: 'none',
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    overflow: 'hidden',
                    bgcolor:
                      item.id.toString() == props.showHightlight
                        ? "grey"
                        : "none",
                    borderBottom:
                      item.id.toString() == props.showHightlight
                        ? "4px solid #3aad6c"
                        : "none",
                  }}
                >
                  <Box
                    sx={{
                      minWidth: "42px",
                      minHeight: "42px",
                      position: "relative",
                      border:
                        item.id.toString() == props.showHightlight
                          ? "none"
                          : "1px solid #cdcdcd",
                      m: "4px 0 4px 4px",
                    }}
                  >
                    {item.attributes.Image_Tile_Face.data && (
                      <Image
                        src={
                          item.attributes?.Image_Tile_Face.data[0].attributes
                            ?.formats.thumbnail.url
                        }
                        fill
                        alt=""
                      />
                    )}
                  </Box>
                  <Box sx={{ ml: "10px", width: '100%' }}>
                    <Box display='flex' sx={{ justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          letterSpacing: '0.5px',
                          color:
                            item.id.toString() == props.showHightlight
                              ? "#fff"
                              : "#000",
                        }}
                      >
                        {item.attributes?.Name}
                      </Typography>
                      <Box sx={{
                        bgcolor: '#3aad6c',
                        borderRadius: '5px',
                        p: '4px',
                        width: '45px',
                        textAlign: 'center',
                        mr: '4px',
                        display:
                          item.id.toString() == props.showHightlight
                            ? "block"
                            : "none",
                      }}>
                        <Typography sx={{
                          fontSize: '10px',
                          color: '#fff',
                          fontWeight: '500',
                          lineHeight: '1.5'
                        }}>Current</Typography>
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "400",
                        letterSpacing: '0.5px',
                        color:
                          item.id.toString() == props.showHightlight
                            ? "#ededed"
                            : "#808080",
                      }}
                    >
                      {
                        item.attributes?.tile_dimension.data.attributes
                          ?.Dimension
                      }
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
