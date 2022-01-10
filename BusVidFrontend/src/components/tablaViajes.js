import React from 'react'
import useObtenerViajes from '../hooks/useObtenerViajes'
import moment from 'moment'
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
	/*const viajes = [
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
	]*/
	const {viajes, loading} = useObtenerViajes();
	return (
		<Table variant='striped' margin="0 auto" colorScheme="facebook">
			<TableCaption>Tabla de viajes</TableCaption>
			<Thead>
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
				{(!loading) ? (
					viajes.map((viaje, index)=>(
					<tr align="center">
						<td>{index+1}</td>
						<td>{moment(viaje.fecha).format('YYYY-MM-DD')}</td>
						<td>{moment(viaje.horaInicio, "HH:mm:ss").format('hh:mm A')}</td>
						<td>{viaje.nroAsientosDisp}</td>
						<td>{'S/ '+viaje.precio}</td>
						<td>{viaje.nroPlaca}</td>
						<td>{viaje.nombre}</td>
						<td>{viaje.inicio}</td>
						<td>{viaje.destino}</td>
					</tr>
				))
				): null}
			</Tbody>
		</Table>
	) 
}

export default TablaViajes;
