import { Flex, Text } from "@chakra-ui/react";
import { PiShoppingCartThin } from "react-icons/pi";

export const CartWidget = () => {
  return (
    <Flex
      alignItems={"center"}
      height={"100%"}
      justifyContent={"space-between"}
      width={"60px"}
    >
      <PiShoppingCartThin size={30} />
      <Text fontSize={"1.5rem"}>0</Text>
    </Flex>
  );
};