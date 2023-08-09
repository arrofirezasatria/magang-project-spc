import React from 'react'
import { Box, Stack, Typography, Paper, Button, colors, List, ListItem, Icon, Grid, Link } from "@mui/material";
import swr from 'swr'
import Image from "next/image";
import { url } from 'inspector';
import axios from "axios";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

const headers = {
  Authorization:
    "Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c",
};

const fetcher2 = (url: RequestInfo | URL) =>
  fetch(url, { headers }).then((res) => res.json());
// axios.get(url, { headers }).then((res) => res.data())

export default function productExample() {
  const { data, error, isLoading, isValidating } = swr(
    `https://strapi-app-tnshv.ondigitalocean.app/api/products/65?populate=*`,
    fetcher2
  );

  const { Name } = data?.data?.attributes || {};
  const { Description, N_Finish, N_Color, N_Dimension } = data?.data?.attributes?.motif?.data?.attributes || {};
  const imageUrl = data?.data?.attributes?.Image_Tile_Face?.data;
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
    <>
      <Box className='section-gray' sx={{
        bgcolor: '#f8f9fa',
        color: '#4b4b5a',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '1.5',
        textRendering: 'optimizeLegibility',
        pt: '40px'
      }}>
        <Box className='cart-container' sx={{
          maxWidth: '1180px',
          m: '0 auto',
          p: '0 20px',
        }}>
          <Box className='cart'>
            <Typography component='h1' sx={{
              fontSize: '36px',
              fontWeight: 500,
              lineHeight: '1.2777777778',
              m: '0.67em 0',
            }}>Shopping Basket ({2} items)</Typography>
            <Box className='cart-alert' sx={{
              m: '20px 20px 20px 0',
              p: '20px 0',
              border: '1px solid #ffdb67',
              borderRadius: '10px',
              bgcolor: '#fff3cd',
              display: 'flex',
              color: '#856404',
              alignItems: 'center'
            }}>
              <ErrorOutlineOutlinedIcon sx={{ fontSize: '50px', px: '15px' }} />
              <Box>
                <Typography component='h2' sx={{
                  fontWeight: 'bold',
                  fontSize: '22px',
                }}>
                  Have you forgetten anything?
                </Typography>
                <Typography component='p' sx={{
                  fontWeight: 400,
                  fontSize: '16px',
                }}>
                  We also stock a range of adhesives, grouts and tools.
                </Typography>
              </Box>
            </Box>
            <Box className='cart-action' sx={{
              textTransform: 'uppercase',
              display: 'flex',
              justifyContent: 'space-between',
              my: '20px',
              '& .MuiLink-root': {
                fontFamily: '--rubik-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
              }
            }}>
              <Link underline='none' sx={{
                p: '15px 25px 11px',
                bgcolor: '#dee2e6',
                borderRadius: '25px'
              }}>
                Continue Shopping
              </Link>
              <Link underline='none' sx={{
                p: '15px 25px 11px',
                bgcolor: '#14b9b9',
                borderRadius: '25px',
                color: '#fff'
              }}>
                Go to Checkout
              </Link>
            </Box>
            {data && data?.data?.attributes?.Image_Tile_Face?.data.map((item: any, index: React.Key | null | undefined) => {
              return (
                <Box key={index} className='cart-item' sx={{
                  display: 'flex',
                  p: '20px'
                }}>
                  <Box className='item-image' sx={{
                    position: 'relative',
                    flexBasis: '20%',
                    width: 'auto',
                    height: '220px',
                  }}>
                    <Link>
                      <Image src={item.attributes?.formats?.thumbnail?.url} fill alt='' />
                    </Link>
                  </Box>
                  <Box className='item-detail' sx={{
                    flexBasis: '30%',
                    p: '0 20px'
                  }}>
                    <Typography component='h2' sx={{ fontSize: '22px', fontWeight: 'bold' }}>{Name}</Typography>
                    <Typography component='p' sx={{ fontSize: '16px', fontWeight: 'medium', my: '16px' }}>{Description}</Typography>
                    <Grid
                      container
                      spacing={2}
                      sx={{
                        width: '100%',
                        '& .MuiTypography-root': {
                          color: '#8b8b8e',
                          fontWeight: 'medium'
                        }
                      }}>
                      <Grid item sx={{ flexBasis: '50%' }}>
                        <Typography variant='body1'>
                          Colour :
                        </Typography>
                        <Typography variant='body1'>
                          Dimension :
                        </Typography>
                        <Typography variant='body1'>
                          Finish :
                        </Typography>
                      </Grid>
                      <Grid item sx={{ flexBasis: '50%' }}>
                        <Typography variant='body1'>
                          RED
                        </Typography>
                        <Typography variant='body1'>
                          99x99
                        </Typography>
                        <Typography variant='body1'>
                          FATALITY
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box className='item-value' sx={{
                    flexBasis: '50%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    bgcolor: '#f8f9fa',
                    border: '1px solid #dee2e6',
                    p: '10px',
                  }}>
                    <Box sx={{
                      flexBasis: '40%'
                    }}>
                      <Typography>Number of Box</Typography>
                      <Typography>11</Typography>
                    </Box>
                    <Box sx={{
                      flexBasis: '30%'
                    }}>
                      <Typography>Box Price</Typography>
                      <Typography>Rp 12312</Typography>
                    </Box>
                    <Box sx={{
                      flexBasis: '30%'
                    }}>
                      <Typography>Total Price</Typography>
                      <Typography>Rp 9999999</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'block' }}>
                    <Link sx={{
                      bgcolor: '#dee2e6',
                      borderRadius: '12px'
                    }}>Remove</Link>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  )
}