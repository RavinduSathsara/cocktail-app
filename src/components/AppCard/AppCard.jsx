import React from "react";

import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const AppCard = (props) => {
  return (
    <div>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            // 16:9
            pt: "0px",
          }}
          image={props.strDrinkThumb}
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.strDrink}
          </Typography>
          <Typography>{props.strInstructions}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppCard;
