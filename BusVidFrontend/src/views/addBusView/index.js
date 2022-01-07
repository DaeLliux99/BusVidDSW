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
  LinkOverlay
} from "@chakra-ui/react"

const AddBusView = ({isOpen, onClose}) => {
	return (
		<Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Registro de Buses</ModalHeader>
          <ModalCloseButton/>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Placa</FormLabel>
              <Input placeholder='placa'/>
            </FormControl>
            <FormControl>
              <FormLabel>Marca</FormLabel>
              <Input placeholder='marca'/>
            </FormControl>
            <FormControl >
              <FormLabel>Modelo</FormLabel>
              <Input placeholder='modelo'/>
            </FormControl>
            <FormControl >
              <FormLabel>Numero de asientos</FormLabel>
              <NumberInput min={1}  >
                <NumberInputField placeholder='asientos'/>
                <NumberInputStepper>
                  <NumberIncrementStepper/>
                  <NumberDecrementStepper/>
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
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
export default AddBusView;
