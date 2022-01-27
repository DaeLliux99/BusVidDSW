import React from "react";
import {
  Container,
  Button,
  Box,
  Stack,
  Link
} from "@chakra-ui/react"
import SignInView from "../SignInView";
import AddPasajeView from "../addPasajeView"
import useModalButton from '../../hooks/useModalButton';

const LandingPage = () => {
  const login = useModalButton();
  const addPasaje = useModalButton();
  const linkImagen = "url(/assets/wallpaper.jpeg)";
  return (
    <Container
      bgImg={linkImagen}
      bgRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center center center center"
      maxW="1000px"
      maxH="668px"
    >
      <Box height="640px" width="1000px" marginLeft="auto" marginRight="auto">
        <Box
          height="100px"
          width="300px"
          marginRight="auto"
          marginLeft="auto"
          paddingTop="45%"
        >
          <Stack padding="2px">
            <Button onClick={addPasaje.handleModalOpen}>
              Compra tus boletos aqui!
            </Button>
            {addPasaje.buttonClicked ? (
              <AddPasajeView
                isOpen={addPasaje.isOpen}
                onClose={addPasaje.onClose}
              />
            ) : null}
            <Link
              padding="15px"
              onClick={login.handleModalOpen}
              textAlign="center"
              fontSize="13px"
            >
              ¿Eres empleado? Ingresa aqui
            </Link>
            {login.buttonClicked ? (
              <SignInView isOpen={login.isOpen} onClose={login.onClose} />
            ) : null}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};
export default LandingPage;
