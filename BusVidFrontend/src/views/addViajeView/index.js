import React from 'react'
import useObtenerCiudades from '../../hooks/useObtenerCiudades' 
import useObtenerBuses from '../../hooks/useObtenerBuses'
import { 
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  Flex,
  Select,
  Box
} from "@chakra-ui/react"

const AddViajeView = ({isOpen, onClose}) => {

  const {ciudades, loading } = useObtenerCiudades();
  const {buses} = useObtenerBuses();
	return (
    <Box>
    <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Registro de Viajes</ModalHeader>
          <ModalCloseButton/>
          <ModalBody pb={6}>
            <Flex align="center">
              <FormControl m="2">
              <FormLabel>Fecha</FormLabel>
              <Input type="date" placeholder='fecha'/>
              </FormControl>
                <FormControl m="2">
                <FormLabel>Hora</FormLabel>
                <Input type="time" placeholder='hora'/>
              </FormControl>
            </Flex> 
            <Flex>
              <FormControl m={2} >
              <FormLabel>Ciudad Partida</FormLabel>
              <Select placeholder='Escoge Ciudad'>
                {ciudades.map((ciudad) => (
                  <option value={ciudad.id}>{ciudad.nombre}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl m={2}>
              <FormLabel>Ciudad Destino</FormLabel>
              <Select placeholder='Escoge Ciudad'>
                {ciudades.map((ciudad) => (
                  <option value={ciudad.id}>{ciudad.nombre}</option>
                ))}
              </Select>
            </FormControl>
            </Flex>
            <Flex>
              <FormControl m={2}>
              <FormLabel>Bus</FormLabel>
              <Select placeholder='Escoge el bus'>
                {buses.map((bus) => (
                  <option value={bus.id}>{bus.nroPlaca}</option>
                ))}
              </Select>
              </FormControl>
              <FormControl m={2}>
                <FormLabel>Precio</FormLabel>
                <NumberInput min={1} precision={2} step={0.2} >
                  <NumberInputField placeholder='Precio'/>
                  <NumberInputStepper>
                    <NumberIncrementStepper/>
                    <NumberDecrementStepper/>
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Aceptar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
	) 
}
export default AddViajeView;
