import { Box, Container, Grid, Typography } from "@mui/material";
// import { GetStaticProps } from "next";
import React from "react";
import axios from "axios";
import useSWR from "swr";
import Image from "next/image";
import AddressProduct from "@components/pages/range/AddressProduct";
import DescriptionProducts from "@components/pages/range/DescriptionProducts";
// import ProductRange from "@components/pages/range/ProductRange";
import ProductHero from "@components/pages/range/ProductHero";
import FeaturedProducts from "@components/pages/range/FeaturedProduct";
import ProductLayout from "@layouts/ProductLayout";
import ProductRangeColor from "@components/pages/range/ProductRangeColor";
import AddressProduct2 from "@components/pages/range/AddressProduct2";

export default function Brown(props: any) {
  const pageTitle = props.Brown.data[0]?.attributes.tile_color.data.attributes.Name;
  const pageShortDescription = props.Brown.data[0]?.attributes.tile_color.data.attributes.Short_Description;
  const pageImage = props.Brown.data[0]?.attributes.motif.data.attributes.Image_Hero_2880x1138px.data.attributes.url;
  const pageDescription = props.Brown.data[0]?.attributes.tile_color.data.attributes.Description || "No data Description";
  return (
    <>
      <ProductHero props={props} pageTitle={pageTitle} pageImage={pageImage} pageShortDescription={pageShortDescription} />
      <ProductLayout>
        <AddressProduct />
        <DescriptionProducts props={props} pageDescription={pageDescription} />
      </ProductLayout>
      <ProductLayout backgroundColor={"#f5f5f5"}>
        <FeaturedProducts props={props} pageTitle={pageTitle} />
      </ProductLayout>
      <ProductLayout>
        <ProductRangeColor props={props} pageTitle={pageTitle} />
      </ProductLayout>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://strapi-app-tnshv.ondigitalocean.app/api/products?pagination[pageSize]=999&populate=deep,10&filters[tile_color][Name][$eq]=Brown", {
    headers: {
      Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
    },
  });

  const response = await res.json();
  const brown = await fetch("https://strapi-app-tnshv.ondigitalocean.app/api/products?pagination[pageSize]=2&populate=deep,10&filters[tile_color][Name][$eq]=Brown", {
    headers: {
      Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
    },
  });
  const Brown = await brown.json();
  const responseAlt1 = await fetch("https://strapi-app-tnshv.ondigitalocean.app/api/products/" + 135 + "?populate=deep,10", {
    headers: {
      Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
    },
  });

  const responseAlternative1 = await responseAlt1.json();

  const responseAlt2 = await fetch("https://strapi-app-tnshv.ondigitalocean.app/api/products/" + 222 + "?populate=deep,10", {
    headers: {
      Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
    },
  });

  const responseAlternative2 = await responseAlt2.json();

  const responseAlt3 = await fetch("https://strapi-app-tnshv.ondigitalocean.app/api/products/" + 246 + "?populate=deep,10", {
    headers: {
      Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
    },
  });

  const responseAlternative3 = await responseAlt3.json();

  console.log(response);
  // console.log(woodMotif);
  return {
    props: {
      response: response,
      Brown: Brown,
      alternative1: responseAlternative1,
      alternative2: responseAlternative2,
      alternative3: responseAlternative3,
    },
  };
};
