import React from 'react'
import { 
	Box, 
	useColorModeValue, 
	Container,
	Flex,
	Heading,
	Text,
	Stack,
} from '@chakra-ui/react';
const NavBar = () => {
	return (
		<Box
			position="fixed"
			as="nav"
			w='100%'
			bg={useColorModeValue('#ffffff40', '#20202380')}
			style={{backdropFilter: 'blur(10px)'}}
			bgColor="tomato"
			zIndex={1}
		>
			<Container
				display="flex"
				p={2}
				maxW="container.xl"
				wrap="wrap"
				align="center"
				justifyContent="space-between"
				bgColor="khaki"
			>
				<Flex align="center" mr={5}>
					<Heading as="h1" size="lg" letterSpacing={'tighter'}>
						<Box bgColor="aqua">
							<Text>Hola Accelerator</Text>
						</Box>
					</Heading>
				</Flex>
				<Stack
					direction={{base: 'column', md: 'row'}}
					display={{base: 'none', md: 'flex'}}
					width={{base: 'full', md: 'auto'}}
					alignItems="center"
					flexGrow={1}
					mt={{base:4, nmd: 0}}
				>
					<Text>Hola</Text>
					<Text>Adios</Text>
				</Stack>
			</Container>
		</Box>
	);
}

export default NavBar;
