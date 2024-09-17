import { RecipeItem } from "./RecipeItem";
import { data } from "../../utils/data";
import { SimpleGrid } from "@chakra-ui/react";

export const RecipeList = ({ data, clickFn, setRecipe }) => {
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacingY={6}>
      {data.map((recipeData, index) => (
        <RecipeItem
          key={index}
          recipe={recipeData.recipe}
          onClick={setRecipe}
        />
      ))}
    </SimpleGrid>
  );
};

/*
export const RecipeList = ({ data, clickFn }) => {
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={6} padding={5}>
      {data.hits.map((recipeData, index) => (
        <RecipeItem key={index} recipe={recipeData.recipe} clickFn={clickFn} />
      ))}
    </SimpleGrid>
  );
};*/
/*
export const RecipeList = ({ data = {}, clickFn }) => {
  const hits = data.hits || [];

  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={6} padding={5}>
      {hits.map((recipeData, index) => (
        <RecipeItem key={index} recipe={recipeData.recipe} clickFn={clickFn} />
      ))}
    </SimpleGrid>
  );
};
*/

/*
import { Flex } from "@chakra-ui/react";
import { RecipeItem } from "./RecipeItem";
import { data } from "../../utils/data";

export const Recipelist = ({ recipes }) => {
  return (
    <Flex gap={16} w="50%" flexWrap="wrap" justify={"center"}>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </Flex>
  );
};*/

/*
export const Recipelist = ({ recipes, clickFn }) => {
<RecipeItem key={recipe.id} recipe={recipe} clickFn={clickFn} />
      ))}
*/
