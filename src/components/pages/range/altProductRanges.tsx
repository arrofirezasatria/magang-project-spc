import { Box, Link, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { transform } from "cypress/types/lodash";

export default function AltProductRanges(props: any) {
  const productRangesImg = [
    "alt-product-ranges.jpg",
    "alt-product-ranges.jpg",
    "alt-product-ranges.jpg",
  ];

  return (
    <>
      <Box sx={{ position: "relative", pt: "40px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            pb: "30px",
            mb: "40px",
            textAlign: "center",
          }}
        >
          <Typography
            component="h2"
            sx={{ fontSize: "27px", fontWeight: "bold", letterSpacing: "2px" }}
          >
            ALTERNATIVE PRODUCT RANGES
          </Typography>
        </Box>
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
      <Grid
        container
        spacing={0}
        sx={{ mt: "44px", px: { xs: "0px", md: "20px" }, mb: "40px" }}
      >
        {productRangesImg.map((productRangesImg, index) => (
          <Grid
            item
            key={index}
            xs={12}
            md={4}
            sx={{
              px: { xs: "0px", md: "20px" },
              width: "100%",
              mb: { xs: "20px", md: "0px" },
            }}
          >
            <Box
              sx={{
                height: "353px",
                width: "100%",
                position: "relative",
                boxShadow: [
                  "0 1px 1px rgba(0,0,0,0.1)",
                  "0 2px 2px rgba(0,0,0,0.1)",
                  "0 4px 4px rgba(0,0,0,0.1)",
                  "0 8px 8px rgba(0,0,0,0.1)",
                  "0 16px 16px rgba(0,0,0,0.1)",
                ],
                overflow: "hidden",
              }}
            >
              <Image fill alt="" src={`/static/images/${productRangesImg}`} />
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
                    alignItems: "center",
                    opacity: 0,
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
                      backgroundImage:
                        "linear-gradient(to bottom, hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 0%, 0.009) 11.7%, hsla(0, 0%, 0%, 0.034) 22.1%, hsla(0, 0%, 0%, 0.072) 31.2%, hsla(0, 0%, 0%, 0.123) 39.4%, hsla(0, 0%, 0%, 0.182) 46.6%, hsla(0, 0%, 0%, 0.249) 53.1%, hsla(0, 0%, 0%, 0.320) 58.9%, hsla(0, 0%, 0%, 0.394) 64.3%, hsla(0, 0%, 0%, 0.468) 69.3%, hsla(0, 0%, 0%, 0.540) 74.1%, hsla(0, 0%, 0%, 0.607) 78.8%, hsla(0, 0%, 0%, 0.668) 83.6%, hsla(0, 0%, 0%, 0.721) 88.7%, hsla(0, 0%, 0%, 0.762) 94.1%, hsla(0, 0%, 0%, 0.790) 100%)",
                      transform: "translateY(-50%)",
                      transition: "transform calc(var(--d) * 2) var(--e)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                      padding: "1rem",
                      transition: "transform var(--d) var(--e)",
                      zIndex: 1,
                      "> * + *": {
                        marginTop: "1rem",
                      },
                      "&:hover": {
                        transition: [
                          "max-height .3s ease-out",
                          "margin .3s ease-out",
                          "opacity .3s linear",
                        ],
                      },
                    }}
                  >
                    <Typography
                      component="h3"
                      sx={{
                        fontSize: "30px",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      LOREM IPSUM
                    </Typography>
                    <Typography
                      component="p"
                      sx={{
                        fontSize: "20px",
                        color: "white",
                        my: "20px",
                        px: "15px",
                      }}
                    >
                      Tap to style title. Bottom text.
                    </Typography>
                    <Typography
                      component="p"
                      sx={{
                        fontSize: "20px",
                        color: "white",
                        textDecoration: "underline",
                      }}
                    >
                      View
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
