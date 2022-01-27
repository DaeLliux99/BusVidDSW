import {useState, useEffect} from 'react';
import Cookies from 'universal-cookie/es6';
const axios = require('axios');

const useInsertarViaje = (viajeParam, handleCrearViaje) => {
  const cookies = new Cookies();
  const [viaje, setViaje] = useState({});
  const insertarViaje = async () => {
    delete viajeParam.id;
    viajeParam.horaInicio = viajeParam.horaInicio.concat(":00"); //`${viajeParam.horaInicio}:00`; //ALTGR + }
    viajeParam.idBus = parseInt(viajeParam.idBus);
    viajeParam.idCiudadInicio = parseInt(viajeParam.idCiudadInicio);
    viajeParam.idCiudadDestino = parseInt(viajeParam.idCiudadDestino);
    viajeParam.precio = parseFloat(viajeParam.precio);
    viajeParam.idAdministrador = parseInt(cookies.get("id"));
    console.log(viajeParam)
    await axios
      .post("https://localhost:5001/api/Viaje", viajeParam)
      .then((res) => {
        setViaje(res.data);
        console.log("Estoy en get cuando hay respuesta");
        console.log(viajeParam);
        alert("Se ingresó el viaje correctamente");
      })
      .catch((err) => {
        console.log("Estoy en error");
        console.error(err);
      });
  };
  useEffect(() => {
    handleCrearViaje();
  }, [viaje]);
  return { viaje, insertarViaje };
};

export default useInsertarViaje;
