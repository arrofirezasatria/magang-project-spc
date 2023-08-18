import { Box } from "@mui/material";
import React from "react";

export default function ProductLayout({ children }: any) {
  return (
    <Box className="product-wrap-white" sx={{ display: "flex" }}>
      <Box
        className="product-container"
        sx={{
          maxWidth: "1200px",
          padding: { xs: "20px 15px", md: "20px 30px" },
          margin: "0 auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
