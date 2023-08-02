import React from "react";
import { Box, Stack, Typography, Paper, Button, colors } from "@mui/material";
import { useThemeContext } from "@modules/components/ThemeContext";
import AppsContainer from "@layouts/AppsContainer";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import IconBoilerplate from "@components/icon/IconBoilerplate";
import { textAlign } from "@mui/system";



export default function Home() {

  const { darkMode, toggleDarkMode } = useThemeContext();
  const { t } = useTranslation("home");
  const title = t("title");

  return (
    <AppsContainer>
      <Box component="main" sx={{ minHeight: "640px" }}>
        <header>
          <Box sx={{
            width: "100%",
            height: "750px",
            bgcolor: "#000",
            color: "white",
            textAlign: "center"
          }}>
            <Box sx={{ height: '400px', backgroundColor: 'red', position: 'relative' }}>
              <Image
                src={"/static/images/hero.jpg"}
                fill
                alt={""}
                style={{
                  objectFit: 'cover'
                }}
              />
            </Box>

            <Typography sx={{ fontSize: "100px", fontWeight: "400" }}>LOREM & IPSUM</Typography>
            <Typography sx={{ fontSize: "40px" }}>Dolor sit amet</Typography>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: "1rem" }}>
              <Button variant="outlined" sx={{ color: "#FFF", borderColor: "#FFF", fontSize: "20px" }}>View Product</Button>
              <Button variant="outlined" sx={{ color: "#FFF", borderColor: "#FFF", fontSize: "20px" }}>View Blogs</Button>
            </Box>
          </Box>
        </header>
        <section>
          <Box
            sx={{ display: "flex", justifyContent: "center", height: "120px" }}
          >
            <Box
              sx={{
                justifySelf: "center",
                alignSelf: "center",
                // position: "relative",
                // borderRadius: "8px",
                // overflow: "hidden",
                width: "100%",
                height: "750px",
                bgcolor: "#4D4D4D",
                color: "#FFF"
              }}
            >
              <Typography
                textAlign={"center"}
                sx={{ fontSize: "26px", fontWeight: "bold", fontFamily: "", my: 3 }}
              >
                Aris K - Koding Coba
              </Typography>
              <Typography
                textAlign={"center"}
                sx={{ fontSize: "18px", fontWeight: "bold", fontFamily: "", my: 3 }}
              >
                Complete structured production ready NextJs Boilerplate with styling
                powered by MUI
              </Typography>
              <Typography
                gutterBottom
                sx={{ textAlign: "center", paddingBottom: "20px" }}
              >
                Nostrud consequat reprehenderit nulla cupidatat duis aliquip in
                adipisicing. Mollit id ea commodo ea sint aliquip amet nostrud minim
                non esse dolore eiusmod. Ad nisi eu esse duis minim velit dolore ex.
                Do consectetur eiusmod duis laborum minim sit cupidatat eu irure
                aliquip reprehenderit ea ad pariatur. Tempor ullamco qui ea labore
                magna eu. Lorem dolore elit in laboris sunt.
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                Nostrud consequat reprehenderit nulla cupidatat duis aliquip in
                adipisicing. Mollit id ea commodo ea sint aliquip amet nostrud minim
                non esse dolore eiusmod. Ad nisi eu esse duis minim velit dolore ex.
                Do consectetur eiusmod duis laborum minim sit cupidatat eu irure
                aliquip reprehenderit ea ad pariatur. Tempor ullamco qui ea labore
                magna eu. Lorem dolore elit in laboris sunt.
              </Typography>
            </Box>
          </Box>
        </section>
      </Box >
    </AppsContainer >
  );
}
