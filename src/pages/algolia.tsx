import React, { useState } from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField, Typography } from "@mui/material";
import Fuse from "fuse.js";
import { useForm } from "react-hook-form";
import { dataAlgolia } from "data/algolia/algolia";
import Image from "next/image";

const fuseOptions = {
  keys: ["attributes.Code", "attributes.Name"],
};

const Algolia = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      search: "", // Provide an initial value for the search field
    },
  });

  const fuse = new Fuse(dataAlgolia, fuseOptions);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Box marginTop="100px"></Box>
      <Button
        sx={{ backgroundColor: "black", color: "white" }}
        onClick={handleOpenModal} // Open the modal when the button is clicked
      >
        Tekan Ini
      </Button>
      <Dialog open={isModalOpen} onClose={handleCloseModal} fullWidth>
        <DialogTitle>
          <Box sx={{ border: "1px solid black", width: "100%" }}>
            <TextField
              size="small"
              id="search"
              placeholder="search product"
              variant="outlined"
              {...register("search", {
                required: "Required Field",
              })}
              sx={{
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  border: "none", // Remove the border
                },
                width: "100%",
              }}
            />
          </Box>
        </DialogTitle>
        <DialogContent>
          <Stack
            spacing={1}
            sx={{
              flex: 1,
              height: "70vh",
            }}
          >
            <Box sx={{}}>
              {fuse.search(watch("search")).map((item, index) => (
                <Box key={index} sx={{py:"10px"}}>
                  <Typography>{item.item.attributes.Name}</Typography>
                  <Typography>{item.item.attributes.Code}</Typography>
                </Box>
              ))}
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions sx={{p:"16px 24px",borderTop:"1px solid #000"}}>
          <Image src={"/static/images/Sunpower.png"} width={100} height={30} alt={""} />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Algolia;
