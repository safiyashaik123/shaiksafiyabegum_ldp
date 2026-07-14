import { Box, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import type { ReactNode } from "react";

type CardTitleProps = {
  children: ReactNode;
};

function CardTitle({ children }: CardTitleProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={0.5}
    >
      <Typography
        variant="h5"
        color="text.primary"
      >
        {children}
      </Typography>

      <InfoOutlinedIcon
        sx={{
          fontSize: 18,
          color: "#7A7A82",
          cursor: "pointer",
        }}
      />
    </Box>
  );
}

export default CardTitle;