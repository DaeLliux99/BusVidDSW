import React from 'react'
import { 
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption
} from '@chakra-ui/react'
const TablaViajes = () => {
	const viajes = [
		{fecha: "18/02/2022", 
			hora: "18:00", 
			nroAsientosDisp: 60, 
			precio: 50.00, 
			nroPlaca: "adfa",
			nombre: "Juan",
			inicio: "Lima",
			destino: "Huancayo"
		},
		{fecha: "18/02/2022", 
			hora: "18:00", 
			nroAsientosDisp: 60, 
			precio: 50.00, 
			nroPlaca: "adfa",
			nombre: "Juan",
			inicio: "Lima",
			destino: "Huancayo"
		}
	]
	return (
		<Table variant='striped' margin="0 auto" colorScheme="facebook">
			<TableCaption>Tabla de viajes</TableCaption>
			<Thead>
				<Tr>
					<Th>Indice</Th>
					<Th>Fecha</Th>
					<Th>Hora</Th>
					<Th>Asientos Disponibles</Th>
					<Th>Placa(Bus)</Th>
					<Th>Administrador</Th>
					<Th>Partida</Th>
					<Th>Destino</Th>
				</Tr>
			</Thead>
			<Tbody>
				{viajes.map((viaje, index)=>(
					<Tr>
						<Td>{index+1}</Td>
						<Td>{viaje.fecha}</Td>
						<Td>{viaje.hora}</Td>
						<Td>{viaje.nroAsientosDisp}</Td>
						<Td>{viaje.nroPlaca}</Td>
						<Td>{viaje.nombre}</Td>
						<Td>{viaje.inicio}</Td>
						<Td>{viaje.destino}</Td>
					</Tr>
				))}
			</Tbody>
		</Table>
	) 
}

export default TablaViajes;
