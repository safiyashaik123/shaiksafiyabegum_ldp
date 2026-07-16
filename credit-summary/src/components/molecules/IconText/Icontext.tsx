import { Stack } from "@mui/material";

import Typography from "../../atoms/Typography/Typography";
import Icon from "../../atoms/Icon/Icon";

type IconTextProps = {
  text: string;
};

function IconText({ text }: IconTextProps) {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        alignItems: "center",
      }}
    >
      <Typography
        variant="h5"
        color="text.primary"
      >
        {text}
      </Typography>

      <Icon
        fontSize="small"
        sx={{
          color: "text.secondary",
        }}
      />
    </Stack>
  );
}

export default IconText;