import { Center, Heading, Box, Input } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeList } from "../components/ui/RecipeList";
import { RecipeItem } from "../components/ui/RecipeItem";
import { useState } from "react";
import { TextInput } from "../components/ui/TextInput";
import { Text } from "@chakra-ui/react";

export const RecipeListPage = ({ clickFn }) => {
  const greeting = "Winc Recipe Checker!!!";

  const [searchField, setSearchField] = useState("");

  const matchedRecipes = data.hits.filter((hit) => {
    return hit.recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <Box
      backgroundColor="blue.500"
      width="100vw"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      padding="20px"
    >
      <Heading
        padding={15}
        mb={5}
        textAlign="center"
        textColor="whiteAlpha.900"
      >
        {greeting}
      </Heading>
      <TextInput onChange={handleChange} />

      {matchedRecipes.length === 0 ? (
        <Text fontSize="xl" color="white" mt={10}>
          Recipe not found
        </Text>
      ) : (
        <RecipeList clickFn={clickFn} data={matchedRecipes} />
      )}
    </Box>
  );
};
