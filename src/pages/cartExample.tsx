import React, { useState } from 'react'
import {
  Box, Typography, Button, Grid, Link, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Select, MenuItem, InputLabel, FormControl, useMediaQuery, TextField, IconButton, Autocomplete,
} from "@mui/material";
import swr from 'swr'
import Image from "next/image";
import { url } from 'inspector';
import axios from "axios";
import { title } from 'process';
import { Controller } from 'react-hook-form';
import { props } from 'cypress/types/bluebird';
import { NumericFormat } from 'react-number-format';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useTheme } from '@mui/material/styles';

const headers = {
  Authorization:
    "Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c",
};

const fetcher2 = (url: RequestInfo | URL) =>
  fetch(url, { headers }).then((res) => res.json());
// axios.get(url, { headers }).then((res) => res.data())

export default function CartExample() {
  const { data, error, isLoading, isValidating } = swr(
    `https://strapi-app-tnshv.ondigitalocean.app/api/products/65?populate=*`,
    fetcher2
  );

  // table breakpoint
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // table data content
  const initialCartData = [
    {
      img: data?.data?.attributes?.Image_Tile_Face.data[0].attributes?.formats.thumbnail.url,
      quantity: 3,
      code: data?.data?.attributes?.Code,
      description: data?.data?.attributes?.Name + ' - ' + data?.data?.attributes?.tile_dimension.data.attributes?.Dimension,
      boxPrice: 'Rp. 123.123.123',
      totalPrice: 'Rp. 123.123.123'
    },
    {
      img: data?.data?.attributes?.Image_Tile_Face.data[0].attributes?.formats.thumbnail.url,
      quantity: 5,
      code: 'DEF456',
      description: 'Product GHIJKL' + ' - ' + '120x120cm',
      boxPrice: 'Rp. 123.123.123',
      totalPrice: 'Rp. 123.123.123'
    },
  ];
  const headers = [null, 'quantity', 'code', 'description', 'box price', 'total price'];

  // select country
  const countries = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    {
      code: 'AE',
      label: 'United Arab Emirates',
      phone: '971',
    },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    {
      code: 'AG',
      label: 'Antigua and Barbuda',
      phone: '1-268',
    },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'AM', label: 'Armenia', phone: '374' },
    { code: 'AO', label: 'Angola', phone: '244' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
  ];

  // select address
  const address = [
    { label: 'Dummy 1', city: 'City 1' },
    { label: 'Dummy 2', city: 'City 2' },
    { label: 'Dummy 3', city: 'City 3' },
    { label: 'Dummy 4', city: 'City 4' },
    { label: 'Dummy 5', city: 'City 5' },
    { label: 'Dummy 6', city: 'City 6' },
  ];
  const [cartData, setData] = useState(initialCartData);

  const handleIncrement = (index : any) => {
    const newData = [...cartData];
    newData[index].quantity += 1;
    setData(newData);
  };

  const handleDecrement = (index : any) => {
    if (cartData[index].quantity > 0) {
      const newData = [...cartData];
      newData[index].quantity -= 1;
      setData(newData);
    }
  };

  const handleChange = (event : any , index : any) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue)) {
      const newData = [...cartData];
      newData[index].quantity = newValue;
      setData(newData);
    }
  };

  const handlePrint = () => {
    window.print();
  };

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
      <Box className='cart-wrap' sx={{
        px: { xs: '20px', md: '40px' },
        m: '0 auto',
      }}>
        <Box className='cart-container' sx={{
          my: '40px',
          '& .MuiTypography-root': {
            color: '#3d3935'
          },
        }}>
          <Typography component='h1' sx={{
            fontSize: '32px',
            fontWeight: 'bold',
            lineHeight: '40px',
            mb: '.67em'
          }}>
            Shopping Cart
          </Typography>
          <Typography component='p' sx={{
            fontSize: '16px',
            fontWeight: 'medium',
            mb: '40px',
            display: { xs: 'none', md: 'block' }
          }}>
            <Link href='#print' onClick={handlePrint} sx={{
              color: '#3d3935',
              textDecorationColor: '#3d3935',
              '&:hover': {
                color: '#000',
                textDecorationColor: '#000',
              },
            }}>
              Print Your Cart
            </Link>
          </Typography>
          <Box className='cart-heading' sx={{ display: 'flex', alignItems: 'center' }}>
            <Image src='/static/icons/box-icon.svg' alt='' width={50} height={50} />
            <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
              <Typography sx={{
                m: '0 16px 0 24px',
                fontSize: '24px',
                lineHeight: '32px',
                fontWeight: 'bold'

              }}>Items</Typography>
              <Typography sx={{ fontSize: '16px', color: '#3d3935' }}>2 Items - Rp. 123.123.123</Typography>
            </Box>
          </Box>
          <TableContainer sx={{
            mt: { xs: '0', sm: '20px' },
            borderRadius: '5px',
            borderBottom: '1px solid #dee2e6',
            '@media print': {
              width: '100%',
            },
          }}>
            <Table
              sx={{
                width: "100%",
                borderCollapse: "collapse",
              }}
              aria-label="simple table"
            >
              {isMobile ? (
                <>
                  <Box className='cart-mobile'>
                    {initialCartData.map((item, index) => (
                      <Box key={index} className='cart-row' sx={{
                        my: '1rem',
                        py: '1rem',
                      }}>
                        <Box sx={{ width: '100%', display: 'flex', mb: '16px' }}>
                          <Box sx={{
                            width: 'auto',
                            height: 'auto',
                            minWidth: '140px',
                            minHeight: '140px',
                            aspectRatio: '1 / 1',
                            position: 'relative',
                          }}>
                            <Image src={item.img} alt='' fill />
                          </Box>
                          <Box sx={{ pl: '1rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <Typography sx={{ fontSize: '12px', lineHeight: '1.5em' }}>{item.code}</Typography>
                            <Typography sx={{ fontSize: '18px', lineHeight: '1.5em', fontWeight: '500' }}>{item.description}</Typography>
                            <Box>
                              <Typography sx={{ fontSize: '12px', lineHeight: '1.25em' }}>
                                Rp. 123.123 each
                              </Typography>
                              <Typography sx={{ fontSize: '16px', lineHeight: '1.25em', fontWeight: 'bold' }}>
                                Rp. 123.123.123
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box display="flex" alignItems="center">
                          <Box display="flex" alignItems="center" sx={{
                            width: '100%',
                            p: '5px',
                            border: '1px solid #999',
                            borderRadius: '5px',
                            maxWidth: '130px',
                          }}>
                            <IconButton onClick={() => handleDecrement(index)}>
                              <RemoveIcon />
                            </IconButton>
                            <TextField sx={{
                              '& .MuiInputBase-input': {
                                textAlign: 'center',
                              },
                              '& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button': {
                                appearance: 'none'
                              },
                            }}
                              type="number"
                              value={item.quantity}
                              onChange={(event) => handleChange(event, index)}
                              variant="standard"
                              InputProps={{
                                disableUnderline: true,
                              }}
                              size='small'
                            />
                            <IconButton onClick={() => handleIncrement(index)}>
                              <AddIcon />
                            </IconButton>
                          </Box>
                          <Typography sx={{ px: '16px', fontSize: '16px' }}>Box</Typography>
                          <IconButton sx={{
                            '&:hover': {
                              bgcolor: '#fcebeb'
                            },
                          }}
                            // onClick={() => handleDelete(index)} 
                            // {tidak ada handleDelete}
                          >
                            <DeleteForeverIcon sx={{ color: '#DC362E', }} />
                          </IconButton>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </>
              ) : (
                <>
                  <TableHead>
                    <TableRow>
                      {headers.map((item, index) => (
                        <TableCell
                          key={index}
                          align="left"
                          sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            textTransform: 'capitalize'
                          }}
                        >
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {initialCartData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell align="left">
                          <Box sx={{
                            width: '100%',
                            height: 'auto',
                            minWidth: '140px',
                            minHeight: '140px',
                            position: 'relative',
                            aspectRatio: '1 / 1',
                            '@media print': {
                              minHeight: '100px',
                              minWidth: '100px',
                            },
                          }}>
                            <Image src={row.img} alt='' fill />
                          </Box>
                        </TableCell>
                        <TableCell align="left">
                          <Box display="flex" alignItems="center">
                            <Box display="flex" alignItems="center" sx={{
                              width: '120px',
                              p: '5px',
                              border: '1px solid #999',
                              borderRadius: '5px',
                              '@media print': {
                                display: 'none',
                              },
                            }}>
                              <IconButton onClick={() => handleDecrement(index)}>
                                <RemoveIcon />
                              </IconButton>
                              <TextField sx={{
                                '& .MuiInputBase-input': {
                                  textAlign: 'center',
                                },
                                '& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button': {
                                  appearance: 'none'
                                },
                              }}
                                type="number"
                                value={row.quantity}
                                onChange={(event) => handleChange(event, index)}
                                variant="standard"
                                InputProps={{
                                  disableUnderline: true,
                                }}
                                size='small'
                              />
                              <IconButton onClick={() => handleIncrement(index)}>
                                <AddIcon />
                              </IconButton>
                            </Box>
                            <Typography sx={{
                              fontSize: '16px',
                              display: 'none',
                              '@media print': {
                                display: 'block',
                              },
                            }}>{row.quantity}</Typography>
                            <Typography sx={{ px: '16px', fontSize: '16px' }}>Box</Typography>
                            <IconButton sx={{
                              '&:hover': {
                                bgcolor: '#fcebeb'
                              },
                              '@media print': {
                                display: 'none',
                              },
                            }}
                              // onClick={() => handleDelete(index)}
                              // {tidak ada handleDelete}
                            >
                              <DeleteForeverIcon sx={{ color: '#ff3333', }} />
                            </IconButton>
                          </Box>
                        </TableCell>
                        <TableCell align="left" sx={{ fontSize: '16px' }}>{row.code}</TableCell>
                        <TableCell align="left" sx={{ fontSize: '16px' }}>{row.description}</TableCell>
                        <TableCell align="left" sx={{ fontSize: '16px' }}>{row.boxPrice}</TableCell>
                        <TableCell align="left" sx={{ fontSize: '16px' }}>{row.totalPrice}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </>
              )}
            </Table>
          </TableContainer>
          <Box className='cart-summary-wrap' sx={{
            display: 'flex',
            width: '100%'
          }}>
            <Box className='cart-form' sx={{ display: 'flex', flexDirection: 'column', width: '100%', mt: '36px', flexBasis: '70%', gap: '10px' }}>
              <Box sx={{}}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '18px', mb: '10px' }}>Contact</Typography>
                <TextField
                  size='small'
                  fullWidth
                  helperText="Please enter your email or mobile phone number"
                  id="demo-helper-text-aligned"
                  label="Email or mobile phone number"
                />
              </Box>

              <Box sx={{ gap: '10px', display: 'flex', flexDirection: 'column', }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '18px', }}>Shipping Address</Typography>
                <Autocomplete
                  size='small'
                  disablePortal
                  id="combo-box-demo"
                  options={countries}
                  renderInput={(params) => <TextField {...params} label="Country" />}
                />
                <Box sx={{ display: 'flex', width: '100%', gap: '10px' }}>
                  <TextField
                    size='small'
                    label="First Name (optional)"
                    sx={{ flexGrow: 1 }}
                  />
                  <TextField
                    size='small'
                    required
                    id="outlined-required"
                    label="Last Name"
                    sx={{ flexGrow: 1 }}
                  />
                </Box>
                <Autocomplete
                  size='small'
                  disablePortal
                  id="combo-box-demo"
                  options={address}
                  renderInput={(params) => <TextField {...params} label="Address (Google Map API)" />}
                />
                <TextField
                  fullWidth
                  size='small'
                  label="Apartment, suite, etc. (optional)"
                />
                <Box sx={{ display: 'flex', width: '100%', gap: '10px' }}>
                  <TextField
                    size='small'
                    required
                    id="outlined-required"
                    label="City"
                    sx={{ flexBasis: '33.333%' }}
                  />
                  <Autocomplete
                    size='small'
                    disablePortal
                    id="combo-box-demo"
                    options={countries}
                    sx={{ flexBasis: '33.333%' }}
                    renderInput={(params) => <TextField {...params} label="State" />}
                  />
                  <TextField
                    size='small'
                    required
                    id="outlined-required"
                    label="Zip Code"
                    sx={{ flexBasis: '33.333%' }}
                  />
                </Box>
              </Box>
            </Box>
            <Grid container spacing={0} className='cart-summary' sx={{
              display: 'flex',
              mt: '36px',
              alignItems: 'center',
              justifyContent: 'end',
              height: '100%'
            }}>
              <Grid item sx={{ pr: '30px', borderRight: { xs: '0', md: '1px solid #3d3935' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography sx={{ fontSize: '16px', pr: '20px' }}>
                      Subtotal:
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '16px', fontWeight: 'medium' }}>
                      Rp. 123.123.123
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography sx={{ fontSize: '16px', pr: '20px' }}>
                      Sale total:
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                      Rp. 123.123.123.123
                    </Typography>
                  </Box>
                </Box>
                <Typography sx={{ fontSize: '12px', mt: '10px', textAlign: 'center' }}>Tax & shipping rates are calculated during checkout</Typography>
              </Grid>
              <Grid item sx={{ pl: '20px', display: 'flex' }}>
                <Button sx={{
                  color: '#fff',
                  bgcolor: '#3d3935',
                  '&:hover': {
                    bgcolor: '#000'
                  },
                }}>
                  Checkout
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  )
}