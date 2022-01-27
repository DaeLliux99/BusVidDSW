import { useEffect, useState } from "react"
import axios from "axios";
const useInsertarPasaje = (pasajeParam) => {
	const [pasaje, setPasaje] = useState({}); 
	const insertarPasaje = async () => {
    delete pasajeParam.id;
    delete pasajeParam.precio;
    delete pasajeParam.idPasajero;
    pasajeParam.cantidad = parseInt(pasajeParam.cantidad); 
    console.log(pasajeParam);
    await axios
      .post("https://localhost:5001/api/Pasaje", pasajeParam)
      .then((res) => {
        setPasaje(res.data);
        console.log("Estoy en get cuando hay respuesta");
        console.log(pasajeParam);
      })
      .catch((err) => {
        console.log("Estoy en error");
        console.error(err);
      });
  };
  return {pasaje, insertarPasaje}
}
export default useInsertarPasaje;
