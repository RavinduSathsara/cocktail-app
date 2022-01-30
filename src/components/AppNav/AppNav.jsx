import React from "react";

import { Toolbar, Typography, AppBar } from "@mui/material";
import LocalBarIcon from "@mui/icons-material/LocalBar";

const AppNav = () => {
  return (
    <div>
      <AppBar style={{ background: "#2E3B55" }} position="relative">
        <Toolbar>
          <LocalBarIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Cocktail App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppNav;
