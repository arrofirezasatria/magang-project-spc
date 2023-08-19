import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import { Box, Typography } from "@mui/material";

import Image from "next/image";
import { AnyAction } from "@reduxjs/toolkit";

export default function SliderImage(props: any) {
  console.log(props.productOnly);
  const [counter, setCounter] = useState(
    props?.productOnly?.Image_Ambience?.data
      ? props?.productOnly?.Image_Ambience?.data.length - 1
      : 0
  );

  // React.useEffect(() => {
  //   setCounter(props?.productOnly?.Image_Ambience?.data.length - 1);
  // }, []);

  const handleManualNavigation = (slideIndex: number) => {
    setCounter(slideIndex);
  };
  // const sliderData = [
  //   {
  //     imageUrl: props?.productOnly?.Image_Ambience?.data
  //       ? props?.productOnly?.Image_Ambience?.data[0].attributes.formats.large
  //           .url
  //       : "https://strapi-rezero-space.sgp1.digitaloceanspaces.com/69091a26ae11473d26e7d5be4be902fa.avif",
  //     title: props?.productOnly?.Image_Ambience?.data
  //       ? props?.productOnly?.Image_Ambience?.data[0].attributes.alternativeText
  //       : "",
  //   },
  //   {
  //     imageUrl: props?.productOnly?.Image_Ambience?.data
  //       ? props?.productOnly?.Image_Ambience?.data[1]?.attributes.formats.large
  //           .url
  //       : "https://strapi-rezero-space.sgp1.digitaloceanspaces.com/69091a26ae11473d26e7d5be4be902fa.avif",
  //     title: props?.productOnly?.Image_Ambience?.data
  //       ? props?.productOnly?.Image_Ambience?.data[1]?.attributes.name
  //       : "",
  //   },
  // ];
  const imageAmbienceData = props?.productOnly?.Image_Ambience?.data || [];

  const sliderData = imageAmbienceData.map((image: any, index: any) => {
    return {
      imageUrl:
        image.attributes.formats.large?.url ||
        "https://strapi-rezero-space.sgp1.digitaloceanspaces.com/69091a26ae11473d26e7d5be4be902fa.avif",
      title: image.attributes.alternativeText || "No Title data",
    };
  });

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
            width: `${2 * 100}%`,
            display: "flex",
            height: { xs: "480px", md: "715px" },
            transition: "1s",
            transform: `translateX(-${counter * (100 / sliderData.length)}%)`,
          }}
        >
          {/* {sliderData
            .slice(0, props?.productOnly?.Image_Ambience?.data.length)
            .map((slide:any, index:any) => (
              <Box
                key={index}
                className="slide"
                sx={{ width: `${100 / sliderData.length}%` }}
              >
                <Box
                  sx={{ width: "100%", height: "100%", position: "relative" }}
                >
                  <Image
                    src={slide.imageUrl}
                    fill
                    alt={""}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Box>
            ))} */}
          {props?.productOnly?.Image_Ambience?.data ? (
            sliderData.map((slide: any, index: any) => (
              <Box
                key={index}
                className="slide"
                sx={{ width: `${100 / sliderData.length}%` }}
              >
                <Box
                  sx={{ width: "100%", height: "100%", position: "relative" }}
                >
                  <Image
                    src={slide.imageUrl}
                    fill
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Box>
            ))
          ) : (
            <Box className="slide">
              <Typography>No images available.</Typography>
            </Box>
          )}
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
          {props?.productOnly?.Image_Ambience?.data
            ? sliderData.map((_: any, index: any) => (
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
              ))
            : null}
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
          {sliderData[counter]?.title || "No Title"}
          {/* {sliderData[counter].dimension} */}
        </Typography>
      </Box>
    </>
  );
}
