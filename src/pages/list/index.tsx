import { Box, Container, Grid, Stack, Typography, Button, FormControl, InputLabel, MenuItem, Select, Link } from "@mui/material";
// import { GetStaticProps } from "next";
import React from "react";
import axios from "axios";
import { data } from "cypress/types/jquery";
import useSWR from "swr";
import Image from "next/image";
import FeaturedProducts from "@components/pages/range/FeaturedProducts";
import HeroProducts from "@components/pages/range/HeroProducts";
import Description from "@components/pages/range/DescriptionProducts";
import AltProductRanges from "@components/pages/range/altProductRanges";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";
import NavbarProduct from "@components/pages/range/NavbarProduct";

const headers = {
  Authorization:
    "Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c",
};

const fetcher2 = (url: RequestInfo | URL) => fetch(url, { headers }).then((res) => res.json());

export default function Index() {
  const { data, error, isLoading, isValidating } = useSWR(`https://strapi-app-tnshv.ondigitalocean.app/api/motifs?populate=*`, fetcher2);

  const [open, setOpen] = useState(false);
  const DropdownFilter = [
    {
      nama: "-Collections-",
      Subitem: ["Intro colection", "Select Collection", "Absolute Collection", "Minton Hollins Collection"],
    },
    {
      nama: "-sizes-",
      Subitem: ["Up to 200mm", "201mm - 400mm", "401mm - 600mm", "601mm+"],
    },
    {
      nama: "-Types-",
      Subitem: ["Made in UKA", "Floor tiles", "PTV 36 + Tiles", "2 cm"],
    },
    {
      nama: "-Finishes-",
      Subitem: [
        "Structure",
        "Antislip",
        "Bush Hammered",
        "Faux Mosaic & Scored",
        "Gloss",
        "Grip",
        "Gloss Crackle",
        "Grip+ 2cm",
        "Lapato",
        "Matt",
        "Mixed",
        "Mettalic",
        "Natural",
        "Natural +2cm",
        "Polished",
        "Satin",
        "Smooth",
        "Soft Bush Hammered",
        "Structured / Textured",
        "Textured",
      ],
    },
    {
      nama: "-Styles-",
      Subitem: ["Stone", "concrete", "Marble", "Wood", "Colours", "White", "Structure", "patern", "Shape", "Speckle", "Mosaic"],
    },
    {
      nama: "-Materials-",
      Subitem: ["Glazed Ceramic", "Natural Stone & Glass", "Natural Stone", "Glass", "Ceramic", "Un-Glazed Porcelain", "Glazed Vitrified", "Porcelain", "Glazed Porcelain"],
    },
    {
      nama: "-Ranges-",
      Subitem: ["1901", "Abstract", "Allure", "Arctic white", "Arlo", "Artisan", "Ashlar", "Atrium", "Baseline Wall", "bellagio", "Bergen", "Bevel", "Bevel Brick", "Bianco", "Blake"],
    },
    {
      nama: "-Suitabillity-",
      Subitem: ["Wall", "Floor", "Border", "External Wall", "External Floor", "Wet Room"],
    },
    {
      nama: "-Colours-",
      Subitem: ["Blue", "Purple", "Pink", "Red", "Orange", "Yellow", "Green"],
    },
  ];

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
    <>
      <NavbarProduct/>
      <HeroProducts />
      <Container>
        <Description />
        <FeaturedProducts />
        <Grid>
          <Box
            sx={{
              letterSpacing: "2px",
              marginBottom: "40px",
              paddingBottom: { md: "40px", xs: "0" },
              position: "relative",
              textAlign: "center",
            }}
          >
            <Typography sx={{ fontSize: "27px", fontWeight: "bold" }}>PRODUCT RANGES: CONCRETE</Typography>
          </Box>
          <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent="space-between" sx={{ marginBottom: "30px" }}>
            <Stack direction="row">
              <Box display="flex" flexDirection="row" sx={{ marginRight: "35px" }}>
                <Box sx={{ width: "30px", height: "30px", position: "relative" }}>
                  <Image src={"/static/images/icon-colour-black.svg"} fill alt={""} style={{}} />
                </Box>
                <Typography
                  sx={{
                    fontWeight: "medium",
                    fontSize: "16px",
                    textAlign: "center",
                    paddingLeft: "10px",
                    paddingTop: "5px",
                  }}
                >
                  Colours
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row" sx={{ marginRight: "35px" }}>
                <Box sx={{ width: "30px", height: "30px", position: "relative" }}>
                  <Image src={"/static/images/icon-size-black.svg"} fill alt={""} style={{}} />
                </Box>
                <Typography
                  sx={{
                    fontWeight: "medium",
                    fontSize: "16px",
                    textAlign: "center",
                    paddingLeft: "10px",
                    paddingTop: "5px",
                  }}
                >
                  Sizes
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row">
                <Box sx={{ width: "30px", height: "30px", position: "relative" }}>
                  <Image src={"/static/images/icon-finish-black.svg"} fill alt={""} style={{}} />
                </Box>
                <Typography
                  sx={{
                    fontWeight: "medium",
                    fontSize: "16px",
                    textAlign: "center",
                    paddingLeft: "10px",
                    paddingTop: "5px",
                  }}
                >
                  Finishes
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row">
              <Box display="flex" flexDirection="row" sx={{ marginTop: { xs: "20px", md: "0" } }}>
                <Box display="flex" flexDirection="row">
                  <Typography
                    sx={{
                      fontWeight: "medium",
                      fontSize: "16px",
                      textAlign: "center",
                      paddingTop: "5px",
                    }}
                  >
                    Sort ranges by:
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row" sx={{ marginLeft: "20px" }}>
                  <Typography
                    sx={{
                      fontWeight: "medium",
                      fontSize: "16px",
                      textAlign: "center",
                      paddingTop: "5px",
                    }}
                  >
                    A-Z
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row" sx={{ marginLeft: "6px" }}>
                  <Typography
                    sx={{
                      fontWeight: "medium",
                      fontSize: "16px",
                      textAlign: "center",
                      paddingTop: "5px",
                    }}
                  >
                    /
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row" sx={{ marginLeft: "6px" }}>
                  <Typography
                    sx={{
                      fontWeight: "medium",
                      fontSize: "16px",
                      textAlign: "center",
                      paddingTop: "5px",
                    }}
                  >
                    /
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row" sx={{ marginLeft: "6px" }}>
                  <Typography
                    sx={{
                      fontWeight: "medium",
                      fontSize: "16px",
                      textAlign: "center",
                      paddingTop: "5px",
                    }}
                  >
                    NEW
                  </Typography>
                </Box>
                <Button
                  onClick={() => setOpen(!open)}
                  sx={{
                    transition: "2s",
                    marginLeft: "40px",
                    backgroundColor: "#F2F1F0",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    borderRadius: "5px",
                    border: "0.5px solid #000",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "medium",
                      fontSize: "16px",
                      textAlign: "center",
                    }}
                  >
                    FILTERS
                  </Typography>
                  <FilterListIcon sx={{ marginLeft: "16px" }} />
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Grid>
        <Grid display="flex" flexDirection="column" sx={{ position: "relative" }}>
          {open && (
            <Box
              sx={{
                backgroundColor: "rgba(242, 241, 240)",
                position: "absolute ",
                width: "100%",
                // height: { xs: "400px", md: "200px" },
                zIndex: "2",
                boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.75)",
              }}
            >
              <Typography
                sx={{
                  marginTop: "24px",
                  marginLeft: "24px",
                  fontSize: "18px",
                  letterSpacing: "2px",
                  fontWeight: "bold",
                }}
              >
                PRODUCT FILTERS
              </Typography>
              <Grid container spacing={2} sx={{ px: "24px", my: 2 }}>
                {DropdownFilter.map((filter, index) => (
                  <Grid item key={index} xs={6} md={4}>
                    <Box sx={{}}>
                      <FormControl sx={{ backgroundColor: "rgba(242, 241, 240) !important" }} fullWidth>
                        <InputLabel sx={{ backgroundColor: "rgba(242, 241, 240)" }} id={`filter-label-${index}`}>
                          {filter.nama}
                        </InputLabel>
                        <Select sx={{ backgroundColor: "rgba(242, 241, 240) !important", color: "#000", fontWeight: "medium" }} labelId={`filter-label-${index}`} id={`filter-select-${index}`} label={filter.nama}>
                          {filter.Subitem.map((subitem, subindex) => (
                            <MenuItem sx={{ backgroundColor: "rgba(242, 241, 240)", color: "grey", "&:hover": { fontWeight: "medium", color: "#000", cursor: "pointer" } }} key={subindex} value={subitem}>
                              {subitem}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
          <Grid container spacing={2}>
            {data &&
              data.data.map((item: any, index: React.Key | null | undefined) => {
                return (
                  <Grid item key={index} xs={6} md={3} lg={2.4}>
                    <Box sx={{ cursor: "pointer" }}>
                      <Box
                        sx={{
                          position: "relative",
                          height: "217.6px",
                          backgroundColor: "lightGray",
                          overflow: "hidden",
                        }}
                      >
                        {item.attributes.isNew && (
                          <Box sx={{ backgroundColor: "black", width: "65px", zIndex: "1", position: "relative", ml: {xs:"5%",md:"5%", lg:"5%"} }}>
                            <Typography sx={{ textAlign: "center", color: "white", fontWeight: "bold", fontSize: "14px", letterSpacing: "2px" }}>NEW</Typography>
                          </Box>
                        )}
                        <Image fill alt="ads" src={item.attributes.Image_Thumbnail_350px.data?.attributes.url} />

                        <Link href="#">
                          <Box
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              display: "flex",
                              justifyContent: "center",
                              opacity: 0,
                              zIndex: "1",
                              transition: "opacity 0.3s ease-in-out",
                              "&:hover": {
                                opacity: 1,
                              },
                              "&:before": {
                                content: '""',
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "110%",
                                backgroundSize: "cover",
                                backgroundPosition: "0 0",
                                transition: "transform calc(var(--d) * 1.5) var(--e)",
                                pointerEvents: "none",
                              },
                              "&:after": {
                                content: '""',
                                display: "block",
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "200%",
                                pointerEvents: "none",
                                backgroundColor: "black",
                                opacity: 0.25,
                                transform: "translateY(-50%)",
                                transition: "transform calc(var(--d) * 2) var(--e)",
                              },
                            }}
                          >
                            <Box
                              sx={{
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                transition: "transform var(--d) var(--e)",
                                zIndex: 1,
                                "&:hover": {
                                  transition: ["max-height .3s ease-out", "margin .3s ease-out", "opacity .3s linear"],
                                },
                              }}
                            >
                              <Box display="flex" flexDirection="column" sx={{  justifyContent: "space-between", width: "100%", height: "80%", textTransform: "capitalize", mt: "24px", ml: "16px" }}>
                                <Box display="flex" flexDirection="row">
                                  <Box sx={{ position: "relative", width: "35px", height: "35px" }}>
                                    <Image src={"/static/images/kotakdua.jpg"} fill alt={""} />
                                  </Box>
                                  <Box display="flex" flexDirection="column" ml="8px" sx={{opacity:"0.8"}}>
                                    <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", fontSize: "12px" }}>nature</Typography>
                                    <Box display="flex" flexWrap="wrap" sx={{opacity:"0.6"}}>
                                      <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr:"8px", fontSize: "12px" }}>120x60</Typography>
                                      <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr:"8px",fontSize: "12px" }}>60x60</Typography>
                                      <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr:"8px",fontSize: "12px" }}>36x60</Typography>
                                    </Box>
                                  </Box>
                                </Box>
                                <Box display="flex" flexDirection="row">
                                  <Box sx={{ position: "relative", width: "35px", height: "35px" }}>
                                    <Image src={"/static/images/kotaktiga.jpg"} fill alt={""} />
                                  </Box>
                                  <Box display="flex" flexDirection="column" ml="8px" sx={{opacity:"0.8"}}>
                                    <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", fontSize: "12px" }}>Bianco</Typography>
                                    <Box display="flex" flexWrap="wrap" sx={{opacity:"0.6"}}>
                                      <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr:"8px", fontSize: "12px" }}>120x60</Typography>
                                      <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr:"8px",fontSize: "12px" }}>60x60</Typography>
                                      <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr:"8px",fontSize: "12px" }}>36x60</Typography>
                                    </Box>
                                  </Box>
                                </Box>
                                <Box display="flex" flexDirection="row">
                                  <Box sx={{ position: "relative", width: "35px", height: "35px" }}>
                                    <Image src={"/static/images/kotakempat.jpg"} fill alt={""} />
                                  </Box>
                                  <Box display="flex" flexDirection="column" ml="8px" sx={{opacity:"0.8"}}>
                                    <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", fontSize: "12px" }}>grigio</Typography>
                                    <Box display="flex" flexWrap="wrap" sx={{opacity:"0.6"}}>
                                      <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr:"8px", fontSize: "12px" }}>120x60</Typography>
                                      <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr:"8px",fontSize: "12px" }}>60x60</Typography>
                                      <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr:"8px",fontSize: "12px" }}>36x60</Typography>
                                    </Box>
                                  </Box>
                                </Box>
                                <Box display="flex" flexDirection="row">
                                  <Box sx={{ position: "relative", width: "35px", height: "35px" }}>
                                    <Image src={"/static/images/kotaklima.jpg"} fill alt={""} />
                                  </Box>
                                  <Box display="flex" flexDirection="column" ml="8px" sx={{opacity:"0.7"}}>
                                    <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", fontSize: "12px" }}>rovere</Typography>
                                    <Box display="flex" flexWrap="wrap" sx={{opacity:"0.5"}} >
                                      <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr:"8px", fontSize: "12px" }}>120x60</Typography>
                                      <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr:"8px",fontSize: "12px" }}>60x60</Typography>
                                      <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr:"8px",fontSize: "12px" }}>36x60</Typography>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Link>
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

                        <Box
                          display="flex"
                          flexDirection="row"
                          sx={{
                            marginTop: "12px",
                            borderTop: "1px solid black",
                            justifyContent: "space-between",
                            paddingTop: "12px",
                            right: "10px",
                          }}
                        >
                          <Box display="flex" flexDirection="row">
                            <Box
                              sx={{
                                width: "24px",
                                height: "24px",
                                position: "relative",
                                marginRight: "5px",
                              }}
                            >
                              <Image src={"/static/images/icon-colour-black.svg"} fill alt={""} style={{}} />
                            </Box>
                            <Typography sx={{ fontSize: "24x", fontWeight: "medium" }}>0{item.attributes.N_Color}</Typography>
                          </Box>
                          <Box display="flex" flexDirection="row">
                            <Box
                              sx={{
                                width: "23px",
                                height: "23px",
                                position: "relative",
                                marginRight: "5px",
                              }}
                            >
                              <Image src={"/static/images/icon-size-black.svg"} fill alt={""} style={{}} />
                            </Box>
                            <Typography sx={{ fontSize: "14x", fontWeight: "medium" }}>0{item.attributes.N_Dimension}</Typography>
                          </Box>
                          <Box display="flex" flexDirection="row">
                            <Box
                              sx={{
                                width: "24px",
                                height: "24px",
                                position: "relative",
                                marginRight: "5px",
                              }}
                            >
                              <Image src={"/static/images/icon-finish-black.svg"} fill alt={""} style={{}} />
                            </Box>
                            <Typography sx={{ fontSize: "14x", fontWeight: "medium" }}>0{item.attributes.N_Finish}</Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
