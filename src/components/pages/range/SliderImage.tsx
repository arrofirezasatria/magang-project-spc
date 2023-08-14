import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";
import { Box, Button, Grid, Link, List, Stack, Typography, TextField, Table, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Divider, Modal } from "@mui/material";
import AppsBar from "@components/AppsBar";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "store/cartSlice";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AltProductRanges from "@components/pages/range/altProductRanges";
import Image from "next/image";
import { url } from "inspector";

export default function SliderImage(props) {
  console.log(props.productOnly);
  const [counter, setCounter] = useState(0);

  const handleManualNavigation = (slideIndex: number) => {
    setCounter(slideIndex);
  };
    const sliderData = [
      {
        imageUrl: "/static/images/arctic_white_chs12a_white_satin_300x100mm_bathroom_3.jpg__550x715_q85_crop_subsampling-2_upscale.jpg",
        title: "Arctic White White Satin",
        dimension: "300x100mm",
      },
  ];

  return (
    <>
      <Box
        className="slider"
        sx={{
          width: "100%",
          height: { xs: "480px", md: "715px" },
          overflow: "hidden",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <Box
          className="slides transition-effect"
          sx={{
            width: `${sliderData.length * 100}%`,
            display: "flex",
            height: { xs: "480px", md: "715px" },
            transition: "1s",
            transform: `translateX(-${counter * (100 / sliderData.length)}%)`,
          }}
        >
          {sliderData.map((slide, index) => (
            <Box key={index} className="slide" sx={{ width: `${100 / sliderData.length}%` }}>
              <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
                <Image src={slide.imageUrl} fill alt={""} style={{ objectFit: "cover" }} />
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          className="navigation-manual"
          sx={{
            position: "absolute",
            p: "8px 5px",
            marginTop: "-50px",
            display: "flex",
            marginLeft: "15px",
            borderRadius: "16px",
            backgroundColor: "rgba(0,0,0,.15)",
          }}
        >
          {sliderData.map((_, index) => (
            <Radio
              key={index}
              id={`radio${index}`}
              name="manualNavigation"
              className="manual-btn"
              checked={counter === index}
              onChange={() => handleManualNavigation(index)}
              sx={{
                appearance: "none",
                outline: "none",
                width: "16px",
                height: "16px",
                ml: "5px",
                borderRadius: "50%",
                color: "white !important",
                cursor: "pointer",
                marginRight: "5px",
              }}
            />
          ))}
        </Box>

        {/* Fixed Typography below the slider */}
      </Box>
      <Box
        sx={{
          left: "50%",
          transform: "translateX(-50%)",
          color: "black",
          position: "relative",
          width: "100%",
        }}
      >
        <Typography variant="body1" className="title">
          {sliderData[counter].title} {sliderData[counter].dimension}
        </Typography>
      </Box>
    </>
  );
}
