import React, {useState, useEffect} from 'react';
const axios = require('axios');

const useInsertarViaje = (viajeParam) => {
	const [viaje, setViaje] = useState({});
	delete viajeParam.id;
	busParam.nroAsientos = parseInt(busParam.nroAsientos);
	const insertarViaje = async () => {
		await axios.post("https://localhost:5001/api/Bus", busParam)
				.then((res)=>{
				setViaje(res.data);
				console.log("Estoy en get cuando hay respuesta");
				//console.log(bus)
			})
			.catch((err)=>{
				console.log("Estoy en error")
				console.error(err)
			})
		;
	};
	return {viaje, insertarViaje}; 
}

export default useInsertarViaje;
