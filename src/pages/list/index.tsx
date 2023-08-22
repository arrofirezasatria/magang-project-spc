import { Box, Container, Grid, Stack, Typography, Button, FormControl, InputLabel, MenuItem, Select, Link } from "@mui/material";
// import { GetStaticProps } from "next";
import React from "react";
import axios from "axios";
import { data } from "cypress/types/jquery";
import useSWR from "swr";
import Image from "next/image";
import FeaturedProducts from "@components/pages/range/FeaturedProducts";
import HeroProducts from "@components/pages/range/HeroProducts";
import Description from "@components/pages/range/DescriptionProducts";
import AltProductRanges from "@components/pages/range/AltProductRanges";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";
import NavbarProduct from "@components/pages/range/NavbarProduct";
import HoverInProduct from "@components/pages/range/hoverInProduct";
import ModulProduct from "@components/pages/range/ModulSpec";
import ModulPacking from "@components/pages/range/modulPacking";
import SliderImage from "@components/pages/range/SliderImage";
import Footer from "@components/pages/range/footer";

const headers = {
  Authorization:
    "Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c",
};

const fetcher2 = (url: RequestInfo | URL) => fetch(url, { headers }).then((res) => res.json());

export default function Index() {
  const { data, error, isLoading, isValidating } = useSWR(`https://strapi-app-tnshv.ondigitalocean.app/api/motifs?populate=*`, fetcher2);

  const [open, setOpen] = useState(false);
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
      <Footer />
      <></>
    </>
  );
}
