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
    <Box
      backgroundColor="blue.500"
      width="100vw"
      height="100%"
      flexDirection="row"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
    >
      <Card
        borderRadius="xl"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        margin="auto"
        border="none"
      >
        <CardBody
          borderRadius="xl"
          width={{ base: "90%", lg: "65%" }}
          height="fit-content"
          backgroundColor="white"
          padding={{ base: 4, lg: 6 }}
        >
          <Button onClick={() => clickFn()} variant="solid" mb={4}>
            Go back
          </Button>
          <Image
            src={recipe.image}
            alt="Recipe Image"
            borderRadius="xl"
            height={["15em", "25em"]}
            width="100vw"
            borderTopRadius="xl"
            mb={5}
          />
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt="6">
            <Box>
              <Text fontSize="md">{recipe.mealType}</Text>
              <Text fontSize="2xl">{recipe.label}</Text>
              <Text fontSize="md">
                Total cooking time: {recipe.totalTime} minutes
              </Text>
              <Text fontSize="md">Servings: {recipe.yield}</Text>
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
              {recipe.healthLabels.map((healthlabel) => (
                <Tag
                  backgroundColor="purple.100"
                  key={healthlabel}
                  margin="5px"
                >
                  {healthlabel}
                </Tag>
              ))}
              <Text>Diet:</Text>
              <Flex gap={2}>
                {recipe.dietLabels.map((dietlabel) => (
                  <Tag backgroundColor="green.100" key={dietlabel}>
                    {dietlabel}
                  </Tag>
                ))}
              </Flex>
              <Text>Cautions:</Text>
              <Flex gap={2}>
                {recipe.cautions.map((caution) => (
                  <Tag backgroundColor="red.100" key={caution}>
                    {caution}
                  </Tag>
                ))}
              </Flex>

              <Text>Total nutrients: </Text>
              <Tag backgroundColor="grey.100" margin="5px">
                <Text>Calories &nbsp;</Text>
                {totalNutrientsCaloriesRounded}{" "}
                {recipe.totalNutrients.ENERC_KCAL.unit}
              </Tag>

              <Tag backgroundColor="grey.100" margin="5px">
                <Text>Carbs &nbsp;</Text>
                {totalNutrientsCarbsRounded} {recipe.totalNutrients.CHOCDF.unit}
              </Tag>

              <Tag backgroundColor="grey.100" margin="5px">
                <Text>Protein &nbsp;</Text>
                {totalNutrientsProteinRounded}{" "}
                {recipe.totalNutrients.PROCNT.unit}
              </Tag>

              <Tag backgroundColor="grey.100" margin="5px">
                <Text>Fat &nbsp;</Text> {totalNutrientsFatRounded}{" "}
                {recipe.totalNutrients.FAT.unit}
              </Tag>

              <Tag backgroundColor="grey.100" margin="5px">
                <Text>Cholesterol &nbsp;</Text>{" "}
                {totalNutrientsCholesterolRounded}{" "}
                {recipe.totalNutrients.CHOLE.unit}
              </Tag>
              <Tag backgroundColor="grey.100" margin="5px">
                <Text>Sodium &nbsp;</Text> {totalNutrientsSodiumRounded}{" "}
                {recipe.totalNutrients.NA.unit}
              </Tag>
            </Box>
          </SimpleGrid>
        </CardBody>
      </Card>
    </Box>
  );
};

/*<Flex gap={2}>
            {recipe.healthLabels.map((healthlabel) => (
              <Tag key={healthlabel}>{healthlabel}</Tag>
            ))}
          </Flex>*/

/*

    */
