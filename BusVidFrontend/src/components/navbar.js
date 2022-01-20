import React from 'react'
import Cookies from 'universal-cookie/es6';
import useCerrarSesion from '../hooks/useCerrarSesion';
import { 
	Box, 
  useColorMode,
	useColorModeValue, 
	Container,
	Flex,
	Heading,
	Text,
	Stack,
	IconButton,
	Button
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
const NavBar = () => {
	const cookies = new Cookies();
  const {cerrarSesion} = useCerrarSesion();
  const {toggleColorMode} = useColorMode();
	return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.xl"
        wrap="wrap"
        align="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Box>
              <Text>Hola {cookies.get("nombre")}!</Text>
            </Box>
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <Text>Hola</Text>
          <Text>Adios</Text>
        </Stack>
        <Box flex={1} align="right">
          <IconButton
            aria-label="Toggle theme"
            colorScheme={useColorModeValue("purple", "orange")}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
            mr={2}
          ></IconButton>
          <Button onClick={cerrarSesion}>Cerrar Sesion</Button>
        </Box>
      </Container>
    </Box>
  );
}

export default NavBar;
