import React from "react";

import { Box, Typography, Link } from "@mui/material";

const AppFooter = () => {
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link
          color="inherit"
          href="https://www.linkedin.com/in/ravindu-sathsara-a588aa218/"
        >
          Ravindu Sathsara
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  return (
    <div>
      <Box
        style={{ background: "#2E3B55" }}
        sx={{ bgcolor: "background.paper", p: 6 }}
        component="footer"
      >
        <Typography variant="h6" align="center" gutterBottom>
          Cocktail App
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        ></Typography>
        <Copyright />
      </Box>
    </div>
  );
};

export default AppFooter;
