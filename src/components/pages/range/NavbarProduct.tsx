import { Box, Button, Grid, Tabs, ListItemIcon, AppBar, Typography, ListItemText, ListItemButton, Divider, MenuItem, Toolbar, IconButton, Link, Menu, Popover, FormControl, Collapse, InputLabel, Select, Paper, Tab } from "@mui/material";
// import { GetStaticProps } from "next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import SearchIcon from "@mui/icons-material/Search";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import zIndex from "@mui/material/styles/zIndex";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const headers = {
  Authorization:
    "Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c",
};

const fetcher2 = (url: RequestInfo | URL) => fetch(url, { headers }).then((res) => res.json());

interface TabPanelProps {
  children: React.ReactNode;
  value: number;
  index: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return <div hidden={value !== index}>{value === index && <Box p={3}>{children}</Box>}</div>;
};

const productStyles = [
  {
    imgSrc: "/static/images/stylestone.jpg",
    text: "Stone",
  },
  {
    imgSrc: "/static/images/styleconcrete.jpg",
    text: "Concrete",
  },
  {
    imgSrc: "/static/images/stylemarble.jpg",
    text: "Marble",
  },
  {
    imgSrc: "/static/images/stylewood.jpg",
    text: "Wood",
  },
  {
    imgSrc: "/static/images/stylecolour.jpg",
    text: "Colours",
  },
  {
    imgSrc: "/static/images/stylewhite.jpg",
    text: "White",
  },
];

const productTypes = [
  {
    imgSrc: "/static/images/styleconcrete.jpg",
    text: "Concrete",
  },
  {
    imgSrc: "/static/images/stylewhite.jpg",
    text: "White",
  },
  {
    imgSrc: "/static/images/stylestone.jpg",
    text: "Stone",
  },
  {
    imgSrc: "/static/images/stylemarble.jpg",
    text: "Marble",
  },
  {
    imgSrc: "/static/images/stylecolour.jpg",
    text: "Colours",
  },
  {
    imgSrc: "/static/images/stylewood.jpg",
    text: "Wood",
  },
];

const productCollections = [
  {
    imgSrc: "/static/images/styleconcrete.jpg",
    text: "Concrete",
  },
  {
    imgSrc: "/static/images/stylestone.jpg",
    text: "Stone",
  },
  {
    imgSrc: "/static/images/stylewhite.jpg",
    text: "White",
  },

  {
    imgSrc: "/static/images/stylemarble.jpg",
    text: "Marble",
  },
  {
    imgSrc: "/static/images/stylewood.jpg",
    text: "Wood",
  },
  {
    imgSrc: "/static/images/stylecolour.jpg",
    text: "Colours",
  },
];
const DropdownFilter = [
  {
    nama: "sizes",
    Subitem: ["Up to 200mm", "201mm - 400mm", "401mm - 600mm", "601mm+"],
  },
  {
    nama: "Types",
    Subitem: ["Made in UKA", "Floor tiles", "PTV 36 + Tiles", "2 cm"],
  },
  {
    nama: "Finishes",
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
    nama: "Styles",
    Subitem: ["Stone", "concrete", "Marble", "Wood", "Colours", "White", "Structure", "patern", "Shape", "Speckle", "Mosaic"],
  },
  {
    nama: "Materials",
    Subitem: ["Glazed Ceramic", "Natural Stone & Glass", "Natural Stone", "Glass", "Ceramic", "Un-Glazed Porcelain", "Glazed Vitrified", "Porcelain", "Glazed Porcelain"],
  },
  {
    nama: "Colours",
    Subitem: ["Blue", "Purple", "Pink", "Red", "Orange", "Yellow", "Green"],
  },
];

const NavbarAbout = [
  {
    name: "About Us",
    Subitems: ["Our Company", "Our Story: A Potted History", "We Make It. Sustainable", "Accreditations and Awards", "Manufacturing Processes"],
  },
  {
    name: "Services",
    Subitems: ["Color Genie", "Mood Boards", "CPD Suite", "Samples & Merchandising", "Take Note Time Capsule", "Podcast", "Material Lab"],
  },
  {
    name: "Sectors",
    Subitems: ["Residential", "Commercial"],
  },
  {
    name: "Projects",
    Subitems: ["Residential", "Commercial", "Hospitaly & Leisure", "Care & Education", "Spesials"],
  },
  {
    name: "News",
    Subitems: ["Company", "Inspiration", "Product", "Collaboration"],
  },
];

export default function NavbarProduct() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeTab = (event: any, newValue: React.SetStateAction<number>) => {
    setActiveTab(newValue);
  };

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

  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [orOpen, setOrOpen] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsScrolled(scrollPosition > 100);
  }, [scrollPosition]);

  const productData = [
    {
      title: "Product Styles",
      data: productStyles,
    },
    {
      title: "Product Types",
      data: productTypes,
    },
    {
      title: "Product Collections",
      data: productCollections,
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
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={activeTab}
            onChange={handleChangeTab}
            centered
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#e6e6e6",
              "& .MuiTabs-indicator": {
                backgroundColor: "black", // Change the underline color to black
              },
            }}
          >
            {productData.map((item, index) => (
              <Tab
                sx={{
                  backgroundColor: "#e6e6e6",
                  width: "1160px",
                  color: "grey",
                  textAlign: "center",
                  typography: {
                    fontWeight: "bold", // Change the fontWeight value as needed
                    letterSpacing: 1, // Use a number for letter spacing
                    fontSize: "16px",
                    "&:hover": {
                      color: "black",
                    },
                    "&.Mui-selected": {
                      color: "black",
                    },
                  },
                }}
                key={index}
                label={item.title}
              />
            ))}
          </Tabs>
          {productData.map((item, index) => (
            <TabPanel key={index} value={activeTab} index={index}>
              <Grid container spacing={3}>
                {item.data.map((product, productIndex) => (
                  <Grid item md={2} key={productIndex}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <Box sx={{ position: "relative", width: "170px", height: "299px" }}>
                        <Image src={product.imgSrc} fill alt={`Gambar ${productIndex}`} />
                      </Box>
                      <Typography variant="subtitle1" sx={{ textAlign: "center", width: "170px", marginTop: "8px" }}>
                        {product.text}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          ))}
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mt: "20px" }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "1150px", py: "20px", borderTop: "2px dotted #868686" }}>
              <Link sx={{ textDecoration: "none", display: "flex", flexDirection: "row" }}>
                <Typography sx={{ mr: "5px", fontSize: "18px", color: "grey", fontWeight: "medium" }}>View All</Typography>
                <Typography sx={{ mr: "5px", fontSize: "18px", color: "grey", fontWeight: "bold" }}>Product Style</Typography>
              </Link>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Link sx={{ textDecoration: "none", display: "flex", flexDirection: "row" }}>
                  <Typography sx={{ mr: "5px", fontSize: "18px", color: "grey", fontWeight: "medium" }}>All Ranges</Typography>
                  <Typography sx={{ mr: "5px", fontSize: "18px", color: "grey", fontWeight: "medium" }}>-</Typography>
                  <Typography sx={{ mr: "5px", fontSize: "18px", color: "grey", fontWeight: "bold" }}>A to Z</Typography>
                </Link>
                <Link sx={{ textDecoration: "none", display: "flex", flexDirection: "row" }}>
                  <Typography sx={{ mr: "5px", fontSize: "18px", color: "grey", fontWeight: "medium" }}>All Ranges</Typography>
                  <Typography sx={{ mr: "5px", fontSize: "18px", color: "grey", fontWeight: "medium" }}>-</Typography>
                  <Typography sx={{ mr: "5px", fontSize: "18px", color: "grey", fontWeight: "bold" }}>New</Typography>
                </Link>
              </Box>
            </Box>
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
          <Divider />
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
          <Divider />
          <MenuItem>Show All</MenuItem>
        </Box>
      ),
    },
    {
      namanavbar: "Contact",
    },
  ];

  return (
    <>
      <Grid sx={{ position: "Fixed", zIndex: "9", width: "100%" }}>
        <Grid display={{ xs: "flex", lg: "none" }} sx={{ width: "100%" }}>
          <Box sx={{ p: "25px", width: "100%", display: "flex", backgroundColor: "white", height: "50px", position: "absolute", zIndex: "9", opacity: "0.5" }}></Box>
          <Box display="flex" sx={{ width: "100%", p: "25px", justifyContent: "space-around", zIndex: "10", backgroundColor: isScrolled ? "white" : "white", transition: "background-color 0.3s" }}>
            <Link display="flex" flexDirection="row" sx={{ height: "49px", alignItems: "center", textDecoration: "none", cursor: "pointer" }}>
              <Button sx={{ width: "150px", height: "50px", position: "relative", mr: "10px" }}>
                <Image src={"/static/images/Sunpower.png"} fill alt={""} style={{}} />
              </Button>
            </Link>
            <Button sx={{ color: "black" }} onClick={() => setOpen(!open)}>
              <MenuIcon />
            </Button>
          </Box>
        </Grid>
        <Grid display={{ xs: "flex", lg: "none" }} sx={{ width: "100%" }}>
          <Box>
            {open && (
              <Box
                sx={{
                  backgroundColor: "White",
                  position: "absolute ",
                  width: "100%",
                  zIndex: "2",
                  boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.75)",
                }}
              >
                <Grid container spacing={0} sx={{ px: "24px", my: 2, mb: "80px" }}>
                  <Button
                    sx={{
                      p: "6px 8px",
                      fontWeight: "Medium",
                      borderRadius: "0",
                      textTransform: "capitalize",
                      color: "black",
                      letterSpacing: 0.5,
                      fontSize: "16px",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #999",
                    }}
                  >
                    Home
                  </Button>
                  {NavbarAbout.map((filter, index) => (
                    <Grid item key={index} xs={12} md={12}>
                      <Box sx={{}}>
                        <Button
                          sx={{
                            typography: {
                              fontWeight: "Medium",
                              textTransform: "Capitalize",
                              borderRadius: "0",
                              color: "black",
                              fontSize: "16px",
                              letterSpacing: 0.5,
                              borderBottom: "1px solid #999",
                              display: "flex",
                              alignItems: "center",
                              width: "100%",
                              justifyContent: "space-between",
                              "&:hover": {
                                color: "black",
                              },
                              "&.Mui-selected": {
                                color: "black",
                              },
                            },
                          }}
                          onClick={() => setOrOpen((prev) => (prev === index ? null : index))}
                        >
                          {filter.name}
                          {orOpen === index ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </Button>
                        <Collapse in={orOpen === index} timeout={600} unmountOnExit>
                          <Box>
                            {filter.Subitems.map((subitems, subindex) => (
                              <MenuItem
                                sx={{
                                  backgroundColor: "White",
                                  color: "grey",
                                  "&:hover": {
                                    fontWeight: "medium",
                                    color: "#000",
                                    cursor: "pointer",
                                  },
                                }}
                                key={subindex}
                                value={subitems}
                              >
                                {subitems}
                              </MenuItem>
                            ))}
                          </Box>
                        </Collapse>
                      </Box>
                    </Grid>
                  ))}
                  <Button
                    sx={{
                      p: "6px 8px",
                      fontWeight: "Medium",
                      color: "black",
                      borderRadius: "0",
                      textTransform: "capitalize",
                      letterSpacing: 0.5,
                      fontSize: "16px",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #999",
                    }}
                  >
                    Contact
                  </Button>
                  <Typography
                    sx={{
                      p: "6px 8px",
                      mt: "40px",
                      fontWeight: "medium",
                      fontSize: "16px",
                      color: "#999999",
                      letterSpacing: 1,
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    Product
                  </Typography>
                  {DropdownFilter.map((filter, index) => (
                    <Grid item key={index} xs={12} md={12}>
                      <Box sx={{}}>
                        <Button
                          sx={{
                            typography: {
                              fontWeight: "medium",
                              color: "black",
                              letterSpacing: 0.5,
                              fontSize: "16px",
                              display: "flex",
                              alignItems: "center",
                              textTransform: "capitalize",
                              borderRadius: "0",
                              borderBottom: "1px solid #999",
                              width: "100%",
                              justifyContent: "space-between",
                              "&:hover": {
                                color: "black",
                              },
                              "&.Mui-selected": {
                                color: "black",
                              },
                            },
                          }}
                          onClick={() => setIsOpen((prev) => (prev === index ? null : index))}
                        >
                          {filter.nama}
                          {isOpen === index ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </Button>
                        <Collapse in={isOpen === index} timeout={600} unmountOnExit>
                          <Box>
                            {filter.Subitem.map((subitem, subindex) => (
                              <MenuItem
                                sx={{
                                  backgroundColor: "White",
                                  color: "grey",
                                  "&:hover": {
                                    fontWeight: "medium",
                                    color: "#000",
                                    cursor: "pointer",
                                  },
                                }}
                                key={subindex}
                                value={subitem}
                              >
                                {subitem}
                              </MenuItem>
                            ))}
                          </Box>
                        </Collapse>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>

      <Grid>
        <Box display={{ xs: "none", lg: "flex" }} flexDirection="row" sx={{ position: "fixed", zIndex: "5", width: "100%" }}>
          <Box sx={{ width: "100%", display: "flex", backgroundColor: "white", height: "80px", position: "absolute", zIndex: "9", opacity: "0" }}></Box>
          <Box
            display={{ xs: "none", lg: "flex" }}
            flexDirection="row"
            sx={{ justifyContent: "space-between", alignItems: "center", width: "100%", height: "80px", position: "relative", zIndex: "10", backgroundColor: isScrolled ? "white" : "transparent", transition: "background-color 0.3s" }}
          >
            <Box sx={{ ml: "185px" }}>
              <Link display="flex" flexDirection="row" sx={{ width: "100%", height: "49px", alignItems: "center", textDecoration: "none", cursor: "pointer" }}>
                <Button sx={{ width: "230px", height: "60px", position: "relative", mr: "10px" }}>
                  <Image src={"/static/images/Sunpower.png"} fill alt={""} style={{}} />
                </Button>
              </Link>
            </Box>
            <Box sx={{}}>
              <Toolbar sx={{ zIndex: "2", mr: "180px", p: "0", width: "100%" }}>
                <List component="nav" sx={{ display: "flex", p: "0", justifyContent: "space-between" }}>
                  {logoNavbar.map((item, index) => (
                    <ListItem key={index} component="li" sx={{ marginRight: "10px", p: "0" }}>
                      {item.dropdown ? (
                        <Box>
                          <Button
                            sx={{
                              py: "10px",
                              px: "20px",
                              position: "relative",
                              typography: {
                                letterSpacing: 2, // Use a number for letter spacing
                                color: isScrolled ? "black" : "white",
                                transition: "color 0.3s",
                                "&:hover": {
                                  color: "black",
                                },
                              },
                              "&::after": {
                                content: '""',
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                width: "100%",
                                height: "2px",
                                backgroundColor: "black",
                                transform: "scaleX(0)", // Start with no underline
                                transformOrigin: "left", // Underline origin from left
                                transition: "transform 0.2s ease-out", // Add a smooth transition for the underline
                              },
                              "&:hover::after": {
                                transform: "scaleX(1)", // Show the underline on hover
                              },
                            }}
                            onClick={(event) => handleDropdownOpen(event, index)}
                          >
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
                                mt: "17px",
                                p: "0",
                              },
                            }}
                          >
                            {item.dropdown}
                          </Popover>
                        </Box>
                      ) : (
                        <Button
                          sx={{
                            py: "10px",

                            px: "20px",
                            position: "relative",
                            typography: {
                              letterSpacing: 2, // Use a number for letter spacing
                              color: isScrolled ? "black" : "white",
                              transition: "color 0.3s",
                              "&:hover": {
                                color: "black",
                              },
                            }, // Add position relative to allow positioning of ::after pseudo-element
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              width: "100%",
                              height: "2px",
                              backgroundColor: "black",
                              transform: "scaleX(0)", // Start with no underline
                              transformOrigin: "left", // Underline origin from left
                              transition: "transform 0.2s ease-out", // Add a smooth transition for the underline
                            },
                            "&:hover::after": {
                              transform: "scaleX(1)", // Show the underline on hover
                            },
                          }}
                        >
                          {item.namanavbar}
                        </Button>
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
