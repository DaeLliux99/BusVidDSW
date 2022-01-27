import React from 'react'
import useInsertarBus from '../../hooks/useInsertarBus'
import useInput from '../../hooks/useInput'
import BusesForm from '../../components/busesForm'
import { 
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"

const AddBusView = ({isOpen, onClose}) => {
  const {input, handleInputChange} = useInput({
    id: '',
    nroPlaca: '',
    marca: '',
    modelo: '',
    nroAsientos: ''
  });
  const {insertarBus} = useInsertarBus(input); 
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Registro de Buses</ModalHeader>
          <ModalCloseButton/>
          <ModalBody pb={6}>
            <BusesForm handleInputChange={handleInputChange}/>
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
