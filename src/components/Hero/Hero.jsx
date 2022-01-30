import React from "react";
import { Stack, Container, Typography, Box } from "@mui/material";
const Hero = () => {
  return (
    <div>
      <Box
        style={{
          backgroundImage:
            "https://images.unsplash.com/photo-1482112048165-dd23f81c367d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }}
        sx={{
          color: "white",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="white"
            gutterBottom
          >
            Cocktail Drink
          </Typography>
          <Typography variant="h5" align="center" color="white" paragraph>
            Many people prefer cocktails over liquors because they are easier to
            digest, contain less alcohol and are a real explosion of tastes.
            But, they can also be healthy. Indeed, cocktails are much more than
            an alcoholic drink because they are made of natural ingredients that
            are known to be healthy. So, it’s not weird if you see someone
            ordering a Gin and Tonic made of the best gin and highest-quality
            tonic water, instead of a pure gin.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          ></Stack>
        </Container>
      </Box>
    </div>
  );
};

export default Hero;
