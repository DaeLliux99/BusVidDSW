import React, {useEffect} from 'react'
import NavBar from '../../components/navbar';
import { Container, Box, Flex, Button, Stack} from '@chakra-ui/react'; 
import TablaViajes from '../../components/tablaViajes';
import useModalButton from '../../hooks/useModalButton'; 
import useObtenerViajes from '../../hooks/useObtenerViajes';
import AddBusView from '../addBusView';
import AddViajeView from '../addViajeView';
const AdminView = () => {
	const addBus = useModalButton();
	const addViaje = useModalButton();
	const { viajes, loading, handleCrearViaje } = useObtenerViajes();
	return (
    <Box as="main" pb={8}>
      <NavBar />
      <Box align="center" width="100%">
        <Container align="center" wrap="wrap" maxW="container.xl" pt="100px">
          <Flex justifyContent="center" mr={5}>
            <TablaViajes viajes={viajes} loading={loading} />
          </Flex>
        </Container>
        <Flex mt="20px" justifyContent="center">
          <Button onClick={addBus.handleModalOpen} m={2}>
            Agregar Buses
          </Button>
          {addBus.buttonClicked ? (
            <AddBusView isOpen={addBus.isOpen} onClose={addBus.onClose} />
          ) : null}
          <Button onClick={addViaje.handleModalOpen} m={2}>
            Agregar Viajes
          </Button>
          {addViaje.buttonClicked ? (
            <AddViajeView
              isOpen={addViaje.isOpen}
              onClose={addViaje.onClose}
              handleCrearViaje={handleCrearViaje}
            />
          ) : null}
        </Flex>
      </Box>
    </Box>
  );
};

export default AdminView;
