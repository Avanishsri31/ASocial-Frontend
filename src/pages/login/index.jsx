import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Avatar,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import brand from "../../assets/brand.png";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          alt="Brand"
          src={brand}
          sx={{ padding: "3px", width: "50px", height: "50px" }}
        />
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 1.6rem, 2rem)"
          color="primary"
        >
          ASocial
        </Typography>
      </Box>

      {/* FORM BOX */}
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography
          fontWeight="500"
          display="flex"
          alignItems="center"
          variant="h5"
          sx={{ mb: "1.5rem" }}
        >
          Welcome to ASocial, the Social Media for Sociopaths{" "}
          <VerifiedIcon sx={{ color: "yellow" }} />
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
