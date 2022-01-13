import React from 'react'
import ViajesForm from '../../components/viajesForm'
import useInput from '../../hooks/useInput'
import useInsertarViaje from '../../hooks/useInsertarViaje'
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

const AddViajeView = ({isOpen, onClose, handleCrearViaje}) => {
  const {input, handleInputChange} = useInput({
    id: '',
    fecha: '',
    horaInicio: '',
    nroAsientosDisp: '',
    precio: '',
    idBus: '',
    idAdministrador: '',
    idCiudadInicio: '',
    idCiudadDestino: '',
  });
  const {viaje, insertarViaje} = useInsertarViaje(input, handleCrearViaje);
  	return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Registro de Viajes</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <ViajesForm input={input} handleInputChange={handleInputChange} />
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                insertarViaje();
                onClose();
              }}
              colorScheme="blue"
              mr={3}
            >
              Aceptar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    ); 
}
export default AddViajeView;
