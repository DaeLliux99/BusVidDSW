import React, {useRef} from "react";
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
  useDisclosure, 
  FormControl
} from "@chakra-ui/react"

const SignInView = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();
  return (
    <div>
      <Button onClick={onOpen}>Iniciar Sesion</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
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
            <FormControl>
              <FormLabel>Contraseña</FormLabel>
              <Input placeholder='contraseña'/>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Iniciar Sesion
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default SignInView;
