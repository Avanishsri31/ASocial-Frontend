import React from "react";
import { Box } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <lottie-player
        src="https://assets8.lottiefiles.com/packages/lf20_aaesnvcw.json"
        background="transparent"
        speed="1"
        style={{ width: "100%" }}
        loop
        autoplay
      ></lottie-player>
    </Box>
  );
};

export default NotFound;
