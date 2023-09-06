import { Box, Container, Grid, Stack, Typography, Button, FormControl, Select, MenuItem, InputLabel } from "@mui/material";
// import { GetStaticProps } from "next";
import React from "react";
import axios from "axios";
import useSWR from "swr";
import Image from "next/image";
import HoverInProduct from "@components/pages/range/hoverInProduct";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";
import AddressProduct from "@components/pages/range/AddressProduct";
import DescriptionProducts from "@components/pages/range/DescriptionProducts";
import ProductRange from "@components/pages/range/ProductRange";
import ProductHero from "@components/pages/range/ProductHero";
import FeaturedProducts from "@components/pages/range/FeaturedProduct";
import ProductLayout from "@layouts/ProductLayout";

export default function Marble(props: any) {
  const pageTitle = props.marble.data[0]?.attributes.style_motifs.data[0]?.attributes.Style;
  const pageShortDescription =props.marble.data[0]?.attributes.style_motifs.data[0]?.attributes.Short_Description;
  const pageImage = props.marble.data[0]?.attributes.Image_Hero_2880x1138px.data.attributes.url;
  const pageDescription = props.marble.data[0]?.attributes.style_motifs.data[0]?.attributes.Description || "No data Description";
  return (
    <>
      <ProductHero props={props} pageTitle={pageTitle} pageImage={pageImage} pageShortDescription={pageShortDescription}/>
      <ProductLayout>
        <AddressProduct />
        <DescriptionProducts props={props} pageDescription={pageDescription} />
      </ProductLayout>
      <ProductLayout backgroundColor={"#f5f5f5"}>
        <FeaturedProducts props={props} pageTitle={pageTitle} />
      </ProductLayout>
      <ProductLayout>
        <ProductRange props={props} pageTitle={pageTitle} />
      </ProductLayout>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://strapi-app-tnshv.ondigitalocean.app/api/motifs?pagination[pageSize]=999&populate=*&filters[style_motifs][Style][$eq]=Marble", {
    headers: {
      Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
    },
  });

  const response = await res.json();
  const marble = await fetch("https://strapi-app-tnshv.ondigitalocean.app/api/motifs?pagination[pageSize]=1&populate=*&filters[style_motifs][Style][$eq]=Marble", {
    headers: {
      Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
    },
  });

  const Marble = await marble.json();
  const responseAlt1 = await fetch("https://strapi-app-tnshv.ondigitalocean.app/api/products/" + 181 + "?populate=deep,10", {
    headers: {
      Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
    },
  });

  const responseAlternative1 = await responseAlt1.json();

  const responseAlt2 = await fetch("https://strapi-app-tnshv.ondigitalocean.app/api/products/" + 244 + "?populate=deep,10", {
    headers: {
      Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
    },
  });

  const responseAlternative2 = await responseAlt2.json();

  const responseAlt3 = await fetch("https://strapi-app-tnshv.ondigitalocean.app/api/products/" + 45 + "?populate=deep,10", {
    headers: {
      Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
    },
  });

  const responseAlternative3 = await responseAlt3.json();

  console.log(response);
  return {
    props: {
      response: response,
      marble: Marble,
      alternative1: responseAlternative1,
      alternative2: responseAlternative2,
      alternative3: responseAlternative3,
    },
  };
};
