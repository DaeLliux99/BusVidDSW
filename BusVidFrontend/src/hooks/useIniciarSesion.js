import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie/es6";

const useIniciarSesion = (usuarioParam) => {
	const [usuario, setUsuario] = useState(usuarioParam);
  const [refreshKey, setRefreshKey] = useState(0);
  const [encontrado, setEncontrado] = useState(false);
  const navigate = useNavigate();
  const cookies = new Cookies();
	const obtenerAdmin = async () => {
    await axios
      .get(
        `https://localhost:5001/api/Administrador/${usuarioParam.dni}/${usuarioParam.password}`
      )
      .then((res) => {
        if (!res.data) {
          console.log("Algo");
          alert("Usuario o contraseña incorrectos");
        } else {
          setUsuario(res.data);
          console.log(res.data);
          setEncontrado(true);
          cookies.set('id', res.data.id, {path: '/'});
          cookies.set('dni', res.data.dni, {path: '/'});
          cookies.set('nombre', res.data.nombre, {path: '/'});
          console.log("Estoy en get cuando hay respuesta");
          navigate('/AdminView');
          //setLoading(false);
        }
      })
      .catch((err) => {
        console.log("Estoy en error");
        console.error(err);
        alert("No se pudo iniciar sesion");
      });
  }; 
  const handleIniciarSesion = () => {
    setRefreshKey(refreshKey => refreshKey + 1);
    console.log("holi");
  }
  useEffect(()=>{
    if (refreshKey != 0) { 
      obtenerAdmin();
    }
  }, [refreshKey]);

	return {usuario, encontrado, handleIniciarSesion};
}
export default useIniciarSesion;
