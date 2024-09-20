import { RecipeItem } from "./RecipeItem";
import { data } from "../../utils/data";
import { SimpleGrid } from "@chakra-ui/react";

export const RecipeList = ({ data, clickFn, setRecipe }) => {
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacingY={6}>
      {data.map((recipeData, index) => (
        <RecipeItem key={index} recipe={recipeData.recipe} clickFn={clickFn} />
      ))}
    </SimpleGrid>
  );
};
