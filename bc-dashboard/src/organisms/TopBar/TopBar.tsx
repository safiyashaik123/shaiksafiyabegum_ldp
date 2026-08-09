import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import Typography from "../../atoms/Typography/Typography";
import ProfileMenu from "../../molecules/ProfileMenu/ProfileMenu";

interface TopBarProps {
  onLogout: () => void;
}

const TopBar = ({
  onLogout,
}: TopBarProps) => {
  return (
    <Box
      sx={{
        height: 90,
        px: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          color="text.primary"
          sx={{
            fontWeight: 600,
          }}
        >
          Good afternoon ✋
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 0.5,
          }}
        >
          April 02, 2021
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <IconButton>
          <NotificationsNoneOutlinedIcon />
        </IconButton>

        <ProfileMenu
          name="Safiya"
          onLogout={onLogout}
        />
      </Box>
    </Box>
  );
};

export default TopBar;