import { Box, Container, Button, Grid, Tabs, AppBar, Typography, Divider, MenuItem, Toolbar, Link, Popover, Collapse, Tab, Grow, IconButton, Stack, Drawer, TextField } from "@mui/material";
// import { GetStaticProps } from "next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useSelector, useDispatch } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { NumericFormat } from "react-number-format";
import { DropdownFilter, navbarMobile, productData, aboutNavbar, serviceNavbar, sectorNavbar, projectNavbar, newsNavbar } from "data/navbarHeader/Navbar";
import { useTheme } from "@mui/material/styles";
import { dropCart, removeItemFromCart } from "store/cartSlice";
import CartButton from "@components/common/CartButton";
import { useRouter } from "next/router";

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

export default function NavbarProduct() {
  const router = useRouter();
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
    setIsCartOpen(!isCartOpen);
  };

  const cart = useSelector(
    (state) =>
      // @ts-ignore
      state.cart.cartItems
  );

  const totalPrice = useSelector(
    (state) =>
      // @ts-ignore
      state.cart.totalPrice
  );

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const logoNavbar = [
    {
      namanavbar: "About",
      dropdown: (
        <Box sx={{ p: "25px" }}>
          {aboutNavbar.map((item, index) => (
            <Link key={index} href={item.href} sx={{ textDecoration: "none", color: "black" }}>
              <MenuItem>{item.name}</MenuItem>
            </Link>
          ))}
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
            variant="fullWidth"
            centered
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#dcdcdc",
              "& .MuiTabs-indicator": {
                backgroundColor: "black",
                minWidth: "360px",
              },
            }}
          >
            {productData.map((item, index) => (
              <Tab
                sx={{
                  color: "#989898",
                  textAlign: "center",
                  typography: {
                    fontWeight: "bold",
                    letterSpacing: 1,
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
                    <Link
                      href="#"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textDecoration: "none",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          width: "170px",
                          height: "299px",
                        }}
                      >
                        <Image src={product.imgSrc} fill alt={`Gambar ${productIndex}`} />
                      </Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textAlign: "center",
                          fontSize: "14px",
                          width: "170px",
                          marginTop: "8px",
                          color: "black",
                        }}
                      >
                        {product.text}
                      </Typography>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          ))}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mt: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "1150px",
                py: "20px",
                borderTop: "2px dotted #868686",
              }}
            >
              <Link
                sx={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  // @ts-ignore
                  variant="body1_medium"
                  sx={{ mr: "5px", color: "#989898" }}
                >
                  View All
                </Typography>
                <Typography
                  // @ts-ignore
                  variant="body1_bold"
                  sx={{ mr: "5px", color: "#989898" }}
                >
                  Product Style
                </Typography>
              </Link>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Link
                  sx={{
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Typography
                    // @ts-ignore
                    variant="body1_medium"
                    sx={{ mr: "5px", color: "#989898" }}
                  >
                    All Ranges
                  </Typography>
                  <Typography
                    // @ts-ignore
                    variant="body1_medium"
                    sx={{ mr: "5px", color: "#989898" }}
                  >
                    -
                  </Typography>
                  <Typography
                    // @ts-ignore
                    variant="body1_bold"
                    sx={{ mr: "5px", color: "#989898" }}
                  >
                    A to Z
                  </Typography>
                </Link>
                <Link
                  sx={{
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Typography
                    // @ts-ignore
                    variant="body1_medium"
                    sx={{ mr: "5px", color: "#989898" }}
                  >
                    All Ranges
                  </Typography>
                  <Typography
                    // @ts-ignore
                    variant="body1_medium"
                    sx={{ mr: "5px", color: "#989898" }}
                  >
                    -
                  </Typography>
                  <Typography
                    // @ts-ignore
                    variant="body1_bold"
                    sx={{ mr: "5px", color: "#989898" }}
                  >
                    New
                  </Typography>
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
          {serviceNavbar.map((item, index) => (
            <Link key={index} href={item.href} sx={{ textDecoration: "none", color: "black" }}>
              <MenuItem>{item.name}</MenuItem>
            </Link>
          ))}
        </Box>
      ),
    },
    {
      namanavbar: "Sector",
      dropdown: (
        <Box sx={{ p: "25px" }}>
          {sectorNavbar.map((item, index) => (
            <Link key={index} href={item.href} sx={{ textDecoration: "none", color: "black" }}>
              <MenuItem>{item.name}</MenuItem>
            </Link>
          ))}
        </Box>
      ),
    },
    {
      namanavbar: "Project",
      dropdown: (
        <Box sx={{ p: "25px" }}>
          {projectNavbar.map((item, index) => (
            <Link key={index} href={item.href} sx={{ textDecoration: "none", color: "black" }}>
              <MenuItem>{item.name}</MenuItem>
            </Link>
          ))}
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
          {newsNavbar.map((item, index) => (
            <Link key={index} href={item.href} sx={{ textDecoration: "none", color: "black" }}>
              <MenuItem>{item.name}</MenuItem>
            </Link>
          ))}
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

  const dispatch = useDispatch();

  const handleClearbasket = () => {
    dispatch(dropCart());
  };
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Container>
        {/* Tampilan mobile navbar */}
        <Grid sx={{ position: "static", zIndex: "9", width: "100%" }}>
          <Grid display={{ xs: "flex", lg: "none" }} sx={{ width: "100%" }}>
            <Box
              display="flex"
              sx={{
                width: "100%",
                py: "10px",
                justifyContent: "space-between",
                zIndex: "10",
                backgroundColor: isScrolled ? "white" : "white",
                transition: "background-color 0.3s",
              }}
            >
              <Link
                display="flex"
                flexDirection="row"
                sx={{
                  height: "49px",
                  alignItems: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <Button
                  sx={{
                    width: "130px",
                    height: "50px",
                    position: "relative",
                    mr: "10px",
                  }}
                >
                  <Image src={"/static/images/Sunpower.png"} fill alt={""} style={{}} />
                </Button>
              </Link>
              <IconButton
                sx={{
                  color: "black",
                  transition: "transform 0.3s ease",
                  transform: open ? "rotate(90deg)" : "rotate(0deg)",
                }}
                onClick={() => setOpen(!open)}
              >
                {open ? <CloseIcon sx={{ fontSize: "30px" }} /> : <MenuIcon sx={{ fontSize: "30px" }} />}
              </IconButton>
            </Box>
          </Grid>
          <Grid display={{ xs: "flex", lg: "none" }} sx={{ width: "100%" }}>
            <Box sx={{ height: "100%" }}>
              <Collapse sx={{}} in={!isCartOpen && open} timeout={300}>
                <Box
                  sx={{
                    backgroundColor: "White",
                    width: "100%",
                    zIndex: "2",
                    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.75)",
                    overflow: "scroll",
                    height: "98vh",
                  }}
                >
                  <Grid container spacing={0} sx={{ px: "24px", my: 2, mb: "80px" }}>
                    <Button
                      sx={{
                        fontSize: "16px",
                        fontWeight: "medium",
                        color: "black",
                        p: "6px 8px",
                        borderRadius: "0",
                        textTransform: "capitalize",
                        letterSpacing: 0.5,
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
                      onClick={() => {
                        toggleDrawer();
                        setOpen(false);
                      }}
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
                        <Button
                          sx={{
                            p: "0px",
                            color: "black",
                            minWidth: "0px",
                            fontSize: "16px",
                            fontWeight: "medium",
                            typography: { textTransform: "capitalize" },
                          }}
                        >
                          Cart
                        </Button>
                        <Typography
                          sx={{
                            fontSize: "16",
                            fontWeight: "medium",
                            lineHeight: "10px",
                            ml: "10px",
                          }}
                        >
                          ( {cart.length} )
                        </Typography>
                      </Box>
                      <IconButton sx={{ p: "0px" }}>
                        <ShoppingCartOutlinedIcon fontSize="medium" style={{ color: "black" }} />
                      </IconButton>
                    </Stack>

                    {navbarMobile.map((filter, index) => (
                      <Grid item key={index} xs={12} md={12}>
                        <Box sx={{}}>
                          <Button
                            sx={{
                              p: "6px 8px",
                              typography: {
                                fontSize: "16px",
                                fontWeight: "medium",
                                textTransform: "Capitalize",
                                borderRadius: "0",
                                color: "black",
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
                      // @ts-ignore
                      variant="body1_medium"
                      sx={{
                        p: "6px 8px",
                        mt: "40px",
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
              </Collapse>
            </Box>
          </Grid>
        </Grid>

        {/* Tampilan dekstop navbar */}

        <Box
          display={{ xs: "none", lg: "flex" }}
          flexDirection="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            py: "4px",
            position: "relative",
            zIndex: "10",

            // backgroundColor: isScrolled ? "white" : "transparent", transition: "background-color 0.3s"
          }}
        >
          <Box sx={{}}>
            <Link
              display="flex"
              flexDirection="row"
              sx={{
                width: "100%",
                height: "49px",
                alignItems: "center",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Button
                sx={{
                  width: "130px",
                  height: "50px",
                  position: "relative",
                  mr: "10px",
                }}
              >
                <Image src={"/static/images/Sunpower.png"} fill alt={""} style={{}} />
              </Button>
            </Link>
          </Box>
          <Box sx={{}}>
            <Toolbar sx={{ zIndex: "2", p: "0", width: "" }}>
              <List
                component="nav"
                sx={{
                  display: "flex",
                  p: "0",
                  justifyContent: "space-between",
                }}
              >
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
                                color: "black",
                                "&::after": {
                                  transform: "scaleX(1)",
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
                              transform: "scaleX(1)",
                            },
                            "&:hover::after": {
                              transform: "scaleX(1)",
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
                          TransitionComponent={Grow}
                          TransitionProps={{
                            timeout: 400,
                            style: { transitionDelay: "100ms" },
                          }}
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
                            letterSpacing: 2,
                            color: isScrolled ? "black" : "black",
                            transition: "color 0.3s",
                            fontSize: "12px",
                            fontWeight: "bold",
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
                            transform: "scaleX(0)",
                            transformOrigin: "left",
                            transition: "transform 0.2s ease-out",
                          },
                          "&:hover::after": {
                            transform: "scaleX(1)",
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

                  <Typography
                    // @ts-ignore
                    variant="body1_bold"
                    sx={{ color: "black" }}
                  >
                    {cart.length}
                  </Typography>
                </Stack>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={toggleDrawer}
                  sx={{
                    "& .MuiPaper-root": {
                      width: "100%",
                      maxWidth: { xs: "100%", sm: "390px" },
                    },
                  }}
                >
                  <Box
                    sx={{
                      px: "1.5rem",
                      pt: "1.5rem",
                      minWidth: { xs: "100vw", sm: "390px" },
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
                      <Typography
                        // @ts-ignore
                        variant="body1_bold"
                      >
                        My Cart
                      </Typography>
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
                        // @ts-ignore
                      >
                        {cart.map((item: any, index: any) => {
                          return (
                            <ListItem
                              key={index}
                              sx={{
                                borderBottom: "1px solid #ededed",
                                py: "1rem",
                              }}
                            >
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
                                      onClick={() => {
                                        console.log("somethng");
                                        dispatch(removeItemFromCart({ id: item.id }));
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
                                        overflow: "hidden",
                                      }}
                                    >
                                      <Image src={item.imageSrc} fill alt="" objectFit="cover" />
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
                                    <Typography
                                      // @ts-ignore
                                      variant="body1_medium"
                                      sx={{}}
                                    >
                                      {item.name}
                                    </Typography>
                                    <Typography
                                      sx={{
                                        fontSize: "14px",
                                        color: "#737373",
                                      }}
                                    >
                                      {item.dimension}
                                    </Typography>
                                  </Box>
                                </Box>
                                <Box>
                                  <Typography sx={{ fontSize: "14px" }}>
                                    <NumericFormat value={item.priceTotal} decimalScale={3} displayType={"text"} thousandSeparator={true} prefix={"Rp. "} />
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
                                    <IconButton>
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
                                      variant="standard"
                                      InputProps={{
                                        disableUnderline: true,
                                      }}
                                      size="small"
                                    />
                                    <IconButton>
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
                          {/* <Box className="cart-calc">
                            <Typography>Taxes</Typography>
                            <Typography sx={{ fontWeight: "bold" }}>
                              Rp. 123.123.123
                            </Typography>
                          </Box>
                          <Box className="cart-calc">
                            <Typography>Shipping</Typography>
                            <Typography sx={{ color: "#737373" }}>
                              Calculated at checkout
                            </Typography>
                          </Box> */}
                          <Box className="cart-calc">
                            <Typography>Total</Typography>
                            <Typography sx={{ fontWeight: "bold" }}>
                              <NumericFormat value={totalPrice} decimalScale={3} displayType={"text"} thousandSeparator={true} prefix={"Rp. "} />
                            </Typography>
                          </Box>
                          {cart.length > 0 ? (
                            <CartButton
                              checkout={"checkout"}
                              onClick={() => {
                                toggleDrawer();
                                router.push("/newCartExample");
                              }}
                            />
                          ) : (
                            <CartButton disabled checkout={"checkout"} />
                          )}
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
                  <button onClick={() => handleClearbasket()}>clear basket</button>
                </Drawer>
              </List>
            </Toolbar>
          </Box>
        </Box>
      </Container>
    </>
  );
}
