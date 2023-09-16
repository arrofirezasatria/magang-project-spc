import React, { useState } from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField, Typography, Divider } from "@mui/material";
import Fuse from "fuse.js";
import { useForm } from "react-hook-form";
import { dataAlgolia } from "data/algolia/algolia";
import Image from "next/image";
import Link from "next/link";
import { NumericFormat } from "react-number-format";

// import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const fuseOptions = {
  keys: ["attributes.Code", "attributes.Name"],
  isCaseSensitive: true,
  includeScore: 0,
};

const Algolia = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const fuse = new Fuse(dataAlgolia, fuseOptions);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // console.log(watch("search"))

  return (
    <>
      <Box marginTop="100px"></Box>
      <Button sx={{ backgroundColor: "black", color: "white" }} onClick={handleOpenModal}>
        Tekan Ini
      </Button>
      <Dialog open={isModalOpen} onClose={handleCloseModal} fullWidth>
        <DialogTitle sx={{ borderBottom: "1px solid #ededed", p: "0 1rem" }}>
          <Box sx={{ width: "100%", display: "flex", alignItems: "center", height: "3.5rem" }}>
            <Box sx={{ width: "24px", height: "24px", position: "relative" }}>
              <Image src="/static/images/search-icon.svg" alt="" layout="fill" />
            </Box>
            <TextField
              size="small"
              id="search"
              placeholder="Search Product"
              variant="outlined"
              {...register("search", {
                required: "Required Field",
              })}
              sx={{
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                width: "100%",
                ml: "0.5rem",
                mr: "0.5rem",
                // bgcolor: '#ededed'
              }}
            />
            <Button sx={{ minWidth: "0", minHeigh: "0" }} onClick={handleCloseModal}>
              <CloseIcon sx={{ fontSize: "24px", color: "#000" }} />
            </Button>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ px: "0", overflowX: "hidden" }}>
          {/* <Stack
            spacing={1}
            sx={{
              flex: 1,
              height: "70vh",
            }}
          >
            {fuse.search(watch("search")).map((item, index) => (
              <Link
                key={index}
                href={`/range/${item.item.attributes.Slug}`}
                style={{
                  textDecoration: "none",
                  marginTop: "0",
                  borderTop: "1px solid #ededed",
                  borderBottom: "1px solid #ededed",
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    p: "1rem",
                    alignItems: "center",
                    justifyContent: { xs: "start", sm: "space-between" },
                    "&:hover": {
                      bgcolor: "#f1f1f1",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box sx={{ height: "40px", width: "auto", bgcolor: "#555", borderRadius: "5px", aspectRatio: "1 / 1" }}></Box>
                    <Box sx={{ width: "200px" }}>
                      <Typography sx={{ color: "#000", fontSize: ".875rem" }}>{item.item.attributes.Name}</Typography>
                      <Typography sx={{ color: "#999", fontSize: ".75rem" }}>{item.item.attributes.Code}</Typography>
                      <Typography sx={{ color: "#999", fontSize: ".75rem", display: { xs: "block", sm: "none" } }}>
                        <NumericFormat value={item.item.attributes.Price} decimalScale={0} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} prefix={"Rp. "} suffix={"/m²"} />
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ width: "120px" }}>
                    <Typography sx={{ color: "#999", fontWeight: "500", fontSize: ".875rem", display: { xs: "none", sm: "block" } }}>
                      <NumericFormat value={item.item.attributes.Price} decimalScale={0} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} prefix={"Rp. "} suffix={"/m²"} />
                    </Typography>
                  </Box>
                </Stack>
              </Link>
            ))}
          </Stack> */}
          <Stack
            spacing={1}
            sx={{
              flex: 1,
              height: "60vh",
              gap: 1,
              pt: "1rem",
            }}
          >
            {watch("search") ? (
              fuse.search(watch("search")).map((item, index) => (
                <Link
                  key={index}
                  href={`/range/${item.item.attributes.Slug}`}
                  style={{
                    textDecoration: "none",
                    marginTop: "0",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={3}
                    sx={{
                      // p: "1rem",
                      p: ".75rem 1rem",
                      mx: "1.5rem",
                      borderRadius: ".5rem",
                      bgcolor: "#f8fafc",
                      alignItems: "center",
                      justifyContent: { xs: "start", sm: "space-between" },
                      "&:hover": {
                        bgcolor: "#f1f1f1",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box sx={{ height: "40px", width: "auto", bgcolor: "#555", borderRadius: "5px", aspectRatio: "1 / 1" }}></Box>
                      <Box sx={{ width: "200px" }}>
                        <Typography sx={{ color: "#000", fontSize: ".875rem", fontWeight: "500" }}>{item.item.attributes.Name}</Typography>
                        <Typography sx={{ color: "#999", fontSize: ".75rem" }}>{item.item.attributes.Code}</Typography>
                        {/* <Typography sx={{ color: "#999", fontSize: ".75rem", display: { xs: "block", sm: "none" } }}>
                        <NumericFormat value={item.item.attributes.Price} decimalScale={0} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} prefix={"Rp. "} suffix={"/m²"} />
                      </Typography> */}
                      </Box>
                    </Box>
                    {/* <Box sx={{ width: "120px" }}>
                      <Typography sx={{ color: "#999", fontWeight: "500", fontSize: ".875rem", display: { xs: "none", sm: "block" } }}>
                        <NumericFormat value={item.item.attributes.Price} decimalScale={0} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} prefix={"Rp. "} suffix={"/m²"} />
                      </Typography>
                    </Box> */}
                    <ChevronRightIcon sx={{ fontSize: "16px", color: "#000" }} />
                  </Stack>
                </Link>
              ))
            ) : (
              <Box className="empty-search" sx={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "center" }}>
                <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>Begin your product exploration by entering a keyword</Typography>
              </Box>
            )}
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: "16px 1rem", borderTop: "1px solid #ededed" }}>
          <Image src={"/static/images/Sunpower.png"} width={100} height={30} alt={""} />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Algolia;
