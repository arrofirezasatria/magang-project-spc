import { Button } from "@mui/material";
import { increment } from "store/counterSlice";

export default function CartButton(props: any) {
  // console.log(props.addToCart);
  // console.log(props.checkout);
  const { checkout, ...rest } = props;

  return (
    <>
      <Button
        variant="contained"
        sx={{
          mt: "20px",
          bgcolor: "#111",
          width: "100%",
          borderRadius: "50px",
          fontSize: "16px",
          letterSpacing: "1px",
          "&:hover": {
            bgcolor: "#222",
          },
        }}
        {...rest}
      >
        {props.addToCart ? props.addToCart : props.checkout}
      </Button>
    </>
  );
}
