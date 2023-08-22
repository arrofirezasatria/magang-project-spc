import React from "react";

import type { GetStaticPaths } from "next";

import AltProductRanges from "@components/pages/range/AltProductRanges";
import ModulSpec from "@components/pages/range/ModulSpec";
import ModulPacking from "@components/pages/range/modulPacking";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import SliderImage from "@components/pages/range/SliderImage";
import { NumericFormat } from "react-number-format";
import TheProduct from "@components/pages/range/TheProduct";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "store/counterSlice";
import { useRouter } from "next/router";

import HeroProducts from "@components/pages/range/HeroProducts";
import ProductLayout from "@layouts/ProductLayout";
import AddressProduct from "@components/pages/range/AddressProduct";
import ProductDescription from "@components/pages/range/ProductDescription";
import ProductSpecification from "@components/pages/range/ProductSpecification";
import AppsBar from "@components/AppsBar";
import { useTheme } from "@emotion/react";
import { useMediaQuery, Box, Typography } from "@mui/material";

interface IFormInputs {
  name: string;
  code: string;
  quantity: number;
  coverage: number;
  showAge: boolean;
  age: number;
}

export default function Page(props: any) {
  const dispatch = useDispatch();

  const imgFileUrl =
    props.productOnly.data.attributes.Image_Tile_Face?.data?.[0]?.attributes
      ?.url;

  const downloadFileAtUrl = () => {
    if (imgFileUrl) {
      fetch(imgFileUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const blobURL = window.URL.createObjectURL(new Blob([blob]));
          const fileName = imgFileUrl.split("/").pop();
          const aTag = document.createElement("a");
          aTag.href = blobURL;
          aTag.setAttribute("download", fileName);
          document.body.appendChild(aTag);
          aTag.click();
          aTag.remove();
        });
    }
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const idRouter = useRouter();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const data = props.motif.data.attributes.motif.data.attributes;
  props.product.data.attributes.motif.data.attributes.products.data; // array

  return (
    <>
      <HeroProducts
        imageHero={
          props.motif.data.attributes.motif.data.attributes
            .Image_Hero_2880x1138px.data?.attributes.url
        }
        nameMotif={data.Name}
        NColor={data.N_Color}
        NDimension={data.N_Dimension}
        NFinish={data.N_Finish}
      />
      <ProductLayout>
        <AddressProduct />
        <ProductDescription props={props} data={data} hightlight={idRouter} />

        <ProductSpecification props={props} data={data} />
      </ProductLayout>
      <AltProductRanges
        alt1={props.alternative1}
        alt2={props.alternative2}
        alt3={props.alternative3}
      />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const headers = {
    Authorization:
      "Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c",
  };

  const res = await fetch(
    "https://strapi-app-tnshv.ondigitalocean.app/api/products?pagination[page]=0&pagination[pageSize]=999",
    {
      headers: {
        Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
      },
    }
  );

  const response = await res.json();

  let temPath: any = [];
  response.data.map((item: any, index: any) => {
    temPath.push({
      params: {
        id: item.id.toString(),
      },
    });
  });

  return {
    paths: temPath,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const responseProduct = await fetch(
    "https://strapi-app-tnshv.ondigitalocean.app/api/products/" +
      params.id +
      "?populate[motif][populate][products][populate]=*",
    {
      headers: {
        Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
      },
    }
  );

  const responseMotif = await fetch(
    "https://strapi-app-tnshv.ondigitalocean.app/api/products/" +
      params.id +
      "?populate[motif][populate]=*",
    {
      headers: {
        Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
      },
    }
  );

  const responseAmbience = await fetch(
    "https://strapi-app-tnshv.ondigitalocean.app/api/products/" +
      params.id +
      "?populate=*",
    {
      headers: {
        Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
      },
    }
  );

  const product = await responseProduct.json();
  const motif = await responseMotif.json();
  const ambience = await responseAmbience.json();

  const responseAlt1 = await fetch(
    "https://strapi-app-tnshv.ondigitalocean.app/api/motifs/" +
      1 +
      "?populate=*",
    {
      headers: {
        Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
      },
    }
  );

  const responseAlternative1 = await responseAlt1.json();

  const responseAlt2 = await fetch(
    "https://strapi-app-tnshv.ondigitalocean.app/api/motifs/" +
      2 +
      "?populate=*",
    {
      headers: {
        Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
      },
    }
  );

  const responseAlternative2 = await responseAlt2.json();

  const responseAlt3 = await fetch(
    "https://strapi-app-tnshv.ondigitalocean.app/api/motifs/" +
      3 +
      "?populate=*",
    {
      headers: {
        Authorization: `Bearer 9c54bfb85749cfdc1ea1f98fb2f1a64b7cac4ad7662fda7a099556577a20343b945b20f2b1b68dfab82266337804834c1a1ef342c8a4c5e2886835ba072f49746a825df9e09c46fa214a33fa384134c89d18c0dae1d142c2c441f5876fa4a984012020b22d38a08b5fc2fd60ce80248ebae5c5c2f9511e84c7cae90cfe3a246c`,
      },
    }
  );

  const responseAlternative3 = await responseAlt3.json();

  return {
    props: {
      product: product,
      motif: motif,
      productOnly: ambience,
      alternative1: responseAlternative1,
      alternative2: responseAlternative2,
      alternative3: responseAlternative3,
    },
  };
};
