import React from 'react'
import moment from 'moment'
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  useColorModeValue
} from "@chakra-ui/react";
const TablaViajes = ({viajes, loading }) => {
	return (
    <Box overflowY="auto" maxH="400px">
      <Table
        overflowY="auto"
        maxH="530px"
        variant="striped"
        margin="0 auto"
        colorScheme="purple"
      >
        <TableCaption>Tabla de viajes</TableCaption>
        <Thead position="sticky" top={0} bgColor={useColorModeValue('#f0e7db', '#202023')}>
          <Tr align="center">
            <Th>Indice</Th>
            <Th>Fecha</Th>
            <Th>Hora</Th>
            <Th>Asientos Disponibles</Th>
            <Th>Precio</Th>
            <Th>Placa(Bus)</Th>
            <Th>Administrador</Th>
            <Th>Partida</Th>
            <Th>Destino</Th>
          </Tr>
        </Thead>
        <Tbody>
          {!loading
            ? viajes.map((viaje, index) => (
                <Tr key={index + 1}>
                  <Td>{index + 1}</Td>
                  <Td>{moment(viaje.fecha).format("YYYY-MM-DD")}</Td>
                  <Td>
                    {moment(viaje.horaInicio, "HH:mm:ss").format("hh:mm A")}
                  </Td>
                  <Td textAlign="center">{viaje.nroAsientosDisp}</Td>
                  <Td>{"S/ " + viaje.precio}</Td>
                  <Td>{viaje.nroPlaca}</Td>
                  <Td>{viaje.nombre}</Td>
                  <Td>{viaje.inicio}</Td>
                  <Td>{viaje.destino}</Td>
                </Tr>
              ))
            : null}
        </Tbody>
      </Table>
    </Box>
  ); 
}

export default TablaViajes;
