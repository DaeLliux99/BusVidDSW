import React, {useState, useEffect} from 'react';
const axios = require('axios');

const useObtenerCiudades = () => {
	const [ciudades, setCiudades] = useState([]);
	const [loading, setLoading] = useState(true);
	const obtenerCiudades = async () => {
		await axios.get("https://localhost:5001/api/Ciudad")
			.then((res)=>{
				setCiudades(res.data); 
				//console.log(res.data); //Array[5]
				//console.log(ciudades); //Array[0]
				console.log("Estoy en get cuando hay respuesta");
				setLoading(false);
				//console.log(loading); //true
			})
			.catch((err)=>{
				console.log("Estoy en error")
				console.error(err)
			});
	};
	useEffect(()=>{
			obtenerCiudades();
	},[]);

	return {ciudades, loading}; 
}

export default useObtenerCiudades;
