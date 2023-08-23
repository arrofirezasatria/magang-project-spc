import { Box, Typography, Button, Modal, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Paper } from "@mui/material";
// import { GetStaticProps } from "next";
import React from "react";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";

export default function ModulPacking(props: any) {
  console.log(props.motif.motif.data?.attributes.tile_type.data?.attributes.Type);

  const [isModalOpen, setIsModalOpen] = useState(false);


  let tableDataLocal, tableDataInternational;

  if (props.motif.motif.data?.attributes.tile_type.data?.attributes.Type === "Porcelain") {
    tableDataLocal = [
      {
        size: "30X60",
        Thickness: "9.70",
        Piece: "8",
        Sqmbox: "1.43",
        approxbox: "31.30",
        boxpallet: "40",
        sqmpallet: "57.20",
        approxpallet: "25.27",
        weight: "1277.27",
      },
      {
        size: "60X60",
        Thickness: "9.70",
        Piece: "4",
        Sqmbox: "1.44",
        approxbox: "31.30",
        boxpallet: "40",
        sqmpallet: "57.60",
        approxpallet: "25.27",
        weight: "1277.27",
      },
      {
        size: "120X60",
        Thickness: "11.32",
        Piece: "4",
        Sqmbox: "1.44",
        approxbox: "31.30",
        boxpallet: "56",
        sqmpallet: "80.64",
        approxpallet: "25.27",
        weight: "1957.27",
      },
    ];

    tableDataInternational = [
      {
        size: "30X60",
        Thickness: "9.70",
        Piece: "8",
        Sqmbox: "1.43",
        approxbox: "31.30",
        boxpallet: "40",
        sqmpallet: "57.20",
        approxpallet: "25.27",
        weight: "1277.27",
      },
      {
        size: "60X60",
        Thickness: "9.70",
        Piece: "4",
        Sqmbox: "1.44",
        approxbox: "31.30",
        boxpallet: "40",
        sqmpallet: "57.60",
        approxpallet: "25.27",
        weight: "1277.27",
      },

      {
        size: "120X60",
        Thickness: "11.30",
        Piece: "2",
        Sqmbox: "1.44",
        approxbox: "34.50",
        boxpallet: "26",
        sqmpallet: "37.44",
        approxpallet: "25.27",
        weight: "922.27",
      },
    ];
  } else if (props.motif.motif.data?.attributes.tile_type.data?.attributes.Type === "Sun Glazed") {
    tableDataLocal = [
      {
        size: "29.8X60",
        Thickness: "10.1",
        Piece: "6",
        Sqmbox: "1.08",
        approxbox: "19.32",
        boxpallet: "56",
        sqmpallet: "60.48",
        approxpallet: "25.27",
        weight: "1107.19",
      },
      {
        size: "60X60",
        Thickness: "10.1",
        Piece: "4",
        Sqmbox: "1.44",
        approxbox: "28.12",
        boxpallet: "40",
        sqmpallet: "57.60",
        approxpallet: "25.27",
        weight: "1150.07",
      },
    ];

    tableDataInternational = [];
  }

  return (
    <>
      <Box
      >
        <Button
          onClick={() => setIsModalOpen(true)}
          sx={{
            border: "2px solid black",
            my: "8px",
            height: "28px",
            typography: {
              fontWeight: "medium", 
              color: "black",
              letterSpacing: 1, 
              fontSize: "14px",
              textTransform: "lowercase",
            },
          }}
        >
          click for full packing details
        </Button>
        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "1200px",
              border: "1px solid #000",
              backgroundColor: "white",
              overflow: "scroll",
              height:"100vh"
            }}
          >
            <Box>
              <Box
                sx={{
                  justifyContent: "space-between",
                  display: "flex",
                  flexDirection: "row",
                  ml: "30px",
                }}
              >
                <Box sx={{ mt: "30px", display: "flex", flexDirection: "row" }}>
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      position: "relative",
                    }}
                  >
                    <Image src={props.name.Image_Tile_Face.data[0]?.attributes?.formats?.large?.url} fill alt={""} style={{}} />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "21px",
                        color: "black",
                        mx: "15px",
                        fontWeight: "bold",
                        mt: "7px",
                      }}
                    >
                      {props.name.Name}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    mt: "35px",
                    backgroundColor: "black",
                    mr: "30px",
                    borderRadius: "10px",
                  }}
                >
                  <Button onClick={() => setIsModalOpen(false)}>
                    <Typography sx={{ color: "white" }}>Close</Typography>
                    <CloseIcon sx={{ ml: "10px", mt: "3px", color: "white" }} />
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  mr: { xs: "27px" },
                  mt: "40px",
                  ml: "30px",
                }}
              >
                <span
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                    textTransform: "uppercase",
                    fontSize: "16px",
                  }}
                >
                  Packing Details {props.motif.motif.data?.attributes.tile_type.data?.attributes.Type} local {"/ "}
                </span>
                <span
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                    fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                    textTransform: "uppercase",
                    fontSize: "16px",
                  }}
                >
                  detail pengemasan {props.motif.motif.data?.attributes.tile_type.data?.attributes.Type} lokal
                </span>
              </Box>

              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mx: "30px",
                    my: "30px",
                  }}
                >
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              fontSize: "14px",
                              textAlign: "center",
                            }}
                          >
                            {"Size (CM)"}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              fontSize: "14px",
                              textAlign: "center",
                            }}
                          >
                            {"Thickness (MM)"}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              fontSize: "14px",
                              textAlign: "center",
                            }}
                          >
                            {"Piece Box"}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              fontSize: "14px",
                              textAlign: "center",
                            }}
                          >
                            {"SQM BOX"}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              fontSize: "14px",
                              textAlign: "center",
                            }}
                          >
                            {"Approx.Weight Box (KG)"}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              fontSize: "14px",
                              textAlign: "center",
                            }}
                          >
                            {"Box Pallet"}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              fontSize: "14px",
                              textAlign: "center",
                            }}
                          >
                            {"SQM Pallet"}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              fontSize: "14px",
                              textAlign: "center",
                            }}
                          >
                            {"Approx.Weight Pallet (KG)"}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              fontSize: "14px",
                              textAlign: "center",
                            }}
                          >
                            {"Weight Including Empty Pallet (KG)"}
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {tableDataLocal?.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell sx={{ textAlign: "center", padding: "8px" }}>{item.size}</TableCell>
                            <TableCell sx={{ textAlign: "center", padding: "8px" }}>{item.Thickness}</TableCell>
                            <TableCell sx={{ textAlign: "center", padding: "8px" }}>{item.Piece}</TableCell>
                            <TableCell sx={{ textAlign: "center", padding: "8px" }}>{item.Sqmbox}</TableCell>
                            <TableCell sx={{ textAlign: "center", padding: "8px" }}>{item.approxbox}</TableCell>
                            <TableCell sx={{ textAlign: "center", padding: "8px" }}>{item.boxpallet}</TableCell>
                            <TableCell sx={{ textAlign: "center", padding: "8px" }}>{item.sqmpallet}</TableCell>
                            <TableCell sx={{ textAlign: "center", padding: "8px" }}>{item.approxpallet}</TableCell>
                            <TableCell sx={{ textAlign: "center", padding: "8px" }}>{item.weight}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Box>
              <Box
                sx={{
                  mr: { xs: "27px" },
                  mt: "60px",
                  ml: "30px",
                  display: props.motif.motif.data?.attributes.tile_type.data?.attributes.Type === "Porcelain" ? "" : "none ",
                }}
              >
                <span
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                    textTransform: "uppercase",
                    fontSize: "16px",
                  }}
                >
                  Packing Details {props.motif.motif.data?.attributes.tile_type.data?.attributes.Type} International {"/ "}
                </span>
                <span
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                    fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                    textTransform: "uppercase",
                    fontSize: "16px",
                  }}
                >
                  detail pengemasan {props.motif.motif.data?.attributes.tile_type.data?.attributes.Type} Internasional
                </span>
              </Box>

              <Box>
                <Box
                  sx={{
                    display: props.motif.motif.data?.attributes.tile_type.data?.attributes.Type === "Porcelain" ? "flex" : "none ",
                    alignItems: "center",
                    mx: "30px",
                    my: "30px",
                  }}
                >
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              fontSize: "14px",
                              textAlign: "center",
                            }}
                          >
                            {"Size (CM)"}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              fontSize: "14px",
                              textAlign: "center",
                            }}
                          >
                            {"Thickness (MM)"}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              fontSize: "14px",
                              textAlign: "center",
                            }}
                          >
                            {"Piece Box"}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              fontSize: "14px",
                              textAlign: "center",
                            }}
                          >
                            {"SQM BOX"}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              fontSize: "14px",
                              textAlign: "center",
                            }}
                          >
                            {"Approx.Weight Box (KG)"}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              fontSize: "14px",
                              textAlign: "center",
                            }}
                          >
                            {"Box Pallet"}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              fontSize: "14px",
                              textAlign: "center",
                            }}
                          >
                            {"SQM Pallet"}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              fontSize: "14px",
                              textAlign: "center",
                            }}
                          >
                            {"Approx.Weight Pallet (KG)"}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              fontSize: "14px",
                              textAlign: "center",
                            }}
                          >
                            {"Weight Including Empty Pallet (KG)"}
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {
                          // @ts-ignore
                          tableDataInternational?.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell sx={{ textAlign: "center", padding: "8px" }}>
                                {
                                  // @ts-ignore
                                  item.size
                                }
                              </TableCell>
                              <TableCell sx={{ textAlign: "center", padding: "8px" }}>
                                {
                                  // @ts-ignore
                                  item.Thickness
                                }
                              </TableCell>
                              <TableCell sx={{ textAlign: "center", padding: "8px" }}>
                                {
                                  // @ts-ignore
                                  item.Piece
                                }
                              </TableCell>
                              <TableCell sx={{ textAlign: "center", padding: "8px" }}>
                                {
                                  // @ts-ignore
                                  item.Sqmbox
                                }
                              </TableCell>
                              <TableCell sx={{ textAlign: "center", padding: "8px" }}>
                                {
                                  // @ts-ignore
                                  item.approxbox
                                }
                              </TableCell>
                              <TableCell sx={{ textAlign: "center", padding: "8px" }}>
                                {
                                  // @ts-ignore
                                  item.boxpallet
                                }
                              </TableCell>
                              <TableCell sx={{ textAlign: "center", padding: "8px" }}>
                                {
                                  // @ts-ignore
                                  item.sqmpallet
                                }
                              </TableCell>
                              <TableCell sx={{ textAlign: "center", padding: "8px" }}>
                                {
                                  // @ts-ignore
                                  item.approxpallet
                                }
                              </TableCell>
                              <TableCell sx={{ textAlign: "center", padding: "8px" }}>
                                {
                                  // @ts-ignore
                                  item.weight
                                }
                              </TableCell>
                            </TableRow>
                          ))
                        }
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Box>
    </>
  );
}
