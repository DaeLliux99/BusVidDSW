import React from "react";
import {
  Box,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  FormControl,
} from "@chakra-ui/react";

const PasajeroForm  = ({ handleInputChange }) => {
  return (
    <Box>
      <FormControl>
        <FormLabel>DNI</FormLabel>
        <NumberInput>
          <NumberInputField name="dni" onChange={handleInputChange} />
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel>Nombres</FormLabel>
        <Input
          name="nombre"
          onChange={handleInputChange}
          placeholder="Nombres"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Apellidos</FormLabel>
        <Input
          name="apellidos"
          onChange={handleInputChange}
          placeholder="Apellidos"
        />
      </FormControl>
    </Box>
  );
};

export default PasajeroForm;
