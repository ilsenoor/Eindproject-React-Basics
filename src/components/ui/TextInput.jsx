import { Input } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";

export const TextInput = ({ changeFn }) => {
  return (
    <Input
      onChange={changeFn}
      placeholder="Search recipe"
      color="blackAlpha.900"
      mb={5}
      backgroundColor="whiteAlpha.900"
      width="40%"
      marginBottom="20px"
    />
  );
};
