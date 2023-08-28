import { Box, Tabs, Tab, Container, Grid, Stack, Typography, Button, FormControl, Select, MenuItem, InputLabel, Tooltip } from "@mui/material";
// import { GetStaticProps } from "next";
import React from "react";
import Image from "next/image";
import HoverInProduct from "@components/pages/range/hoverInProduct";
import FilterListIcon from "@mui/icons-material/FilterList";
import { DropdownFilter } from "data/navbarHeader/Navbar";
import { useState } from "react";
import Link from "next/link";

export default function ProductRange({ props }: any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [showNewItems, setShowNewItems] = useState(false);

  const filteredAndSortedData = props.response.data
    .sort((a: any, b: any) => (sortOrder === "asc" ? a.attributes.Name.localeCompare(b.attributes.Name) : b.attributes.Name.localeCompare(a.attributes.Name)))
    .sort((a: any, b: any) => {
      if (showNewItems) {
        return b.attributes.isNew - a.attributes.isNew; // Show new items first
      }
      return 0;
    });
  return (
    <>
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
          {/* <Typography sx={{ fontSize: "27px", fontWeight: "bold" }}>
            PRODUCT RANGES: CONCRETE
          </Typography> */}
        </Box>
        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent="space-between" sx={{ marginBottom: "30px" }}>
          <Stack direction="row">
            <Box display="flex" flexDirection="row" sx={{ marginRight: "35px" }}>
              <Box
                sx={{
                  width: "30px",
                  height: "30px",
                  position: "relative",
                  mt: "6px",
                }}
              >
                <Image src={"/static/images/colours-removebg-preview.svg"} fill alt={""} style={{}} />
              </Box>
              <Typography
                sx={{
                  fontWeight: "medium",
                  fontSize: "16px",
                  textAlign: "center",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  lineHeight: 2.2,
                }}
              >
                Colours
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row" sx={{ marginRight: "35px" }}>
              <Box
                sx={{
                  width: "30px",
                  height: "30px",
                  position: "relative",
                  mt: "6px",
                }}
              >
                <Image src={"/static/images/style-removebg-preview.svg"} fill alt={""} style={{}} />
              </Box>
              <Typography
                sx={{
                  fontWeight: "medium",
                  fontSize: "16px",
                  textAlign: "center",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  lineHeight: 2.2,
                }}
              >
                Sizes
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row">
              <Box
                sx={{
                  width: "30px",
                  height: "30px",
                  position: "relative",
                  mt: "6px",
                }}
              >
                <Image src={"/static/images/finishes-removebg-preview.svg"} fill alt={""} style={{}} />
              </Box>
              <Typography
                sx={{
                  fontWeight: "medium",
                  fontSize: "16px",
                  textAlign: "center",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  lineHeight: 2.2,
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
                    fontSize: { xs: "14px", md: "16px" },
                    textAlign: "center",
                    paddingTop: "5px",
                    color: "black",
                    lineHeight: 2.2,
                  }}
                >
                  Sort ranges by:
                </Typography>
              </Box>
              <Tabs
                value={showNewItems ? "new" : "az"}
                onChange={(event, newValue) => (newValue === "new" ? setShowNewItems(true) : setShowNewItems(false))}
                TabIndicatorProps={{
                  style: {
                    height: 1, // Set the height of the tab indicator (active indicator line)
                  },
                }}
                sx={{}}
              >
                <Tab sx={{ minWidth: 30, p: "0px 20px", color: "black" }} label="A-Z" value="az" />
                <Tab sx={{ minWidth: 30, p: "0px 20px", color: "black" }} label="NEW" value="new" />
              </Tabs>
              <Button
                onClick={() => setOpen(!open)}
                sx={{
                  display: "none",
                  marginLeft: { xs: "10px", md: "40px" },
                  backgroundColor: "#F2F1F0",
                  p: "5px",
                  borderRadius: "5px",
                  border: "0.5px solid #000",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "medium",
                    fontSize: { xs: "14px", md: "16px" },
                    textAlign: "center",
                  }}
                >
                  FILTERS
                </Typography>
                <FilterListIcon
                  sx={{
                    marginLeft: "13px",
                    fontSize: { xs: "18px", md: "23px" },
                  }}
                />
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
            <Grid container spacing={2} sx={{ px: "24px", my: 2, mb: "80px" }}>
              {DropdownFilter.map((filter, index) => (
                <Grid item key={index} xs={6} md={4}>
                  <Box sx={{}}>
                    <FormControl
                      sx={{
                        backgroundColor: "rgba(242, 241, 240) !important",
                      }}
                      fullWidth
                    >
                      <InputLabel sx={{ backgroundColor: "rgba(242, 241, 240)" }} id={`filter-label-${index}`}>
                        {filter.nama}
                      </InputLabel>
                      <Select
                        sx={{
                          backgroundColor: "rgba(242, 241, 240) !important",
                          color: "#000",
                          fontWeight: "medium",
                        }}
                        labelId={`filter-label-${index}`}
                        id={`filter-select-${index}`}
                        label={filter.nama}
                      >
                        {filter.Subitem.map((subitem, subindex) => (
                          <MenuItem
                            sx={{
                              backgroundColor: "rgba(242, 241, 240)",
                              color: "grey",
                              "&:hover": {
                                fontWeight: "medium",
                                color: "#000",
                                cursor: "pointer",
                              },
                            }}
                            key={subindex}
                            value={subitem}
                          >
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
          {filteredAndSortedData.map((item: any, index: React.Key | null | undefined) => {
            return (
              <Grid item key={index} xs={6} sm={4} md={3} lg={2.4}>
                <Link href={`/range/${item.id}`} key={index} style={{ color: "black", textDecoration: "none" }}>
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
                            }}
                          >
                            NEW
                          </Typography>
                        </Box>
                      )}
                      <Image fill alt="ads" src={item.attributes.Image_Thumbnail_350px.data?.attributes.url} />

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
                        }}
                      >
                        {item.attributes.Name}
                      </Typography>
                      <Box sx={{ display: "flex", flexDirection: "row" }}>
                        {item.attributes.product_varians.data.length > 0 ? (
                          <Box key={index} sx={{ justifyContent: "space-between" }}>
                            {item.attributes.product_varians.data.map((varian: any, index: number) => {
                              if (index === 0) {
                                return (
                                  <Tooltip
                                    arrow
                                    key={index}
                                    title={
                                      item.attributes.product_varians.data.length > 1
                                        ? item.attributes.product_varians.data
                                            .slice(1)
                                            .map((v: any) => v.attributes.Varian)
                                            .join(", ")
                                        : ""
                                    }
                                  >
                                    <Typography
                                      sx={{
                                        borderRadius: "5px",
                                        color: "white",
                                        fontSize: "10px",
                                        fontWeight: "medium",
                                        letterSpacing: "1px",
                                        marginTop: "5px",
                                        textTransform: "uppercase",
                                        backgroundColor: "grey",
                                        border: "1px solid grey",
                                        marginRight: "5px",
                                        px: "4px",
                                      }}
                                    >
                                      {varian.attributes.Varian}
                                    </Typography>
                                  </Tooltip>
                                );
                              } else {
                                return null;
                              }
                            })}
                          </Box>
                        ) : (
                          <Typography
                            sx={{
                              borderRadius: "5px",
                              color: "white",
                              fontSize: "10px",
                              fontWeight: "medium",
                              letterSpacing: "1px",
                              marginTop: "5px",
                              textTransform: "uppercase",
                              px: "4px",
                            }}
                          >
                            {"‏‏‎"}
                          </Typography>
                        )}

                        {item.attributes.style_motifs.data.length > 0 ? (
                          <Box key={index} sx={{ justifyContent: "space-between" }}>
                            {item.attributes.style_motifs.data.map((style: any, index: number) => {
                              if (index === 0) {
                                return (
                                  <Tooltip
                                    arrow
                                    key={index}
                                    title={
                                      item.attributes.style_motifs.data.length > 1
                                        ? item.attributes.style_motifs.data
                                            .slice(1)
                                            .map((v: any) => v.attributes.Style)
                                            .join(", ")
                                        : ""
                                    }
                                  >
                                    <Typography
                                      sx={{
                                        borderRadius: "5px",
                                        color: "black",
                                        display: "inline-block",
                                        fontSize: "10px",
                                        fontWeight: "medium",
                                        letterSpacing: "1px",
                                        marginTop: "5px",
                                        textTransform: "uppercase",
                                        backgroundColor: "white",
                                        border: "1px solid grey",
                                        marginRight: "5px",
                                        px: "4px",
                                      }}
                                    >
                                      {style.attributes.Style}
                                    </Typography>
                                  </Tooltip>
                                );
                              } else {
                                return null;
                              }
                            })}
                          </Box>
                        ) : (
                          <Typography
                            sx={{
                              borderRadius: "5px",
                              color: "white",
                              fontSize: "10px",
                              fontWeight: "medium",
                              letterSpacing: "1px",
                              marginTop: "5px",
                              textTransform: "uppercase",
                              px: "4px",
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
                          justifyContent: "space-between",
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
                              <Image src={"/static/images/colours-removebg-preview.svg"} fill alt={""} style={{}} />
                            </Box>
                            <Typography sx={{ fontSize: "24x", fontWeight: "medium" }}>0{item.attributes.N_Color}</Typography>
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
                              <Image src={"/static/images/style-removebg-preview.svg"} fill alt={""} style={{}} />
                            </Box>
                            <Typography sx={{ fontSize: "14x", fontWeight: "medium" }}>0{item.attributes.N_Dimension}</Typography>
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
                              <Image src={"/static/images/finishes-removebg-preview.svg"} fill alt={""} style={{}} />
                            </Box>
                            <Typography sx={{ fontSize: "14x", fontWeight: "medium" }}>0{item.attributes.N_Finish}</Typography>
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
    </>
  );
}
