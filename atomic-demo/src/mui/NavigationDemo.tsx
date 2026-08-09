import { useState } from "react";

import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

function NavigationDemo() {

  const [open, setOpen] = useState(false);

  return (
    <>

      <AppBar position="static">

        <Toolbar>

          <IconButton
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6">

            Student Management System

          </Typography>

        </Toolbar>

      </AppBar>

      <Drawer

        open={open}

        onClose={() => setOpen(false)}

      >

        <Box sx={{ width: 250 }}>

          <List>

            {[
              "Dashboard",
              "Students",
              "Courses",
              "Settings",
              "Logout",
            ].map((item) => (

              <ListItem key={item} disablePadding>

                <ListItemButton>

                  <ListItemText primary={item} />

                </ListItemButton>

              </ListItem>

            ))}

          </List>

        </Box>

      </Drawer>

      <Typography
        variant="h5"
        sx={{ margin: 3 }}
      >
        Dashboard Content
      </Typography>

    </>
  );
}

export default NavigationDemo;