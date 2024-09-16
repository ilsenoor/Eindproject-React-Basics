import {
  Center,
  Heading,
  Image,
  Card,
  CardBody,
  Text,
  Flex,
  Tag,
} from "@chakra-ui/react";

export const RecipeItem = ({ recipe }) => {
  const filteredHealthLabels = recipe.healthLabels.filter(
    (label) => label === "Vegetarian" || label === "Vegan"
  );
  return (
    <Center onClick={() => clickFn(recipe)}>
      <Card borderRadius="xl" w="20em" h="28rem" backgroundColor="white">
        <Image
          src={recipe.image}
          alt="Recipe Image"
          height="12em"
          width="full"
          borderTopRadius="xl"
          mb={1}
        />
        <CardBody
          display="flex"
          flexDirection="column"
          align="center"
          alignContent="center"
          justifyContent="center"
          alignItems="center"
        >
          <Text>{recipe.mealType}</Text>
          <Text fontSize="xl">{recipe.label}</Text>
          <Flex gap={2}>
            {filteredHealthLabels.map((label, index) => (
              <Tag
                backgroundColor="purple.100"
                key={`${label}-${index}`}
                margin="5px"
              >
                {label}
              </Tag>
            ))}
          </Flex>
          <Flex gap={2}>
            {recipe.dietLabels.map((dietlabel) => (
              <Tag backgroundColor="green.100" key={dietlabel}>
                {dietlabel}
              </Tag>
            ))}
          </Flex>
          <Text>Dish: {recipe.dishType}</Text>
          <Text>Cautions:</Text>
          <Flex gap={2}>
            {recipe.cautions.map((caution) => (
              <Tag backgroundColor="red.100" key={caution}>
                {caution}
              </Tag>
            ))}
          </Flex>
        </CardBody>
      </Card>
    </Center>
  );
};

/*
import {
  Center,
  Card,
  CardBody,
  Text,
  Flex,
  Tag,
  Heading,
} from "@chakra-ui/react";

export const RecipeItem = ({ recipe }) => {
  return (
    <Center>
      <Card
        borderRadius="xl"
        w="15em"
        h="30rem"
        align="center"
        backgroundColor="white"
      >
        <Image
          src={recipe.image}
          alt="Recipe Image"
          height="12em"
          width="full"
          borderTopRadius="xl"
          mb={1}
        />
        <CardBody>
          <Text>{recipe.mealType}</Text>
          <Text>{recipe.label}</Text>
          <Flex gap={2}>
            {recipe.healthLabels.map((healthlabel) => (
              <Tag backgroundColor="purple.100" key={healthlabel}>
                {healthlabel}
              </Tag>
            ))}
          </Flex>
          <Flex gap={2}>
            {recipe.dietLabels.map((dietlabel) => (
              <Tag backgroundColor="green.100" key={dietlabel}>
                {dietlabel}
              </Tag>
            ))}
          </Flex>
          <Text>Dish: {recipe.dishType}</Text>
          <Text>Cautions:</Text>
          <Flex gap={2}>
            {recipe.cautions.map((caution) => (
              <Tag backgroundColor="red.100" key={caution}>
                {caution}
              </Tag>
            ))}
          </Flex>
        </CardBody>
      </Card>
    </Center>
  );
};
*/

/*
export const RecipeItem = ({ recipe, onClick }) => {
<Center onClick={() => onClick(recipe)}>
*/
