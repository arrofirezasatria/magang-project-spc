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

export default function Endmatch(props: any) {
  console.log(props.endmatch.data[0]?.attributes.product_varians.data[1]?.attributes.Varian);
  return (
    <>
      <ProductHero props={props} pageTitle="endmatch" pageImage="endmatch"/>
      <Container>
        <Grid>
          <AddressProduct />
          <DescriptionProducts props={props} pageDescription="endmatch"/>
        </Grid>
      </Container>
      <ProductLayout backgroundColor={"#f5f5f5"}>
        <FeaturedProducts props={props} pageTitle="endmatch" />
      </ProductLayout>  
      <ProductLayout>
        <ProductRange props={props}  pageTitle="endmatch"/>
      </ProductLayout>
    </>
  );
}


export const getStaticProps = async () => {
  const res = await fetch(
    "https://strapi-app-tnshv.ondigitalocean.app/api/motifs?pagination[pageSize]=999&populate=*&filters[product_varians][Varian][$eq]=Endmatch",
    {
      headers: {
        Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
      },
    }
  );

  const response = await res.json();
  const endmatch = await fetch("https://strapi-app-tnshv.ondigitalocean.app/api/motifs?pagination[pageSize]=999&populate=*&filters[product_varians][Varian][$eq]=Endmatch", {
    headers: {
      Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
    },
  });

  const Endmatch = await endmatch.json();
  const responseAlt1 = await fetch("https://strapi-app-tnshv.ondigitalocean.app/api/products/" + 153 + "?populate=deep,10", {
    headers: {
      Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
    },
  });

  const responseAlternative1 = await responseAlt1.json();

  const responseAlt2 = await fetch("https://strapi-app-tnshv.ondigitalocean.app/api/products/" + 159 + "?populate=deep,10", {
    headers: {
      Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
    },
  });

  const responseAlternative2 = await responseAlt2.json();

  const responseAlt3 = await fetch("https://strapi-app-tnshv.ondigitalocean.app/api/products/" + 156 + "?populate=deep,10", {
    headers: {
      Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
    },
  });

  const responseAlternative3 = await responseAlt3.json();

  console.log(response);
  return {
    props: {
      response: response,
      endmatch: Endmatch,
      alternative1: responseAlternative1,
      alternative2: responseAlternative2,
      alternative3: responseAlternative3,
    },
  };
};
