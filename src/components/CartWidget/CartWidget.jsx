import { useContext } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { PiShoppingCartThin } from "react-icons/pi";
import { CartContext } from "../../context";

export const CartWidget = () => {
  const { cartState } = useContext(CartContext);

  const qtyTotalItems = cartState.reduce((acc, item) => acc + item.qtyItem, 0);

  return (
    <Flex
      alignItems={"center"}
      height={"100%"}
      justifyContent={"space-between"}
      width={"60px"}
    >
      <PiShoppingCartThin size={30} />
      <Text fontSize={"1.5rem"}>{qtyTotalItems}</Text>
    </Flex>
  );
};
