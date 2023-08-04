import { Box, Container, Grid, Stack, Typography, Button, FormControl, InputLabel, MenuItem, Select, Link } from "@mui/material";
// import { GetStaticProps } from "next";
import React from "react";
import axios from "axios";
import { data } from "cypress/types/jquery";
import useSWR from "swr";
import Image from "next/image";
import FeaturedProducts from "@components/pages/range/FeaturedProducts";
import HeroProducts from "@components/pages/range/HeroProducts";
import Description from "@components/pages/range/DescriptionProducts";
import AltProductRanges from "@components/pages/range/altProductRanges";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";

const headers = {
  Authorization:
    "Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c",
};

const fetcher2 = (url: RequestInfo | URL) => fetch(url, { headers }).then((res) => res.json());

export default function NavbarProduct() {
  return (
    <>
      <Grid>
        <Box>
          <Box>
            <Link display="flex" flexDirection="row" sx={{textDecoration:"none", cursor:"pointer"}}>
              <Box sx={{ width: "18px", height: "18px", position: "relative", mr:"10px"}}>
                <Image src={"/static/images/icon-outlet-grey.svg"} fill alt={""} style={{}} />
              </Box>
              <Typography sx={{color:"#878787",}}>Visit Our Online Factory Outlet</Typography>
            </Link>
          </Box>

        </Box>
      </Grid>
    </>
  );
}
