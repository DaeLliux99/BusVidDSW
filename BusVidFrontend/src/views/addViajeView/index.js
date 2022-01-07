import React from 'react'
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
  LinkOverlay
} from "@chakra-ui/react"

const AddViajeView = ({isOpen, onClose}) => {
	return (
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
                <option value='option1'>Lima</option>
                <option value='option2'>Huancayo</option>
                <option value='option3'>Arequipa</option>
              </Select>
            </FormControl>
            <FormControl m={2}>
              <FormLabel>Ciudad Destino</FormLabel>
              <Select placeholder='Escoge Ciudad'>
                <option value='option1'>Lima</option>
                <option value='option2'>Huancayo</option>
                <option value='option3'>Arequipa</option>
              </Select>
            </FormControl>
            </Flex>
            <Flex>
              <FormControl m={2}>
                <FormLabel>Numero de asientos</FormLabel>
                <NumberInput min={1}  >
                  <NumberInputField placeholder='asientos'/>
                  <NumberInputStepper>
                    <NumberIncrementStepper/>
                    <NumberDecrementStepper/>
                  </NumberInputStepper>
                </NumberInput>
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
	) 
}
export default AddViajeView;
