import { Container } from "@mui/material";
import { NextSeo } from "next-seo";
import React from "react";
import Footer from "@layouts/Footer";
import { NextSeoProps } from "next-seo/lib/types";
import Header from "@layouts/Header";
import AppsBar from "@components/AppsBar";

interface props {
  children: React.ReactNode;
  basicSeo?: NextSeoProps;
}

export default function AppsContainer(AppsContainerProps: props) {
  const { children, basicSeo, ...rest } = AppsContainerProps;

  return (
    <Container maxWidth={"xl"} sx={{ width: "100%", bgcolor: "#F5F5F5", pl: "0 !important", pr: "0 !important" }} {...rest}>
      <NextSeo {...basicSeo} />
      <AppsBar />
      {children}
      <Footer />
    </Container>
  );
}
