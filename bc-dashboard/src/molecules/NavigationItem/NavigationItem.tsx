import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { NavLink, useLocation } from "react-router-dom";

import Typography from "../../atoms/Typography/Typography";

interface NavigationItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
}

const NavigationItem = ({
  icon,
  label,
  to,
}: NavigationItemProps) => {
  const location = useLocation();

  const isSelected = location.pathname === to;

  return (
    <ListItemButton
      component={NavLink}
      to={to}
      selected={isSelected}
      sx={{
        height: 48,
        borderRadius: "12px",
        px: 2,
        mb: 1,

        color: "text.secondary",

        "&.Mui-selected": {
          backgroundColor: "primary.main",
          color: "#FFFFFF",
        },

        "&.Mui-selected .MuiListItemIcon-root": {
          color: "#FFFFFF",
        },

        "&:hover": {
          backgroundColor: "rgba(108,92,231,0.12)",
        },

        "&.Mui-selected:hover": {
          backgroundColor: "primary.main",
        },
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 36,
          color: "inherit",
        }}
      >
        {icon}
      </ListItemIcon>

      <ListItemText
        primary={
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              color: "inherit",
            }}
          >
            {label}
          </Typography>
        }
      />
    </ListItemButton>
  );
};

export default NavigationItem;