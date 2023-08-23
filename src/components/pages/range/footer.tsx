import { Box, Container, Grid, Stack, Typography, Button,  Link, TextField } from "@mui/material";
// import { GetStaticProps } from "next";
import React from "react";
import Image from "next/image";

import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddIcon from '@mui/icons-material/Add';

export default function Footer() {
  const customTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 450,
        md: 890,
        lg: 1100,
        xl: 1920,
      },
    },
  });

  const resources = [
    {
      name: "Resources",
      Subitems: ["Docs", "Learn", "Showcase", "blog"],
    },
  ];
  const more = [
    {
      name: "More",
      Subitems: ["Commerce", "Contact Sales", "GitHub"],
    },
  ];

  const about = [
    {
      name: "About",
      Subitems: ["Next.Js + Vercel", "Open Source Software"],
    },
  ];
  const legal = [
    {
      name: "Legal",
      Subitems: ["Privacy Policy"],
    },
  ];

  const svgx = [
    {
      imgSrc: <AddIcon sx={{color:"#808080",fontSize:"15px"}} />,
    },
    {
      imgSrc: <AddIcon sx={{color:"#808080",fontSize:"15px"}}/>,
    },
    {
      imgSrc: <AddIcon sx={{color:"#808080",fontSize:"15px"}}/>,
    },
    {
      imgSrc: <AddIcon sx={{color:"#808080",fontSize:"15px"}}/>,
    },
    {
      imgSrc: <AddIcon sx={{color:"#808080",fontSize:"15px"}}/>,
    },
    {
      imgSrc: <AddIcon sx={{color:"#808080",fontSize:"15px"}}/>,
    },
    {
      imgSrc: <AddIcon sx={{color:"#808080",fontSize:"15px"}}/>,
    },
    {
      imgSrc: <AddIcon sx={{color:"#808080",fontSize:"15px"}}/>,
    },
    {
      imgSrc: <AddIcon sx={{color:"#808080",fontSize:"15px"}}/>,
    },
    {
      imgSrc: <AddIcon sx={{color:"#808080",fontSize:"15px"}}/>,
    },
    {
      imgSrc: <AddIcon sx={{color:"#808080",fontSize:"15px"}}/>,
    },

    {
      imgSrc: <AddIcon sx={{color:"#808080",fontSize:"15px"}}/>,
    },
  ];

  const imgSosmed = [
    {
      imgSrc: "/static/images/instagram-svgrepo-com (1).svg",
    },
    {
      imgSrc: "/static/images/facebook-svgrepo-com.svg",
    },
    {
      imgSrc: "/static/images/youtube-svgrepo-com.svg",
    },
    {
      imgSrc: "/static/images/twitter-svgrepo-com (1).svg",
    },
    {
      imgSrc: "/static/images/behance-163-svgrepo-com.svg",
    },
    {
      imgSrc: "/static/images/pinterest-svgrepo-com (1).svg",
    },
    {
      imgSrc: "/static/images/linked-in-logo-of-two-letters-svgrepo-com.svg",
    },
  ];

  const apkDownload = [
    {
      imgSrc: "/static/images/appstore.svg",
    },
    {
      imgSrc: "/static/images/googleplay.svg",
    },
    {
      imgSrc: "/static/images/find_shopee.jpg",
    },
  ];
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();

    console.log("Email submitted:", email);
    setEmail("");
  };


  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Box sx={{ backgroundColor: "#f6f6f6", py: "30px", borderTop: "1px solid #bfbfbf" }}>
          <Container sx={{ maxWidth: "1200px", overflow: "hidden" }}>
            <Grid container spacing={{ xs: 3, sm: 3, md: 0, lg: 0 }} sx={{ display: "flex", justifyContent: "space-between" }}>
              <Grid item xs={12} md={1.4}>
                <Box display="flex" flexDirection="column">
                  <Button sx={{ width: "120px", height: "43px"}}>
                    <Image src={"/static/images/Sunpower.png"} fill alt={""} />
                  </Button>
                </Box>
              </Grid>

              <Grid item xs={6} sm={6} md={1}>
                {resources.map((filter, index) => (
                  <Stack key={index} spacing={0}>
                    <Typography
                      sx={{
                        mb: "24px",
                        p: "0",
                        typography: {
                          fontSize: "14px",
                          color: "#525151",
                          fontWeight: "700",
                          lineHeight: "20px",
                          letterSpacing: "0.5",
                          fontFamily: "JohnstonITCPro-Medium,Gill Sans,Gill Sans MT,Myriad Pro,Myriad,sans-serif",
                          textTransform: "capitalize",
                          p: "0",
                        },
                      }}
                      variant="h6"
                    >
                      {filter.name}
                    </Typography>
                    {filter.Subitems.map((subitem, subindex) => (
                      <Link key={subindex} color="textSecondary" sx={{ textDecoration: "none" }}>
                        <Typography
                          sx={{
                            mb: "16px",
                            p: "0",
                            fontSize: "14px",
                            color: "#808080",
                            letterSpacing: "0.5",
                            lineHeight: "20px",
                            fontFamily: "JohnstonITCPro-Medium,Gill Sans,Gill Sans MT,Myriad Pro,Myriad,sans-serif",
                            textTransform: "capitalize",
                            cursor: "pointer",
                          }}
                        >
                          {subitem}
                        </Typography>
                      </Link>
                    ))}
                  </Stack>
                ))}
              </Grid>

              <Grid item xs={6} sm={6} md={1}>
                {more.map((filter, index) => (
                  <Stack key={index} spacing={0}>
                    <Typography
                      sx={{
                        mb: "24px",
                        p: "0",
                        typography: {
                          fontSize: "14px",
                          color: "#525151",
                          fontWeight: "700",
                          lineHeight: "20px",
                          letterSpacing: "0.5",
                          fontFamily: "JohnstonITCPro-Medium,Gill Sans,Gill Sans MT,Myriad Pro,Myriad,sans-serif",
                          textTransform: "capitalize",
                          p: "0",
                        },
                      }}
                      variant="h6"
                    >
                      {filter.name}
                    </Typography>
                    {filter.Subitems.map((subitem, subindex) => (
                      <Link key={subindex} sx={{ textDecoration: "none" }}>
                        <Typography
                          sx={{
                            mb: "16px",
                            p: "0",
                            cursor: "pointer",
                            fontSize: "14px",
                            color: "#808080",
                            letterSpacing: "0.5",
                            lineHeight: "20px",
                            fontFamily: "JohnstonITCPro-Medium,Gill Sans,Gill Sans MT,Myriad Pro,Myriad,sans-serif",
                            textTransform: "capitalize",
                          }}
                        >
                          {subitem}
                        </Typography>
                      </Link>
                    ))}
                  </Stack>
                ))}
              </Grid>
              <Grid item xs={6} sm={6} md={1.6} sx={{}}>
                {about.map((filter, index) => (
                  <Stack key={index} spacing={0}>
                    <Typography
                      sx={{
                        mb: "24px",
                        p: "0",
                        typography: {
                          fontSize: "14px",
                          color: "#525151",
                          fontWeight: "700",
                          lineHeight: "20px",
                          letterSpacing: "0.5",
                          fontFamily: "JohnstonITCPro-Medium,Gill Sans,Gill Sans MT,Myriad Pro,Myriad,sans-serif",
                          textTransform: "capitalize",
                          p: "0",
                        },
                      }}
                      variant="h6"
                    >
                      {filter.name}
                    </Typography>
                    {filter.Subitems.map((subitem, subindex) => (
                      <Link key={subindex} sx={{ textDecoration: "none" }}>
                        <Typography
                          sx={{
                            mb: "16px",
                            p: "0",
                            cursor: "pointer",
                            fontSize: "14px",
                            color: "#808080",
                            letterSpacing: "0.5",
                            lineHeight: "20px",
                            fontFamily: "JohnstonITCPro-Medium,Gill Sans,Gill Sans MT,Myriad Pro,Myriad,sans-serif",
                            textTransform: "capitalize",
                          }}
                        >
                          {subitem}
                        </Typography>
                      </Link>
                    ))}
                  </Stack>
                ))}
              </Grid>
              <Grid item xs={6} sm={6} md={1}>
                {legal.map((filter, index) => (
                  <Stack key={index} spacing={0}>
                    <Typography
                      sx={{
                        mb: "24px",
                        p: "0",
                        typography: {
                          fontSize: "14px",
                          color: "#525151",
                          fontWeight: "700",
                          lineHeight: "20px",
                          letterSpacing: "0.5",
                          fontFamily: "JohnstonITCPro-Medium,Gill Sans,Gill Sans MT,Myriad Pro,Myriad,sans-serif",
                          textTransform: "capitalize",
                          p: "0",
                        },
                      }}
                      variant="h6"
                    >
                      {filter.name}
                    </Typography>
                    {filter.Subitems.map((subitem, subindex) => (
                      <Link key={subindex} sx={{ textDecoration: "none" }}>
                        <Typography
                          sx={{
                            mb: "16px",
                            p: "0",
                            cursor: "pointer",
                            fontSize: "14px",
                            color: "#808080",
                            letterSpacing: "0.5",
                            lineHeight: "20px",
                            fontFamily: "JohnstonITCPro-Medium,Gill Sans,Gill Sans MT,Myriad Pro,Myriad,sans-serif",
                            textTransform: "capitalize",
                          }}
                        >
                          {subitem}
                        </Typography>
                      </Link>
                    ))}
                  </Stack>
                ))}
              </Grid>
              <Grid item xs={10} sm={10} md={2.4} lg={2.4}>
                <Stack>
                  <Typography
                    sx={{
                      typography: {
                        fontSize: "14px",
                        color: "#171717",
                        fontWeight: "700",
                        letterSpacing: "0.5",
                        fontFamily: "JohnstonITCPro-Medium,Gill Sans,Gill Sans MT,Myriad Pro,Myriad,sans-serif",
                        textTransform: "capitalize",
                      },
                    }}
                    variant="h6"
                  >
                    Subscribe to our newsletter
                  </Typography>
                  <Typography sx={{ width: "100%", color: "#808080", fontSize: "14px", mt: "16px", fontFamily: "JohnstonITCPro-Medium,Gill Sans,Gill Sans MT,Myriad Pro,Myriad,sans-serif" }} color="textSecondary">
                    Enter your email address to receive Sun Power news, special offers, product announcements, and more.
                  </Typography>
                  <Grid
                    xs={12}
                    md={12}
                    component="form"
                    onSubmit={handleFormSubmit}
                    sx={{ display: "flex", flexDirection: "row", mt: "16px", backgroundColor: "white", alignItems: "center", borderRadius: "15px", border: "1px solid grey", p: "5px 5px" }}
                  >
                    <TextField
                      type="email"
                      size="small"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Your Email*"
                      variant="outlined"
                      required
                      InputProps={{
                        style: {
                          height: "0px",
                          fontSize: "12px", 
                          borderRadius: "2px",
                        },
                      }}
                      InputLabelProps={{
                        style: { fontSize: "12px" }, 
                      }}
                      sx={{
                        width: "100%",
                        border: "none",
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": {
                            border: "none",
                            padding: "0px",
                          },
                        },
                        padding: "0px",
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{
                        height: "20px",
                        p: "0px",
                        color: "black",
                        borderRadius: "5px",
                        backgroundColor: "#E9E9E9",
                        boxShadow: "0px 0px",
                        "&:hover": {
                          backgroundColor: "#757575",
                          borderShadow: "0px",
                          transition: "backgroundColor 3s",
                        },
                        typography: {
                          fontSize: "8px",
                        },
                      }}
                    >
                      Subscribe
                    </Button>
                  </Grid>
                </Stack>
              </Grid>
            </Grid>
            <Stack direction="column" sx={{ mt: "32px" }}>
              <Typography
                sx={{
                  mb: "16px",
                  p: "0",
                  cursor: "pointer",
                  fontSize: "14px",
                  color: "#808080",
                  letterSpacing: "0.5",
                  lineHeight: "20px",
                  fontFamily: "JohnstonITCPro-Medium,Gill Sans,Gill Sans MT,Myriad Pro,Myriad,sans-serif",
                  textTransform: "capitalize",
                }}
              >
                © 2023 Sun Power Ceramics.
              </Typography>
              <Box display="flex" flexDirection="row" sx={{ml:"-3px"}}>
                {imgSosmed.map((item, index) => (
                  <Link key={index} sx={{ width: "20px", height: "20px", position: "relative", mr: "16px", cursor: "pointer" }}>
                    <Image src={item.imgSrc} fill alt="" style={{}} />
                  </Link>
                ))}
              </Box>
            </Stack>
            <Stack sx={{display:"flex", mt: "48px" }} spacing={12}>
              <Box display="flex" flexDirection="row" sx={{  }}>
                {svgx.map((item, index) => (
                  <Box key={index} sx={{  mr: "90px", position: "relative" }}>
                    {item.imgSrc}
                  </Box>
                ))}
              </Box>
              <Box display="flex" flexDirection="row" sx={{}}>
                {svgx.map((item, index) => (
                  <Box key={index} sx={{ mr: "90px", position: "relative" }}>
                    {item.imgSrc}
                  </Box>
                ))}
              </Box>
              <Box display="flex" flexDirection="row" sx={{}}>
                {svgx.map((item, index) => (
                  <Box key={index} sx={{mr: "90px", position: "relative" }}>
                    {item.imgSrc}
                  </Box>
                ))}
              </Box>
            </Stack>

          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}
