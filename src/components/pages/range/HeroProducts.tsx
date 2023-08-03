import { Box, Typography} from "@mui/material";
import Image from "next/image";

export default function HeroProducts() {
  return (
    <>
      <Box display="flex" sx={{ height: "600px", width: "100%", position: "relative" }}>
        <Image src={"/static/images/concrete.jpg"} fill alt={""} />
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            textAlign: "center",
            position: "absolute",
            width: "100%",
            height: "600px",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "100%", justifyContent: "center" }}>
            <Typography
              sx={{
                fontSize: { xs: "30px", md: "90px" },
                fontWeight: "bold",
                color: "white",
                lineHeight: { xs: "30px", md: "90px" },
                letterSpacing: { xs: "5px", md: "10px" },
                textTransform: "uppercase",
                textShadow: "0 0 20px #000",
              }}
            >
              Concrete
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "30px" },
                fontWeight: "400",
                color: "white",
                lineHeight: "39px",
                textTransform: "uppercase",
                textShadow: "0 0 20px #000",
              }}
            >
              A Selection Of Stunning Concrete Products
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
