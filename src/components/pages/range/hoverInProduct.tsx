import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";

export default function HeroProducts() {
  return (
    <>
      <Link href="#">
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            opacity: 0,
            zIndex: "1",
            transition: "opacity 0.3s ease-in-out",
            "&:hover": {
              opacity: 1,
            },
            "&:before": {
              content: '""',
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "110%",
              backgroundSize: "cover",
              backgroundPosition: "0 0",
              transition: "transform calc(var(--d) * 1.5) var(--e)",
              pointerEvents: "none",
            },
            "&:after": {
              content: '""',
              display: "block",
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "200%",
              pointerEvents: "none",
              backgroundColor: "black",
              opacity: 0.4,
              transform: "translateY(-50%)",
              transition: "transform calc(var(--d) * 2) var(--e)",
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              transition: "transform var(--d) var(--e)",
              zIndex: 1,
              "&:hover": {
                transition: ["max-height .3s ease-out", "margin .3s ease-out", "opacity .3s linear"],
              },
            }}
          >
            <Box display="flex" flexDirection="column" sx={{ justifyContent: "space-between", width: "100%", height: "80%", textTransform: "capitalize", mt: "24px", ml: "16px" }}>
              <Box display="flex" flexDirection="row">
                <Box sx={{ position: "relative", width: "35px", height: "35px" }}>
                  <Image src={"/static/images/kotakdua.jpg"} fill alt={""} />
                </Box>
                <Box display="flex" flexDirection="column" ml="8px" sx={{ opacity: "0.9" }}>
                  <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", fontSize: "12px" }}>nature</Typography>
                  <Box display="flex" flexWrap="wrap" sx={{ opacity: "0.8" }}>
                    <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr: "8px", fontSize: "12px" }}>120x60</Typography>
                    <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr: "8px", fontSize: "12px" }}>60x60</Typography>
                    <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr: "8px", fontSize: "12px" }}>36x60</Typography>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" flexDirection="row">
                <Box sx={{ position: "relative", width: "35px", height: "35px" }}>
                  <Image src={"/static/images/kotaktiga.jpg"} fill alt={""} />
                </Box>
                <Box display="flex" flexDirection="column" ml="8px" sx={{ opacity: "0.9" }}>
                  <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", fontSize: "12px" }}>Bianco</Typography>
                  <Box display="flex" flexWrap="wrap" sx={{ opacity: "0.8" }}>
                    <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr: "8px", fontSize: "12px" }}>120x60</Typography>
                    <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr: "8px", fontSize: "12px" }}>60x60</Typography>
                    <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr: "8px", fontSize: "12px" }}>36x60</Typography>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" flexDirection="row">
                <Box sx={{ position: "relative", width: "35px", height: "35px" }}>
                  <Image src={"/static/images/kotakempat.jpg"} fill alt={""} />
                </Box>
                <Box display="flex" flexDirection="column" ml="8px" sx={{ opacity: "0.9" }}>
                  <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", fontSize: "12px" }}>grigio</Typography>
                  <Box display="flex" flexWrap="wrap" sx={{ opacity: "0.8" }}>
                    <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr: "8px", fontSize: "12px" }}>120x60</Typography>
                    <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr: "8px", fontSize: "12px" }}>60x60</Typography>
                    <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr: "8px", fontSize: "12px" }}>36x60</Typography>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" flexDirection="row">
                <Box sx={{ position: "relative", width: "35px", height: "35px" }}>
                  <Image src={"/static/images/kotaklima.jpg"} fill alt={""} />
                </Box>
                <Box display="flex" flexDirection="column" ml="8px" sx={{ opacity: "0.9" }}>
                  <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", fontSize: "12px" }}>rovere</Typography>
                  <Box display="flex" flexWrap="wrap" sx={{ opacity: "0.8" }}>
                    <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr: "8px", fontSize: "12px" }}>120x60</Typography>
                    <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr: "8px", fontSize: "12px" }}>60x60</Typography>
                    <Typography sx={{ fontWeight: "medium", textTransform: "capitalize", color: "white", mr: "8px", fontSize: "12px" }}>36x60</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    </>
  );
}
