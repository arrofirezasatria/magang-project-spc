import {
  Box,
  Typography,
  Button,
  Modal,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
} from "@mui/material";
// import { GetStaticProps } from "next";
import React from "react";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";

// @ts-ignore
export default function ModulSpec(props) {
  console.log("ini modulspec");
  console.log(
    props.name.Name

  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageUrl = props.name.Image_Tile_Face.data?.[0]?.attributes?.formats?.large?.url || "/No data";
  const tileType =
    props.motif.motif.data?.attributes.tile_type.data?.attributes.Type;

  let tableData: any[];

  if (tileType === "Porcelain") {
    tableData = [
      {
        namanavbar: "Dimension (Length & width)",
        persen: "%",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                position: "relative",
                mt: "3px",
              }}
            >
              <Image
                src={"/static/images/Plus_or_minus_symbol.svg"}
                fill
                alt={""}
                style={{}}
              />
            </Box>
            <Typography sx={{ fontSize: "12px" }}>0.3</Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                position: "relative",
                mt: "3px",
              }}
            >
              <Image
                src={"/static/images/Plus_or_minus_symbol.svg"}
                fill
                alt={""}
                style={{}}
              />
            </Box>
            <Typography sx={{ fontSize: "12px" }}>0.1</Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Thickness",
        persen: "%",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                position: "relative",
                mt: "3px",
              }}
            >
              <Image
                src={"/static/images/Plus_or_minus_symbol.svg"}
                fill
                alt={""}
                style={{}}
              />
            </Box>
            <Typography sx={{ fontSize: "12px" }}>5.0</Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                position: "relative",
                mt: "3px",
              }}
            >
              <Image
                src={"/static/images/Plus_or_minus_symbol.svg"}
                fill
                alt={""}
                style={{}}
              />
            </Box>
            <Typography sx={{ fontSize: "12px" }}>3.0</Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Straigness Of Sides",
        persen: "%",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                position: "relative",
                mt: "3px",
              }}
            >
              <Image
                src={"/static/images/Plus_or_minus_symbol.svg"}
                fill
                alt={""}
                style={{}}
              />
            </Box>
            <Typography sx={{ fontSize: "12px" }}>0.3</Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                position: "relative",
                mt: "3px",
              }}
            >
              <Image
                src={"/static/images/Plus_or_minus_symbol.svg"}
                fill
                alt={""}
                style={{}}
              />
            </Box>
            <Typography sx={{ fontSize: "12px" }}>0.1</Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Rectangularity",
        persen: "%",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                position: "relative",
                mt: "3px",
              }}
            >
              <Image
                src={"/static/images/Plus_or_minus_symbol.svg"}
                fill
                alt={""}
                style={{}}
              />
            </Box>
            <Typography sx={{ fontSize: "12px" }}>0.3</Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                position: "relative",
                mt: "3px",
              }}
            >
              <Image
                src={"/static/images/Plus_or_minus_symbol.svg"}
                fill
                alt={""}
                style={{}}
              />
            </Box>
            <Typography sx={{ fontSize: "12px" }}>0.2</Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Center Curvature",
        persen: "%",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                position: "relative",
                mt: "3px",
              }}
            >
              <Image
                src={"/static/images/Plus_or_minus_symbol.svg"}
                fill
                alt={""}
                style={{}}
              />
            </Box>
            <Typography sx={{ fontSize: "12px" }}>0.4</Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                position: "relative",
                mt: "3px",
              }}
            >
              <Image
                src={"/static/images/Plus_or_minus_symbol.svg"}
                fill
                alt={""}
                style={{}}
              />
            </Box>
            <Typography sx={{ fontSize: "12px" }}>0.2</Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Edge Curvature",
        persen: "%",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                position: "relative",
                mt: "3px",
              }}
            >
              <Image
                src={"/static/images/Plus_or_minus_symbol.svg"}
                fill
                alt={""}
                style={{}}
              />
            </Box>
            <Typography sx={{ fontSize: "12px" }}>0.4</Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                position: "relative",
                mt: "3px",
              }}
            >
              <Image
                src={"/static/images/Plus_or_minus_symbol.svg"}
                fill
                alt={""}
                style={{}}
              />
            </Box>
            <Typography sx={{ fontSize: "12px" }}>0.2</Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Werpage",
        persen: "%",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                position: "relative",
                mt: "3px",
              }}
            >
              <Image
                src={"/static/images/Plus_or_minus_symbol.svg"}
                fill
                alt={""}
                style={{}}
              />
            </Box>
            <Typography sx={{ fontSize: "12px" }}>0.4</Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                position: "relative",
                mt: "3px",
              }}
            >
              <Image
                src={"/static/images/Plus_or_minus_symbol.svg"}
                fill
                alt={""}
                style={{}}
              />
            </Box>
            <Typography sx={{ fontSize: "12px" }}>0.2</Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Water Absorption",
        persen: "%",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography
              sx={{ fontSize: "12px", fontStyle: "italic", fontWeight: "bold" }}
            >
              E
            </Typography>
            <Typography sx={{ fontSize: "8px", mt: "5px" }}>v</Typography>
            <Typography sx={{ fontSize: "12px" }}>≤0.5</Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography
              sx={{ fontSize: "12px", fontStyle: "italic", fontWeight: "bold" }}
            >
              E
            </Typography>
            <Typography sx={{ fontSize: "8px", mt: "5px" }}>v</Typography>
            <Typography sx={{ fontSize: "12px" }}>≤0.5</Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Breaking Strength",
        persen: "N",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px" }}>Not les than 1300</Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px" }}>Min. 1300</Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Resistance to Staning",
        persen: "%",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px" }}>Min Class 3</Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px" }}>Min Class 3</Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Modulus Of Repture",
        persen: "N/mm2",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
              Minimum 35 individual Minumim
            </Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
              Minimum 35 individual Minumim
            </Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Crazing Resistance",
        persen: "",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
              Required
            </Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
              No Crazing
            </Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Abrasive Resistance",
        persen: "",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
              Report Abrasion Class And Cycles Passed
            </Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
              Min. Class 3 600 Cycles Passed
            </Typography>
          </Box>
        ),
      },
    ];
  } else if (tileType === "Sun Glazed") {
    tableData = [
      {
        namanavbar: "Dimension (Length & width)",
        persen: "%",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                position: "relative",
                mt: "3px",
              }}
            >
              <Image
                src={"/static/images/Plus_or_minus_symbol.svg"}
                fill
                alt={""}
                style={{}}
              />
            </Box>
            <Typography sx={{ fontSize: "12px" }}>0.3</Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                position: "relative",
                mt: "3px",
              }}
            >
              <Image
                src={"/static/images/Plus_or_minus_symbol.svg"}
                fill
                alt={""}
                style={{}}
              />
            </Box>
            <Typography sx={{ fontSize: "12px" }}>0.2</Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Thickness",
        persen: "%",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                position: "relative",
                mt: "3px",
              }}
            >
              <Image
                src={"/static/images/Plus_or_minus_symbol.svg"}
                fill
                alt={""}
                style={{}}
              />
            </Box>
            <Typography sx={{ fontSize: "12px" }}>10</Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                position: "relative",
                mt: "3px",
              }}
            >
              <Image
                src={"/static/images/Plus_or_minus_symbol.svg"}
                fill
                alt={""}
                style={{}}
              />
            </Box>
            <Typography sx={{ fontSize: "12px" }}>5</Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Straigness Of Sides",
        persen: "%",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                position: "relative",
                mt: "3px",
              }}
            >
              <Image
                src={"/static/images/Plus_or_minus_symbol.svg"}
                fill
                alt={""}
                style={{}}
              />
            </Box>
            <Typography sx={{ fontSize: "12px" }}>0.3</Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                position: "relative",
                mt: "3px",
              }}
            >
              <Image
                src={"/static/images/Plus_or_minus_symbol.svg"}
                fill
                alt={""}
                style={{}}
              />
            </Box>
            <Typography sx={{ fontSize: "12px" }}>0.2</Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Rectangularity",
        persen: "%",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                position: "relative",
                mt: "3px",
              }}
            >
              <Image
                src={"/static/images/Plus_or_minus_symbol.svg"}
                fill
                alt={""}
                style={{}}
              />
            </Box>
            <Typography sx={{ fontSize: "12px" }}>0.3</Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                position: "relative",
                mt: "3px",
              }}
            >
              <Image
                src={"/static/images/Plus_or_minus_symbol.svg"}
                fill
                alt={""}
                style={{}}
              />
            </Box>
            <Typography sx={{ fontSize: "12px" }}>0.2</Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Center Curvature",
        persen: "%",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px" }}>-0.3 to +0.4</Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px" }}>-0.1 to +0.3</Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Edge Curvature",
        persen: "%",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px" }}>-0.3 to +0.4</Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px" }}>-0.1 to +0.3</Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Werpage",
        persen: "%",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                position: "relative",
                mt: "3px",
              }}
            >
              <Image
                src={"/static/images/Plus_or_minus_symbol.svg"}
                fill
                alt={""}
                style={{}}
              />
            </Box>
            <Typography sx={{ fontSize: "12px" }}>0.4</Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px" }}>-0.2 ti +0.1</Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Water Absorption",
        persen: "%",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography
              sx={{ fontSize: "12px", fontStyle: "italic", fontWeight: "bold" }}
            >
              E
            </Typography>
            <Typography sx={{ fontSize: "8px", mt: "5px" }}>v</Typography>
            <Typography sx={{ fontSize: "12px" }}>{">10"}</Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography
              sx={{ fontSize: "12px", fontStyle: "italic", fontWeight: "bold" }}
            >
              E
            </Typography>
            <Typography sx={{ fontSize: "8px", mt: "5px" }}>v</Typography>
            <Typography sx={{ fontSize: "12px" }}>{">10"}</Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Breaking Strength",
        persen: "N",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px" }}>Not les than 600</Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px" }}>Min. 600</Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Resistance to Staning",
        persen: "%",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px" }}>Min Class 3</Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px" }}>Min Class 3</Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Modulus Of Repture",
        persen: "N/mm2",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
              Min 12
            </Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
              Min 13
            </Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Crazing Resistance",
        persen: "",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
              Required
            </Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
              There Must Be No Crazing
            </Typography>
          </Box>
        ),
      },
      {
        namanavbar: "Abrasive Resistance",
        persen: "",
        isoukuran: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
              Report Abrasion Class And Cycles Passed
            </Typography>
          </Box>
        ),
        sunpower: (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
              Min. Class 3 600 Cycles Passed
            </Typography>
          </Box>
        ),
      },
    ];
  } else {
    tableData = [];
  }

  return (
    <>
      <Box
        sx={
          {
          }
        }
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
              fontSize: { sm: "16px", xs: "12px" },
              textTransform: "lowercase",
            },
          }}
        >
          <Typography sx={{
            display: { xs:"flex",sm:"flex",md: "flex", lg: "none" }, fontWeight: "medium",
            color: "black",
            letterSpacing: 1,
            fontSize: "14px",
            textTransform: "lowercase",
          }}>View</Typography>
          <Typography sx={{
            display: { xs:"none",sm:"none",md: "none", lg: "flex" },
            fontWeight: "medium",
            color: "black",
            letterSpacing: 1,
            fontSize: "14px",
            textTransform: "lowercase",
          }}>click for full specification</Typography>

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
              height: "100vh",
              overflow: "scroll",
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
                    <Image
                      src={
                        imageUrl
                      }
                      fill
                      alt={""}
                      style={{}}
                    />
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
                    >{props.name.Name}
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
                  <Button onClick={() => setIsModalOpen(false)} sx={{}}>
                    <Typography sx={{ color: "white" }}>Close</Typography>
                    <CloseIcon sx={{ ml: "10px", mt: "3px", color: "white" }} />
                  </Button>
                </Box>
              </Box>
              <Box>
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
                      fontFamily:
                        '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                      textTransform: "uppercase",
                      fontSize: "16px",
                    }}
                  >
                    {"Technical Specification & Features / "}
                  </span>
                  <span
                    style={{
                      color: "gray",
                      fontWeight: "bold",
                      fontFamily:
                        '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                      textTransform: "uppercase",
                      fontSize: "16px",
                    }}
                  >
                    {" Specifikasi & Fitur Teknis "}
                  </span>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mx: "30px",
                    my: "30px",
                  }}
                >
                  <Box sx={{ backgroundColor: "black", width: "100%" }}>
                    <Typography
                      sx={{
                        color: "white",
                        textAlign: "center",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                      }}
                    >
                      {
                        props.motif.motif.data?.attributes.tile_type.data
                          ?.attributes.Type
                      }
                    </Typography>
                  </Box>
                  <TableContainer component={Paper} sx={{ maxHeight: "70vh" }}>
                    <Table sx={{ height: "90%", overflow: "scroll" }}>
                      <TableHead>
                        <TableRow>
                          <TableCell>Description</TableCell>
                          <TableCell align="center">Persen</TableCell>
                          <TableCell
                            sx={{
                              textAlign: "center",
                              verticalAlign: "middle",
                            }}
                          >
                            Iso 130006
                          </TableCell>
                          <TableCell
                            sx={{
                              textAlign: "center",
                              verticalAlign: "middle",
                            }}
                          >
                            Sunpower
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {tableData.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>{item.namanavbar}</TableCell>
                            <TableCell align="center">{item.persen}</TableCell>
                            <TableCell
                              sx={{
                                textAlign: "center",
                                verticalAlign: "middle",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                {item.isoukuran}
                              </div>
                            </TableCell>
                            <TableCell
                              sx={{
                                textAlign: "center",
                                verticalAlign: "middle",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                {item.sunpower}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
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
