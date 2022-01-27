import {useState, useEffect} from 'react';
const axios = require('axios');

const useObtenerViajes = () => {
	const [viajes, setViajes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [refreshKey, setRefreshKey] = useState(0);
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
	const handleCrearViaje = () => {
		setLoading(true);
		setRefreshKey(refreshKey => refreshKey + 1);
		console.log("holi")
	}
	useEffect(() => {
    obtenerViajes();
		console.log("entro al useEffect");
  }, [refreshKey]);
	return {viajes, loading, handleCrearViaje}; 
}

export default useObtenerViajes;
