import React, {useState, useEffect} from "react";
import {
  Box,
  FormLabel,
  Select,
  Input,
  FormControl,
  NumberInput,
  NumberInputField,
  Flex,
} from "@chakra-ui/react";

const PagoForm  = ({input, handleInputChange, paso, setPaso }) => {
  const [precioTotal, setPrecioTotal] = useState(''); 
  useEffect(()=>{
    setPrecioTotal(input.precio*input.cantidad);
  },[input]);
  return (
    <Box>
      <Flex>
        <FormControl m={2}>
          <FormLabel>Cantidad de Pasajes</FormLabel>
          <NumberInput>
            <NumberInputField name="cantidad" onChange={handleInputChange}/>
          </NumberInput>
        </FormControl>
        <FormControl m={2}>
          <FormLabel>Precio Total (S/)</FormLabel>
          <NumberInput value={precioTotal} precision={2} step={0.2}>
            <NumberInputField />
          </NumberInput>
        </FormControl>
      </Flex>
      <FormControl m={2}>
        <FormLabel>Metodo de Pago</FormLabel>
        <Select
          placeholder="Escoge un Metodo de Pago"
        >
          <option>BBVA</option>
        </Select>
      </FormControl>
    </Box>
  );
};

export default PagoForm;
