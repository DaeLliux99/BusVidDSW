import React, {useState} from "react";
import useInput from "../../hooks/useInput";
import useIniciarSesion from "../../hooks/useIniciarSesion";
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
  FormControl,
  LinkOverlay
} from "@chakra-ui/react"

const SignInView = ({isOpen, onClose}, props) => {
  const [show, setShow] = useState(false);
  const {input, handleInputChange} = useInput({
    dni: '',
    password: ''
  });
  const {usuario, encontrado, handleIniciarSesion} = useIniciarSesion(input);
  //const handleClick = () => setShow(!show);
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Inicia Sesion</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>DNI</FormLabel>
              <Input
                name="dni"
                onChange={handleInputChange}
                placeholder="DNI"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Contraseña</FormLabel>
              <Input
                name="password"
                onChange={handleInputChange}
                type={show ? "text" : "password"}
                placeholder="Contraseña"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleIniciarSesion} colorScheme="blue" mr={3}>
              Iniciar Sesion
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default SignInView;
