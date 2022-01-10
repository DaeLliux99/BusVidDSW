import React, {useState, useEffect} from 'react';
const axios = require('axios');

const useObtenerBuses = () => {
	const [buses, setBuses] = useState([]);
	const [loading, setLoading] = useState(true);
	const obtenerBuses = async () => {
		await axios.get("https://localhost:5001/api/Bus")
			.then((res)=>{
				setBuses(res.data); 
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
			obtenerBuses();
	},[]);

	return {buses, loading}; 
}

export default useObtenerBuses;
