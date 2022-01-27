import React, {useState} from "react";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import TablaViajesCliente from '../../components/tablaViajesCliente'
import PasajeroForm from "../../components/pasajeroForm";
import PagoForm from "../../components/pagoForm";
import useObtenerViajes from "../../hooks/useObtenerViajes";
import useInsertarPasaje from "../../hooks/useInsertarPasaje";
import useInput from "../../hooks/useInput"
const AddPasajeView = ({isOpen, onClose}) => {
  const {input, handleInputChange} = useInput({
    id: '',
    idViaje: '',
    precio: 0,
    idPasajero: '',
    dni: '',
    nombre: '',
    apellidos: '',
    cantidad: ''
  });
  const {pasaje, insertarPasaje} = useInsertarPasaje(input);
  const {viajes, loading} = useObtenerViajes(); 
  const [paso, setPaso] = useState(1);
  return (
    <Modal size="full" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Registro de Viajes</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {(() => {
            switch (paso) {
              case 1:
                return (
                  <TablaViajesCliente
                    input={input}
                    handleInputChange={handleInputChange}
                    paso={paso}
                    setPaso={setPaso}
                    viajes={viajes}
                    loading={loading}
                  />
                );
              case 2:
                return (
                  <PasajeroForm
                    input={input}
                    handleInputChange={handleInputChange}
                  />
                );
              case 3:
                return (
                  <PagoForm
                    input={input}
                    handleInputChange={handleInputChange}
                  />
                );
            }
          })()}
        </ModalBody>
        <ModalFooter>
          {(() => {
            switch (paso) {
              case 2:
                return (
                  <Box>
                    <Button
                      onClick={() => {
                        setPaso(paso - 1);
                      }}
                      mr={3}
                    >
                      Atras
                    </Button>
                    <Button
                      onClick={() => {
                        setPaso(paso + 1);
                      }}
                      colorScheme="blue"
                    >
                      Siguiente
                    </Button>
                  </Box>
                );
              case 3:
                return (
                  <Box>
                    <Button
                      onClick={() => {
                        setPaso(paso - 1);
                      }}
                      mr={3}
                    >
                      Atras
                    </Button>
                    <Button
                      onClick={() => {
                        insertarPasaje();
                        onClose();
                      }}
                      colorScheme="blue"
                    >
                      Finalizar
                    </Button>
                  </Box>
                );
            }
          })()}
          
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddPasajeView;
