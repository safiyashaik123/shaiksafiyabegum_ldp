import Stack from "@mui/material/Stack";

import Typography from "../../atoms/Typography/Typography";

import logo from "../../assets/logo/icon.svg";

const Logo = () => {
  return (
    <Stack
      direction="row"
      spacing={1.5}
      sx={{
        alignItems: "center",
      }}
    >
      <img
        src={logo}
        alt="Seeder Logo"
        width={36}
        height={36}
      />

      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
        }}
      >
        Seeder
      </Typography>
    </Stack>
  );
};

export default Logo;