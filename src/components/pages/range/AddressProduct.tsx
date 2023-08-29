import { Box, List } from "@mui/material";
import Link from "next/link";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function AddressProduct({ props, address }: any) {
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
        <Link href="/range" style={{ color: "#999" }}>
          Range
        </Link>
        {props?.product?.data?.attributes?.Name ? (
          <>
            <ArrowForwardIosIcon sx={{ fontSize: "10px", mx: "6px" }} />
            <Link href={address.asPath} style={{ color: "#999", textDecoration: 'none', cursor: 'default' }}>
              {props.product.data.attributes.Name}
            </Link>
          </>
        ) : (
          <>
          </>
        )}
      </List>
    </Box>
  );
}
