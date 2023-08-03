import React, { useState } from "react";
import ReactDOM from "react-dom";
import { AppBar, Button, Stack, Box, IconButton, Tab, Tabs, Toolbar, Typography, Pagination } from "@mui/material";
import { Paper, Popper, Menu, MenuItem, MenuList, Card, CardHeader, CardMedia, CardActions, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Link from "next/link";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './Demo';
import { Dropdown, DropdownMenuItem, DropdownNestedMenuItem } from "./Dropdown";

export default function App() {
  const [value, setValue] = React.useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#212121" }}>
        <Toolbar>
          <IconButton aria-label="LocalMall" sx={{ color: '#fff' }} onClick={() => setValue(null)}>
            <LocalMallIcon />Campany</IconButton>
          <Tabs sx={{ marginLeft: 'auto' }} textColor='inherit'
            value={value}
            onChange={handleChange}
            indicatorColor="secondary" >
            <Tab icon={<SearchIcon />} iconPosition="start" label="Search" sx={{ color: '#fff' }} />
            <Tab icon={<LoginIcon />} iconPosition="start" label="Sign In" sx={{ color: '#fff' }} />
            <Tab icon={<AddReactionIcon />} iconPosition="start" label="Mood Board" sx={{ color: '#fff' }} />
            <Tab icon={<AddShoppingCartIcon />} iconPosition="start" label="0" sx={{ color: '#fff' }} />
          </Tabs>
        </Toolbar>
        <Box sx={{ marginLeft: 'auto' }}>
          <Dropdown
            trigger={<Tab
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
              label="About"
            />}
            menu={[
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"Our Company"}
              </DropdownMenuItem>,
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"Our Story: A Potted History"}
              </DropdownMenuItem>,
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"We Make It. Sustainable"}
              </DropdownMenuItem>,
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"Accreditations and Awards"}
              </DropdownMenuItem>,
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"Manufacturing Processes"}
              </DropdownMenuItem>,
            ]}
          />
          <Dropdown
            trigger={<Tab
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
              onClick={handleClick}
              label="Products"
            />}
            menu={[
              <StyledEngineProvider injectFirst>
                <Demo onClick={handleClose} />
              </StyledEngineProvider>
            ]}
          />
          <Dropdown
            trigger={<Tab
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
              onClick={handleClick}
              label="Services"
            />}
            menu={[
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"Colour Genie"}
              </DropdownMenuItem>,
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"Mood Boards"}
              </DropdownMenuItem>,
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"CPD Suite"}
              </DropdownMenuItem>,
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"Samples & Merchandising"}
              </DropdownMenuItem>,
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"Take Note Time Capsule"}
              </DropdownMenuItem>,
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"Podcast"}
              </DropdownMenuItem>,
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"Material Lab"}
              </DropdownMenuItem>,
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"Factory Outlet"}
              </DropdownMenuItem>
            ]}
          />
          <Dropdown
            trigger={<Tab
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
              onClick={handleClick}
              label="Sectors"
            />}
            menu={[
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"Residential"}
              </DropdownMenuItem>,
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"Commercial"}
              </DropdownMenuItem>
            ]}
          />
          <Dropdown
            trigger={<Tab
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
              onClick={handleClick}
              label="Projects"
            />}
            menu={[
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"Residential"}
              </DropdownMenuItem>,
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"Commercial"}
              </DropdownMenuItem>,
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"Hospitality & Leisure"}
              </DropdownMenuItem>,
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"Care & Education"}
              </DropdownMenuItem>,
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"Specials"}
              </DropdownMenuItem>
            ]}
          />
          <Dropdown
            trigger={<Tab
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
              onClick={handleClick}
              label="News"
            />}
            menu={[
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"Company"}
              </DropdownMenuItem>,
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"Inspiration"}
              </DropdownMenuItem>,
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"Product"}
              </DropdownMenuItem>,
              <DropdownMenuItem
                onClick={() => { console.log("clicked"); }}
              >
                {"Colaboration"}
              </DropdownMenuItem>
            ]}
          />
        </Box>
      </AppBar>
    </React.Fragment >
  );
};
