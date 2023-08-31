import { Box, Container, Grid, Typography } from "@mui/material";
// import { GetStaticProps } from "next";
import React from "react";
import Image from "next/image";
import AddressProduct from "@components/pages/range/AddressProduct";
import DescriptionProducts from "@components/pages/range/DescriptionProducts";
import ProductRange from "@components/pages/range/ProductRange";
import ProductHero from "@components/pages/range/ProductHero";
import FeaturedProducts from "@components/pages/range/FeaturedProduct";
import ProductLayout from "@layouts/ProductLayout";

export default function WallTileSet(props: any) {
  console.log("ziahihauushdbfdsuifsduiicbudsyfuisydfsd");
  console.log(props.walltile.data[0]?.attributes.Image_Hero_2880x1138px.data.attributes.url);
  return (
    <>
      <ProductHero props={props} pageTitle="wall-tile-set" pageImage="wall-tile-set" />
      <Container>
        <Grid>
          <AddressProduct />
          <DescriptionProducts props={props} pageDescription="wall-tile-set" />
        </Grid>
      </Container>
      <ProductLayout backgroundColor={"#f5f5f5"}>
        <FeaturedProducts props={props} pageTitle="wall-tile-set" />
      </ProductLayout>  
      <ProductLayout>
        <ProductRange props={props} pageTitle="wall-tile-set" />
      </ProductLayout>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://strapi-app-tnshv.ondigitalocean.app/api/motifs?pagination[pageSize]=999&populate=*&filters[product_varians][Varian][$eq]=Wall Tile Set",
    {
      headers: {
        Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
      },
    }
  );
  const wTile = await fetch(
    "https://strapi-app-tnshv.ondigitalocean.app/api/motifs?pagination[pageSize]=1&populate=*&filters[product_varians][Varian][$eq]=Wall Tile Set",
    {
      headers: {
        Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
      },
    }
  );

  const response = await res.json();
  const wallTile = await wTile.json();
  const responseAlt1 = await fetch(
    'https://strapi-app-tnshv.ondigitalocean.app/api/products/' +
      153 +
      '?populate=deep,10',
    {
      headers: {
        Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
      },
    },
  );

  const responseAlternative1 = await responseAlt1.json();

  const responseAlt2 = await fetch(
    'https://strapi-app-tnshv.ondigitalocean.app/api/products/' +
      159 +
      '?populate=deep,10',
    {
      headers: {
        Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
      },
    },
  );

  const responseAlternative2 = await responseAlt2.json();

  const responseAlt3 = await fetch(
    'https://strapi-app-tnshv.ondigitalocean.app/api/products/' +
      156 +
      '?populate=deep,10',
    {
      headers: {
        Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
      },
    },
  );

  const responseAlternative3 = await responseAlt3.json();
  console.log(response);
  return {
    props: {
      response: response,
      walltile: wallTile,
      alternative1: responseAlternative1,
      alternative2: responseAlternative2,
      alternative3: responseAlternative3,
    },
  };
};
