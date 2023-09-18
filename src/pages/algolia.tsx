import React, { useState, useRef, useEffect } from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField, Typography, Divider } from "@mui/material";
import Fuse from "fuse.js";
import { useForm, reset } from "react-hook-form";
import { dataAlgolia } from "data/algolia/algolia";
import Image from "next/image";
import Link from "next/link";
import { NumericFormat } from "react-number-format";

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
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      search: "",
    },
  });
  const searchInputRef = useRef(null);

  const handleImageClick = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const fuse = new Fuse(dataAlgolia, fuseOptions);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    reset();
  };

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const listRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const searchResults = fuse.search(watch("search"));
        if (selectedIndex < searchResults.length - 1) {
          setSelectedIndex(selectedIndex + 1);
          scrollIntoView(selectedIndex + 1);
        } else if (selectedIndex === searchResults.length - 1) {
          scrollIntoView(searchResults.length - 1);
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const searchResults = fuse.search(watch("search"));
        if (selectedIndex > 0) {
          setSelectedIndex(selectedIndex - 1);
          scrollIntoView(selectedIndex - 1);
        } else if (selectedIndex === 0) {
        }
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (selectedIndex !== -1) {
          const selectedItem = fuse.search(watch("search"))[selectedIndex];
          if (selectedItem) {
            window.location.href = `/range/${selectedItem.item.attributes.Slug}`;
          }
        }
      }
    };

    const scrollIntoView = (index: any) => {
      const listItem = document.getElementById(`product-${index}`);
      if (listItem) {
        listItem.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    };

    const scrollToNextPage = () => {
      if (listRef.current) {
        const listHeight = listRef.current.clientHeight;
        listRef.current.scrollTop += listHeight;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, watch("search")]);

  useEffect(() => {
    const handleCtrlK = (e: any) => {
      // Check for "CTRL + K" key combination
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault(); // Prevent the default browser behavior
        setIsModalOpen(true); // Open the modal
      }
    };

    window.addEventListener("keydown", handleCtrlK);

    return () => {
      window.removeEventListener("keydown", handleCtrlK);
    };
  }, []);

  return (
    <>
      <Box marginTop="100px"></Box>
      <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <Button sx={{
          backgroundColor: "#fff", 
          color: "#94a3b8",
          borderRadius: '.5rem',
          border: '1px solid #e5e7eb',
          px: '1rem',
          width: '18rem',
          height: '3rem',
          justifyContent: 'space-between',
          }} onClick={handleOpenModal}>
          <Box sx={{display: 'flex', gap: '12px', alignItems: 'center'}}>
            <Box sx={{ width: "18px", height: "18px", position: "relative" }}>
              <Image src="/static/images/search-icon-grey.svg" alt="" layout="fill" />
            </Box>
            <Typography sx={{textTransform: 'capitalize', fontSize: '16px'}}>Search Product...</Typography>
          </Box>
          <Box>
            <kbd
              style={{
                backgroundColor: '#f7f7f7',
                border: '1px solid #ccc',
                padding: '2px 6px',
                borderRadius: '3px',
                fontSize: '14px',
              }}
            >
              CTRL
            </kbd>
              +
            <kbd
              style={{
                backgroundColor: '#f7f7f7',
                border: '1px solid #ccc',
                padding: '2px 6px',
                borderRadius: '3px',
                fontSize: '14px',
              }}
            >
              K
            </kbd>
          </Box>
        </Button>
      </Box>
      <Dialog open={isModalOpen} onClose={handleCloseModal} fullWidth
        sx={{
          height: 'auto',
          p: '12vh',
          '& .MuiDialog-container': {
            alignItems: 'start !important',
          },
          '& .MuiDialog-paper': {
            borderRadius: '10px',
          },
        }}
      >
        <DialogTitle sx={{ borderBottom: "1px solid #ededed", p: "0 1rem" }}>
          <Box sx={{ width: "100%", display: "flex", alignItems: "center", height: "3.5rem" }}>
            <Box sx={{ width: "24px", height: "24px", position: "relative" }} onClick={handleImageClick}>
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
                '& .MuiInputBase-input': {
                  pl: '8px',
                },
                '& input::placeholder': {
                  fontWeight: '500',
                },
                width: "100%",
                ml: "0.5rem",
                mr: "0.5rem",
                fontWeight: '500',
              }}
              inputRef={searchInputRef}
            />
            <Button sx={{ minWidth: "0", minHeight: "0" }} onClick={handleCloseModal}>
              <CloseIcon sx={{ fontSize: "24px", color: "#000" }} />
            </Button>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ px: "0", overflowX: "hidden" }}>
          <Stack
            spacing={1}
            sx={{
              flex: 1,
              minHeight: '20vh',
              maxHeight: '60vh',
              height: '100%',
              justifyContent: watch("search") ? 'none' : 'center',
              gap: 1,
              pt: "1rem",
            }}
            ref={listRef}
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
                    id={`product-${index}`}
                    direction="row"
                    spacing={3}
                    sx={{
                      p: ".75rem 1rem",
                      mx: "1.5rem",
                      borderRadius: ".5rem",
                      bgcolor: selectedIndex === index ? "#f1f1f1" : "#f8fafc",
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
                      </Box>
                    </Box>
                    <ChevronRightIcon sx={{ fontSize: "16px", color: "#000" }} />
                  </Stack>
                </Link>
              ))
            ) : (
              <Box className="empty-search" sx={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "center" }}>
                <Typography sx={{ fontSize: "16px", fontWeight: "500", color: '#a2a2a2' }}>Begin your product exploration by entering a keyword</Typography>
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
