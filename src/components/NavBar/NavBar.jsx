import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { CartWidget } from "../CartWidget";
import { Link } from "react-router-dom";
import { useCategory } from "../../Hooks/useCategory";

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { category } = useCategory();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to="/" style={{ whiteSpace: 'nowrap', fontWeight: 'bolder'}} >FAKE STORE</Link>
          <Box alignContent={"flex-start"} width={"100%"} marginLeft={30}>
            <Flex>
              <Box marginLeft={4}>
                <Menu>
                  <MenuButton as={Link} cursor="pointer">
                    categories
                  </MenuButton>
                  <MenuList height={"516px"} overflowY={"scroll"}>
                    {category.map((category) => (
                      <MenuItem key={category.slug}><Link to={`/category/${category.slug}`}>{category.name}</Link></MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </Box>
            </Flex>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <CartWidget />
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>log in</MenuItem>
                  <MenuItem>create account</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

