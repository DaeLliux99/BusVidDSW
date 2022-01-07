import React, {useState} from "react";
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

const SignInView = ({isOpen, onClose}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Inicia Sesion</ModalHeader>
          <ModalCloseButton/>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>DNI</FormLabel>
              <Input placeholder='DNI'/>
            </FormControl>
            <FormControl >
              <FormLabel>Contraseña</FormLabel>
              <Input type= {show ? 'text': 'password'} placeholder='contraseña'/>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              <LinkOverlay href="/adminView">Iniciar Sesion</LinkOverlay>
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default SignInView;
