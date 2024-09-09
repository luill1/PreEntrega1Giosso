import {
  Box,
  Card,
  Stack,
  Heading,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
  Image,
  Text,
  border,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import { Link } from "react-router-dom";

export const ItemListContainer = ({ products }) => {
  return (
    <Box
      marginTop={24}
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      {products.map((product) => (
        <Card
          key={product.id}
          maxW="sm"
          margin="1rem"
          style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }}
        >
          <CardBody>
            <Box display="flex" justifyContent="center">
              <Image
                src={product.thumbnail}
                alt={product.name}
                borderRadius="lg"
                transition="transform 0.2s"
                _hover={{ transform: 'scale(1.1)' }}
              />
            </Box>
            <Stack mt="6" spacing="3">
              <Heading size="md">{product.title}</Heading>
              <Text>{product.description}</Text>
              <Text color="blue.600" fontSize="2xl">
                ${product.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2" marginRight={3}>
              <Box border="1px solid #ddd" borderRadius="md" padding="2" _hover={{ borderColor: 'blue.500', transition: '.3s'}}>
                <Link to={`/item/${product.id}`}>Detalle del producto</Link>
              </Box>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Box>
  );
};