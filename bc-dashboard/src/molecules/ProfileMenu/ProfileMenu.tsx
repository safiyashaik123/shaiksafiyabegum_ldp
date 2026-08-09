// import { useState } from "react";

// import Avatar from "@mui/material/Avatar";
// import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";

// import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

// import Typography from "../../atoms/Typography/Typography";

// interface ProfileMenuProps {
//   name: string;
//   onLogout: () => void;
// }

// const ProfileMenu = ({
//   name,
//   onLogout,
// }: ProfileMenuProps) => {
//   const [anchorEl, setAnchorEl] =
//     useState<null | HTMLElement>(null);

//   const open = Boolean(anchorEl);

//   const handleOpen = (
//     event: React.MouseEvent<HTMLElement>
//   ) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <>
//       <Box
//         onClick={handleOpen}
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           gap: 1,
//           cursor: "pointer",
//         }}
//       >
//         <Avatar
//           sx={{
//             width: 42,
//             height: 42,
//             bgcolor: "primary.main",
//             fontWeight: 600,
//           }}
//         >
//           {name.charAt(0).toUpperCase()}
//         </Avatar>

//         <KeyboardArrowDownRoundedIcon />
//       </Box>

//       <Menu
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         slotProps={{
//           paper: {
//             sx: {
//               width: 280,
//               mt: 1,
//               bgcolor: "#2A292E",
//               color: "#FFFFFF",
//               borderRadius: 4,
//               border: "1px solid #3A3940",
//               overflow: "hidden",
//             },
//           },
//         }}
//       >
//         <MenuItem
//           sx={{
//             py: 2,
//             px: 2,
//           }}
//         >
//           <Avatar
//             sx={{
//               mr: 2,
//               width: 42,
//               height: 42,
//               bgcolor: "primary.main",
//             }}
//           >
//             {name.charAt(0).toUpperCase()}
//           </Avatar>

//           <Box>
//             <Typography
//               sx={{
//                 fontWeight: 600,
//               }}
//             >
//               {name}
//             </Typography>

//             <Typography
//               variant="body2"
//               sx={{
//                 color: "primary.main",
//               }}
//             >
//               Edit Profile
//             </Typography>
//           </Box>
//         </MenuItem>

//         <Divider />

//         <MenuItem sx={{ py: 1.5 }}>
//           <Typography>
//             Manage Subscriptions
//           </Typography>
//         </MenuItem>

//         <MenuItem
//           sx={{
//             py: 1.5,
//             gap: 2,
//           }}
//         >
//           <HelpOutlineOutlinedIcon />

//           <Typography>
//             Help
//           </Typography>
//         </MenuItem>

//         <Divider />

//         <MenuItem
//           sx={{
//             py: 1.5,
//             gap: 2,
//           }}
//         >
//           <SettingsOutlinedIcon />

//           <Typography>
//             Settings
//           </Typography>
//         </MenuItem>

//         <MenuItem
//           onClick={() => {
//             handleClose();
//             onLogout();
//           }}
//           sx={{
//             py: 1.5,
//             gap: 2,
//             color: "#FF8A65",
//             cursor: "pointer",
//           }}
//         >
//           <LogoutOutlinedIcon />

//           <Typography
//             sx={{
//               color: "inherit",
//             }}
//           >
//             Log Out
//           </Typography>
//         </MenuItem>
//       </Menu>
//     </>
//   );
// };

// export default ProfileMenu;

import { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import Typography from "../../atoms/Typography/Typography";

interface ProfileMenuProps {
  name: string;
  onLogout: () => void;
}

const ProfileMenu = ({
  name,
  onLogout,
}: ProfileMenuProps) => {
  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleOpen = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        aria-label="Profile menu"
        role="button"
        tabIndex={0}
        onClick={handleOpen}
        onKeyDown={(event) => {
          if (
            event.key === "Enter" ||
            event.key === " "
          ) {
            event.preventDefault();
            handleOpen(
              event as unknown as React.MouseEvent<HTMLElement>
            );
          }
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          cursor: "pointer",
        }}
      >
        <Avatar
          sx={{
            width: 42,
            height: 42,
            bgcolor: "primary.main",
            fontWeight: 600,
          }}
        >
          {name.charAt(0).toUpperCase()}
        </Avatar>

        <KeyboardArrowDownRoundedIcon />
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              mt: 1,
              bgcolor: "#2A292E",
              color: "#FFFFFF",
              borderRadius: 4,
              border: "1px solid #3A3940",
              overflow: "hidden",
            },
          },
        }}
      >
        <MenuItem
          sx={{
            py: 2,
            px: 2,
          }}
        >
          <Avatar
            sx={{
              mr: 2,
              width: 42,
              height: 42,
              bgcolor: "primary.main",
            }}
          >
            {name.charAt(0).toUpperCase()}
          </Avatar>

          <Box>
            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              {name}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "primary.main",
              }}
            >
              Edit Profile
            </Typography>
          </Box>
        </MenuItem>

        <Divider />

        <MenuItem sx={{ py: 1.5 }}>
          <Typography>
            Manage Subscriptions
          </Typography>
        </MenuItem>

        <MenuItem
          sx={{
            py: 1.5,
            gap: 2,
          }}
        >
          <HelpOutlineOutlinedIcon />
          <Typography>Help</Typography>
        </MenuItem>

        <Divider />

        <MenuItem
          sx={{
            py: 1.5,
            gap: 2,
          }}
        >
          <SettingsOutlinedIcon />
          <Typography>Settings</Typography>
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose();
            onLogout();
          }}
          sx={{
            py: 1.5,
            gap: 2,
            color: "#FF8A65",
            cursor: "pointer",
          }}
        >
          <LogoutOutlinedIcon />

          <Typography
            sx={{
              color: "inherit",
            }}
          >
            Log Out
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileMenu;

