import { Center, Heading, Box, Input } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeList } from "../components/ui/RecipeList";
import { RecipeItem } from "../components/ui/RecipeItem";

export const RecipeListPage = () => {
  const greeting = "Winc Recipe Checker";

  return (
    <Box
      backgroundColor="blue.500"
      width="100vw"
      height="100%"
      textAlign="center"
    >
      <Heading
        padding={15}
        mb={5}
        textAlign="center"
        textColor="whiteAlpha.900"
      >
        {greeting}
      </Heading>
      <Input
        placeholder="Search recipes"
        backgroundColor="whiteAlpha.900"
        width="40%"
        marginBottom="20px"
      />
      <RecipeList data={data} />
    </Box>
  );
};

/*export const RecipeListPage = () => {
  // You can play around with the console log, but ultimately remove it once you are done
  console.log(data.hits[0].recipe.label);

  return (
    <Center h="100vh" flexDir="column">
      <Heading>Your Recipe App</Heading>
    </Center>
  );
};
*/
/*
export const RecipeListPage = () => {
  const greeting = "Winc Recipe Checker";
  const [selectedRecipeList, setSelectedRecipeList] = useState(data.hits);

  const handleChange = (event) => {
    const matchedRecepts = data.hits.filter(({ recipe }) => {
      return recipe.label
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setSelectedRecipeList(matchedRecepts);
  };

  return (
    <Box backgroundColor="blue.100">
      <Heading
        padding={15}
        mb={5}
        textAlign="center"
        backgroundColor="blue.100"
      >
        {greeting}
      </Heading>
      <TextInput placeholder="Search recipes" onChange={handleChange} />
      <RecipeItem setRecipe={setRecipe} recipes={selectedRecipeList} />
    </Box>
  );
};
*/

/*
  <RecipeList clickFn={clickFn} recipes={matchedRecipes} />


  const [searchField, setSearchField] = useState("");

  const matchedRecipe = availableRecipes.filter((recipe) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  <Input
        placeholder="Search recipes"
        backgroundColor="whiteAlpha.900"
        width="40%"
        //onChange={handleChange}
      />

  */
