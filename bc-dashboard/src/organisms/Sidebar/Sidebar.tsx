import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

import Logo from "../../molecules/Logo/Logo";
import NavigationItem from "../../molecules/NavigationItem/NavigationItem";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 250,
        minHeight: "100vh",
        bgcolor: "background.paper",
        borderRight: "1px solid",
        borderColor: "divider",
        display: "flex",
        flexDirection: "column",
        p: 3,
        boxSizing: "border-box",
      }}
    >
      <Logo />

      <Box
        sx={{
          mt: 5,
        }}
      >
        <NavigationItem
          icon={<HomeOutlinedIcon />}
          label="Home"
          to="/"
        />

        <NavigationItem
          icon={<CreditCardOutlinedIcon />}
          label="Cash Acceleration"
          to="/cash-acceleration"
        />
      </Box>

      <Box
        sx={{
          mt: "auto",
        }}
      >
        <Divider
          sx={{
            mb: 3,
          }}
        />

        <NavigationItem
          icon={<HelpOutlineOutlinedIcon />}
          label="Watch how to"
          to="/watch-how-to"
        />
      </Box>
    </Box>
  );
};

export default Sidebar;