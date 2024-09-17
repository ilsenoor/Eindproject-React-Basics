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
  const totalNutrientsCaloriesRounded = Math.round(
    recipe.totalNutrients.ENERC_KCAL.quantity
  );
  const totalNutrientsCarbsRounded = Math.round(
    recipe.totalNutrients.CHOCDF.quantity
  );
  const totalNutrientsProteinRounded = Math.round(
    recipe.totalNutrients.PROCNT.quantity
  );
  const totalNutrientsFatRounded = Math.round(
    recipe.totalNutrients.FAT.quantity
  );
  const totalNutrientsCholesterolRounded = Math.round(
    recipe.totalNutrients.CHOLE.quantity
  );
  const totalNutrientsSodiumRounded = Math.round(
    recipe.totalNutrients.NA.quantity
  );

  return (
    <Card
      borderRadius="xl"
      width="75%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      margin="auto"
    >
      <CardBody>
        <Button onClick={() => clickFn()} variant="solid" mb={4}>
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
            <Text>Calories</Text>
            <Flex gap={2}>
              <Tag backgroundColor="grey.100">
                {totalNutrientsCaloriesRounded}
                {recipe.totalNutrients.ENERC_KCAL.unit}
              </Tag>
            </Flex>
            <Text>Carbs</Text>
            <Tag backgroundColor="grey.100">
              {totalNutrientsCarbsRounded} {recipe.totalNutrients.CHOCDF.unit}
            </Tag>
            <Text>Protein</Text>
            <Tag backgroundColor="grey.100">
              {totalNutrientsProteinRounded} {recipe.totalNutrients.PROCNT.unit}
            </Tag>
            <Text>Fat</Text>
            <Tag backgroundColor="grey.100">
              {totalNutrientsFatRounded} {recipe.totalNutrients.FAT.unit}
            </Tag>
            <Text>Cholesterol</Text>
            <Tag backgroundColor="grey.100">
              {totalNutrientsCholesterolRounded}{" "}
              {recipe.totalNutrients.CHOLE.unit}
            </Tag>
            <Text>Sodium</Text>
            <Tag backgroundColor="grey.100">
              {totalNutrientsSodiumRounded} {recipe.totalNutrients.NA.unit}
            </Tag>
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
