import React, {useState, useEffect} from 'react';
const axios = require('axios');

const useInsertarBus = (busParam) => {
  const [bus, setBus] = useState({});
  const insertarBus = async () => {
    delete busParam.id;
    busParam.nroAsientos = parseInt(busParam.nroAsientos);
    await axios
      .post("https://localhost:5001/api/Bus", busParam)
      .then((res) => {
        setBus(res.data);
        console.log("Estoy en get cuando hay respuesta");
        //console.log(bus);
      })
      .catch((err) => {
        console.log("Estoy en error");
        console.error(err);
      });
  };
  return { bus, insertarBus };
}

export default useInsertarBus;
