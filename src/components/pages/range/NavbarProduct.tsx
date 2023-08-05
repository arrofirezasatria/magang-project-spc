import { Box, Button, Grid, ListItemIcon, AppBar,Typography, ListItemText, ListItemButton, Divider, MenuItem, Toolbar, IconButton, Link, Menu, Popover, FormControl, InputLabel, Select } from "@mui/material";
// import { GetStaticProps } from "next";
import React, { useState } from "react";
import Image from "next/image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import SearchIcon from "@mui/icons-material/Search";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const headers = {
  Authorization:
    "Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c",
};

const fetcher2 = (url: RequestInfo | URL) => fetch(url, { headers }).then((res) => res.json());

const DropdownFilter = [
  {
    nama: "-Collections-",
    Subitem: ["Intro colection", "Select Collection", "Absolute Collection", "Minton Hollins Collection"],
  },
  {
    nama: "-sizes-",
    Subitem: ["Up to 200mm", "201mm - 400mm", "401mm - 600mm", "601mm+"],
  },
  {
    nama: "-Types-",
    Subitem: ["Made in UKA", "Floor tiles", "PTV 36 + Tiles", "2 cm"],
  },
  {
    nama: "-Finishes-",
    Subitem: [
      "Structure",
      "Antislip",
      "Bush Hammered",
      "Faux Mosaic & Scored",
      "Gloss",
      "Grip",
      "Gloss Crackle",
      "Grip+ 2cm",
      "Lapato",
      "Matt",
      "Mixed",
      "Mettalic",
      "Natural",
      "Natural +2cm",
      "Polished",
      "Satin",
      "Smooth",
      "Soft Bush Hammered",
      "Structured / Textured",
      "Textured",
    ],
  },
  {
    nama: "-Styles-",
    Subitem: ["Stone", "concrete", "Marble", "Wood", "Colours", "White", "Structure", "patern", "Shape", "Speckle", "Mosaic"],
  },
  {
    nama: "-Materials-",
    Subitem: ["Glazed Ceramic", "Natural Stone & Glass", "Natural Stone", "Glass", "Ceramic", "Un-Glazed Porcelain", "Glazed Vitrified", "Porcelain", "Glazed Porcelain"],
  },
  {
    nama: "-Ranges-",
    Subitem: ["1901", "Abstract", "Allure", "Arctic white", "Arlo", "Artisan", "Ashlar", "Atrium", "Baseline Wall", "bellagio", "Bergen", "Bevel", "Bevel Brick", "Bianco", "Blake"],
  },
  {
    nama: "-Suitabillity-",
    Subitem: ["Wall", "Floor", "Border", "External Wall", "External Floor", "Wet Room"],
  },
  {
    nama: "-Colours-",
    Subitem: ["Blue", "Purple", "Pink", "Red", "Orange", "Yellow", "Green"],
  },
];

const logoNavbar = [
  {
    namanavbar: "About",
    dropdown: (
      <Box sx={{ p: "25px" }}>
        <MenuItem>Our Company</MenuItem>
        <MenuItem>Our Story: A Potted History</MenuItem>
        <MenuItem>We Make It. Sustainable</MenuItem>
        <MenuItem>Accreditations and Awards</MenuItem>
        <MenuItem>Manufacturing Processes</MenuItem>
      </Box>
    ),
  },
  {
    namanavbar: "Product",
    dropdown: (
      <Box display="flex" flexDirection="row">
        <Box display="flex" flexDirection="column">
          <Typography sx={{ml:"25px"}}>Find A Product</Typography>
        <Grid container spacing={2} sx={{ px: "24px", my: 2, mb: "80px", width:"400px"}}>
          {DropdownFilter.map((filter, index) => (
            <Grid item key={index} xs={6} md={6}>
              <Box sx={{}}>
                <FormControl sx={{ backgroundColor: "rgba(242, 241, 240) !important" }} fullWidth>
                  <InputLabel sx={{ backgroundColor: "rgba(242, 241, 240)" }} id={`filter-label-${index}`}>
                    {filter.nama}
                  </InputLabel>
                  <Select sx={{ backgroundColor: "rgba(242, 241, 240) !important", color: "#000", fontWeight: "medium" }} labelId={`filter-label-${index}`} id={`filter-select-${index}`} label={filter.nama}>
                    {filter.Subitem.map((subitem, subindex) => (
                      <MenuItem sx={{ backgroundColor: "rgba(242, 241, 240)", color: "grey", "&:hover": { fontWeight: "medium", color: "#000", cursor: "pointer" } }} key={subindex} value={subitem}>
                        {subitem}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          ))}
        </Grid>
        </Box>
        <Box>

        </Box>
      </Box>
    ),
  },
  {
    namanavbar: "Services",
    dropdown: (
      <Box sx={{ p: "25px" }}>
        <MenuItem>Color Genie</MenuItem>
        <MenuItem>Mood Boards</MenuItem>
        <MenuItem>CPD Suite</MenuItem>
        <MenuItem>Samples & Merchandising</MenuItem>
        <MenuItem>Take Note Time Capsule</MenuItem>
        <MenuItem>Podcast</MenuItem>
        <MenuItem>Material Lab</MenuItem>
      </Box>
    ),
  },
  {
    namanavbar: "Sector",
    dropdown: (
      <Box sx={{ p: "25px" }}>
        <MenuItem>Residential</MenuItem>
        <MenuItem>Commersial</MenuItem>
      </Box>
    ),
  },
  {
    namanavbar: "Project",
    dropdown: (
      <Box sx={{ p: "25px" }}>
        <MenuItem>Residential</MenuItem>
        <MenuItem>Commersial</MenuItem>
        <MenuItem>CPD Suite</MenuItem>
        <MenuItem>Hospitaly & Leisure</MenuItem>
        <MenuItem>Care & Education</MenuItem>
        <MenuItem>Specials</MenuItem>
        <Divider/>
        <MenuItem>Show All</MenuItem>
      </Box>
    ),
  },
  {
    namanavbar: "News",
    dropdown: (
      <Box sx={{ p: "25px" }}>
        <MenuItem>Company</MenuItem>
        <MenuItem>Inspiration</MenuItem>
        <MenuItem>Product</MenuItem>
        <MenuItem>Colaboration</MenuItem>
        <Divider/>
        <MenuItem>Show All</MenuItem>
      </Box>
    ),
  },
  {
    namanavbar: "Contact",
  }
  
];

export default function NavbarProduct() {
  const navItems = [
    { text: "Search", icon: <SearchIcon /> },
    { text: "Sign In", icon: <LockPersonIcon /> },
    { text: "Mood Boards", icon: <FavoriteBorderIcon /> },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedDropdown, setSelectedDropdown] = useState(null);

  const handleDropdownOpen = (event: { currentTarget: React.SetStateAction<null> }, index: React.SetStateAction<null>) => {
    setAnchorEl(event.currentTarget);
    setSelectedDropdown(index);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
    setSelectedDropdown(null);
  };

  return (
    <>
      <Grid>
        <Box>
          <Box display="flex" flexDirection="row" sx={{ justifyContent: "space-between", width: "1519px", height: "49px" }}>
            <Box sx={{ ml: "185px" }}>
              <Link display="flex" flexDirection="row" sx={{ width: "100%", height: "49px", alignItems: "center", textDecoration: "none", cursor: "pointer" }}>
                <Box sx={{ width: "18px", height: "18px", position: "relative", mr: "10px" }}>
                  <Image src={"/static/images/icon-outlet-grey.svg"} fill alt={""} style={{}} />
                </Box>
                <Typography sx={{ color: "#878787" }}>Visit Our Online Factory Outlet</Typography>
              </Link>
            </Box>
            <Box>
              <List sx={{ display: "flex", flexDirection: "row", p: "0", mt: "0", mr: "180px" }}>
                {navItems.map((item, index) => (
                  <ListItemButton sx={{ mr: "20px" }} key={index}>
                    <ListItemIcon sx={{ pr: "10px", minWidth: "0" }}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Box>
          <Divider sx={{ zIndex: "2" }} />
          <Box display="flex" flexDirection="row" sx={{ justifyContent: "space-between", alignItems: "center", width: "1519px", height: "80px" }}>
            <Box sx={{ ml: "185px" }}>
              <Link display="flex" flexDirection="row" sx={{ width: "100%", height: "49px", alignItems: "center", textDecoration: "none", cursor: "pointer" }}>
                <Button sx={{ width: "230px", height: "60px", position: "relative", mr: "10px" }}>
                  <Image src={"/static/images/Sunpower.png"} fill alt={""} style={{}} />
                </Button>
              </Link>
            </Box>
            <Box position="static">
              <Toolbar sx={{ zIndex: "2" , mr:"180px", p:"0"}}>
                <List component="nav" sx={{ display: "flex",p:"0", justifyContent:"space-between" }}>
                  {logoNavbar.map((item, index) => (
                    <ListItem key={index} component="li" sx={{ marginRight: "10px",p:"0" }}>
                      {item.dropdown ? (
                        <Box>
                          <Button sx={{p:"0"}} onClick={(event) => handleDropdownOpen(event, index)}>
                            {item.namanavbar}
                          </Button>
                          <Popover
                            id={`dropdown-${index}`}
                            open={selectedDropdown === index}
                            anchorEl={anchorEl}
                            onClose={handleDropdownClose}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "left",
                            }}
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "left",
                            }}
                            PaperProps={{
                              sx: {
                                mt: "20px",
                                p:"0"
                              },
                            }}
                          >
                            {item.dropdown}
                          </Popover>
                        </Box>
                      ) : (
                        <Button color="inherit">{item.namanavbar}</Button>
                      )}
                    </ListItem>
                  ))}
                </List>
              </Toolbar>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
}
