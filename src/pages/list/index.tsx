import { Box, Container, Grid, Typography } from "@mui/material";
// import { GetStaticProps } from "next";
import React from "react";
import axios from "axios";
import { data } from "cypress/types/jquery";
import useSWR from "swr";
import Image from "next/Image";
import Divider from '@mui/material/Divider';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import StraightenIcon from '@mui/icons-material/Straighten';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as IconColourBlack } from './icon-colour-black.svg';

const headers = {
  Authorization:
    "Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c",
};

const fetcher2 = (url: RequestInfo | URL) =>
  fetch(url, { headers }).then((res) => res.json());

export default function Index() {
  const { data, error, isLoading, isValidating } = useSWR(
    `https://strapi-app-tnshv.ondigitalocean.app/api/motifs?populate=*`,
    fetcher2
  );

  if (isLoading) {
    console.log("masih loading");
  }

  if (isValidating) {
    console.log("masih validating");
  }

  if (error) {
    console.log("error");
  }

  if (data) {
    console.log(data);
  }

  return (
    <Container>
      <Grid container spacing={2}>
        {data &&
          data.data.map((item: any, index: React.Key | null | undefined) => {
            return (
              <Grid item key={index} xs={6} md={2.4}>
                <Box
                  sx={{
                    position: "relative",
                    height: "217.6px",
                    backgroundColor: "lightGray",
                  }}
                >
                  <Image
                    fill
                    alt="ads"
                    src={
                      item.attributes.Image_Thumbnail_350px.data?.attributes.url
                    }
                  />
                </Box>
                <Box sx={{ widt: "100%", backgroundColor: "#F2F1F0", p: 1 }}>
                  <Typography sx={{ fontSize: "18px", fontWeight: "medium" }}>
                    {item.attributes.Name}
                  </Typography>
                  <Box display="flex" flexDirection="row" sx={{}}>
                    <Typography sx={{ textAlign: 'center' backgroundColor: "#808080" width: 80 color: "white" borderRadius: "5px" marginRight: '5px'}}>concrate</Typography>
                    <Typography sx={{ textAlign: 'center' backgroundColor: "#fff" width: 60 color: "black" borderRadius: "5px" border: 1 }}>select</Typography>
                  </Box>
                  <Box sx={{marginTop: "10px"}}>
                    <Divider sx={{ backgroundColor: "black"}} />
                  </Box>
                  <Box display="flex" flexDirection="row" sx={{marginTop: "10px", marginLeft: "13px"}} >
                    <Box display="flex" flexDirection="row">
                    <SvgIcon component={IconColourBlack}/>
                        <Typography sx={{ fontSize: "14x", fontWeight: "medium" }}>
                        {item.attributes.N_Color}
                      </Typography>
                    </Box>
                    <Box display="flex" flexDirection="row" sx={{marginLeft: "32px"}}>
                      <StraightenIcon sx={{marginRight: "5px"}}/>
                      <Typography sx={{ fontSize: "14x", fontWeight: "medium" }}>
                        {item.attributes.N_Dimension}
                      </Typography>
                    </Box>
                    <Box display="flex" flexDirection="row" sx={{marginLeft: "32px"}}>
                      <DoneAllIcon sx={{marginRight: "5px"}}/>
                      <Typography sx={{ fontSize: "14x", fontWeight: "medium" }}>
                        {item.attributes.N_Finish}
                      </Typography>
                    </Box>
                    
                  </Box>
                  
                  
                </Box>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}
