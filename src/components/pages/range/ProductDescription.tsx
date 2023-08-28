import { Grid, Box, Typography, Stack, Button } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import SliderImage from "./SliderImage";
import TheProduct from "./TheProduct";
import Image from "next/image";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FacebookShareButton, PinterestShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
import CircleIcon from "@mui/icons-material/Circle";
import { packingDetailsData } from "data/packingDetailsData";

export default function ProductDescription({ props, data, hightlight }: any) {
  const pathSegments = hightlight.asPath.split("/");
  const idPath = pathSegments[pathSegments.length - 1];
  const shareProduct = `https://magang-project-spc.vercel.app/${hightlight.asPath}`

  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <>
      <Box sx={{ position: "relative", p: { xs: "20px 0x", md: "20px 30px" } }}>
        <Grid container spacing={6}
          sx={{
            // p: { xs: "20px 0x", md: "20px 30px" } 
          }}>
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
              <Typography sx={{ fontSize: "18px", fontWeight: "medium" }}>{data.tile_type.data === null ? "Porcelain Tiles" : data.tile_type.data.attributes.Type === "Sun Glazed" ? "Sun Glazed Ceramic Tiles" : "Porcelain Tiles"}</Typography>
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
                  fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";',
                  fontSize: "12px",
                  fontWeight: "medium",
                  flexWrap: "wrap",
                  "& .black-link": {
                    mb: "5px",
                    mr: "5px",
                    bgcolor: "grey",
                    border: "1px solid grey",
                    color: "#fff",
                    p: "6px 6px",
                    borderRadius: "5px",
                    textDecoration: 'none',
                  },
                  "& .white-link": {
                    mb: "5px",
                    mr: "5px",
                    bgcolor: "#fff",
                    border: "1px solid #000",
                    color: "#000",
                    p: "6px 6px",
                    borderRadius: "5px",
                    textDecoration: 'none',
                  },
                }}
              >
                {props.motif.data.attributes.motif.data.attributes.product_varians.data.map(
                  // @ts-ignore
                  (item, index) => {
                    return (
                      <Link href="#" className="black-link" key={index}>
                        {item.attributes.Varian}
                      </Link>
                    );
                  }
                )}
                {props.motif.data.attributes.motif.data.attributes.style_motifs.data.map(
                  // @ts-ignore
                  (item, index) => {
                    return (
                      <Link href="#" key={index} className="white-link">
                        {item.attributes.Style}
                      </Link>
                    );
                  }
                )}

                <Link href="#" className="white-link">
                  {props.productOnly.data.attributes.surface_finish?.data?.attributes?.Name || "No Input data"}
                </Link>
                <Link href="#" className="white-link">
                  {props.productOnly.data.attributes.tile_color?.data?.attributes?.Name ? props.productOnly.data.attributes.tile_color.data.attributes.Name + " color" : "No Input data"}
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
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "medium",
                  wordBreak: "break-word",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "5",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
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
                <TheProduct showProducts={props.product} showHightlight={idPath} />
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
                    style={{
                      backgroundColor: "#000",
                      color: "#fff",
                      borderRadius: "5px",
                      padding: "6px 10px 6px 10px",
                      fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";',
                      fontSize: "14px",
                      marginBottom: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textDecoration: 'none'
                    }}
                  >
                    <FileDownloadOutlinedIcon sx={{ pr: "8px", fontSize: "18px" }} />
                    <Typography sx={{ fontSize: '14px' }}>
                      Download Range Overview
                    </Typography>
                  </Link>
                </Box>
                <Stack direction="row" spacing={1}>
                  <FacebookShareButton url={shareProduct}>
                    <FacebookIcon />
                  </FacebookShareButton>
                  <TwitterShareButton url={shareProduct}>
                    <TwitterIcon />
                  </TwitterShareButton>
                  <PinterestShareButton
                    media={props?.productOnly?.data.attributes?.Image_Ambience.data[0].attributes?.formats.large.url}
                    url={shareProduct}
                  >
                    <PinterestIcon />
                  </PinterestShareButton>
                  <LinkedinShareButton url={shareProduct}>
                    <LinkedInIcon />
                  </LinkedinShareButton>
                </Stack>
              </Box>
              <Box>
                <Link href="#">
                  <Image alt="" src="https://www.johnson-tiles.com/static/img/outlet-buy.svg" width={0} height={0} style={{ width: "130px", height: "auto" }} />
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
      </Box>
    </>
  );
}
