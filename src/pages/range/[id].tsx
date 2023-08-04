import React from "react";
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import {
  Box,
  Button,
  Grid,
  Link,
  List,
  Stack,
  Typography,
} from "@mui/material";
import { data } from "cypress/types/jquery";
import { log } from "console";
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
import product from "next-seo/lib/jsonld/product";

export default function Page({ data }) {
  console.log(data);
  // console.log(product);

  // console.log(data.attributes.Price);
  const dispatch = useDispatch();

  return <></>;
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

  // console.log(response);

  let temPath: any = [];
  response.data.map((item: any, index: any) => {
    // console.log(item.attributes.Slug);

    temPath.push({
      params: {
        id: item.id.toString(),
      },
    });
  });

  // console.log("ininini");
  // console.log(temPath.length());

  return {
    paths: temPath,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  // console.log("ini darimana");
  // console.log(params.slug);
  // console.log(params);
  console.log();
  console.log(params.id);
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

  console.log(responseProduct);
  console.log(responseMotif);

  const product = await responseProduct.json();
  const motif = await responseMotif.json();

  return {
    props: {
      data: {
        product,
        motif,
      },
    },
  };
};
