import { Box, Container, Grid, Stack, Typography, Button, Modal, FormControl, InputLabel, MenuItem, Select, Link, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Paper } from "@mui/material";
// import { GetStaticProps } from "next";
import React from "react";
import axios from "axios";
import { data } from "cypress/types/jquery";
import useSWR from "swr";
import Image from "next/image";
import CloseIcon from '@mui/icons-material/Close';

import { useState } from "react";

export default function ModulPacking() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tablelocal = [
    {
      size: "60X60",
      Thickness: "9.70",
      Piece: "4",
      Sqmbox: "1.44",
      approxbox: "31.30",
      boxpallet: "40",
      sqmpallet: "57.60",
      approxpallet: "25.27",
      weight: "1.277.27",
    },
  ];
  const tableinternational = [
    {
      size: "60X60",
      Thickness: "9.70",
      Piece: "4",
      Sqmbox: "1.44",
      approxbox: "31.30",
      boxpallet: "40",
      sqmpallet: "57.60",
      approxpallet: "25.27",
      weight: "1.277.27",
    },
  ];

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "100px", flexDirection: "column" }}>
        <Button onClick={() => setIsModalOpen(true)} sx={{ width: "300px", backgroundColor: "salmon" }}>
          <Typography>tolong diclick</Typography>
        </Button>
        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          // Styling for the modal
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "1200px", border: "1px solid #000", backgroundColor: "white", overflow: "scroll" }}>
            <Box > 
              <Box sx={{width:"100%", justifyContent:"space-between", display:"flex",flexDirection:"row",ml:"30px"}}>
                <Box sx={{ mt: "30px", display: "flex", flexDirection: "row" }}>
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      position: "relative",
                    }}
                  >
                    <Image src={"/static/images/bianco_BIA01A_white_marble_matt_600x300mm.jpg.275x275_q85_crop_upscale.jpg"} fill alt={""} style={{}} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "21px", color: "black", mx: "15px", fontWeight: "bold", mt: "7px" }}>White Marble</Typography>
                  </Box>
                </Box>
                <Box sx={{mt:"35px", backgroundColor:"black",mr:"50px"}}>
                  <Button onClick={() => setIsModalOpen(false)}>
                    <Typography sx={{color:"white"}}>Close</Typography>
                    <CloseIcon sx={{ml:"10px",mt:"3px", color:"white"}} />
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
                  {"Packing Details porcelain local / "}
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
                  {" detail pengemasan porcelain lokal "}
                </span>
              </Box>

              <Box>
                <Box sx={{ display: "flex", alignItems: "center", mx: "30px", my: "30px" }}>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "14px", textAlign: "center" }}>{"Size (CM)"}</TableCell>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "14px", textAlign: "center" }}>{"Thickness (MM)"}</TableCell>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "14px", textAlign: "center" }}>{"Piece Box"}</TableCell>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "14px", textAlign: "center" }}>{"SQM BOX"}</TableCell>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "14px", textAlign: "center" }}>{"Approx.Weight Box (KG)"}</TableCell>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "14px", textAlign: "center" }}>{"Box Pallet"}</TableCell>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "14px", textAlign: "center" }}>{"SQM Pallet"}</TableCell>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "14px", textAlign: "center" }}>{"Approx.Weight Pallet (KG)"}</TableCell>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "14px", textAlign: "center" }}>{"Weight Including Empty Pallet (KG)"}</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {tablelocal.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>{item.size}</TableCell>
                            <TableCell align="center">{item.Thickness}</TableCell>
                            <TableCell align="center">{item.Piece}</TableCell>
                            <TableCell>{item.Sqmbox}</TableCell>
                            <TableCell align="center">{item.approxbox}</TableCell>
                            <TableCell align="center">{item.boxpallet}</TableCell>
                            <TableCell align="center">{item.sqmpallet}</TableCell>
                            <TableCell align="center">{item.approxpallet}</TableCell>
                            <TableCell align="center">{item.weight}</TableCell>
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
                  {"Packing Details porcelain International / "}
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
                  {" detail pengemasan porcelain Internasional "}
                </span>
              </Box>

              <Box>
                <Box sx={{ display: "flex", alignItems: "center", mx: "30px", my: "30px" }}>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "14px", textAlign: "center" }}>{"Size (CM)"}</TableCell>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "14px", textAlign: "center" }}>{"Thickness (MM)"}</TableCell>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "14px", textAlign: "center" }}>{"Piece Box"}</TableCell>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "14px", textAlign: "center" }}>{"SQM BOX"}</TableCell>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "14px", textAlign: "center" }}>{"Approx.Weight Box (KG)"}</TableCell>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "14px", textAlign: "center" }}>{"Box Pallet"}</TableCell>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "14px", textAlign: "center" }}>{"SQM Pallet"}</TableCell>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "14px", textAlign: "center" }}>{"Approx.Weight Pallet (KG)"}</TableCell>
                          <TableCell sx={{ fontWeight: "bold", fontSize: "14px", textAlign: "center" }}>{"Weight Including Empty Pallet (KG)"}</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {tableinternational.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>{item.size}</TableCell>
                            <TableCell align="center">{item.Thickness}</TableCell>
                            <TableCell align="center">{item.Piece}</TableCell>
                            <TableCell>{item.Sqmbox}</TableCell>
                            <TableCell align="center">{item.approxbox}</TableCell>
                            <TableCell align="center">{item.boxpallet}</TableCell>
                            <TableCell align="center">{item.sqmpallet}</TableCell>
                            <TableCell align="center">{item.approxpallet}</TableCell>
                            <TableCell align="center">{item.weight}</TableCell>
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
