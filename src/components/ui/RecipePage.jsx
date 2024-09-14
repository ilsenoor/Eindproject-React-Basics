import {
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  Text,
  Flex,
  Tag,
  Box,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { data } from "../../utils/data";

export const RecipePage = ({ recipe, clickFn }) => {
  const handleBackClick = () => {};
  return (
    <Card
      borderRadius="xl"
      onClick={() => clickFn(recipe)}
      cursor="pointer"
      width="75%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      margin="auto"
    >
      <CardBody>
        <Button onClick={handleBackClick} mb={4}>
          Go back
        </Button>
        <Image
          src={recipe.image}
          alt="Recipe Image"
          borderRadius="xl"
          height="200px"
        />
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          direction="row"
          spacing={4}
          mt="6"
        >
          <Box>
            <Text fontSize="md">{recipe.mealType}</Text>
          </Box>
          <Box>
            <Text fontSize="2xl">{recipe.label}</Text>
          </Box>
          <Box>
            <Text fontSize="md">Cooking Time: {recipe.totalTime} minutes</Text>
          </Box>
          <Box>
            <Text fontSize="md">Servings: {recipe.yield}</Text>
          </Box>
          <Box>
            <Text fontSize="md">
              Ingredients:{" "}
              {Array.isArray(recipe.ingredientLines) ? (
                <ul>
                  {recipe.ingredientLines.map((ingredient, index) => (
                    <li key={index}>{ingredient} </li>
                  ))}
                </ul>
              ) : (
                recipe.ingredientLines
              )}
            </Text>
          </Box>
          <Box>
            <Text>Health labels:</Text>
            <Flex gap={2}>
              {recipe.healthLabels.map((healthlabel) => (
                <Tag backgroundColor="purple.100" key={healthlabel}>
                  {healthlabel}
                </Tag>
              ))}
            </Flex>
          </Box>
          <Box>
            <Text>Diet:</Text>
            <Flex gap={2}>
              {recipe.dietLabels.map((dietlabel) => (
                <Tag backgroundColor="green.100" key={dietlabel}>
                  {dietlabel}
                </Tag>
              ))}
            </Flex>
          </Box>
          <Box>
            <Text>Cautions:</Text>
            <Flex gap={2}>
              {recipe.cautions.map((caution) => (
                <Tag backgroundColor="red.100" key={caution}>
                  {caution}
                </Tag>
              ))}
            </Flex>
          </Box>
          <Box>
            <Text>Total nutrients: </Text>
          </Box>
        </SimpleGrid>
      </CardBody>
    </Card>
  );
};

/*<Flex gap={2}>
            {recipe.healthLabels.map((healthlabel) => (
              <Tag key={healthlabel}>{healthlabel}</Tag>
            ))}
          </Flex>*/

/*

    */
