import { Box, Link, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

export default function AltProductRanges() {
  const productRangesImg = [
    'alt-product-ranges.jpg',
    'alt-product-ranges.jpg',
    'alt-product-ranges.jpg',
  ];

  return (
    <>
      <Box sx={{position: 'relative', pt: '40px'}}>
        <Box sx={{display: 'flex', justifyContent: 'center', position: 'relative', pb: '30px', mb: '40px'}}>
          <Typography component='h2' sx={{fontSize: '27px', fontWeight: 'bold', letterSpacing: '2px'}}>ALTERNATIVE PRODUCT RANGES</Typography>
        </Box>
        <Box component="span"
          sx={{
            position: 'absolute',
            bottom: '0',
            left: '50%',
            width: '100px',
            height: '3px',
            backgroundColor: 'black',
            transform: 'translateX(-50%)',
            content: "''",
          }}
        />
      </Box>
      <Grid container spacing={0} sx={{mt: '44px', px: '20px', mb: '40px'}}>
        {productRangesImg.map((productRangesImg, index) => (
          <Grid item key={index} xs={12} md={4} sx={{px: '20px', width: '100%'}}>
            <Box sx={{height: '353px', width: '100%', position: 'relative'}}>
              <Image
              fill
              alt=''
              src={`/static/images/${productRangesImg}`}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                  '&:hover': {
                    opacity: 1,
                  },
                }}>
                <Box sx={{textAlign: 'center'}}>
                  <Typography component='h3' sx={{ fontSize: '30px', fontWeight: 'bold', color: 'white' }}>
                  LOREM IPSUM
                  </Typography>
                  <Typography component='p' sx={{ fontSize: '20px', color: 'white', my: '20px', px: '15px' }}>
                    Tap to style title. Bottom text.
                  </Typography>
                  <Typography component='p' sx={{ fontSize: '20px', color: 'white', textDecoration: 'underline' }}>
                    View
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          ))}
      </Grid>
    </>
  );
}