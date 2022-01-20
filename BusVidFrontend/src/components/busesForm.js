import React from "react";
import {
  Box,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
} from "@chakra-ui/react";

const BusesForm = ({ handleInputChange }) => {
  return (
    <Box>
      <FormControl>
        <FormLabel>Placa</FormLabel>
        <Input
          name="nroPlaca"
          onChange={handleInputChange}
          placeholder="placa"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Marca</FormLabel>
        <Input name="marca" onChange={handleInputChange} placeholder="marca" />
      </FormControl>
      <FormControl>
        <FormLabel>Modelo</FormLabel>
        <Input
          name="modelo"
          onChange={handleInputChange}
          placeholder="modelo"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Numero de asientos</FormLabel>
        <NumberInput min={1}>
          <NumberInputField
            name="nroAsientos"
            onChange={handleInputChange}
            placeholder="asientos"
          />
        </NumberInput>
      </FormControl>
    </Box>
  );
};

export default BusesForm;
