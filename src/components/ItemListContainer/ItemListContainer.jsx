import { Box, Text } from '@chakra-ui/react';

const ItemListContainer = ({ greeting }) => {
    return (
        <Box
            fontSize="62px"
            display="flex"
            height="90vh"
            width="100vw"
            alignItems="center"
            justifyContent="center"
        >
            <Text _hover={{color: 'green',transform: 'translateY(-4px)'}} transition="all 0.2s ease-in-out">{greeting}</Text>
        </Box>
    );
};

export default ItemListContainer;


