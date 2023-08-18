import { Box, List, Link } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function AddressProduct() {
  return (
    <Box className="nav" sx={{ display: "block", mb: "30px" }}>
      <List
        sx={{
          listStyleType: "disc",
          pl: { xs: 0, md: 4 },
          display: "flex",
          alignItems: "baseline",
          color: "#999",
          fontWeight: "medium",
          fontSize: "16px",
          fontFamily:
            '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";',
        }}
      >
        <Link href="#" underline="always" sx={{ color: "#999" }}>
          Product
        </Link>
        <ArrowForwardIosIcon sx={{ fontSize: "10px", mx: "6px" }} />
        <Link href="#" underline="always" sx={{ color: "#999" }}>
          Product Style
        </Link>
        <ArrowForwardIosIcon sx={{ fontSize: "10px", mx: "6px" }} />
        <Link underline="none" sx={{ color: "#999" }}>
          Stone
        </Link>
      </List>
    </Box>
  );
}
