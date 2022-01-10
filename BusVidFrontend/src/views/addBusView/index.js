import React from 'react'
import useInsertarBus from '../../hooks/useInsertarBus'
import useInput from '../../hooks/useInput'
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
  const {input, handleInputChange} = useInput({
    id: '',
    nroPlaca: '',
    marca: '',
    modelo: '',
    nroAsientos: ''
  });
  const {bus, insertarBus} = useInsertarBus(input); 
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Registro de Buses</ModalHeader>
          <ModalCloseButton/>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Placa</FormLabel>
              <Input name='nroPlaca' onChange={handleInputChange} placeholder='placa'/>
            </FormControl>
            <FormControl>
              <FormLabel>Marca</FormLabel>
              <Input name='marca' onChange={handleInputChange} placeholder='marca'/>
            </FormControl>
            <FormControl >
              <FormLabel>Modelo</FormLabel>
              <Input name='modelo' onChange={handleInputChange} placeholder='modelo'/>
            </FormControl>
            <FormControl >
              <FormLabel>Numero de asientos</FormLabel>
              <NumberInput min={1}  >
                <NumberInputField 
                  name='nroAsientos'
                  onChange={handleInputChange}
                  placeholder='asientos'
                />
                <NumberInputStepper>
                  <NumberIncrementStepper/>
                  <NumberDecrementStepper/>
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={()=>{insertarBus(); onClose();}} colorScheme='blue' mr={3}>
              Aceptar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
	) 
}
export default AddBusView;
