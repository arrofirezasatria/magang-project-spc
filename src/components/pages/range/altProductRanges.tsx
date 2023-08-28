import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function AltProductRanges(props: any) {
  console.log(props.alt1);
  console.log(props.alt2);
  console.log(props.alt3);
  console.log(
    props.alt1.data.attributes?.Image_Thumbnail_350px.data.attributes?.url
  );

  let articleRecomendation = [];

  articleRecomendation.push({
    name: props.alt1.data.attributes.Name,
    description: props.alt1.data.attributes.Description,
    image:
      props.alt1.data.attributes?.Image_Thumbnail_350px.data.attributes?.url,
  });

  articleRecomendation.push({
    name: props.alt2.data.attributes.Name,
    description: props.alt2.data.attributes.Description,
    image:
      props.alt2.data.attributes?.Image_Thumbnail_350px.data.attributes?.url,
  });

  articleRecomendation.push({
    name: props.alt3.data.attributes.Name,
    description: props.alt3.data.attributes.Description,
    image:
      props.alt3.data.attributes?.Image_Thumbnail_350px.data.attributes?.url,
  });

  return (
    <>
      <Box sx={{ p: { xs: "20px 0x", md: "20px 30px" } }}>
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              pt: '20px',
              pb: "30px",
              mb: "40px",
              textAlign: "center",
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: "27px",
                fontWeight: "bold",
                letterSpacing: "2px",
              }}
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
          spacing={4}
          sx={{ mt: "40px", mb: "40px" }}
        >
          {articleRecomendation.map((articleRecomendation, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={4}
              sx={{
                flexGrow: 1,
              }}
            >
              <Link href="about" target="_blank" style={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    height: "353px",
                    width: "100%",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    boxShadow: [
                      "0 1px 1px rgba(0,0,0,0.1)",
                      "0 2px 2px rgba(0,0,0,0.1)",
                      "0 4px 4px rgba(0,0,0,0.1)",
                      "0 8px 8px rgba(0,0,0,0.1)",
                      "0 16px 16px rgba(0,0,0,0.1)",
                    ],
                    overflow: "hidden",
                    "&:hover .poster::before": {
                      bottom: "0px",
                    },
                    // "&:hover .poster img": {
                    //   transform: "translateY(-50px)",
                    // },
                    "&:hover .details": {
                      bottom: "0px",
                    },
                    "&:hover .details p": {
                      opacity: "1",
                    },
                  }}
                >
                  <Box
                    className="poster"
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      aspectRatio: '1 / 1',
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        bottom: { xs: "0", sm: "-50%" },
                        width: "100%",
                        height: "100%",
                        background: {
                          xs: "#00000033",
                          sm: "linear-gradient(0deg, #000000c0 50%, transparent)",

                        },
                        transition: "0.5s",
                        zIndex: "1",
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Image
                        alt=""
                        fill
                        src={articleRecomendation.image}
                        style={{
                          transition: "0.5s",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  </Box>
                  <Box className="mobile-details" sx={{
                    width: "100%",
                    height: '100%',
                    flexDirection: 'column',
                    position: "absolute",
                    zIndex: "2",
                    transition: "0.5s",
                    textAlign: "center",
                    justifyContent: 'center',
                    display: { xs: "flex", sm: "none" },
                  }}>
                    <Typography
                      component="h3"
                      sx={{
                        letterSpacing: '1px',
                        fontSize: '24px',
                        fontWeight: "bold",
                        color: "#fff",
                        textShadow: "0 0 5px rgba(0,0,0,0.3)",
                        p: '20px',
                      }}
                    >{articleRecomendation.name}
                    </Typography>
                    <Typography
                      component="p"
                      sx={{
                        letterSpacing: "1px",
                        fontSize: "20px",
                        color: "#fff",
                        textDecoration: "underline",
                        textShadow: "0 0 5px rgba(0,0,0,0.3)",
                      }}
                    >
                      View
                    </Typography>
                  </Box>
                  <Box
                    className="details"
                    sx={{
                      width: "100%",
                      position: "absolute",
                      bottom: "-30%",
                      p: "20px",
                      zIndex: "2",
                      transition: "0.5s",
                      textAlign: "center",
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    <Box sx={{ width: "100%" }}>
                      <Typography
                        component="h3"
                        sx={{
                          letterSpacing: "1px",
                          fontSize: "24px",
                          fontWeight: "bold",
                          color: "#fff",
                          textShadow: "0 0 5px rgba(0,0,0,0.3)",
                        }}
                      >
                        {articleRecomendation.name}
                      </Typography>
                      <Box
                        className="description-wrap"
                        sx={{
                          my: "20px",
                          px: "15px",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <Typography
                          component="p"
                          sx={{
                            letterSpacing: "1px",
                            wordBreak: "break-word",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: "3",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            fontSize: "16px",
                            color: "#fff",
                            transition:
                              "max-height .25s ease-in-out,margin .25s ease-in-out,opacity .25s linear",
                            opacity: "0",
                          }}
                        >
                          {articleRecomendation.description}
                        </Typography>
                      </Box>
                      <Typography
                        component="p"
                        sx={{
                          letterSpacing: "1px",
                          fontSize: "20px",
                          color: "#fff",
                          textDecoration: "underline",
                          transition:
                            "max-height .25s ease-in-out,margin .25s ease-in-out,opacity .25s linear",
                          opacity: "0",
                        }}
                      >
                        View
                      </Typography>
                    </Box>
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
