import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./components/ui/RecipePage";
import { useState } from "react";
import { data } from "./utils/data";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <div backgroundColor="blue.100" minHeight="100vh">
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <RecipeListPage clickFn={setSelectedRecipe} />
      )}
    </div>
  );
};

/*
export const App = () => {
  const recipe = data.hits[1]?.recipe;

  return <RecipePage recipe={recipe} />;
};


export const App = () => {
  return <RecipeListPage />;
};*/
