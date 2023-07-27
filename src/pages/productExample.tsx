import React from 'react'
import { Box, Stack, Typography, Paper, Button, colors, List, ListItem } from "@mui/material";
import swr from 'swr'
import AppsContainer from '@layouts/AppsContainer';
import Image from "next/Image";
import { url } from 'inspector';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const headers = {
  Authorization:
    "Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c",
};

const fetcher2 = (url: RequestInfo | URL) =>
  fetch(url, { headers }).then((res) => res.json());


export default function productExample() {

  const { data, error, isLoading, isValidating } = swr(
    `https://strapi-app-tnshv.ondigitalocean.app/api/motifs/69?populate=*`,
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
    <AppsContainer>
      <Box className="hero-container" sx={{ width: "100%", height: "600px", bgcolor: "#C4C4C4", color: "white" }}>
        <Box sx={{ height: '100%', position: 'relative' }}
        >
          <Image src={"/static/images/hero.jpg"}
            fill
            style={{
              objectFit: 'cover'
            }} />
          <Box className='transparent-bg' sx={{
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.25)',
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute'
          }}>
            <Box sx={{
              color: '#FFF',
              mx: "auto",
              position: 'absolute',
            }}>
              <Typography variant='h1' sx={{
                fontSize: '70px',
                fontWeight: '600',
                letterSpacing: '5px',
                textShadow: '2px 2px 10px rgba(0, 0, 0, 0.25), -2px -2px 10px rgba(0, 0, 0, 0.25)'
              }}>
                STONE
              </Typography>
              <Typography variant='h2' sx={{
                fontSize: '30px',
                fontWeight: '600',
                textShadow: '2px 2px 10px rgba(0, 0, 0, 0.25), -2px -2px 10px rgba(0, 0, 0, 0.25)'
              }}>
                Echo The Characteristics Of Natural Stone
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className='nav'>
        <List sx={{ listStyleType: 'disc', pl: 4, display: 'flex' }}>
          <ListItem>Product</ListItem>
          <ArrowForwardIosIcon />
          <ListItem>Product Style</ListItem>
          <ArrowForwardIosIcon />
          <ListItem>Stone</ListItem>
        </List>
      </Box>
    </AppsContainer>
  )
}
