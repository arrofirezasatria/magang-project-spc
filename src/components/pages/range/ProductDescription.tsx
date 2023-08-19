import { Grid, Box, Typography, Stack, Link } from "@mui/material";
import React from "react";
import SliderImage from "./SliderImage";
import TheProduct from "./TheProduct";
import Image from "next/image";

// Icon
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CircleIcon from "@mui/icons-material/Circle";

export default function ProductDescription({ props, data }: any) {
  return (
    <>
      <Grid
        container
        spacing={6}
        sx={{ p: { xs: "20px 0x", md: "20px 30px" } }}
      >
        <Grid item xs={12} md={6} sx={{}}>
          <Box
            sx={{
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            <Typography
              component="h2"
              sx={{
                mb: "10px",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              {props.product.data.attributes.Name}
            </Typography>
            <Typography sx={{ fontSize: "18px", fontWeight: "medium" }}>
              {data.tile_type.data === null
                ? "Porcelain Tiles"
                : data.tile_type.data.attributes.Type === "Sun Glazed"
                ? "Sun Glazed Ceramic Tiles"
                : "Porcelain Tiles"}
            </Typography>
            <Typography
              sx={{
                mb: "10px",
                fontSize: "18px",
                fontWeight: "medium",
              }}
            >
              FLOOR & WALL TILES
            </Typography>
            <Stack
              direction="row"
              spacing={0}
              sx={{
                mt: "15px",
                display: "flex",
                fontFamily:
                  '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";',
                fontSize: "12px",
                fontWeight: "medium",
                flexWrap: "wrap",
                "& .MuiLink-root": {
                  mb: "5px",
                  mr: "5px",
                  bgcolor: "grey",
                  border: "1px solid grey",
                  color: "#fff",
                  p: "6px 6px",
                  borderRadius: "5px",
                },
                "& .white-link": {
                  mb: "5px",
                  mr: "5px",
                  bgcolor: "#fff",
                  border: "1px solid #000",
                  color: "#000",
                  p: "6px 6px",
                  borderRadius: "5px",
                },
              }}
            >
              {props.motif.data.attributes.motif.data.attributes.product_varians.data.map(
                // @ts-ignore
                (item, index) => {
                  return (
                    <Link href="#" underline="none" key={index}>
                      {item.attributes.Varian}
                    </Link>
                  );
                }
              )}
              {props.motif.data.attributes.motif.data.attributes.style_motifs.data.map(
                // @ts-ignore
                (item, index) => {
                  return (
                    <Link
                      href="#"
                      underline="none"
                      key={index}
                      className="white-link"
                    >
                      {item.attributes.Style}
                    </Link>
                  );
                }
              )}

              <Link href="#" underline="none" className="white-link">
                {props.productOnly.data.attributes.surface_finish?.data
                  ?.attributes?.Name || "No Input data"}
              </Link>
              <Link href="#" underline="none" className="white-link">
                {props.productOnly.data.attributes.tile_color?.data?.attributes
                  ?.Name
                  ? props.productOnly.data.attributes.tile_color.data.attributes
                      .Name + " color"
                  : "No Input data"}
              </Link>
            </Stack>
          </Box>

          <Box
            sx={{
              borderTop: "2px solid #000",
              mt: "15px",
              pt: "20px",
            }}
          >
            <Typography sx={{ fontSize: "16px", fontWeight: "medium" }}>
              {data.Description === null
                ? "Minim fugiat culpa culpa veniam do tempor aliquip aliquip id amet qui proident. Nostrud sunt aliquip ipsum et voluptate commodo. Ullamco sint quis aliquip do nisi. Do culpa duis deserunt adipisicing. Officia culpa voluptate fugiat veniam laboris excepteur duis. Sunt voluptate reprehenderit tempor aliqua reprehenderit. Culpa deserunt qui sint eiusmod."
                : data.Description}
            </Typography>
            <Stack
              direction="row"
              spacing={0}
              sx={{
                mt: "15px",
                display: "flex",
                position: "relative",
                flexWrap: "wrap",
              }}
            ></Stack>
          </Box>
          <Box
            sx={{
              borderTop: "2px solid #000",
              pt: "20px",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <TheProduct showp={props.product} />
            </Box>
          </Box>

          <Box
            sx={{
              borderTop: "2px solid #000",
              mt: "20px",
              pt: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Box sx={{ mb: "10px" }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    bgcolor: "#000",
                    color: "#fff",
                    borderRadius: "5px",
                    p: "6px 10px 6px 10px",
                    fontFamily:
                      '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";',
                    fontSize: "14px",
                    mb: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItem: "center",
                  }}
                >
                  <FileDownloadOutlinedIcon
                    sx={{ pr: "8px", fontSize: "18px" }}
                  />
                  Download Range Overview
                </Link>
              </Box>
              <Stack direction="row" spacing={1}>
                <FacebookIcon />
                <TwitterIcon />
                <PinterestIcon />
                <LinkedInIcon />
              </Stack>
            </Box>
            <Box>
              <Link href="#">
                <Image
                  alt=""
                  src="https://www.johnson-tiles.com/static/img/outlet-buy.svg"
                  width={0}
                  height={0}
                  style={{ width: "130px", height: "auto" }}
                />
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ pb: "50px" }}>
          <Box
            sx={{
              width: "100%",
              height: { xs: "480px", md: "715px" },
              position: "relative",
            }}
          >
            <SliderImage productOnly={props?.productOnly?.data.attributes} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
