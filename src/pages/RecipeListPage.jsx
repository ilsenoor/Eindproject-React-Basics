import { Center, Heading, Box, Input } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeList } from "../components/ui/RecipeList";
import { RecipeItem } from "../components/ui/RecipeItem";
import { useState } from "react";
import { TextInput } from "../components/ui/TextInput";

export const RecipeListPage = ({ clickFn }) => {
  const greeting = "Winc Recipe Checker";

  const [searchField, setSearchField] = useState("");
  const [healthLabel, setHealthLabel] = useState("");

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
      <TextInput onChange={handleChange} />
      <RecipeList clickFn={clickFn} data={matchedRecipes} />
    </Box>
  );
};
