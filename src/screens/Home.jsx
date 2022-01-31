import * as React from "react";

import { useEffect, useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Hero from "../components/Hero/Hero";
import AppNav from "../components/AppNav/AppNav";
import AppCard from "../components/AppCard/AppCard";
import AppFooter from "../components/AppFooter/AppFooter";

// import components
import HomeData from "./HomeData";
const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Home() {
  const [recipes, setRecipes] = useState(HomeData);

  useEffect(() => {
    getRecipes();
  }, []);
  const getRecipes = async () => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s`
    );
    const data = await response.json();

    setRecipes(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppNav />
      <main>
        {/* Hero unit */}
        <Hero />
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/* <h1>{recipes.drinks[0].idDrink}</h1> */}
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <AppCard
                  strDrink={recipes.drinks[card].strCategory}
                  strDrinkThumb={recipes.drinks[card].strDrinkThumb}
                  strInstructions={recipes.drinks[card].strInstructions}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <AppFooter />
      {/* End footer */}
    </ThemeProvider>
  );
}
