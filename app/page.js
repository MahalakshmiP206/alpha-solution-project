"use client";
import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Grid,
  Card,
  CardContent,
  InputBase,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; 
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CallIcon from "@mui/icons-material/Call";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";


const Sidebar = () => (
  <Drawer
    variant="permanent"
    anchor="left"
    sx={{
      width: 240,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: 240,
        backgroundColor: "#f5b895", 
        boxSizing: "border-box",
      },
    }}
  >
    <Toolbar>
      <Typography
        variant="h6"
        noWrap
        sx={{ color: "#2e3b55", fontWeight: "bold", fontFamily: "cursive" }}
      >
        HoneyBunny
      </Typography>
    </Toolbar>
    <List>
      {[
        { text: "Home", icon: <HomeIcon /> },
        { text: "Team", icon: <GroupIcon /> },
        { text: "Tasks", icon: <AssignmentIcon /> },
        { text: "Calls", icon: <CallIcon /> },
        { text: "Analytics", icon: <AnalyticsIcon /> },
        { text: "Settings", icon: <SettingsIcon /> },
      ].map((item, index) => (
        <ListItem button key={index}>
          <ListItemIcon sx={{ color: "#2e3b55" }}>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} sx={{ color: "#2e3b55" }} />
        </ListItem>
      ))}
    </List>
  </Drawer>
);


export default function Dashboard() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropAnchorEl, setDropAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDropMenuOpen = (event) => {
    setDropAnchorEl(event.currentTarget);
  };

  const handleDropMenuClose = () => {
    setDropAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Header */}
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#f5b895", zIndex: 1201 }}
      >
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            sx={{
              flexGrow: 1,
              color: "#2e3b55",
              fontWeight: "bold",
              fontFamily: "cursive",
            }}
          >
            Business Performance
          </Typography>
          {/* Search Bar */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: "4px",
              padding: "2px 8px",
              marginRight: 2,
            }}
          >
            <InputBase placeholder="Search…" />
            <IconButton type="submit" sx={{ p: "10px" }}>
              <SearchIcon />
            </IconButton>
          </Box>
          {/* Notification and Profile */}
          <IconButton>
            <NotificationsIcon sx={{ color: "#8b4513" }} />{" "}
            {/* Dark biscuit color for notification */}
          </IconButton>
          <Avatar
            onClick={handleMenuOpen}
            sx={{ marginLeft: "8px", bgcolor: "#8b4513", cursor: "pointer" }}
          >
            M
          </Avatar>{" "}
          {/* Dark biscuit color for "M" */}
          <Typography
            onClick={handleDropMenuOpen}
            sx={{ marginLeft: "8px", color: "black", cursor: "pointer" }}
          >
            Mahalakshmi
          </Typography>
          <IconButton
            onClick={handleDropMenuOpen}
            sx={{ padding: 0, marginLeft: 1 }}
          >
            <ExpandMoreIcon sx={{ color: "#8b4513" }} />
          </IconButton>
          {/* Dropdown Menu for Avatar */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ mt: "45px" }} 
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
          {/* Dropdown Menu for Mahalakshmi */}
          <Menu
            anchorEl={dropAnchorEl}
            open={Boolean(dropAnchorEl)}
            onClose={handleDropMenuClose}
            sx={{ mt: "45px" }} 
          >
            <MenuItem onClick={handleDropMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleDropMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleDropMenuClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#f5deb3",
          minHeight: "100vh",
          mt: 8,
        }}
      >
        <Toolbar />

        {/* Right Dashboard Heading */}
        <Typography
          variant="h4"
          sx={{
            color: "#2e3b55",
            fontFamily: "cursive",
            mb: 2,
            mt: -5,
            fontWeight: "bold",
          }}
        >
          Hello Everyone!
        </Typography>

        {/* Subheading */}
        <Typography
          variant="h6"
          sx={{ color: "#2e3b55", fontFamily: "cursive", mb: 4 }}
        >
          You Can See your whole data from here
        </Typography>

        {/* Data Boxes */}
        <Grid container spacing={3}>
          {[
            "Total Sales",
            "Total Users",
            "New Orders",
            "Revenue",
            "Monthly Profit",
            "Completed Tasks",
            "Pending Orders",
            "Active Users",
            "Customer Reviews",
          ].map((text, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: "#d2691e",
                  "&:hover": {
                    backgroundColor: "#ff9800", 
                  },
                  transition: "background-color 0.3s ease", 
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ color: "#fff" }}>
                    {text}
                  </Typography>
                  <Typography variant="h5" sx={{ color: "#fff" }}>
                    $ {Math.floor(Math.random() * 100000)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
