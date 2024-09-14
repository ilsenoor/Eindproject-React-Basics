// import { Center, Heading } from "@chakra-ui/react";
// import { data } from "../utils/data";

/*
export const RecipeListPage = () => {
  // You can play around with the console log, but ultimately remove it once you are done
  console.log(data.hits[0].recipe.label);

  return (
    <Center h="100vh" flexDir="column">
      <Heading>Your Recipe App</Heading>
    </Center>
  );
};*/

import { Center } from "@chakra-ui/react";
import { RecipePage } from "../components/ui/RecipePage";

export const RecipeListPage = ({ clickFn }) => {
  return (
    <Center gap={8} h="100vh" bgColor="blue.100">
      {recipes.map((recipe) => (
        <RecipePage clickFn={clickFn} recipe={recipe} key={recipe} />
      ))}
    </Center>
  );
};

/*export const PortfolioPage = ({ clickFn }) => {
  return (
    <Center gap={8} h="100vh" bgColor="blue.100">
      {portfolioItems.map((item) => (
        <PortfolioItemCard clickFn={clickFn} item={item} key={item.id} />
      ))}
    </Center>
  );
};

*/
