import { Box, Tabs, Tab, Container, Grid, Stack, Typography, Button, FormControl, Select, MenuItem, InputLabel, useMediaQuery, useTheme, Tooltip, TextField } from "@mui/material";
// import { GetStaticProps } from "next";
import React from "react";
import Image from "next/image";
import HoverInProduct from "../range/hoverInProduct";
import FilterListIcon from "@mui/icons-material/FilterList";
// import {DropdownFilter} from '../../../data/navbarHeader/Navbar';
import { useState } from "react";
import Link from "next/link";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const theme = createTheme({
  typography: {
    fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  },
});

export default function ProductRange({ props, pageTitle }: any) {
  const Title = pageTitle;
  const [sortOrder, setSortOrder] = useState("asc");
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSizeLessThan380 = useMediaQuery(theme.breakpoints.down(380));
  const [activeTab, setActiveTab] = useState("az");
  const [filterText, setFilterText] = useState("");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };


  const filteredAndSortedData = props.response.data
  .filter((item: any) => {
    return item.attributes.Name.toLowerCase().includes(filterText.toLowerCase());
  })
  .sort((a: any, b: any) => {
    if (sortOrder === "asc") {
      return a.attributes.Name.localeCompare(b.attributes.Name);
    } else {
      return b.attributes.Name.localeCompare(a.attributes.Name);
    }
  })
  .sort((a: any, b: any) => {
    if (activeTab === "new") {
      return b.attributes.isNew - a.attributes.isNew;
    }
    return 0;
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid sx={{}}>
          <Box
            sx={{
              letterSpacing: "2px",
              marginBottom: "30px",
              pt: "40px",
              paddingBottom: { md: "40px", xs: "30px" },
              position: "relative",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "27px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              {Title} Collection
            </Typography>
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
          <Stack direction={{ md: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent="center" sx={{ marginBottom: "30px", }}>
            <Stack sx={{ flexWrap: "wrap", display: "flex", flexDirection: "row", justifyContent: "center",alignItems:"center" }}>
              <Stack direction="row">
                <Box display="flex" flexDirection="row" sx={{ marginRight: { xs: "15px", sm: "35px", md: "35px" } }}>
                  <Box
                    sx={{
                      width: "30px",
                      height: "30px",
                      position: "relative",
                      mt: "6px",
                    }}
                  >
                    <Image src={"/static/images/colour.svg"} layout="fill" alt={""} style={{}} />
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "16px",
                      textAlign: "center",
                      paddingLeft: "10px",
                      paddingTop: "5px",
                      lineHeight: 2.2,
                      fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                    }}
                  >
                    Colours
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row" sx={{ marginRight: { xs: "15px", sm: "35px", md: "35px" } }}>
                  <Box
                    sx={{
                      width: "30px",
                      height: "30px",
                      position: "relative",
                      mt: "6px",
                    }}
                  >
                    <Image src={"/static/images/sizes.svg"} layout="fill" alt={""} style={{}} />
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "16px",
                      textAlign: "center",
                      paddingLeft: "10px",
                      paddingTop: "5px",
                      lineHeight: 2.2,
                      fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                    }}
                  >
                    Sizes
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row" sx={{ marginRight: { xs: "0px", sm: "35px", md: "35px" } }}>
                  <Box
                    sx={{
                      width: "30px",
                      height: "30px",
                      position: "relative",
                      mt: "6px",
                    }}
                  >
                    <Image src={"/static/images/finishies.svg"} layout="fill" alt={""} style={{}} />
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "16px",
                      textAlign: "center",
                      paddingLeft: "10px",
                      paddingTop: "5px",
                      lineHeight: 2.2,
                      fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol" !important',
                    }}
                  >
                    Finishes
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" sx={{ alignItems:"center",mt:{xs:"15px",sm:"0px",md:"0px"}}}>
                <Box display="flex" flexDirection="row" sx={{ }}>
                  <Button
                    onClick={() => handleTabClick("az")}
                    sx={{
                      py: "0px",
                      pl: "0px",
                      pb:"0px",
                      marginRight: { xs: "15px", sm: "35px", md: "35px" },
                      color: activeTab === "az" ? "black" : "gray",
                      fontWeight: 500,
                      borderBottom: activeTab === "az" ? "3px solid black" : "none",
                      borderRadius: "0px",
                    }}
                  >
                    <Image width={30} height={30} alt="A-Z Icon" src="/static/images/sort-alphabetic-down-svgrepo-com.svg" />
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: "16px",
                        textAlign: "center",
                        paddingLeft: "10px",
                        color: "black",
                        textTransform: "capitalize",

                        fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol" !important',
                      }}
                    >
                      Sort
                    </Typography>
                  </Button>
                  <Button
                    onClick={() => handleTabClick("new")}
                    sx={{
                      py: "0px",
                      pl: "0px",
                      pr: "3px",
                      pb:"3px",
                      color: activeTab === "new" ? "black" : "gray",
                      fontWeight: 500,
                      borderBottom: activeTab === "new" ? "3px solid black" : "none",
                      borderRadius: "0px",
                    }}
                  >
                    <Image width={26} height={26} alt="A-Z Icon" src="/static/images/new-5-svgrepo-com.svg" />
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: "16px",
                        textAlign: "center",
                        paddingLeft: "10px",
                        textTransform: "capitalize",
                        color: "black",
                        fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol" !important',
                      }}
                    >
                      Product
                    </Typography>
                  </Button>
                </Box>
                <Box sx={{ backgroundColor: "white", height: "30px", display: "flex", flexDirection: "row", alignItems: "center",  borderRadius: "8px", justifyContent: "center",marginLeft: { xs: "15px", sm: "35px", md: "35px" }  }}>
                  <SearchOutlinedIcon sx={{fontSize:"30px",mr:"10px"}} />
                <TextField
                  sx={{
                    width: "66px",
                    "& .MuiInputBase-input": {
                      textAlign: "left",
                      fontSize: "16px",
                      p: "0px",
                      height: "30px",
                      fontWeight: "500",
                      color: "black",
                      
                    },
                    "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button": {
                      appearance: "none",
                    },
                  }}
                  variant="standard"
                  InputProps={{
                  }}
                  size="small"
                  placeholder="Search..."
                  value={filterText} 
                  onChange={(e) => setFilterText(e.target.value)}
                />
              </Box>
              </Stack>


            </Stack>
          </Stack>
        </Grid>
        <Grid display="flex" flexDirection="column" sx={{ position: "relative" }}>
          <Grid container spacing={2}>
            {filteredAndSortedData.map((item: any, index: React.Key | null | undefined) => {
              return (
                <Grid item key={index} xs={6} md={3} lg={3}>
                  <Link href={`/range/${item.attributes.products.data[0] ? item.attributes.products.data[0].attributes.Slug : 153}`} key={index} style={{ color: "black", textDecoration: "none" }}>
                    <Box sx={{ cursor: "pointer" }}>
                      <Box
                        sx={{
                          position: "relative",
                          // height: "217.6px",
                          height: "100%",
                          aspectRatio: "1",
                          backgroundColor: "lightGray",
                          overflow: "hidden",
                        }}
                      >
                        {item.attributes.isNew && (
                          <Box
                            sx={{
                              backgroundColor: "black",
                              width: "65px",
                              zIndex: "1",
                              position: "relative",
                              ml: { xs: "5%", md: "5%", lg: "5%" },
                            }}
                          >
                            <Typography
                              sx={{
                                textAlign: "center",
                                color: "white",
                                fontWeight: "bold",
                                fontSize: "14px",
                                letterSpacing: "2px",
                                textDecorationLine: "none !important",
                                fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol" !important',
                              }}
                            >
                              NEW
                            </Typography>
                          </Box>
                        )}
                        <Image layout="fill" alt="ads" src={item.attributes.Image_Thumbnail_350px.data?.attributes.url} />
                        {/* <HoverInProduct /> */}
                      </Box>
                      <Box
                        sx={{
                          backgroundColor: "#F2F1F0",
                          p: 1,
                          textDecoration: "none !important",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "18px",
                            fontWeight: "medium",
                            textDecorationLine: "none !important",
                            textAlign: "center",
                            // paddingBottom: "10px",
                            fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol" !important',
                          }}
                        >
                          {item.attributes.Name}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                          }}
                        >
                          {item.attributes.product_varians.data.length > 0 ? (
                            item.attributes.product_varians.data.map((varian: any, index: number) => {
                              let varianText = varian.attributes.Varian;
                              if (isMobile && (varianText === "Sun Step Stop" || varianText === "Wall Tile Set")) {
                                varianText = varianText === "Sun Step Stop" ? "SSS" : "WTS";
                              }

                              if (index === 0) {
                                return (
                                  <Box key={index} sx={{ justifyContent: "space-between" }}>
                                    <Typography
                                      sx={{
                                        borderRadius: "5px",
                                        color: "white",
                                        fontSize: isSizeLessThan380 ? "10px" : "12px",
                                        fontWeight: "medium",
                                        letterSpacing: "1px",
                                        marginTop: "5px",
                                        textTransform: "uppercase",
                                        backgroundColor: "grey",
                                        border: "1px solid grey",
                                        marginRight: "5px",
                                        px: "4px",
                                        fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                                      }}
                                    >
                                      {varianText}
                                    </Typography>
                                  </Box>
                                );
                              }
                            })
                          ) : (
                            <Typography
                              sx={{
                                borderRadius: "5px",
                                color: "white",
                                fontSize: isSizeLessThan380 ? "10px" : "12px",
                                fontWeight: "medium",
                                letterSpacing: "1px",
                                marginTop: "5px",
                                textTransform: "uppercase",
                                fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                              }}
                            >
                              {"‏‏‎"}
                            </Typography>
                          )}

                          {item.attributes.style_motifs.data.length > 0 ? (
                            <>
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "row",
                                  flexWrap: "wrap",
                                }}
                              >
                                <Typography
                                  sx={{
                                    borderRadius: "5px",
                                    color: "black",
                                    display: "inline-block",
                                    fontSize: isSizeLessThan380 ? "10px" : "12px",
                                    fontWeight: "medium",
                                    letterSpacing: "1px",
                                    marginTop: "5px",
                                    textTransform: "uppercase",
                                    backgroundColor: "white",
                                    border: "1px solid grey",
                                    marginRight: "5px",
                                    px: "4px",
                                    fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                                  }}
                                >
                                  {item.attributes.style_motifs.data[0].attributes.Style}
                                </Typography>
                              </Box>
                              {item.attributes.style_motifs.data.length > 1 && (
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                  }}
                                ></Box>
                              )}
                            </>
                          ) : (
                            <Typography
                              sx={{
                                borderRadius: "5px",
                                color: "black",
                                display: "inline-block",
                                fontSize: "12px",
                                fontWeight: "medium",
                                letterSpacing: "1px",
                                marginTop: "5px",
                                textTransform: "uppercase",
                                px: "4px",
                                fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                              }}
                            >
                              {"‏‏‎"}
                            </Typography>
                          )}
                        </Box>
                        <Box
                          display="flex"
                          flexDirection="row"
                          sx={{
                            marginTop: "12px",
                            borderTop: "1px solid black",
                            justifyContent: "space-around",
                            paddingTop: "12px",
                            right: "10px",
                          }}
                        >
                          <Tooltip title="Colours" arrow>
                            <Box display="flex" flexDirection="row">
                              <Box
                                sx={{
                                  width: "24px",
                                  height: "24px",
                                  position: "relative",
                                  marginRight: "5px",
                                }}
                              >
                                <Image src={"/static/images/colour.svg"} layout="fill" alt={""} style={{}} />
                              </Box>
                              <Typography
                                sx={{
                                  fontSize: "24x",
                                  fontWeight: "medium",
                                  fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                                }}
                              >
                                0{item.attributes.N_Color}
                              </Typography>
                            </Box>
                          </Tooltip>
                          <Tooltip title="Sizes" arrow>
                            <Box display="flex" flexDirection="row">
                              <Box
                                sx={{
                                  width: "23px",
                                  height: "23px",
                                  position: "relative",
                                  marginRight: "5px",
                                }}
                              >
                                <Image src={"/static/images/sizes.svg"} layout="fill" alt={""} style={{}} />
                              </Box>
                              <Typography
                                sx={{
                                  fontSize: "14x",
                                  fontWeight: "medium",
                                  fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                                }}
                              >
                                0{item.attributes.N_Dimension}
                              </Typography>
                            </Box>
                          </Tooltip>
                          <Tooltip title="Finishes" arrow>
                            <Box display="flex" flexDirection="row">
                              <Box
                                sx={{
                                  width: "24px",
                                  height: "24px",
                                  position: "relative",
                                  marginRight: "5px",
                                }}
                              >
                                <Image src={"/static/images/finishies.svg"} layout="fill" alt={""} style={{}} />
                              </Box>
                              <Typography
                                sx={{
                                  fontSize: "14x",
                                  fontWeight: "medium",
                                  fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                                }}
                              >
                                0{item.attributes.N_Finish}
                              </Typography>
                            </Box>
                          </Tooltip>
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
