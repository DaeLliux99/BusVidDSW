import React, {useState, useEffect} from 'react'
import useObtenerCiudades from '../hooks/useObtenerCiudades' 
import useObtenerBuses from '../hooks/useObtenerBuses'

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
  Flex,
  Select,
} from "@chakra-ui/react";


const ViajesForm = ({input, handleInputChange}) => {
  const {ciudades, loading } = useObtenerCiudades();
  const {buses} = useObtenerBuses();
  const [asiento, setAsiento] = useState('');
  useEffect(()=>{
    let algo = buses.find((b) => b.id === parseInt(input.idBus));
    if (algo){
      //console.log(algo)
      setAsiento(algo.nroAsientos);
    }
  },[input]);
  useEffect(()=>{ 
    handleInputChange({target: {name:"nroAsientosDisp", value:asiento}})
  }, [asiento])
	return (
    <Box>
      <Flex align="center">
        <FormControl m="2">
          <FormLabel>Fecha</FormLabel>
          <Input
            name="fecha"
            type="date"
            onChange={handleInputChange}
            placeholder="fecha"
          />
        </FormControl>
        <FormControl m="2">
          <FormLabel>Hora</FormLabel>{" "}
          <Input
            name="horaInicio"
            type="time"
            onChange={handleInputChange}
            placeholder="hora"
          />
        </FormControl>
      </Flex>
      <Flex>
        <FormControl m={2}>
          <FormLabel>Ciudad Partida</FormLabel>
          <Select
            name="idCiudadInicio"
            onChange={handleInputChange}
            placeholder="Escoge Ciudad"
          >
            {ciudades.map((ciudad) => (
              <option key={ciudad.id} value={ciudad.id}>{ciudad.nombre}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl m={2}>
          <FormLabel>Ciudad Destino</FormLabel>
          <Select
            name="idCiudadDestino"
            onChange={handleInputChange}
            placeholder="Escoge Ciudad"
          >
            {ciudades.map((ciudad) => (
              <option key={ciudad.id} value={ciudad.id}>{ciudad.nombre}</option>
            ))}
          </Select>
        </FormControl>
      </Flex>
      <Flex>
        <FormControl m={2}>
          <FormLabel>Bus</FormLabel>
          <Select
            name="idBus"
            onChange={handleInputChange}
            placeholder="Escoge el bus"
          >
            {buses.map((bus) => (
              <option key={bus.id} value={bus.id}>
                {bus.nroPlaca}:({bus.nroAsientos})
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl m={2}>
          <FormLabel>Asientos Disponibles</FormLabel>
          <NumberInput
            value={asiento}
            min={1}
            //isReadOnly="true"
          >
            <NumberInputField placeholder="Asientos Disponibles" />
          </NumberInput>
        </FormControl>
      </Flex>
      <Flex align="center">
        <FormControl m={2}>
          <FormLabel>Precio</FormLabel>
          <NumberInput min={1} precision={2} step={0.2}>
            <NumberInputField
              name="precio"
              onChange={handleInputChange}
              placeholder="Precio"
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </Flex>
    </Box>
  );
}

export default ViajesForm;
