import { IconButton } from "@mui/material";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

function Icon({
  children,
  onClick,
}: Props) {
  return (
    <IconButton onClick={onClick}>
      {children}
    </IconButton>
  );
}

export default Icon;