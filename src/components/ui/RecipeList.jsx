import { RecipeItem } from "./RecipeItem";
import { data } from "../../utils/data";
import { SimpleGrid } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";

export const RecipeList = ({ data, clickFn }) => {
  return (
    <Center flexDir="row" flexWrap="wrap" margin="50px">
      {data.map((recipeData, index) => (
        <RecipeItem key={index} recipe={recipeData.recipe} clickFn={clickFn} />
      ))}
    </Center>
  );
};

/* Ook mogelijk:
export const RecipeList = ({ data, clickFn, setRecipe }) => {
  let columns = 0;
  if (data.length > 3) {
    columns = 4;
  } else {
    columns = data.length;
  }
  return (
    <SimpleGrid columns={columns} spacingY={6}>
      {data.map((recipeData, index) => (
        <RecipeItem key={index} recipe={recipeData.recipe} clickFn={clickFn} />
      ))}
    </SimpleGrid>
  );
};
*/
