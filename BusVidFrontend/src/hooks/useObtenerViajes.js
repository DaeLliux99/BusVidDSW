import React, {useState, useEffect} from 'react';
const axios = require('axios');

const useObtenerViajes = () => {
	const [viajes, setViajes] = useState([]);
	const [loading, setLoading] = useState(true);
	const obtenerViajes = async () => {
		await axios.get("https://localhost:5001/api/Viaje")
			.then((res)=>{
				setViajes(res.data);
				console.log("Estoy en get cuando hay respuesta");
				setLoading(false);
			})
			.catch((err)=>{
				console.log("Estoy en error")
				console.error(err)
			})
		;
	};
	useEffect(async()=>{
			await obtenerViajes();
		},
		[]
	);
	return {viajes, loading}; 
}

export default useObtenerViajes;
