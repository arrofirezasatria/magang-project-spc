import { Box, Container, Button, Grid, Tabs, AppBar, Typography, Divider, MenuItem, Toolbar, Link, Popover, Collapse, Tab, Grow, IconButton, Stack, Drawer, TextField } from "@mui/material";
// import { GetStaticProps } from "next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { NumericFormat } from "react-number-format";

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
  const count = useSelector(
    (state) =>
      // @ts-ignore
      state.counter.count
  );
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

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const isCartExist = false;

  const cart = useSelector(
    (state) =>
      // @ts-ignore
      state.cart.cartItems
  );

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
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Our Company</MenuItem>
          </Link>
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Our Story: A Potted History</MenuItem>
          </Link>
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>We Make It. Sustainable</MenuItem>
          </Link>
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Accreditations and Awards</MenuItem>
          </Link>
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Manufacturing Processes</MenuItem>
          </Link>
        </Box>
      ),
    },
    {
      namanavbar: "Product",
      dropdown: (
        <Box sx={{ width: "1200px" }}>
          <Tabs
            value={activeTab}
            onChange={handleChangeTab}
            centered
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#dcdcdc",
              "& .MuiTabs-indicator": {
                backgroundColor: "black", // Change the underline color to black
              },
            }}
          >
            {productData.map((item, index) => (
              <Tab
                sx={{
                  width: "1160px",
                  color: "#989898",
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
                    <Link href="#" sx={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}>
                      <Box sx={{ position: "relative", width: "170px", height: "299px" }}>
                        <Image src={product.imgSrc} fill alt={`Gambar ${productIndex}`} />
                      </Box>
                      <Typography variant="subtitle1" sx={{ textAlign: "center", fontSize: "14px", width: "170px", marginTop: "8px", color: "black" }}>
                        {product.text}
                      </Typography>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          ))}
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mt: "20px" }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "1150px", py: "20px", borderTop: "2px dotted #868686" }}>
              <Link sx={{ textDecoration: "none", display: "flex", flexDirection: "row" }}>
                <Typography sx={{ mr: "5px", fontSize: "14px", color: "#989898", fontWeight: "medium" }}>View All</Typography>
                <Typography sx={{ mr: "5px", fontSize: "14px", color: "#989898", fontWeight: "bold" }}>Product Style</Typography>
              </Link>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Link sx={{ textDecoration: "none", display: "flex", flexDirection: "row" }}>
                  <Typography sx={{ mr: "5px", fontSize: "14px", color: "#989898", fontWeight: "medium" }}>All Ranges</Typography>
                  <Typography sx={{ mr: "5px", fontSize: "14px", color: "#989898", fontWeight: "medium" }}>-</Typography>
                  <Typography sx={{ mr: "5px", fontSize: "14px", color: "#989898", fontWeight: "bold" }}>A to Z</Typography>
                </Link>
                <Link sx={{ textDecoration: "none", display: "flex", flexDirection: "row" }}>
                  <Typography sx={{ mr: "5px", fontSize: "16px", color: "#989898", fontWeight: "medium" }}>All Ranges</Typography>
                  <Typography sx={{ mr: "5px", fontSize: "16px", color: "#989898", fontWeight: "medium" }}>-</Typography>
                  <Typography sx={{ mr: "5px", fontSize: "16px", color: "#989898", fontWeight: "bold" }}>New</Typography>
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
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Color Genie</MenuItem>
          </Link>
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Mood Boards</MenuItem>
          </Link>
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>CPD Suite</MenuItem>
          </Link>
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Samples & Merchandising</MenuItem>
          </Link>
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Take Note Time Capsule</MenuItem>
          </Link>
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Podcast</MenuItem>
          </Link>
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Material Lab</MenuItem>
          </Link>
        </Box>
      ),
    },
    {
      namanavbar: "Sector",
      dropdown: (
        <Box sx={{ p: "25px" }}>
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Residential</MenuItem>
          </Link>
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Commersial</MenuItem>
          </Link>
        </Box>
      ),
    },
    {
      namanavbar: "Project",
      dropdown: (
        <Box sx={{ p: "25px" }}>
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Residential</MenuItem>
          </Link>
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Commersial</MenuItem>
          </Link>
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>CPD Suite</MenuItem>
          </Link>
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Hospitaly & Leisure</MenuItem>
          </Link>
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Care & Education</MenuItem>
          </Link>
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Specials</MenuItem>
          </Link>
          <Divider />
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Show All</MenuItem>
          </Link>
        </Box>
      ),
    },
    {
      namanavbar: "News",
      dropdown: (
        <Box sx={{ p: "25px" }}>
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Company</MenuItem>
          </Link>
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Inspiration</MenuItem>
          </Link>
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Product</MenuItem>
          </Link>
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Colaboration</MenuItem>
          </Link>
          <Divider />
          <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
            <MenuItem>Show All</MenuItem>
          </Link>
        </Box>
      ),
    },
    {
      namanavbar: "Contact",
    },
  ];

  return (
    <>
      {/* Tampilan mobile navbar */}

      <Container>
        <Grid sx={{ position: "static", zIndex: "9", width: "100%" }}>
          <Grid display={{ xs: "flex", lg: "none" }} sx={{ width: "100%" }}>
            <Box display="flex" sx={{ width: "100%", py: "25px", justifyContent: "space-between", zIndex: "10", backgroundColor: isScrolled ? "white" : "white", transition: "background-color 0.3s" }}>
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
            <Box sx={{ height: "100%" }}>
              {open && (
                <Box
                  sx={{
                    backgroundColor: "White",
                    width: "100%",
                    zIndex: "2",
                    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.75)",
                    overflowY: "scroll",
                    height: "100%", // Use viewport height unit
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

                    <Stack
                      sx={{
                        alignItems: "center",
                        flexDirection: "row",
                        p: "6px 8px",
                        fontWeight: "Medium",
                        textTransform: "capitalize",
                        color: "black",
                        letterSpacing: 0.5,
                        fontSize: "16px",
                        display: "flex",
                        width: "100%",
                        borderBottom: "1px solid #999",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box display="flex" flexDirection="row" alignItems="center">
                        <Button sx={{ color: "black", p: "0px", minWidth: "0px", typography: { fontSize: "16px", fontWeight: "medium", textTransform: "capitalize" } }}>Cart</Button>
                        <Typography sx={{ color: "black", fontWeight: "medium", lineHeight: "10px", ml: "10px", fontSize: "16px" }}>( {count} )</Typography>
                      </Box>
                      <IconButton sx={{ p: "0px" }}>
                        <ShoppingCartOutlinedIcon fontSize="medium" style={{ color: "black" }} />
                      </IconButton>
                    </Stack>

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
                              },
                            }}
                            // @ts-ignore
                            onClick={() =>
                              setOrOpen(
                                // @ts-ignore
                                (prev) => (prev === index ? null : index)
                              )
                            }
                          >
                            {filter.name}

                            {
                              // @ts-ignore
                              orOpen === index ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
                            }
                          </Button>
                          <Collapse
                            in={
                              // @ts-ignore
                              orOpen === index
                            }
                            timeout={600}
                            unmountOnExit
                          >
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
                            onClick={() =>
                              setIsOpen(
                                // @ts-ignore
                                (prev) => (prev === index ? null : index)
                              )
                            }
                          >
                            {filter.nama}
                            {
                              // @ts-ignore
                              isOpen === index ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
                            }
                          </Button>
                          <Collapse
                            in={
                              // @ts-ignore
                              isOpen === index
                            }
                            timeout={600}
                            unmountOnExit
                          >
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

        <Box
          display={{ xs: "none", lg: "flex" }}
          flexDirection="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "80px",
            position: "relative",
            zIndex: "10",

            // backgroundColor: isScrolled ? "white" : "transparent", transition: "background-color 0.3s"
          }}
        >
          <Box sx={{}}>
            <Link display="flex" flexDirection="row" sx={{ width: "100%", height: "49px", alignItems: "center", textDecoration: "none", cursor: "pointer" }}>
              <Button sx={{ width: "160px", height: "52px", position: "relative", mr: "10px" }}>
                <Image src={"/static/images/Sunpower.png"} fill alt={""} style={{}} />
              </Button>
            </Link>
          </Box>
          <Box sx={{}}>
            <Toolbar sx={{ zIndex: "2", p: "0", width: "" }}>
              <List component="nav" sx={{ display: "flex", p: "0", justifyContent: "space-between" }}>
                {logoNavbar.map((item, index) => (
                  <ListItem key={index} component="li" sx={{ marginRight: "10px", p: "0" }}>
                    {item.dropdown ? (
                      <Box>
                        <Button
                          sx={{
                            py: "10px",
                            px: "10px",
                            position: "relative",
                            typography: {
                              letterSpacing: 1,
                              color: isScrolled ? "black" : "black",
                              transition: "color 0.3s",
                              fontSize: "12px",
                              fontWeight: "bold",
                              "&:hover": {
                                color: "black",
                              },
                              "&.selected": {
                                // Add this block for selected style
                                color: "black",
                                "&::after": {
                                  transform: "scaleX(1)", // Show the underline when selected
                                },
                              },
                            },
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              width: "100%",
                              height: "3px",
                              backgroundColor: "black",
                              transform: "scaleX(0)",
                              transformOrigin: "left",
                              transition: "transform 0.2s ease-out",
                            },
                            "&.selected::after": {
                              // Add this block for selected style
                              transform: "scaleX(1)", // Show the underline when selected
                            },
                          }}
                          // @ts-ignore
                          onClick={(event) => handleDropdownOpen(event, index)}
                          className={selectedDropdown === index ? "selected" : ""}
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
                          TransitionComponent={Grow} // Use the Grow transition
                          TransitionProps={{ timeout: 400, style: { transitionDelay: "100ms" } }} // Add a delay and adjust the timeout as needed
                          PaperProps={{
                            sx: {
                              mt: "17px",
                              p: "0",
                              borderRadius: "10px",
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
                          px: "10px",
                          position: "relative",
                          typography: {
                            letterSpacing: 2, // Use a number for letter spacing
                            color: isScrolled ? "black" : "black",
                            transition: "color 0.3s",
                            fontSize: "12px",
                            fontWeight: "bold",
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
                <Stack direction={"row"} display={"flex"} alignItems={"center"}>
                  <IconButton onClick={toggleDrawer}>
                    <ShoppingCartOutlinedIcon fontSize="medium" style={{ color: "black" }} />
                  </IconButton>
                  <Typography sx={{ color: "black", fontWeight: "bold" }}>{count}</Typography>
                </Stack>
                <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                  <Box
                    sx={{
                      px: "1.5rem",
                      pt: "1.5rem",
                      minWidth: "390px",
                      boxSizing: "border-box",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexGrow: 1,
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>My Cart</Typography>
                      <IconButton onClick={toggleDrawer}>
                        <CloseIcon />
                      </IconButton>
                    </Box>
                  </Box>
                  {true ? (
                    <>
                      <List
                        sx={{
                          p: "1rem",
                          overflow: "auto",
                          flexGrow: "1",
                        }}
                      >
                        {cart.map((item, index) => {
                          return (
                            // <Stack key={index}>
                            //   <Typography>{item.id}</Typography>
                            //   <Typography>{item.code}</Typography>
                            //   <Typography>{item.name}</Typography> SUDAH
                            //   <Typography>{item.dimension}</Typography> SUDAH
                            //   <Typography>{item.quantity}</Typography>
                            //   <Typography>{item.pricePerBox}</Typography> SUDAH
                            //   <Typography>{item.priceTotal}</Typography>
                            //   <Typography>{item.imageSrc}</Typography>
                            // </Stack>
                            <ListItem key={index} sx={{ borderBottom: "1px solid #ededed", py: "1rem" }}>
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  width: "100%",
                                }}
                              >
                                <Box sx={{ display: "flex" }}>
                                  <Box>
                                    <IconButton
                                      sx={{
                                        position: "absolute",
                                        zIndex: 999,
                                        width: "15px",
                                        height: "15px",
                                        bgcolor: "#DC362E",
                                        ml: "55px",
                                        mt: "-0.3rem",
                                        textAlign: "center",
                                        "&:hover": {
                                          bgcolor: "#ff3333",
                                        },
                                      }}
                                    >
                                      <CloseIcon sx={{ fontSize: "15px", color: "#fff" }} />
                                    </IconButton>
                                    <Box
                                      sx={{
                                        width: "65px",
                                        height: "65px",
                                        border: "1px solid #ededed",
                                        borderRadius: "0.375rem",
                                        position: "relative",
                                      }}
                                    >
                                      <Image src={item.imageSrc} fill alt="" />
                                    </Box>
                                  </Box>
                                  <Box
                                    sx={{
                                      ml: "16px",
                                      overflowWrap: "break-word",
                                      flexWrap: "wrap",
                                      maxWidth: "130px",
                                    }}
                                  >
                                    <Typography sx={{ fontSize: "16px", fontWeight: "medium" }}>{item.name}</Typography>
                                    <Typography sx={{ fontSize: "14px", color: "#737373" }}>{item.dimension}</Typography>
                                  </Box>
                                </Box>
                                <Box>
                                  <Typography sx={{ fontSize: "14px" }}>
                                    <NumericFormat
                                      // value={item.pricePerBox * item.quantity}
                                      value={item.priceTotal}
                                      decimalScale={3}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={"Rp. "}
                                    />
                                  </Typography>
                                  <Box
                                    display="flex"
                                    alignItems="center"
                                    sx={{
                                      border: "1px solid #999",
                                      borderRadius: "9999px",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <IconButton
                                    // onClick={() => handleDecrement(index)}
                                    >
                                      <RemoveIcon sx={{ fontSize: "15px" }} />
                                    </IconButton>
                                    <TextField
                                      sx={{
                                        width: "24px",
                                        "& .MuiInputBase-input": {
                                          textAlign: "center",
                                          fontSize: "14px",
                                        },
                                        "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button": {
                                          appearance: "none",
                                        },
                                      }}
                                      type="number"
                                      value={item.quantity}
                                      // onChange={(event) => handleChange(event, index)}
                                      variant="standard"
                                      InputProps={{
                                        disableUnderline: true,
                                      }}
                                      size="small"
                                    />
                                    <IconButton
                                    // onClick={() => handleIncrement(index)}
                                    >
                                      <AddIcon sx={{ fontSize: "15px" }} />
                                    </IconButton>
                                  </Box>
                                </Box>
                              </Box>
                            </ListItem>
                          );
                        })}
                      </List>
                      <Box sx={{ p: "1.5rem" }}>
                        <Box
                          sx={{
                            py: "1rem",
                            "& .cart-calc": {
                              display: "flex",
                              justifyContent: "space-between",
                              pb: "0.25rem",
                              mb: "0.75rem",
                              borderBottom: "1px solid #ededed",
                            },
                          }}
                        >
                          <Box className="cart-calc">
                            <Typography>Taxes</Typography>
                            <Typography>Rp. 123.123.123</Typography>
                          </Box>
                          <Box className="cart-calc">
                            <Typography>Shipping</Typography>
                            <Typography>Calculated at checkout</Typography>
                          </Box>
                          <Box className="cart-calc">
                            <Typography>Total</Typography>
                            <Typography>Rp. 123.123.123.123</Typography>
                          </Box>
                        </Box>
                      </Box>
                    </>
                  ) : (
                    <>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          width: "100%",
                          mt: "5rem",
                        }}
                      >
                        <ShoppingCartOutlinedIcon sx={{ fontSize: "4rem" }} />
                        <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>Your cart is empty</Typography>
                      </Box>
                    </>
                  )}
                </Drawer>
              </List>
            </Toolbar>
          </Box>
        </Box>
      </Container>
    </>
  );
}
