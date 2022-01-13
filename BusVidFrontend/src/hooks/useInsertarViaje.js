import React, {useState, useEffect} from 'react';
const axios = require('axios');

const useInsertarViaje = (viajeParam, handleCrearViaje) => {
	const [viaje, setViaje] = useState({});
		const insertarViaje = async () => {
      delete viajeParam.id;
      viajeParam.horaInicio = viajeParam.horaInicio.concat(':00'); //`${viajeParam.horaInicio}:00`; //ALTGR + }
      viajeParam.idBus = parseInt(viajeParam.idBus);
      viajeParam.idCiudadInicio = parseInt(viajeParam.idCiudadInicio);
      viajeParam.idCiudadDestino = parseInt(viajeParam.idCiudadDestino);
      viajeParam.precio = parseFloat(viajeParam.precio);
      viajeParam.idAdministrador = 1;
      await axios
        .post("https://localhost:5001/api/Viaje", viajeParam)
        .then((res) => {
          setViaje(res.data);
          console.log("Estoy en get cuando hay respuesta");
          console.log(viajeParam)
        })
        .catch((err) => {
          console.log("Estoy en error");
          console.error(err);
        });
    };
  useEffect(()=>{
    handleCrearViaje();
  },[viaje]);
	return {viaje, insertarViaje}; 
}

export default useInsertarViaje;
