import { Flex, Text } from '@chakra-ui/react';
import { GiShoppingCart } from "react-icons/gi";

const CartWidget = () => {
    return (
        <Flex align="center">
            <GiShoppingCart size={30} color='green'/>
            <Text fontSize={"1.5rem"} ml={4}>0</Text>
        </Flex>
    )
}

export default CartWidget;
