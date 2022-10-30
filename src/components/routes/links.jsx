import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

function Links() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link style={{ color: "inherit", textDecoration: "none" }} to="/">
              IBRAHIM
            </Link>
          </Typography>
          <Typography variant="body2" component="div">
            <NavLink className="link" end to="/">
              Home
            </NavLink>
          </Typography>
          <Typography variant="body2" component="div">
            <NavLink className="link" to="/about">
              About
            </NavLink>
          </Typography>
          <Typography variant="body2" component="div">
            <NavLink className="link" to="/products">
              Products
            </NavLink>
          </Typography>
          <Typography variant="body2" component="div">
            <NavLink className="link" to="/users">
              Users
            </NavLink>
          </Typography>
          <Typography variant="body2" component="div">
            <NavLink className="link" to="/error">
              Error
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Links;
